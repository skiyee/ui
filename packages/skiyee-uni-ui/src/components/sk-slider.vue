<script lang="ts">
/**
 * sk-slider 组件 - 通用滑块组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-slider v-model="value" :min="0" :max="100" :step="1" />
 * ```
 *
 * MAYBE DO:
 * [] 支持范围选择
 * [] 支持垂直选择
 * [] 考虑更加的标签和值排版
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/slider
 */

import type { SkSliderUcvProps } from '../styles'

// 标记点类型
export interface SliderMark {
  value: number;
  label?: string;
}

export interface SkSliderProps {
  /**
   * 是否展示数值
   * @default false
   */
  showValue?: boolean;
  /**
   * 最小值
   * @default 0
   */
  min?: number;
  /**
   * 最大值
   * @default 100
   */
  max?: number;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /**
   * 滑块尺寸
   * @default 'medium'
   */
  size?: SkSliderUcvProps['size'];
  /**
   * 滑块颜色
   * @default 'brand'
   */
  color?: SkSliderUcvProps['color'];
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 标记点
   */
  marks?: SliderMark[];
  /**
   * 数值格式化函数
   */
  formatter?: (value: number) => string;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkSliderUcvProps['clax'];
}

export interface SkSliderEmits {
  (name: 'change', value: number): void;
}

export interface SkSliderSlots {
  value?: (props: { value: number; formattedValue: string }) => any;
}
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, isShallow, ref } from 'vue'

import { useParent } from '../composables'
import { SK_FIELD_KEY } from '../constants'
import { SkSliderUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkSliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  size: 'medium',
  color: 'brand',
  disabled: false,
  showValue: false,
})

const modelValue = defineModel<number>({
  default: 0,
})

const emits = defineEmits<SkSliderEmits>()

const slots = defineSlots<SkSliderSlots>()

const { parent } = useParent(SK_FIELD_KEY)

// 获取组件实例用于 createSelectorQuery
const instance = getCurrentInstance()

// 拖拽状态
const isDragging = ref(false)

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    disabled: props.disabled || parent?.props.disabled,
  }
  return SkSliderUcv(computedProps)
})

// 计算当前值的百分比
const percentage = computed(() => {
  const range = props.max - props.min
  const value = Math.max(props.min, Math.min(props.max, modelValue.value))
  return ((value - props.min) / range) * 100
})

const isFillStarted = computed(() => {
  return percentage.value > 0
})

const isShowValue = computed(() => {
  return props.showValue || slots.value
})

// 计算填充样式
const fillStyle = computed(() => {
  return { width: `${percentage.value}%` }
})

// 计算拇指位置样式
const thumbStyle = computed(() => {
  return { left: `${percentage.value}%` }
})

// 格式化数值
const formattedValue = computed(() => {
  if (props.formatter) {
    return props.formatter(modelValue.value)
  }
  return modelValue.value.toString()
})

// 计算步长调整后的值
function getSteppedValue(value: number): number {
  const steps = Math.round((value - props.min) / props.step)
  return props.min + steps * props.step
}

// 计算位置值
function calculateValueFromPosition(clientX: number, clientY: number, callback: (value: number) => void) {
  if (!instance?.proxy) {
    return
  }

  const query = uni.createSelectorQuery().in(instance.proxy)
  query
    .select('#sk-slider-track')
    .boundingClientRect((rect: any) => {
      if (!rect) {
        return
      }

      let ratio = (clientX - rect.left) / rect.width

      ratio = Math.max(0, Math.min(1, ratio))
      const range = props.max - props.min
      const rawValue = props.min + ratio * range
      const steppedValue = getSteppedValue(rawValue)

      callback(steppedValue)
    })
    .exec()
}

// 更新值
function updateValue(newValue: number) {
  const clampedValue = Math.max(props.min, Math.min(props.max, newValue))

  if (clampedValue !== modelValue.value) {
    modelValue.value = clampedValue
    emits('change', clampedValue)

    parent && parent.handleChange(clampedValue)
  }
}

// 处理点击事件
function handleClick(event: any) {
  if (props.disabled || parent?.props.disabled) {
    return
  }

  const touch = event.touches?.[0] || event.changedTouches?.[0] || event
  const clientX = touch.clientX || event.clientX
  const clientY = touch.clientY || event.clientY

  calculateValueFromPosition(clientX, clientY, (newValue) => {
    updateValue(newValue)
  })
}

// 处理触摸开始
function handleTouchStart(event: any) {
  if (props.disabled || parent?.props.disabled) {
    return
  }

  isDragging.value = true

  // 通知表单字段上下文获得焦点
  parent && parent.handleFocus(modelValue.value)

  // event.preventDefault()
}

// 处理触摸移动
function handleTouchMove(event: any) {
  const touch = event.touches?.[0] || event.changedTouches?.[0]
  if (touch) {
    if (!isDragging.value) {
      return
    }

    calculateValueFromPosition(touch.clientX, touch.clientY, (newValue) => {
      updateValue(newValue)
    })
  }

  // event.preventDefault()
}

// 处理触摸结束
function handleTouchEnd() {
  isDragging.value = false

  // 通知表单字段上下文失去焦点
  parent && parent.handleBlur(modelValue.value)
}

// 计算标记点位置
function getMarkPosition(mark: SliderMark): string {
  const range = props.max - props.min
  const percentage = ((mark.value - props.min) / range) * 100
  return `${percentage}%`
}
</script>

<template>
  <div :class="classes.root()">
    <!-- 数值显示 -->
    <div v-if="isShowValue" :class="classes.value()">
      <slot name="value" :value="modelValue" :formatted-value="formattedValue">
        {{ formattedValue }}
      </slot>
    </div>

    <!-- 滑块容器 -->
    <div
      id="sk-slider-track"
      :class="classes.track({ fillStart: isFillStarted })"
      @tap="handleClick"
    >
      <!-- 填充条 -->
      <div :class="classes.fill()" :style="fillStyle" />

      <!-- 拇指 -->
      <view
        :class="classes.thumb()"
        :style="thumbStyle"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchEnd"
      />

      <!-- 标记点 -->
      <template v-if="marks && marks.length > 0">
        <div
          v-for="mark in marks"
          :key="mark.value"
          :class="classes.mark()"
          :style="{ left: getMarkPosition(mark) }"
        >
          {{ mark.label || mark.value }}
        </div>
      </template>
    </div>
  </div>
</template>
