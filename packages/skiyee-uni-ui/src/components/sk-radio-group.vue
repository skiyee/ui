<script lang="ts">
/**
 * sk-radio-group 组件 - 通用单选框组组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-radio-group v-model="value">
 *   <sk-radio value="option1" label="单选框1" />
 *   <sk-radio value="option2" label="单选框2" />
 * </sk-radio-group>
 * ```
 *
 * @see 更多示例请参考文档: https://github.com/skiyee/ui/ui-uni/src/components/sk-radio-group.vue
 */

import type { SkRadioGroupUcvProps, SkRadioUcvProps } from '../styles'

export interface SkRadioGroupProps {
  /**
   * 排列方向
   * @default 'vertical'
   */
  orientation?: SkRadioGroupUcvProps['orientation'];
  /**
   * 整个组单选框尺寸，会被 SkRadio 继承或覆盖
   * @default 'medium'
   */
  size?: SkRadioUcvProps['size'];
  /**
   * 整个组单选框颜色，会被 SkRadio 继承或覆盖
   * @default 'brand'
   */
  color?: SkRadioUcvProps['color'];
  /**
   * 是否禁用整个组
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkRadioGroupUcvProps['clax'];
}

export interface SkRadioGroupEmits {
  /**
   * 当单选框组的选中值改变时触发
   */
  (name: 'change', value: string): void;
}

export interface SkRadioGroupSlots {
  /**
   * 单选框列表
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, reactive, readonly } from 'vue'

import { useProvide } from '../composables/use-provide'
import { SK_RADIO_GROUP_KEY } from '../constants/radio'
import { SkRadioGroupUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkRadioGroupProps>(), {
  orientation: 'vertical',
  size: 'medium',
  color: 'brand',
  disabled: false,
})

const modelValue = defineModel<string>()

const emits = defineEmits<SkRadioGroupEmits>()

const classes = computed(() => {
  return SkRadioGroupUcv(props)
})

function updateValue(value: string) {
  modelValue.value = value

  emits('change', modelValue.value)
}

const radioGroupContext = readonly({
  props: reactive(computed(() => ({
    size: props.size,
    color: props.color,
    disabled: props.disabled,
  }))),
  state: reactive({
    selectValue: modelValue,
  }),
  updateValue,
})

useProvide(SK_RADIO_GROUP_KEY)(radioGroupContext)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
