<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('')
const showImage = ref(false)

// 模拟延迟加载
function loadImage() {
  showImage.value = true
  setTimeout(() => {
    imageUrl.value = 'https://picsum.photos/400/300'
  }, 2000)
}
</script>

<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- 默认占位图 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          默认占位图
        </text>
        <text class="text-caption text-neutral-600">
          图片加载时显示占位图
        </text>
        <SkImage
          src="https://picsum.photos/400/300?random=1"
          width="100%"
          height="300rpx"
          radius="medium"
          placeholder="https://via.placeholder.com/400x300/cccccc/666666?text=Loading..."
        />
      </view>

      <!-- 自定义占位图 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          自定义占位图
        </text>
        <SkImage
          src="https://picsum.photos/400/300?random=2"
          width="100%"
          height="300rpx"
          radius="medium"
          placeholder="https://via.placeholder.com/400x300/e3f2fd/1976d2?text=Custom+Placeholder"
        />
      </view>

      <!-- 模拟慢速加载 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          模拟慢速加载
        </text>
        <text class="text-caption text-neutral-600">
          点击按钮后 2 秒后加载图片
        </text>
        <button
          v-if="!showImage"
          class="bg-brand text-brand-foreground px-4 py-2 rounded"
          @click="loadImage"
        >
          加载图片
        </button>
        <SkImage
          v-if="showImage"
          :src="imageUrl"
          width="100%"
          height="300rpx"
          radius="medium"
          placeholder="https://via.placeholder.com/400x300/fff3e0/f57c00?text=Loading+2s..."
        />
      </view>

      <!-- 带占位图的图片网格 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          图片网格
        </text>
        <view class="grid grid-cols-2 gap-4">
          <SkImage
            v-for="i in 4"
            :key="i"
            :src="`https://picsum.photos/200/200?random=${i + 10}`"
            width="100%"
            height="200rpx"
            radius="medium"
            placeholder="https://via.placeholder.com/200x200/f5f5f5/999999?text=..."
          />
        </view>
      </view>
    </view>
  </view>
</template>
