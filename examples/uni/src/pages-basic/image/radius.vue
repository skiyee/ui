<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- 无圆角 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          none - 无圆角
        </text>
        <SkImage
          src="https://picsum.photos/200/200"
          width="200rpx"
          height="200rpx"
          radius="none"
        />
      </view>

      <!-- 小圆角 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          small - 小圆角
        </text>
        <SkImage
          src="https://picsum.photos/200/200"
          width="200rpx"
          height="200rpx"
          radius="small"
        />
      </view>

      <!-- 中等圆角 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          medium - 中等圆角
        </text>
        <SkImage
          src="https://picsum.photos/200/200"
          width="200rpx"
          height="200rpx"
          radius="medium"
        />
      </view>

      <!-- 大圆角 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          large - 大圆角
        </text>
        <SkImage
          src="https://picsum.photos/200/200"
          width="200rpx"
          height="200rpx"
          radius="large"
        />
      </view>

      <!-- 圆形 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          full - 圆形
        </text>
        <SkImage
          src="https://picsum.photos/200/200"
          width="200rpx"
          height="200rpx"
          radius="full"
        />
      </view>

      <!-- 多个圆形图片组合 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          圆形头像组合
        </text>
        <view class="flex gap-4">
          <SkImage
            src="https://picsum.photos/100/100?random=1"
            width="80rpx"
            height="80rpx"
            radius="full"
          />
          <SkImage
            src="https://picsum.photos/100/100?random=2"
            width="80rpx"
            height="80rpx"
            radius="full"
          />
          <SkImage
            src="https://picsum.photos/100/100?random=3"
            width="80rpx"
            height="80rpx"
            radius="full"
          />
          <SkImage
            src="https://picsum.photos/100/100?random=4"
            width="80rpx"
            height="80rpx"
            radius="full"
          />
        </view>
      </view>
    </view>
  </view>
</template>
