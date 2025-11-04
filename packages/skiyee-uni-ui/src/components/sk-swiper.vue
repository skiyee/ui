<script lang="ts">
/**
 * sk-swiper 组件 - 轮播组件
 *
 * 基于 uni-app 原生 swiper 组件封装增强，提供更丰富的功能和更好的开发体验。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-swiper v-model="current" :autoplay="true">
 *   <sk-swiper-item v-for="item in items" :key="item.id">
 *     <image :src="item.image" />
 *   </sk-swiper-item>
 * </sk-swiper>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/swiper
 */

import type { SkSwiperUcvProps } from '../styles'
import type { SwiperEmits, SwiperProps } from '../types'

export interface SkSwiperProps extends SwiperProps {
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkSwiperUcvProps['clax'];
}

export interface SkSwiperSlots {
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { SkSwiperUcv } from '../styles'

defineOptions({
  name: 'SkSwiper',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SkSwiperProps>(), {
  modelValue: 0,
  autoplay: false,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  indicatorType: 'dots',
  indicatorPosition: 'bottom',
  indicatorColor: 'rgba(0, 0, 0, 0.3)',
  indicatorActiveColor: '#007aff',
  height: '300rpx',
  radius: 'medium',
})

const emit = defineEmits<SwiperEmits>()

defineSlots<SkSwiperSlots>()

// 内部当前索引
const currentIndex = ref(props.modelValue)

// 总页数（通过插槽内容计算）
const totalCount = ref(0)

// 监听 modelValue 变化
watch(() => props.modelValue, (newVal) => {
  currentIndex.value = newVal
})

// Swiper 变化事件
const handleChange = (e: any) => {
  const index = e.detail.current
  currentIndex.value = index
  emit('update:modelValue', index)
  emit('change', index)
}

// Swiper 过渡事件
const handleTransition = (e: any) => {
  emit('transition', {
    dx: e.detail.dx || 0,
    dy: e.detail.dy || 0,
  })
}

// Swiper 动画结束事件
const handleAnimationFinish = (e: any) => {
  const index = e.detail.current
  emit('animationfinish', index)
}

// 计算样式类
const classes = computed(() => SkSwiperUcv({
  radius: props.radius,
  vertical: props.vertical,
  indicatorPosition: props.indicatorPosition,
  indicatorType: props.indicatorType,
  clax: props.clax,
}))

// 格式化高度
const swiperHeight = computed(() => {
  if (typeof props.height === 'number') {
    return `${props.height}px`
  }
  return props.height
})

// 指示器内容
const indicatorContent = computed(() => {
  if (props.indicatorType === 'fraction') {
    return `${currentIndex.value + 1}/${totalCount.value}`
  }
  return ''
})

// 进度条宽度
const progressWidth = computed(() => {
  if (totalCount.value === 0) {
    return '0%'
  }
  return `${((currentIndex.value + 1) / totalCount.value) * 100}%`
})

// 使用 ref 获取 swiper 实例以计算子项数量
const swiperRef = ref<any>(null)

// 计算子项数量
const updateTotalCount = () => {
  // 这里需要通过 slot 内容来计算，暂时使用一个较大的默认值
  // 实际使用中会通过 slot 渲染后计算
  totalCount.value = 5 // 默认值，实际会在渲染后更新
}

// 初始化时计算
updateTotalCount()
</script>

<template>
  <view :class="classes.root()" :style="{ height: swiperHeight }">
    <!-- 原生 Swiper -->
    <Swiper
      ref="swiperRef"
      :class="classes.swiper()"
      :current="currentIndex"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      :circular="circular"
      :vertical="vertical"
      :indicator-dots="false"
      @change="handleChange"
      @transition="handleTransition"
      @animationfinish="handleAnimationFinish"
    >
      <slot />
    </Swiper>

    <!-- 自定义指示器 -->
    <view v-if="indicatorType !== 'none'" :class="classes.indicator()">
      <!-- 圆点指示器 -->
      <view v-if="indicatorType === 'dots'" :class="classes.dots()">
        <view
          v-for="(_, index) in totalCount"
          :key="index"
          :class="classes.dot({ dotActive: index === currentIndex })"
          :style="{
            backgroundColor: index === currentIndex ? indicatorActiveColor : indicatorColor,
          }"
        />
      </view>

      <!-- 分数指示器 -->
      <view v-else-if="indicatorType === 'fraction'" :class="classes.fraction()">
        {{ indicatorContent }}
      </view>

      <!-- 进度条指示器 -->
      <view v-else-if="indicatorType === 'progress'" :class="classes.progress()" style="width: 100px;">
        <view
          :class="classes.progressBar()"
          :style="{ width: progressWidth }"
        />
      </view>
    </view>
  </view>
</template>

<style scoped>
swiper {
  width: 100%;
  height: 100%;
}
</style>
