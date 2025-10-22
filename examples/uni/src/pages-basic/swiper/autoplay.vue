<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

const images = [
  { color: '#3b82f6', title: '图片 1' },
  { color: '#10b981', title: '图片 2' },
  { color: '#f59e0b', title: '图片 3' },
  { color: '#ef4444', title: '图片 4' },
]
</script>

<template>
  <view class="p-4 w-full">
    <view class="mb-4">
      <view class="text-lg font-bold mb-2">
        自动播放
      </view>
      <view class="text-sm text-neutral-dim">
        轮播图会每 3 秒自动切换
      </view>
    </view>

    <SkSwiper
      v-model="current"
      :autoplay="true"
      :interval="3000"
      height="200px"
    >
      <SkSwiperItem v-for="(item, index) in images" :key="index">
        <view
          class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
          :style="{ backgroundColor: item.color }"
        >
          {{ item.title }}
        </view>
      </SkSwiperItem>
    </SkSwiper>

    <view class="mt-4 text-center text-neutral">
      当前页: {{ current + 1 }} / {{ images.length }}
    </view>
  </view>
</template>
