<template>
  <div class="p-4 flex flex-wrap gap-3">
    <SkButton disabled>
      <SkSpinner color="current" size="small" />
      加载中...
    </SkButton>
    <SkButton disabled>
      <SkIcon name="i-lucide:loader" size="32rpx" clax="animate-spin" />
      自定义加载图标
    </SkButton>
  </div>
</template>
