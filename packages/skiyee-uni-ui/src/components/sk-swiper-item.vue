<script setup lang="ts">
/**
 * SwiperItem 轮播项组件
 *
 * 作为 Swiper 组件的子组件使用，基于 uni-app 原生 swiper-item 封装。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-swiper>
 *   <sk-swiper-item>
 *     <view>内容</view>
 *   </sk-swiper-item>
 * </sk-swiper>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/swiper
 */
import type { SwiperItemProps } from '../types'

defineOptions({
  name: 'SkSwiperItem',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SwiperItemProps>(), {
  itemId: undefined,
})
</script>

<template>
  <SwiperItem
    :item-id="props.itemId"
    class="sk-swiper-item"
  >
    <slot />
  </SwiperItem>
</template>

<style scoped>
.sk-swiper-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
