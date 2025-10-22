<script lang="ts">
/**
 * sk-image 组件 - 增强型图片组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-image
 *   src="https://example.com/image.jpg"
 *   mode="aspectFill"
 *   width="200rpx"
 *   height="200rpx"
 *   radius="medium"
 *   :lazy="true"
 *   :preview="true"
 * />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/image
 */

import type { SkImageUcvProps } from '../styles'
import type { ImageMode, RadiusSize } from '../types'

export interface SkImageProps {
  /**
   * 图片地址
   */
  src: string;
  /**
   * 图片裁剪/缩放模式
   * @default 'aspectFill'
   */
  mode?: ImageMode;
  /**
   * 图片宽度 (支持 rpx、px、百分比)
   */
  width?: string | number;
  /**
   * 图片高度 (支持 rpx、px、百分比)
   */
  height?: string | number;
  /**
   * 圆角大小
   * @default 'none'
   */
  radius?: SkImageUcvProps['radius'];
  /**
   * 是否懒加载
   * @default false
   */
  isLazy?: boolean;
  /**
   * 占位图地址
   */
  placeholder?: string;
  /**
   * 错误图地址
   */
  errorImage?: string;
  /**
   * 是否显示加载状态
   * @default true
   */
  isShowLoading?: boolean;
  /**
   * 是否显示错误状态
   * @default true
   */
  isShowError?: boolean;
  /**
   * 是否启用淡入动画
   * @default true
   */
  isFade?: boolean;
  /**
   * 是否支持点击预览
   * @default false
   */
  isPreview?: boolean;
  /**
   * 预览图片列表 (preview=true 时使用)
   */
  previewSrcList?: string[];
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkImageUcvProps['clax'];
}

export interface SkImageEmits {
  /**
   * 图片加载完成事件
   * @param event 加载事件对象
   */
  (name: 'load', event: any): void;
  /**
   * 图片加载失败事件
   * @param event 错误事件对象
   */
  (name: 'error', event: any): void;
  /**
   * 点击图片事件
   */
  (name: 'click'): void;
}

export interface SkImageSlots {
  /**
   * 自定义加载状态
   */
  loading?: () => any;
  /**
   * 自定义错误状态
   */
  error?: () => any;
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { SkImageUcv } from '../styles'
import { formatSize } from '../utils'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkImageProps>(), {
  mode: 'aspectFill',
  radius: 'none',
  isLazy: false,
  isShowLoading: true,
  isShowError: true,
  isFade: true,
  isPreview: false,
})

const emits = defineEmits<SkImageEmits>()

defineSlots<SkImageSlots>()

// 状态管理
const loading = ref(true)
const error = ref(false)
const imageLoaded = ref(false)

// 计算样式
const containerStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (props.width) {
    styles.width = formatSize(props.width)
  }

  if (props.height) {
    styles.height = formatSize(props.height)
  }

  return styles
})

const classes = computed(() => {
  return SkImageUcv({
    radius: props.radius,
    clax: props.clax,
  })
})

// 图片样式 - 处理淡入动画
const imageStyle = computed(() => {
  const styles: Record<string, string> = {
    width: '100%',
    height: '100%',
  }

  // 淡入动画
  if (props.isFade && imageLoaded.value) {
    styles.opacity = '1'
    styles.transition = 'opacity 0.3s ease-in-out'
  }
  else if (props.isFade) {
    styles.opacity = '0'
  }

  return styles
})

// 图片加载完成
function handleLoad(event: any) {
  loading.value = false
  error.value = false
  imageLoaded.value = true
  emits('load', event)
}

// 图片加载失败
function handleError(event: any) {
  loading.value = false
  error.value = true
  emits('error', event)
}

// 点击图片
function handleClick() {
  emits('click')

  if (props.isPreview && !error.value) {
    const urls = props.previewSrcList || [props.src]
    const current = props.previewSrcList ? props.previewSrcList.indexOf(props.src) : 0

    uni.previewImage({
      current: current >= 0 ? current : 0,
      urls,
    })
  }
}

// 初始化
onMounted(() => {
  // 如果没有 src，直接设置为错误状态
  if (!props.src) {
    loading.value = false
    error.value = true
  }
})
</script>

<template>
  <view
    :class="classes"
    :style="containerStyle"
    @click="handleClick"
  >
    <!-- 加载中状态 -->
    <view
      v-if="loading && isShowLoading && !error"
      class="sk-image__loading"
    >
      <slot name="loading">
        <view class="sk-image__loading-content">
          <text class="sk-image__loading-text">
            加载中...
          </text>
        </view>
      </slot>
    </view>

    <!-- 错误状态 -->
    <view
      v-if="error && isShowError"
      class="sk-image__error"
    >
      <slot name="error">
        <image
          v-if="errorImage"
          :src="errorImage"
          mode="aspectFit"
          class="sk-image__error-img"
        />
        <view v-else class="sk-image__error-content">
          <text class="sk-image__error-text">
            加载失败
          </text>
        </view>
      </slot>
    </view>

    <!-- 占位图 -->
    <image
      v-if="placeholder && loading && !error"
      :src="placeholder"
      :mode="mode"
      class="sk-image__placeholder"
    />

    <!-- 实际图片 -->
    <image
      v-if="src && !error"
      :src="src"
      :mode="mode"
      :lazy-load="isLazy"
      :style="imageStyle"
      class="sk-image__img"
      @load="handleLoad"
      @error="handleError"
    />
  </view>
</template>
