<template>
  <view class="p-4 w-full">
    <view class="space-y-4">
      <!-- 单图预览 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          单图预览
        </text>
        <text class="text-caption text-neutral-600">
          点击图片可放大预览
        </text>
        <SkImage
          src="https://picsum.photos/800/600?random=1"
          width="100%"
          height="300rpx"
          radius="medium"
          :is-preview="true"
        />
      </view>

      <!-- 多图预览 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          多图预览
        </text>
        <text class="text-caption text-neutral-600">
          点击任意图片，可左右滑动查看其他图片
        </text>
        <view class="grid grid-cols-3 gap-4">
          <SkImage
            v-for="i in 6"
            :key="i"
            :src="`https://picsum.photos/400/400?random=${i + 10}`"
            width="100%"
            height="150rpx"
            radius="small"
            :is-preview="true"
            :preview-src-list="[
              'https://picsum.photos/400/400?random=11',
              'https://picsum.photos/400/400?random=12',
              'https://picsum.photos/400/400?random=13',
              'https://picsum.photos/400/400?random=14',
              'https://picsum.photos/400/400?random=15',
              'https://picsum.photos/400/400?random=16',
            ]"
          />
        </view>
      </view>

      <!-- 圆形头像预览 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          圆形头像预览
        </text>
        <text class="text-caption text-neutral-600">
          点击头像可预览大图
        </text>
        <view class="flex gap-4">
          <SkImage
            v-for="i in 4"
            :key="i"
            :src="`https://picsum.photos/200/200?random=${i + 20}`"
            width="100rpx"
            height="100rpx"
            radius="full"
            :is-preview="true"
            :preview-src-list="[
              'https://picsum.photos/200/200?random=21',
              'https://picsum.photos/200/200?random=22',
              'https://picsum.photos/200/200?random=23',
              'https://picsum.photos/200/200?random=24',
            ]"
          />
        </view>
      </view>

      <!-- 商品图预览 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          商品图预览
        </text>
        <text class="text-caption text-neutral-600">
          模拟商品详情页的图片预览功能
        </text>
        <view class="space-y-4">
          <!-- 主图 -->
          <SkImage
            src="https://picsum.photos/800/800?random=30"
            width="100%"
            height="500rpx"
            radius="medium"
            :is-preview="true"
            :preview-src-list="[
              'https://picsum.photos/800/800?random=30',
              'https://picsum.photos/800/800?random=31',
              'https://picsum.photos/800/800?random=32',
              'https://picsum.photos/800/800?random=33',
            ]"
          />
          <!-- 缩略图 -->
          <view class="flex gap-2">
            <SkImage
              v-for="i in 4"
              :key="i"
              :src="`https://picsum.photos/800/800?random=${29 + i}`"
              width="120rpx"
              height="120rpx"
              radius="small"
              :is-preview="true"
              :preview-src-list="[
                'https://picsum.photos/800/800?random=30',
                'https://picsum.photos/800/800?random=31',
                'https://picsum.photos/800/800?random=32',
                'https://picsum.photos/800/800?random=33',
              ]"
            />
          </view>
        </view>
      </view>

      <!-- 禁用预览 -->
      <view class="space-y-2">
        <text class="text-body-medium font-medium">
          禁用预览
        </text>
        <text class="text-caption text-neutral-600">
          isPreview 为 false 时，点击图片无反应
        </text>
        <SkImage
          src="https://picsum.photos/400/300?random=40"
          width="100%"
          height="300rpx"
          radius="medium"
          :is-preview="false"
        />
      </view>
    </view>
  </view>
</template>
