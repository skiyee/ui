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
    <!-- 边框颜色展示 - 响应式网格布局 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- 基础边框 -->
      <div class="p-4 rounded-large overflow-hidden border border-solid border-base cursor-pointer" @click="copyToClipboard('border-base')">
        <h3 class="text-title-small text-primary">
          基础边框
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          border-base
        </p>
        <p class="text-body-small text-tertiary">
          最常用的边框颜色，用于一般的分割和界定
        </p>
      </div>

      <!-- 微妙边框 -->
      <div class="p-4 rounded-large overflow-hidden border border-solid border-subtle cursor-pointer" @click="copyToClipboard('border-subtle')">
        <h3 class="text-title-small text-primary">
          微妙边框
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          border-subtle
        </p>
        <p class="text-body-small text-tertiary">
          更加柔和的边框颜色，视觉干扰更小
        </p>
      </div>

      <!-- 强边框 -->
      <div class="p-4 rounded-large overflow-hidden border border-solid border-strong cursor-pointer" @click="copyToClipboard('border-strong')">
        <h3 class="text-title-small text-primary">
          强边框
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          border-strong
        </p>
        <p class="text-body-small text-tertiary">
          更加明显的边框颜色，用于强调和突出
        </p>
      </div>
    </div>
  </div>
</template>
