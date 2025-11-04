<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- scaleToFill -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          scaleToFill - 不保持纵横比缩放
        </text>
        <SkImage
          src="https://picsum.photos/400/200"
          mode="scaleToFill"
          width="200rpx"
          height="200rpx"
        />
      </view>

      <!-- aspectFit -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          aspectFit - 保持纵横比，长边完整显示
        </text>
        <SkImage
          src="https://picsum.photos/400/200"
          mode="aspectFit"
          width="200rpx"
          height="200rpx"
        />
      </view>

      <!-- aspectFill -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          aspectFill - 保持纵横比，短边完整显示
        </text>
        <SkImage
          src="https://picsum.photos/400/200"
          mode="aspectFill"
          width="200rpx"
          height="200rpx"
        />
      </view>

      <!-- widthFix -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          widthFix - 宽度不变，高度自动变化
        </text>
        <SkImage
          src="https://picsum.photos/400/200"
          mode="widthFix"
          width="200rpx"
        />
      </view>

      <!-- heightFix -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          heightFix - 高度不变，宽度自动变化
        </text>
        <SkImage
          src="https://picsum.photos/400/200"
          mode="heightFix"
          height="200rpx"
        />
      </view>

      <!-- top -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          top - 不缩放，显示顶部区域
        </text>
        <SkImage
          src="https://picsum.photos/400/400"
          mode="top"
          width="200rpx"
          height="200rpx"
        />
      </view>

      <!-- center -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          center - 不缩放，显示中间区域
        </text>
        <SkImage
          src="https://picsum.photos/400/400"
          mode="center"
          width="200rpx"
          height="200rpx"
        />
      </view>

      <!-- bottom -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          bottom - 不缩放，显示底部区域
        </text>
        <SkImage
          src="https://picsum.photos/400/400"
          mode="bottom"
          width="200rpx"
          height="200rpx"
        />
      </view>
    </view>
  </view>
</template>
