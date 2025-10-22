<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- 基础用法 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          基础用法
        </text>
        <SkImage
          src="https://picsum.photos/200/200"
          width="200rpx"
          height="200rpx"
        />
      </view>

      <!-- 指定尺寸 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          指定尺寸
        </text>
        <view class="flex gap-4">
          <SkImage
            src="https://picsum.photos/100/100"
            width="100rpx"
            height="100rpx"
          />
          <SkImage
            src="https://picsum.photos/150/150"
            width="150rpx"
            height="150rpx"
          />
          <SkImage
            src="https://picsum.photos/200/200"
            width="200rpx"
            height="200rpx"
          />
        </view>
      </view>

      <!-- 全宽图片 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          全宽图片
        </text>
        <SkImage
          src="https://picsum.photos/800/400"
          width="100%"
          height="400rpx"
        />
      </view>
    </view>
  </view>
</template>
