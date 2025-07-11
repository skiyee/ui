<script lang="ts">
/**
 * sk-radio 组件 - 通用单选框组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-radio value="option1" label="单选框" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/radio
 */

import type { SkRadioUcvProps } from '../styles'

export interface SkRadioProps {
  /**
   * 单选框的值(标识)
   */
  value: string;
  /**
   * 单选框标签文本
   */
  label?: string;
  /**
   * 单选框颜色
   * @default 'brand'
   * @description 能够覆盖 RadioGroup 的 color
   */
  color?: SkRadioUcvProps['color'];
  /**
   * 单选框尺寸
   * @default 'medium'
   * @description 能够覆盖 RadioGroup 的 size
   */
  size?: SkRadioUcvProps['size'];
  /**
   * 是否禁用
   * @default false
   * @description 能够合并 RadioGroup 的 disabled
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkRadioUcvProps['clax'];
}

export interface SkRadioEmits {
  /**
   * 当单选框被点击时触发
   */
  (name: 'click', event: any): void;
}

export interface SkRadioSlots {
  /**
   * 单选框的标签内容
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { useParent } from '../composables/use-parent'
import { SK_RADIO_GROUP_KEY } from '../constants/radio'
import { SkRadioUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = defineProps<SkRadioProps>()

const emits = defineEmits<SkRadioEmits>()

const { parent } = useParent(SK_RADIO_GROUP_KEY)

const isSelected = computed(() => {
  return !!parent && parent.state.selectValue === props.value
})

const classes = computed(() => {
  return SkRadioUcv({
    ...props,
    // 继承 RadioGroup 的属性并覆盖
    color: props.color || parent?.props?.color || 'brand',
    size: props.size || parent?.props?.size || 'medium',
    isDisabled: props.disabled || parent?.props?.disabled || false,
    isSelected: isSelected.value,
  })
})

function handleClick(event: any) {
  if (props.disabled || parent?.props?.disabled) {
    return
  }

  emits('click', event)

  parent && parent.updateValue(props.value)
}
</script>

<template>
  <div :class="classes.root()" @click="handleClick">
    <div :class="classes.radio()">
      <span :class="classes.dot()" />
    </div>
    <div :class="classes.label()">
      <slot>{{ label }}</slot>
    </div>
  </div>
</template>
