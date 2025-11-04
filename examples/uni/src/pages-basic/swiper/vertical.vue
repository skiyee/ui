<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

const news = [
  { title: '重要通知 1', color: '#3b82f6' },
  { title: '重要通知 2', color: '#10b981' },
  { title: '重要通知 3', color: '#f59e0b' },
  { title: '重要通知 4', color: '#ef4444' },
]
</script>

<template>
  <view class="p-4 w-full">
    <view class="mb-4">
      <view class="text-lg font-bold mb-2">
        垂直方向
      </view>
      <view class="text-sm text-neutral-dim">
        轮播方向为垂直，适合消息通知等场景
      </view>
    </view>

    <SkSwiper
      v-model="current"
      :vertical="true"
      :autoplay="true"
      :interval="2500"
      indicator-type="dots"
      indicator-position="right"
      height="100px"
    >
      <SkSwiperItem v-for="(item, index) in news" :key="index">
        <view
          class="w-full h-full flex items-center justify-center text-white text-lg font-bold"
          :style="{ backgroundColor: item.color }"
        >
          {{ item.title }}
        </view>
      </SkSwiperItem>
    </SkSwiper>

    <view class="mt-4 text-center text-neutral">
      当前消息: {{ current + 1 }} / {{ news.length }}
    </view>
  </view>
</template>
