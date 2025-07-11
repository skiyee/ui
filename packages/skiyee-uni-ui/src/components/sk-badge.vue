<script lang="ts">
/**
 * sk-badge 组件 - 通用徽章组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-badge content="99+" color="danger">
 *   <sk-button>消息</sk-button>
 * </sk-badge>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/data-display/badge
 */

import type { SkBadgeUcvProps } from '../styles'

export interface SkBadgeProps {
  /**
   * 徽章内容
   */
  content?: string | number;
  /**
   * 徽章大小
   * @default 'medium'
   */
  size?: SkBadgeUcvProps['size'];
  /**
   * 徽章颜色
   * @default 'danger'
   */
  color?: SkBadgeUcvProps['color'];
  /**
   * 徽章位置
   * @default 'top-right'
   */
  placement?: SkBadgeUcvProps['placement'];
  /**
   * 徽章形状
   * @default 'auto'
   * @description 当设置为 auto 时，徽章会根据内容长度自动判断是圆形还是矩形
   */
  shape?: 'auto' | SkBadgeUcvProps['shape'];
  /**
   * 是否无边框徽章
   * @default false
   */
  boundless?: boolean;
  /**
   * 是否隐藏徽章
   * @default false
   */
  hidden?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkBadgeUcvProps['clax'];
}

export interface SkBadgeSlots {
  default?: () => any;
  /**
   * 自定义徽章
   * 优先级高于 content 属性
   */
  badge?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkBadgeUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkBadgeProps>(), {
  size: 'medium',
  color: 'danger',
  placement: 'top-right',
  shape: 'auto',
  boundless: false,
  hidden: false,
})

const slots = defineSlots<SkBadgeSlots>()

// 判断是否为独立模式（没有子内容）
const isStandalone = computed<boolean>(() => !slots.default)

// 计算显示的内容
const displayContent = computed<string>(() => {
  const value = props.content

  if (value === undefined || value === null) {
    return ''
  }

  // 字符串类型直接返回
  return value.toString()
})

const shape = computed(() => {
  return props.shape === 'auto'
    ? (displayContent.value.length > 1 ? 'rectangle' : 'circle')
    : props.shape
})

// 判断是否应该显示徽章
const shouldShowBadge = computed(() => {
  if (props.hidden) {
    return false
  }
  // 如果有自定义徽章内容，则显示
  if (slots.badge) {
    return true
  }
  return shape.value === 'dot' || displayContent.value !== ''
})

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    shape: shape.value,
    standalone: isStandalone.value,
    hidden: !shouldShowBadge.value,
  }
  return SkBadgeUcv(computedProps)
})
</script>

<template>
  <div :class="classes.root()">
    <slot />

    <div v-if="shouldShowBadge" :class="classes.badge()">
      <slot name="badge">
        <span>{{ displayContent }}</span>
      </slot>
    </div>
  </div>
</template>
