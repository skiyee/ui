<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- 默认错误提示 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          默认错误提示
        </text>
        <text class="text-caption text-neutral-600">
          图片加载失败时显示默认错误提示
        </text>
        <SkImage
          src="https://invalid-url.com/image.jpg"
          width="200rpx"
          height="200rpx"
          radius="medium"
        />
      </view>

      <!-- 自定义错误图 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          自定义错误图
        </text>
        <text class="text-caption text-neutral-600">
          使用自定义图片作为错误状态
        </text>
        <SkImage
          src="https://invalid-url.com/image.jpg"
          width="200rpx"
          height="200rpx"
          radius="medium"
          error-image="https://via.placeholder.com/200x200/ffebee/c62828?text=Error"
        />
      </view>

      <!-- 自定义错误插槽 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          自定义错误插槽
        </text>
        <text class="text-caption text-neutral-600">
          使用插槽自定义错误状态显示
        </text>
        <SkImage
          src="https://invalid-url.com/image.jpg"
          width="200rpx"
          height="200rpx"
          radius="medium"
        >
          <template #error>
            <view class="w-full h-full flex-center flex-col gap-2 bg-danger/10">
              <text class="text-danger text-2xl">
                ❌
              </text>
              <text class="text-caption text-danger">
                加载失败
              </text>
            </view>
          </template>
        </SkImage>
      </view>

      <!-- 隐藏错误提示 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          隐藏错误提示
        </text>
        <text class="text-caption text-neutral-600">
          设置 isShowError 为 false 隐藏错误提示
        </text>
        <SkImage
          src="https://invalid-url.com/image.jpg"
          width="200rpx"
          height="200rpx"
          radius="medium"
          :is-show-error="false"
        />
      </view>

      <!-- 错误图片列表 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          错误图片列表
        </text>
        <text class="text-caption text-neutral-600">
          批量显示带错误处理的图片
        </text>
        <view class="grid grid-cols-3 gap-4">
          <SkImage
            v-for="i in 6"
            :key="i"
            :src="`https://invalid-url.com/image${i}.jpg`"
            width="100%"
            height="150rpx"
            radius="small"
            error-image="https://via.placeholder.com/150x150/f5f5f5/999999?text=Error"
          />
        </view>
      </view>

      <!-- 空 src -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          空 src
        </text>
        <text class="text-caption text-neutral-600">
          未提供图片地址时的错误状态
        </text>
        <SkImage
          src=""
          width="200rpx"
          height="200rpx"
          radius="medium"
        />
      </view>
    </view>
  </view>
</template>
