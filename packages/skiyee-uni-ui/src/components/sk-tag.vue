<script lang="ts">
/**
 * sk-tag 组件 - 通用标签组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-tag type="primary" variant="solid">标签</sk-tag>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/data-display/tag
 */

import type { SkTagUcvProps } from '../styles'

export interface SkTagProps {
  /**
   * 标签类型
   * @default 'default'
   */
  type?: SkTagUcvProps['type'];
  /**
   * 颜色变体
   * @default 'solid'
   */
  variant?: SkTagUcvProps['variant'];
  /**
   * 标签尺寸
   * @default 'medium'
   */
  size?: SkTagUcvProps['size'];
  /**
   * 圆角大小
   * @default 'small'
   */
  radius?: SkTagUcvProps['radius'];
  /**
   * 是否可关闭
   * @default false
   */
  closable?: boolean;
  /**
   * 自定义背景色（覆盖 type）
   */
  color?: string;
  /**
   * 自定义文字颜色
   */
  textColor?: string;
  /**
   * 前置图标（使用 sk-icon 的图标名称）
   */
  icon?: string;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkTagUcvProps['clax'];
}

export interface SkTagEmits {
  /**
   * 点击关闭按钮时触发
   */
  (name: 'close'): void;
  /**
   * 点击标签时触发
   */
  (name: 'click', event: any): void;
}

export interface SkTagSlots {
  /**
   * 标签内容
   */
  default?: () => any;
  /**
   * 自定义图标内容
   */
  icon?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkTagUcv } from '../styles'
import SkIcon from './sk-icon.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkTagProps>(), {
  type: 'default',
  variant: 'solid',
  size: 'medium',
  radius: 'small',
  closable: false,
})

const emits = defineEmits<SkTagEmits>()

defineSlots<SkTagSlots>()

// 计算样式类
const classes = computed(() => {
  return SkTagUcv(props)
})

// 计算自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.color) {
    if (props.variant === 'solid') {
      style.backgroundColor = props.color
    }
    else if (props.variant === 'outline') {
      style.borderColor = props.color
      style.color = props.color
    }
    else if (props.variant === 'light') {
      style.backgroundColor = `${props.color}1A` // 10% opacity
      style.color = props.color
    }
  }

  if (props.textColor) {
    style.color = props.textColor
  }

  return style
})

// 处理关闭事件
function handleClose(event: any) {
  event.stopPropagation()
  emits('close')
}

// 处理点击事件
function handleClick(event: any) {
  emits('click', event)
}
</script>

<template>
  <view
    :class="classes.root()"
    :style="customStyle"
    @click="handleClick"
  >
    <view :class="classes.content()">
      <!-- 前置图标 -->
      <slot name="icon">
        <SkIcon
          v-if="icon"
          :name="icon"
          :class="classes.icon()"
        />
      </slot>

      <!-- 标签内容 -->
      <slot />
    </view>

    <!-- 关闭图标 -->
    <SkIcon
      v-if="closable"
      name="i-lucide:x"
      :class="classes.closeIcon()"
      @click="handleClose"
    />
  </view>
</template>
