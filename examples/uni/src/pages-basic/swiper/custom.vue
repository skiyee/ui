<script setup lang="ts">
import { ref } from 'vue'

const current = ref(0)

const products = [
  {
    id: 1,
    name: '产品 A',
    price: '¥299',
    color: '#3b82f6',
    desc: '高品质产品',
  },
  {
    id: 2,
    name: '产品 B',
    price: '¥399',
    color: '#10b981',
    desc: '热销推荐',
  },
  {
    id: 3,
    name: '产品 C',
    price: '¥499',
    color: '#f59e0b',
    desc: '限时优惠',
  },
  {
    id: 4,
    name: '产品 D',
    price: '¥599',
    color: '#ef4444',
    desc: '新品上市',
  },
]
</script>

<template>
  <view class="p-4 w-full space-y-6">
    <!-- 自定义圆角 -->
    <view>
      <view class="text-lg font-bold mb-2">
        大圆角样式
      </view>
      <SkSwiper
        v-model="current"
        :autoplay="true"
        :interval="3000"
        radius="large"
        height="200px"
      >
        <SkSwiperItem v-for="item in products" :key="item.id">
          <view
            class="w-full h-full flex flex-col items-center justify-center text-white"
            :style="{ backgroundColor: item.color }"
          >
            <view class="text-2xl font-bold mb-2">
              {{ item.name }}
            </view>
            <view class="text-xl">
              {{ item.price }}
            </view>
            <view class="text-sm opacity-80 mt-1">
              {{ item.desc }}
            </view>
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 自定义指示器颜色 -->
    <view>
      <view class="text-lg font-bold mb-2">
        自定义指示器颜色
      </view>
      <SkSwiper
        :autoplay="true"
        :interval="3000"
        indicator-color="rgba(255, 255, 255, 0.5)"
        indicator-active-color="#ffffff"
        height="200px"
      >
        <SkSwiperItem v-for="item in products" :key="item.id">
          <view
            class="w-full h-full flex flex-col items-center justify-center text-white"
            :style="{ backgroundColor: item.color }"
          >
            <view class="text-2xl font-bold">
              {{ item.name }}
            </view>
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 自定义高度 -->
    <view>
      <view class="text-lg font-bold mb-2">
        自定义高度（300px）
      </view>
      <SkSwiper
        :autoplay="true"
        :interval="3000"
        indicator-type="fraction"
        height="300px"
      >
        <SkSwiperItem v-for="item in products" :key="item.id">
          <view
            class="w-full h-full flex flex-col items-center justify-center text-white p-6"
            :style="{ backgroundColor: item.color }"
          >
            <view class="text-3xl font-bold mb-4">
              {{ item.name }}
            </view>
            <view class="text-2xl mb-2">
              {{ item.price }}
            </view>
            <view class="text-base opacity-90">
              {{ item.desc }}
            </view>
            <view class="mt-4 px-6 py-2 bg-white/20 rounded-full">
              查看详情
            </view>
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>

    <!-- 指示器位置 - 顶部 -->
    <view>
      <view class="text-lg font-bold mb-2">
        指示器在顶部
      </view>
      <SkSwiper
        :autoplay="true"
        :interval="3000"
        indicator-position="top"
        height="200px"
      >
        <SkSwiperItem v-for="item in products" :key="item.id">
          <view
            class="w-full h-full flex items-center justify-center text-white text-xl font-bold"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.name }}
          </view>
        </SkSwiperItem>
      </SkSwiper>
    </view>
  </view>
</template>
