<template>
  <view class="flex flex-col gap-32">
    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        自定义背景色 (实心)
      </text>
      <SkTag color="#8B5CF6">
        紫色
      </SkTag>
      <SkTag color="#EC4899">
        粉色
      </SkTag>
      <SkTag color="#06B6D4">
        青色
      </SkTag>
      <SkTag color="#F97316">
        橙色
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        自定义背景色 (描边)
      </text>
      <SkTag variant="outline" color="#8B5CF6">
        紫色
      </SkTag>
      <SkTag variant="outline" color="#EC4899">
        粉色
      </SkTag>
      <SkTag variant="outline" color="#06B6D4">
        青色
      </SkTag>
      <SkTag variant="outline" color="#F97316">
        橙色
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        自定义背景色 (浅色)
      </text>
      <SkTag variant="light" color="#8B5CF6">
        紫色
      </SkTag>
      <SkTag variant="light" color="#EC4899">
        粉色
      </SkTag>
      <SkTag variant="light" color="#06B6D4">
        青色
      </SkTag>
      <SkTag variant="light" color="#F97316">
        橙色
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        自定义文字颜色
      </text>
      <SkTag color="#8B5CF6" text-color="#FFFFFF">
        自定义文字
      </SkTag>
      <SkTag variant="light" color="#8B5CF6" text-color="#8B5CF6">
        自定义文字
      </SkTag>
    </view>
  </view>
</template>
