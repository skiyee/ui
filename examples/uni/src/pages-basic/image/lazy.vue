<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- 说明 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          懒加载示例
        </text>
        <text class="text-caption text-neutral-600">
          滚动页面查看图片懒加载效果，图片进入可视区域时才会加载
        </text>
      </view>

      <!-- 普通加载 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          普通加载
        </text>
        <SkImage
          src="https://picsum.photos/400/300?random=1"
          width="100%"
          height="300rpx"
          radius="medium"
        />
      </view>

      <!-- 懒加载图片列表 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          懒加载图片列表
        </text>
        <view class="space-y-4">
          <SkImage
            v-for="i in 10"
            :key="i"
            :src="`https://picsum.photos/400/300?random=${i + 1}`"
            width="100%"
            height="300rpx"
            radius="medium"
            :is-lazy="true"
          />
        </view>
      </view>
    </view>
  </view>
</template>
