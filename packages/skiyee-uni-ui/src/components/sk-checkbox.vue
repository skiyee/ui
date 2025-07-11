<script lang="ts">
/**
 * sk-checkbox 组件 - 通用复选框组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-checkbox v-model="checked" label="复选框" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/checkbox
 */

import type { SkCheckboxUcvProps } from '../styles'

export interface SkCheckboxProps {
  /**
   * 复选框标签文本
   */
  label?: string;
  /**
   * 复选框的值(标识)
   * @description 在 CheckboxGroup 中必需
   */
  value?: string;
  /**
   * 大小尺寸
   * @default 'medium'
   * @description 能够覆盖 CheckboxGroup 的 size
   */
  size?: SkCheckboxUcvProps['size'];
  /**
   * 复选框颜色
   * @default 'brand'
   * @description 能够覆盖 CheckboxGroup 的 color
   */
  color?: SkCheckboxUcvProps['color'];
  /**
   * 是否禁用
   * @default false
   * @description 能够合并 CheckboxGroup 的 disabled
   */
  disabled?: boolean;
  /**
   * 是否半选状态
   * @default false
   * @tip 半选状态不受双向绑定控制，直到自设置为 false
   */
  indeterminate?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkCheckboxUcvProps['clax'];
}

export interface SkCheckboxEmits {
  /**
   * 当复选框状态改变时触发
   * @param checked 是否选中
   * @param value 复选框的值(标识)，仅在 CheckboxGroup 中存在
   */
  (name: 'change', checked: boolean, value?: string): void;
}

export interface SkCheckboxSlots {
  /**
   * 复选框的标签内容
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { useParent } from '../composables'
import { SK_CHECKBOX_GROUP_KEY, SK_FIELD_KEY } from '../constants'
import { SkCheckboxUcv } from '../styles'
import SkIcon from './sk-icon.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkCheckboxProps>(), {
  disabled: false,
  indeterminate: false,
})

const modelValue = defineModel<boolean>({
  default: false,
})

const emits = defineEmits<SkCheckboxEmits>()

const slots = defineSlots<SkCheckboxSlots>()

const { parent: fieldParent } = useParent(SK_FIELD_KEY)

const { parent } = useParent(SK_CHECKBOX_GROUP_KEY)

const isChecked = computed(() => {
  if (parent && props.value !== undefined) {
    return parent.isChecked(props.value)
  }

  return Boolean(modelValue.value)
})

const currentSize = computed(() => {
  return props.size || parent?.props?.size || fieldParent?.props?.size || 'medium'
})

const currentColor = computed(() => {
  return props.color || parent?.props?.color || 'brand'
})

const isDisabled = computed(() => {
  if (parent && props.value !== undefined) {
    return parent.props.disabled || props.disabled
  }

  return props.disabled || fieldParent?.props?.disabled || false
})

const classes = computed(() => {
  const computedProps = {
    ...props,
    size: currentSize.value,
    color: currentColor.value,
    checked: props.indeterminate || isChecked.value,
    disabled: isDisabled.value,
  }
  return SkCheckboxUcv(computedProps)
})

const iconName = computed(() =>
  props.indeterminate
    ? 'i-lucide:minus'
    : 'i-lucide:check',
)

function handleClick() {
  if (isDisabled.value) {
    return
  }

  const checked = !isChecked.value

  if (parent && props.value !== undefined) {
    parent.updateValue(props.value, checked)
  }// 独立使用时的逻辑
  else {
    modelValue.value = checked
  }

  emits('change', checked, props.value)
}
</script>

<template>
  <div :class="classes.root()" @click="handleClick">
    <div :class="classes.checkbox()">
      <SkIcon :name="iconName" :clax="classes.icon()" />
    </div>
    <span v-if="label || slots.default" :class="classes.label()">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>
