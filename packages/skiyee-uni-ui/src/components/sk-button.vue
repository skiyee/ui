<script lang="ts">
/**
 * sk-button 组件 - 通用按钮组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-button color="brand" variant="solid" @click="handleClick">
 *   按钮文本
 * </sk-button>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/button
 */

import type { SkButtonUcvProps } from '../styles'

export interface SkButtonProps {
  /**
   * 按钮标签文本
   */
  label?: string;
  /**
   * 按钮颜色
   * @default 'brand'
   */
  color?: SkButtonUcvProps['color'];
  /**
   * 按钮变体
   * @default 'solid'
   */
  variant?: SkButtonUcvProps['variant'];
  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: SkButtonUcvProps['size'];
  /**
   * 按钮圆角
   * @default 'medium'
   */
  radius?: SkButtonUcvProps['radius'];
  /**
   * 是否为全宽元素
   * @default false
   */
  full?: boolean;
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkButtonUcvProps['clax'];
}

export interface SkButtonEmits {
  /**
   * 按钮点击事件
   * @param event 点击事件对象
   */
  (name: 'click', event: any): void;
}

export interface SkButtonSlots {
  /**
   * 按钮内容
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkButtonUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkButtonProps>(), {
  color: 'brand',
  variant: 'solid',
  size: 'medium',
  radius: 'medium',
  disabled: false,
  full: false,
})

const emits = defineEmits<SkButtonEmits>()

defineSlots<SkButtonSlots>()

const classes = computed(() => SkButtonUcv(props))

const canClick = computed(() => !(props.disabled))

function handleClick(event: any) {
  if (!canClick.value) {
    return
  }
  emits('click', event)
}
</script>

<template>
  <button
    :class="classes"
    hover-class="none"
    @click="handleClick"
  >
    <slot>
      <span v-if="label">{{ label }}</span>
    </slot>
  </button>
</template>
