<script lang="ts">
/**
 * sk-field 组件 - 用于包装各种表单组件，并提供标签、描述文本、错误显示等功能的字段组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-field name="username" label="用户名" required>
 *   <sk-input v-model="username" placeholder="请输入用户名" />
 * </sk-field>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/form-field
 */

import type { SkFieldUcvProps } from '../styles'

export interface SkFieldProps {
  /**
   * 字段名称
   * @description 用于表单验证和数据收集，配合 SkForm 组件使用
   */
  name?: string;
  /**
   * 字段标签
   */
  label?: string;
  /**
   * 字段标签宽度
   * @default 140
   * @limit 仅水平布局时有效
   * @description 如果未填写单位，默认为 rpx，否则原样输出
   */
  labelWidth?: string | number;
  /**
   * 是否必填
   * @default false
   */
  required?: boolean;
  /**
   * 描述信息
   */
  description?: string;
  /**
   * 错误信息
   * @description 优先级高于表单校验抛出的错误
   */
  error?: string;
  /**
   * 布局方向
   * @default 'vertical'
   * @description 优先级高于 SkForm 的 orientation
   */
  orientation?: SkFieldUcvProps['orientation'];
  /**
   * 字段尺寸
   * @default 'medium'
   * @description 优先级高于 SkForm 的 size
   */
  size?: SkFieldUcvProps['size'];
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkFieldUcvProps['clax'];
}

export interface SkFieldSlots {
  label?: () => any;
  default?: () => any;
  description?: () => any;
  error?: () => any;
}
</script>

<script setup lang="ts">
import { computed, reactive, readonly, toRef, toRefs } from 'vue'

import { useParent, useProvide } from '../composables'
import { SK_FIELD_KEY, SK_FORM_KEY } from '../constants'
import { SkFieldUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkFieldProps>(), {
  required: false,
  disabled: false,
})

const slots = defineSlots<SkFieldSlots>()

const { parent } = useParent(SK_FORM_KEY)

const propsWithParent = computed(() => ({
  disabled: props.disabled || parent?.props.disabled,
}))

const classes = computed(() => {
  const computedProps = {
    ...props,
    ...propsWithParent.value,
  }
  return SkFieldUcv(computedProps)
})

const fieldState = computed(() => {
  if (props.name && parent) {
    return parent.getFieldState(props.name)
  }
  return null
})

const labelWidthWithUnit = computed(() => {
  if (props.orientation === 'vertical') {
    return ''
  }

  if (!Number.isNaN(Number(props.labelWidth))) {
    return `${props.labelWidth}rpx`
  }

  return props.labelWidth
})

const shouldShowError = computed(() => {
  const showByAll = parent
    && parent.state.isSubmitted
    && !parent.state.isGlobalValid

  const showByCurrent = fieldState.value
    && fieldState.value.touched
    && !fieldState.value.valid

  return showByAll || showByCurrent
})

const currentError = computed(() => {
  if (props.error) {
    return props.error
  }

  if (shouldShowError.value) {
    return fieldState.value ? fieldState.value.errors[0] : ''
  }

  return ''
})

const showRequired = computed(() => {
  return props.required && props.label
})

const showDescription = computed(() => {
  return (props.description || slots.description)
})

const showError = computed(() => {
  return currentError.value || slots.error
})

function handleChange(value: unknown) {
  if (props.name && parent) {
    parent.handleFieldChange(props.name, value)
  }
}

function handleFocus(value: unknown) {
  if (props.name && parent) {
    parent.handleFieldFocus(props.name, value)
  }
}

function handleBlur(value: unknown) {
  if (props.name && parent) {
    parent.handleFieldBlur(props.name, value)
  }
}

const fieldContext = readonly({
  props: reactive({
    name: toRef(() => props.name),
    size: toRef(() => props.size),
    disabled: toRef(() => propsWithParent.value.disabled),
  }),
  handleFocus,
  handleBlur,
  handleChange,
})

useProvide(SK_FIELD_KEY)(fieldContext)
</script>

<template>
  <div :class="classes.root()">
    <div v-if="label || slots.label" :class="classes.label()" :style="`width:${labelWidthWithUnit}`">
      <slot name="label">
        <span>{{ label }}</span>
        <span v-if="showRequired" :class="classes.required()">*</span>
      </slot>
    </div>

    <div :class="classes.content()">
      <slot />
    </div>

    <div
      v-if="showError"
      :class="classes.error()"
      :style="`marginLeft: ${labelWidthWithUnit};`"
    >
      <slot name="error">
        {{ currentError }}
      </slot>
    </div>
    <div
      v-else-if="showDescription"
      :class="classes.description()"
      :style="`marginLeft: ${labelWidthWithUnit};`"
    >
      <slot name="description">
        {{ description }}
      </slot>
    </div>
  </div>
</template>
