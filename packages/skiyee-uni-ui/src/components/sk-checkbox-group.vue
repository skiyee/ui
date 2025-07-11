<script lang="ts">
/**
 * sk-checkbox-group 组件 - 复选框组组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-checkbox-group v-model="selectedValues" direction="horizontal">
 *   <sk-checkbox value="option1" label="选项1" />
 *   <sk-checkbox value="option2" label="选项2" />
 * </sk-checkbox-group>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/checkbox-group
 */

import type { SkCheckboxGroupUcvProps, SkCheckboxUcvProps } from '../styles'

export interface SkCheckboxGroupProps {
  /**
   * 排列方向
   * @default 'vertical'
   */
  direction?: SkCheckboxGroupUcvProps['direction'];
  /**
   * 整个组复选框尺寸，会被 SkCheckbox 继承或覆盖
   * @default 'medium'
   */
  size?: SkCheckboxUcvProps['size'];
  /**
   * 整个组复选框颜色，会被 SkCheckbox 继承或覆盖
   * @default 'brand'
   */
  color?: SkCheckboxUcvProps['color'];
  /**
   * 是否禁用整个组
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkCheckboxGroupUcvProps['clax'];
}

export interface SkCheckboxGroupEmits {
  /**
   * 当复选框组的选中值改变时触发
   * @param values 选中的值列表
   */
  (name: 'change', values: string[]): void;
}

export interface SkCheckboxGroupSlots {
  /**
   * 复选框列表
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { useParent, useProvide } from '../composables'
import { SK_CHECKBOX_GROUP_KEY, SK_FIELD_KEY } from '../constants'
import { SkCheckboxGroupUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkCheckboxGroupProps>(), {
  direction: 'vertical',
  size: 'medium',
  color: 'brand',
  disabled: false,
})

const modelValue = defineModel<string[]>({
  default: () => [],
})

const emits = defineEmits<SkCheckboxGroupEmits>()

defineSlots<SkCheckboxGroupSlots>()

const { parent } = useParent(SK_FIELD_KEY)

const isDisabled = computed(() => props.disabled || parent?.props?.disabled)

const classes = computed(() => {
  const computedProps = {
    ...props,
    disabled: isDisabled.value,
  }

  return SkCheckboxGroupUcv(computedProps)
})

// 检查值是否被选中
function isChecked(value: string): boolean {
  return modelValue.value.includes(value)
}

// 更新选中值
function updateValue(value: string, checked: boolean) {
  const currentValues = [...modelValue.value]
  const index = currentValues.indexOf(value)

  if (checked && index === -1) {
    currentValues.push(value)
  }
  else if (!checked && index > -1) {
    currentValues.splice(index, 1)
  }

  modelValue.value = currentValues
  emits('change', currentValues)
}

useProvide(SK_CHECKBOX_GROUP_KEY)({
  props,
  isChecked,
  updateValue,
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
