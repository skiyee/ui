<template>
  <view class="flex flex-col gap-32">
    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        实心变体 (solid)
      </text>
      <SkTag variant="solid">
        实心标签
      </SkTag>
      <SkTag type="primary" variant="solid">
        实心标签
      </SkTag>
      <SkTag type="success" variant="solid">
        实心标签
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        描边变体 (outline)
      </text>
      <SkTag variant="outline">
        描边标签
      </SkTag>
      <SkTag type="primary" variant="outline">
        描边标签
      </SkTag>
      <SkTag type="success" variant="outline">
        描边标签
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        浅色变体 (light)
      </text>
      <SkTag variant="light">
        浅色标签
      </SkTag>
      <SkTag type="primary" variant="light">
        浅色标签
      </SkTag>
      <SkTag type="success" variant="light">
        浅色标签
      </SkTag>
    </view>
  </view>
</template>
