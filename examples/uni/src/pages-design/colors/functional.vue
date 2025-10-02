<script setup lang="ts">
// 复制到剪贴板功能
const copyToClipboard = async (text: string) => {
  try {
    await uni.setClipboardData({ data: text })
    // 可以添加一个简单的提示，比如使用 uni.showToast
    uni.showToast({
      title: `已复制: ${text}`,
      icon: 'none',
      duration: 2000,
    })
  }
  catch (err) {
    console.error('复制失败:', err)
    uni.showToast({
      title: '复制失败',
      icon: 'none',
      duration: 2000,
    })
  }
}
</script>

<template>
  <div class="p-4">
    <!-- 功能颜色展示 - 响应式网格布局 -->
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
      <!-- 品牌色 -->
      <div class="h-30 flex flex-col">
        <h3 class="text-title-small text-primary mb-1">
          品牌色
        </h3>
        <p class="text-body-small text-secondary mb-3">
          用于表示主要操作和重要信息
        </p>
        <div class="px-3 py-2 rounded-small text-body-medium bg-brand text-brand-foreground cursor-pointer mt-auto" @click="copyToClipboard('brand')">
          Brand
        </div>
      </div>

      <!-- 成功色 -->
      <div class="h-30 flex flex-col">
        <h3 class="text-title-small text-primary mb-1">
          成功色
        </h3>
        <p class="text-body-small text-secondary mb-3">
          用于表示成功状态和积极反馈
        </p>
        <div class="px-3 py-2 rounded-small text-body-medium bg-success text-success-foreground cursor-pointer mt-auto" @click="copyToClipboard('success')">
          Success
        </div>
      </div>

      <!-- 警告色 -->
      <div class="h-30 flex flex-col">
        <h3 class="text-title-small text-primary mb-1">
          警告色
        </h3>
        <p class="text-body-small text-secondary mb-3">
          用于表示警告状态和需要注意的信息
        </p>
        <div class="px-3 py-2 rounded-small text-body-medium bg-warning text-warning-foreground cursor-pointer mt-auto" @click="copyToClipboard('warning')">
          Warning
        </div>
      </div>

      <!-- 危险色 -->
      <div class="h-30 flex flex-col">
        <h3 class="text-title-small text-primary mb-1">
          危险色
        </h3>
        <p class="text-body-small text-secondary mb-3">
          用于表示错误状态和危险操作
        </p>
        <div class="px-3 py-2 rounded-small text-body-medium bg-danger text-danger-foreground cursor-pointer mt-auto" @click="copyToClipboard('danger')">
          Danger
        </div>
      </div>

      <!-- 中性色 -->
      <div class="h-30 flex flex-col">
        <h3 class="text-title-small text-primary mb-1">
          中性色
        </h3>
        <p class="text-body-small text-secondary mb-3">
          用于表示中性状态和次要操作
        </p>
        <div class="px-3 py-2 rounded-small text-body-medium bg-neutral text-neutral-foreground cursor-pointer mt-auto" @click="copyToClipboard('neutral')">
          Neutral
        </div>
      </div>
    </div>
  </div>
</template>
