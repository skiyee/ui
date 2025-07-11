<script lang="ts">
/**
 * sk-spinner 组件 - 用于显示加载状态的组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-spinner color="brand" size="medium" />
 * ```
 *
 * MAYBE DO:
 * [] 支持标签内容
 * [] 支持标签与图标方向
 * [] 支持自定义加载图标
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/spinner
 */

import type { SkSpinnerUcvProps } from '../styles'

export interface SkSpinnerProps {
  /**
   * 加载器变体
   * @default 'circular'
   */
  variant?: 'circular' | 'dots' | 'custom';
  /**
   * 加载器尺寸
   * @default 'medium'
   */
  size?: SkSpinnerUcvProps['size'];
  /**
   * 加载器颜色
   * @default 'current'
   */
  color?: SkSpinnerUcvProps['color'];
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkSpinnerUcvProps['clax'];
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkSpinnerUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkSpinnerProps>(), {
  variant: 'circular',
  size: 'medium',
  color: 'current',
})

const classes = computed(() => SkSpinnerUcv(props))
</script>

<template>
  <div id="sk-spinner" :class="classes.root()">
    <div :class="classes.spinner()">
      <span :class="classes.icon()" />
    </div>
  </div>
</template>

<style>
#sk-spinner .sk-icon {
  mask: var(--un-icon) no-repeat;
  -webkit-mask: var(--un-icon) no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
  background-color: currentColor;
  color: inherit;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

.sk-icon--circle {
  --un-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cdefs%3E%3ClinearGradient id='mingcuteLoadingFill0' x1='50%25' x2='50%25' y1='5.271%25' y2='91.793%25'%3E%3Cstop offset='0%25' stop-color='%23000'/%3E%3Cstop offset='100%25' stop-color='%23000' stop-opacity='0.55'/%3E%3C/linearGradient%3E%3ClinearGradient id='mingcuteLoadingFill1' x1='50%25' x2='50%25' y1='15.24%25' y2='87.15%25'%3E%3Cstop offset='0%25' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='100%25' stop-color='%23000' stop-opacity='0.55'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none'%3E%3Cpath d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='url(%23mingcuteLoadingFill0)' d='M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021' transform='translate(1.5 1.625)'/%3E%3Cpath fill='url(%23mingcuteLoadingFill1)' d='M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118' transform='translate(1.5 1.625)'/%3E%3C/g%3E%3C/svg%3E");
}

.sk-icon--dots {
  --un-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='18' cy='12' r='0' fill='%23000' stroke-width='1.2' stroke='%23000'%3E%3Canimate attributeName='r' begin='.67' calcMode='spline' dur='1.5s' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' repeatCount='indefinite' values='0;2;0;0'/%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='0' fill='%23000' stroke-width='1.2' stroke='%23000'%3E%3Canimate attributeName='r' begin='.33' calcMode='spline' dur='1.5s' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' repeatCount='indefinite' values='0;2;0;0'/%3E%3C/circle%3E%3Ccircle cx='6' cy='12' r='0' fill='%23000' stroke-width='1.2' stroke='%23000'%3E%3Canimate attributeName='r' begin='0' calcMode='spline' dur='1.5s' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' repeatCount='indefinite' values='0;2;0;0'/%3E%3C/circle%3E%3C/svg%3E");
}
</style>
