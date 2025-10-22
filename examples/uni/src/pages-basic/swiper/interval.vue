<script setup lang="ts">
import { ref } from 'vue'

const current1 = ref(0)
const current2 = ref(0)
const current3 = ref(0)

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
</script>

<template>
  <view class="p-4 w-full space-y-6">
    <!-- 快速切换 -->
    <view>
      <view class="text-lg font-bold mb-2">
        快速切换（1秒）
      </view>
      <SkSwiper
        v-model="current1"
        :autoplay="true"
        :interval="1000"
        :duration="300"
        height="150px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-xl font-bold"
            :style="{ backgroundColor: color }"
          >
            1秒 - {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 中速切换 -->
    <view>
      <view class="text-lg font-bold mb-2">
        中速切换（3秒）
      </view>
      <SkSwiper
        v-model="current2"
        :autoplay="true"
        :interval="3000"
        :duration="500"
        height="150px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-xl font-bold"
            :style="{ backgroundColor: color }"
          >
            3秒 - {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 慢速切换 -->
    <view>
      <view class="text-lg font-bold mb-2">
        慢速切换（5秒）
      </view>
      <SkSwiper
        v-model="current3"
        :autoplay="true"
        :interval="5000"
        :duration="800"
        height="150px"
      >
        <SkSwiperItem v-for="(color, index) in colors" :key="index">
          <view
            class="w-full h-full flex items-center justify-center text-white text-xl font-bold"
            :style="{ backgroundColor: color }"
          >
            5秒 - {{ index + 1 }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>
  </view>
</template>
