<script setup lang="ts">
import { ref } from 'vue'

const current1 = ref(0)
const current2 = ref(0)
const current3 = ref(0)

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
</script>

<template>
  <view class="p-4 w-full space-y-6">
    <!-- 圆点指示器 -->
    <view>
      <view class="text-lg font-bold mb-2">
        圆点指示器（默认）
      </view>
      <SkSwiper
        v-model="current1"
        indicator-type="dots"
        height="200px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
            :style="{ backgroundColor: color }"
          >
            {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 分数指示器 -->
    <view>
      <view class="text-lg font-bold mb-2">
        分数指示器
      </view>
      <SkSwiper
        v-model="current2"
        indicator-type="fraction"
        height="200px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
            :style="{ backgroundColor: color }"
          >
            {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 进度条指示器 -->
    <view>
      <view class="text-lg font-bold mb-2">
        进度条指示器
      </view>
      <SkSwiper
        v-model="current3"
        indicator-type="progress"
        height="200px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
            :style="{ backgroundColor: color }"
          >
            {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 无指示器 -->
    <view>
      <view class="text-lg font-bold mb-2">
        无指示器
      </view>
      <SkSwiper
        indicator-type="none"
        height="200px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
            :style="{ backgroundColor: color }"
          >
            {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>
  </view>
</template>
