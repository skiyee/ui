<script lang="ts">
/**
 * sk-icon 组件 - 用于显示图标的基础组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-icon name="i-lucide:cup-soda" size="16px" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/icon
 */

export interface SkIconProps {
  /**
   * 图标名称
   */
  name: string;
  /**
   * 图标大小 (需含单位)
   * @support 'px' | 'rpx' | 'rem'
   */
  size?: string;
  /**
   * 用于拓展当前基础样式
   */
  clax?: string | string[];
}

export interface SkIconEmits {
  /**
   * 当图标被点击时触发
   * @param event 事件对象
   */
  (name: 'click', event: any): void;
}
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

defineProps<SkIconProps>()

defineEmits<SkIconEmits>()
</script>

<template>
  <span
    class="shrink-0"
    :class="[name, clax]"
    :style="size && `width:${size};height:${size}`"
    @click="$emit('click', $event)"
  />
</template>
