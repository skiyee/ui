<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

const goToPrev = () => {
  if (current.value > 0) {
    current.value--
  }
}

const goToNext = () => {
  if (current.value < colors.length - 1) {
    current.value++
  }
}

const goToPage = (index: number) => {
  current.value = index
}
</script>

<template>
  <view class="p-4 w-full">
    <view class="mb-4">
      <view class="text-lg font-bold mb-2">
        受控模式
      </view>
      <view class="text-sm text-neutral-dim">
        通过按钮或其他方式控制轮播
      </view>
    </view>

    <SkSwiper
      v-model="current"
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

    <!-- 控制按钮 -->
    <view class="mt-4 flex gap-2 justify-center">
      <SkButton
        :disabled="current === 0"
        @click="goToPrev"
      >
        上一页
      </SkButton>
      <SkButton
        :disabled="current === colors.length - 1"
        @click="goToNext"
      >
        下一页
      </SkButton>
    </view>

    <!-- 页码按钮 -->
    <view class="mt-4 flex gap-2 justify-center flex-wrap">
      <SkButton
        v-for="(_, index) in colors"
        :key="index"
        :variant="current === index ? 'solid' : 'bound'"
        size="small"
        @click="goToPage(index)"
      >
        {{ index + 1 }}
      </SkButton>
    </view>
  </view>
</template>
