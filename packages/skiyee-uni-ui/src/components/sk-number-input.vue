<script lang="ts">
/**
 * sk-number-input 组件 - 通用数字输入框组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-number-input v-model="value" :min="0" :max="100" :step="1" />
 * ```
 *
 * MAYBE DO:
 * [] 支持长按增减
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/number-input
 */

import type { SkNumberInputUcvProps } from '../styles'

export interface SkNumberInputProps {
  /**
   * 最小值
   */
  min?: number;
  /**
   * 最大值
   */
  max?: number;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /**
   * 是否严格步长（值必须是步长的倍数）
   * @default false
   */
  stepStrictly?: boolean;
  /**
   * 占位文本
   */
  placeholder?: string;
  /**
   * 组件尺寸
   * @default 'medium'
   */
  size?: SkNumberInputUcvProps['size'];
  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 格式化选项（基于 Intl.NumberFormat）
   */
  formatOptions?: Intl.NumberFormatOptions;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkNumberInputUcvProps['clax'];
}

export interface SkNumberInputEmits {
  (name: 'change', value: number): void;
  (name: 'focus', event: { value: number }): void;
  (name: 'blur', event: { value: number }): void;
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useParent } from '../composables'
import { SK_FIELD_KEY } from '../constants'
import { SkNumberInputUcv } from '../styles'
import SkIcon from './sk-icon.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkNumberInputProps>(), {
  step: 1,
  size: 'medium',
  disabled: false,
  readonly: false,
  stepStrictly: false,
})

const modelValue = defineModel<number>({
  default: 0,
})

const emits = defineEmits<SkNumberInputEmits>()

const { parent } = useParent(SK_FIELD_KEY)

// 内部状态
const isFocused = ref(false)
const inputValue = ref('')

// 工具函数
function getValuePrecision(value: number): number {
  if (Number.isInteger(value)) {
    return 0
  }

  const str = value.toString()
  const dotIndex = str.indexOf('.')
  return dotIndex === -1 ? 0 : Math.min(str.length - dotIndex - 1, 3)
}

function preciseCalculate(a: number, b: number, operation: 'add' | 'subtract'): number {
  const precision = Math.max(getValuePrecision(a), getValuePrecision(b))
  const factor = 10 ** precision
  const aInt = Math.round(a * factor)
  const bInt = Math.round(b * factor)

  const result = operation === 'add'
    ? (aInt + bInt) / factor
    : (aInt - bInt) / factor

  return Number(result.toFixed(precision))
}

function formatValue(value: number): string {
  if (props.formatOptions) {
    return new Intl.NumberFormat('zh-CN', props.formatOptions).format(value)
  }
  return value.toFixed(getValuePrecision(value))
}

function parseInputValue(value: string): number {
  if (!value?.trim()) {
    return 0
  }

  if (props.formatOptions) {
    const cleanValue = value.replace(/[^\d.-]/g, '')
    const parsed = Number.parseFloat(cleanValue)

    if (props.formatOptions.style === 'percent') {
      return Number.isNaN(parsed) ? 0 : parsed / 100
    }
    return Number.isNaN(parsed) ? 0 : Number(parsed.toFixed(2))
  }

  const parsed = Number.parseFloat(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

function validateValue(value: number): number {
  // 应用边界限制
  if (props.min !== undefined && value < props.min) {
    value = props.min
  }
  if (props.max !== undefined && value > props.max) {
    value = props.max
  }

  // 应用严格步长
  if (props.stepStrictly) {
    value = Math.round(value / props.step) * props.step
  }

  return Number(value.toFixed(getValuePrecision(value)))
}

// 计算属性
const isDisabled = computed(() => props.disabled || parent?.props.disabled)

const classes = computed(() => SkNumberInputUcv({
  ...props,
  disabled: isDisabled.value,
}))

const displayValue = computed(() => {
  return isFocused.value && (inputValue.value !== null || inputValue.value !== undefined)
    ? inputValue.value
    : formatValue(modelValue.value)
})

const canDecrease = computed(() =>
  !isDisabled.value && !props.readonly
  && (props.min === undefined || modelValue.value > props.min),
)

const canIncrease = computed(() =>
  !isDisabled.value && !props.readonly
  && (props.max === undefined || modelValue.value < props.max),
)

// 核心操作函数
function updateValue(newValue: number) {
  const validatedValue = validateValue(newValue)

  if (validatedValue === modelValue.value) {
    return
  }

  modelValue.value = validatedValue
  emits('change', validatedValue)
  parent && parent.handleChange(modelValue.value)
}

function decrease() {
  if (!canDecrease.value) {
    return
  }

  const newValue = preciseCalculate(modelValue.value, props.step, 'subtract')
  updateValue(newValue)
}

function increase() {
  if (!canIncrease.value) {
    return
  }

  const newValue = preciseCalculate(modelValue.value, props.step, 'add')
  updateValue(newValue)
}

// 事件处理
function handleFocus(_event: any) {
  isFocused.value = true
  inputValue.value = formatValue(modelValue.value)

  emits('focus', { value: modelValue.value })
  parent && parent.handleFocus(modelValue.value)
}

function handleInput(event: any) {
  inputValue.value = event.detail.value
}

function handleBlur(_event: any) {
  isFocused.value = false

  if (inputValue.value.trim()) {
    const parsedValue = parseInputValue(inputValue.value)
    updateValue(parsedValue)
  }

  inputValue.value = ''

  emits('blur', { value: modelValue.value })
  parent && parent.handleBlur(modelValue.value)
}
</script>

<template>
  <div :class="classes.root()">
    <!-- 减少按钮 -->
    <div :class="classes.button({ range: canDecrease })" @click="decrease">
      <SkIcon name="i-lucide:minus" :clax="classes.icon()" />
    </div>

    <!-- 输入框 -->
    <input
      :value="displayValue"
      :controlled="true"
      :placeholder="placeholder"
      :disabled="disabled || readonly"
      :class="classes.input()"
      :placeholder-class="classes.placeholder()"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    >

    <!-- 增加按钮 -->
    <div :class="classes.button({ range: canIncrease })" @click="increase">
      <SkIcon name="i-lucide:plus" :clax="classes.icon()" />
    </div>
  </div>
</template>
