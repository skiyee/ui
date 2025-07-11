<script lang="ts">
/**
 * sk-input 组件 - 通用输入框组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-input v-model="value" placeholder="请输入..." />
 * ```
 *
 * MAYBE DO:
 * [] 支持清空
 * [] 支持左右图标属性
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/input
 */

import type { SkInputUcvProps } from '../styles'
import type { AcceptableModelValue } from '../types'

export interface SkInputProps {
  /**
   * 输入框类型
   * @default 'text'
   */
  type?: 'text' | 'number' | 'digit' | 'safe-password' | 'tel' | 'idcard' | 'nickname';
  /**
   * 是否密码状态
   * @default false
   */
  password?: boolean;
  /**
   * 占位文本
   * @default '请输入...'
   */
  placeholder?: string;
  /**
   * 输入框尺寸
   * @default 'medium'
   */
  size?: SkInputUcvProps['size'];
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
   * 最大长度
   * @default 140
   */
  maxlength?: number;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkInputUcvProps['clax'];
}

export interface SkInputEmits<T extends AcceptableModelValue = AcceptableModelValue> {
  (name: 'change', event: { value: T }): void;
  (name: 'focus', event: { value: T }): void;
  (name: 'blur', event: { value: T }): void;
  (name: 'confirm', event: { value: T }): void;
}

export interface SkInputSlots {
  leading?: (props: { clax: string }) => any;
  trailing?: (props: { clax: string }) => any;
}
</script>

<script setup lang="ts" generic="T extends AcceptableModelValue">
import { computed, ref } from 'vue'

import { useParent } from '../composables'
import { SK_FIELD_KEY } from '../constants'
import { SkInputUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkInputProps>(), {
  type: 'text',
  placeholder: '',
  password: false,
  readonly: false,
  disabled: false,
  maxlength: 140,
})

const modelValue = defineModel<T>()

const emits = defineEmits<SkInputEmits<T>>()

defineSlots<SkInputSlots>()

const { parent } = useParent(SK_FIELD_KEY)

const isFocused = ref(false)

const elementSize = computed(() => props.size || parent?.props.size || 'medium')

const isDisabled = computed(() => props.disabled || parent?.props.disabled)

const classes = computed(() => {
  return SkInputUcv({
    ...props,
    size: elementSize.value,
    disabled: isDisabled.value,
  })
})

const currentValue = computed({
  get: () => String(modelValue.value ?? ''),
  set: newValue => modelValue.value = newValue as T,
})

function handleInput(event: any) {
  const value = event.detail.value
  currentValue.value = value

  parent && parent.handleChange(value)
}

function handleFocus(event: any) {
  isFocused.value = true
  const value = event.detail.value

  emits('focus', { value })

  parent && parent.handleFocus(value)
}

function handleBlur(event: any) {
  isFocused.value = false
  const value = event.detail.value

  emits('blur', { value })

  parent && parent.handleBlur(value)
}

function handleConfirm(event: any) {
  const value = event.detail.value

  emits('confirm', { value })
}
</script>

<template>
  <div :class="classes.root()">
    <!-- 首部插槽 -->
    <slot name="leading" :clax="classes.leading()" />
    <!-- 输入框容器 -->
    <div :class="classes.inner()">
      <input
        v-model="currentValue"
        :type="props.type"
        :password="props.password"
        :placeholder="props.placeholder"
        :maxlength="props.maxlength"
        :disabled="isDisabled || readonly"
        :class="classes.content()"
        :placeholder-class="classes.placeholder()"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @confirm="handleConfirm"
      >
    </div>
    <!-- 尾部插槽 -->
    <slot name="trailing" :clax="classes.trailing()" />
  </div>
</template>
