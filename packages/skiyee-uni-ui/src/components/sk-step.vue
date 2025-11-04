<script lang="ts">
/**
 * sk-step 组件 - 步骤项组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-step title="步骤1" description="这是步骤1的描述" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/info/steps
 */

import type { SkStepUcvProps } from '../styles'
import type { StepStatus } from '../types'

export interface SkStepProps {
  /**
   * 步骤标题
   */
  title?: string;
  /**
   * 步骤描述
   */
  description?: string;
  /**
   * 自定义图标名称
   */
  icon?: string;
  /**
   * 步骤状态（可覆盖自动计算的状态）
   */
  status?: StepStatus;
  /**
   * 是否可点击
   * @default false
   */
  clickable?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkStepUcvProps['clax'];
}

export interface SkStepEmits {
  /**
   * 点击步骤时触发
   */
  (name: 'click'): void;
}

export interface SkStepSlots {
  /**
   * 自定义图标内容
   */
  icon?: () => any;
  /**
   * 自定义标题内容
   */
  title?: () => any;
  /**
   * 自定义描述内容
   */
  description?: () => any;
}
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeUnmount, onMounted } from 'vue'

import { useParent } from '../composables'
import { SK_STEPS_KEY } from '../constants'
import { SkStepUcv } from '../styles'
import SkIcon from './sk-icon.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkStepProps>(), {
  clickable: false,
})

const emits = defineEmits<SkStepEmits>()

const slots = defineSlots<SkStepSlots>()

const instance = getCurrentInstance()
const { parent } = useParent(SK_STEPS_KEY)

// 当前步骤的索引
const currentIndex = computed(() => {
  if (!parent || !instance) {
    return -1
  }
  return parent.getStepIndex(instance.uid)
})

// 是否是最后一个步骤
const isLast = computed(() => {
  if (!parent || !instance) {
    return false
  }
  const allSteps = parent.getStepIndex.length
  return currentIndex.value === allSteps - 1
})

// 计算步骤状态
const computedStatus = computed<StepStatus>(() => {
  if (props.status) {
    return props.status
  }

  if (!parent) {
    return 'wait'
  }

  const active = parent.props.active ?? 0
  const index = currentIndex.value

  if (index < active) {
    return 'finish'
  }
  else if (index === active) {
    return 'process'
  }
  else {
    return 'wait'
  }
})

// 当前步骤的方向
const direction = computed(() => parent?.props.direction ?? 'horizontal')

// 当前步骤的尺寸
const size = computed(() => parent?.props.size ?? 'medium')

// 是否禁用
const isDisabled = computed(() => parent?.props.disabled ?? false)

// 样式类
const classes = computed(() => {
  return SkStepUcv({
    ...props,
    direction: direction.value,
    size: size.value,
    status: computedStatus.value,
    disabled: isDisabled.value,
    isLast: isLast.value,
  })
})

// 图标名称
const iconName = computed(() => {
  if (props.icon) {
    return props.icon
  }

  switch (computedStatus.value) {
    case 'finish':
      return 'i-lucide:check'
    case 'error':
      return 'i-lucide:x'
    default:
      return ''
  }
})

// 是否显示数字
const showNumber = computed(() => {
  return !props.icon && !slots.icon && computedStatus.value !== 'finish' && computedStatus.value !== 'error'
})

// 点击处理
function handleClick() {
  if (isDisabled.value || (!props.clickable && !parent?.props.disabled)) {
    return
  }

  emits('click')

  if (parent && currentIndex.value !== -1) {
    parent.onStepClick(currentIndex.value)
  }
}

// 注册步骤
onMounted(() => {
  if (parent && instance) {
    parent.registerStep(instance.uid)
  }
})

// 注销步骤
onBeforeUnmount(() => {
  if (parent && instance) {
    parent.unregisterStep(instance.uid)
  }
})
</script>

<template>
  <view :class="classes.root()">
    <view :class="classes.container()" @click="handleClick">
      <!-- 图标区域 -->
      <view :class="classes.iconWrapper()">
        <slot v-if="slots.icon" name="icon" />
        <SkIcon v-else-if="iconName" :name="iconName" :clax="classes.icon()" />
        <text v-else-if="showNumber" :class="classes.icon()">
          {{ currentIndex + 1 }}
        </text>
      </view>

      <!-- 内容区域 -->
      <view v-if="title || description || slots.title || slots.description" :class="classes.content()">
        <!-- 标题 -->
        <view v-if="title || slots.title" :class="classes.title()">
          <slot name="title">
            {{ title }}
          </slot>
        </view>

        <!-- 描述 -->
        <view v-if="description || slots.description" :class="classes.description()">
          <slot name="description">
            {{ description }}
          </slot>
        </view>
      </view>
    </view>

    <!-- 连接线 -->
    <view v-if="!isLast" :class="classes.line()" />
  </view>
</template>
