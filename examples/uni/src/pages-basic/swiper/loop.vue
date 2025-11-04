<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

const images = [
  { color: '#3b82f6', title: '第一张' },
  { color: '#10b981', title: '第二张' },
  { color: '#f59e0b', title: '第三张' },
]
</script>

<template>
  <view class="p-4 w-full space-y-6">
    <!-- 循环播放 -->
    <view>
      <view class="text-lg font-bold mb-2">
        循环播放（开启）
      </view>
      <view class="text-sm text-neutral-dim mb-2">
        可以无限循环切换，从最后一张可以切换到第一张
      </view>
      <SkSwiper
        v-model="current"
        :circular="true"
        :autoplay="true"
        :interval="2500"
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
    </view>

    <!-- 非循环播放 -->
    <view>
      <view class="text-lg font-bold mb-2">
        循环播放（关闭）
      </view>
      <view class="text-sm text-neutral-dim mb-2">
        到达最后一张后不能继续向后切换
      </view>
      <SkSwiper
        :circular="false"
        :autoplay="true"
        :interval="2500"
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
    </view>
  </view>
</template>
