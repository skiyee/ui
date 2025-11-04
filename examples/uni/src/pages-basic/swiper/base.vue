<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
</script>

<template>
  <view class="p-4 w-full">
    <SkSwiper v-model="current" height="200px">
      <SkSwiperItem v-for="(color, index) in colors" :key="index">
        <view
          class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
          :style="{ backgroundColor: color }"
        >
          {{ index + 1 }}
        </view>
      </SkSwiperItem>
    </SkSwiper>

    <view class="mt-4 text-center text-neutral">
      当前页: {{ current + 1 }} / {{ colors.length }}
    </view>
  </view>
</template>
