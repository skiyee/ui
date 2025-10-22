<template>
  <view class="flex flex-col gap-32">
    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        前置图标
      </text>
      <SkTag icon="i-lucide:home">
        首页
      </SkTag>
      <SkTag type="primary" icon="i-lucide:user">
        用户
      </SkTag>
      <SkTag type="success" icon="i-lucide:check">
        成功
      </SkTag>
      <SkTag type="warning" icon="i-lucide:alert-triangle">
        警告
      </SkTag>
      <SkTag type="error" icon="i-lucide:x-circle">
        错误
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        图标 + 可关闭
      </text>
      <SkTag icon="i-lucide:star" closable>
        收藏
      </SkTag>
      <SkTag type="primary" icon="i-lucide:heart" closable>
        喜欢
      </SkTag>
      <SkTag type="success" icon="i-lucide:bookmark" closable>
        书签
      </SkTag>
    </view>

    <view class="flex flex-wrap gap-16">
      <text class="w-full text-body-large font-medium mb-8">
        自定义图标插槽
      </text>
      <SkTag type="primary">
        <template #icon>
          <SkIcon name="i-lucide:sparkles" class="sk-unit:size-24" />
        </template>
        自定义图标
      </SkTag>
    </view>
  </view>
</template>
