<template>
  <view class="flex flex-col gap-32">
    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        实心标签 (solid)
      </text>
      <SkTag type="default">
        默认
      </SkTag>
      <SkTag type="primary">
        主要
      </SkTag>
      <SkTag type="success">
        成功
      </SkTag>
      <SkTag type="warning">
        警告
      </SkTag>
      <SkTag type="error">
        错误
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        描边标签 (outline)
      </text>
      <SkTag type="default" variant="outline">
        默认
      </SkTag>
      <SkTag type="primary" variant="outline">
        主要
      </SkTag>
      <SkTag type="success" variant="outline">
        成功
      </SkTag>
      <SkTag type="warning" variant="outline">
        警告
      </SkTag>
      <SkTag type="error" variant="outline">
        错误
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        浅色标签 (light)
      </text>
      <SkTag type="default" variant="light">
        默认
      </SkTag>
      <SkTag type="primary" variant="light">
        主要
      </SkTag>
      <SkTag type="success" variant="light">
        成功
      </SkTag>
      <SkTag type="warning" variant="light">
        警告
      </SkTag>
      <SkTag type="error" variant="light">
        错误
      </SkTag>
    </view>
  </view>
</template>
