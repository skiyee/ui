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
    <!-- 背景颜色展示 - 响应式网格布局 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- 页面背景 -->
      <div class="p-4 bg-page rounded-medium cursor-pointer" @click="copyToClipboard('bg-page')">
        <h3 class="text-title-small text-primary">
          页面背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-page
        </p>
        <p class="text-body-small text-tertiary">
          应用主背景色，提供基础视觉环境
        </p>
      </div>

      <!-- 表面背景 -->
      <div class="p-4 bg-surface border border-solid border-subtle rounded-medium cursor-pointer" @click="copyToClipboard('bg-surface')">
        <h3 class="text-title-small text-primary">
          表面背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-surface
        </p>
        <p class="text-body-small text-tertiary">
          组件和卡片表面背景，提供清晰视觉层次
        </p>
      </div>

      <!-- 微妙背景 -->
      <div class="p-4 bg-subtle rounded-medium cursor-pointer" @click="copyToClipboard('bg-subtle')">
        <h3 class="text-title-small text-primary">
          微妙背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-subtle
        </p>
        <p class="text-body-small text-tertiary">
          区别于主背景的柔和色彩，创建细微视觉差异
        </p>
      </div>

      <!-- 静音背景 -->
      <div class="p-4 bg-muted rounded-medium cursor-pointer" @click="copyToClipboard('bg-muted')">
        <h3 class="text-title-small text-primary">
          静音背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-muted
        </p>
        <p class="text-body-small text-tertiary">
          柔和背景色，降低视觉干扰
        </p>
      </div>

      <!-- 强调背景 -->
      <div class="p-4 bg-accent rounded-medium cursor-pointer" @click="copyToClipboard('bg-accent')">
        <h3 class="text-title-small text-primary">
          强调背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-accent
        </p>
        <p class="text-body-small text-tertiary">
          突出显示特定区域
        </p>
      </div>

      <!-- 强化背景 -->
      <div class="p-4 bg-emphasized rounded-medium cursor-pointer" @click="copyToClipboard('bg-emphasized')">
        <h3 class="text-title-small text-primary">
          强化背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-emphasized
        </p>
        <p class="text-body-small text-tertiary">
          突出背景色，强调重要区域
        </p>
      </div>

      <!-- 遮罩背景 -->
      <div class="p-4 bg-backdrop rounded-medium cursor-pointer" @click="copyToClipboard('bg-backdrop')">
        <h3 class="text-title-small text-anti">
          遮罩背景
        </h3>
        <p class="text-body-small mb-3 text-anti/50">
          bg-backdrop
        </p>
        <p class="text-body-small text-anti">
          半透明遮罩，用于模态场景
        </p>
      </div>

      <!-- 禁用背景 -->
      <div class="p-4 bg-disabled rounded-medium cursor-pointer" @click="copyToClipboard('bg-disabled')">
        <h3 class="text-title-small text-primary">
          禁用背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-disabled
        </p>
        <p class="text-body-small text-tertiary">
          表示禁用状态
        </p>
      </div>

      <!-- 骨架屏背景 -->
      <div class="p-4 bg-skeleton rounded-medium cursor-pointer" @click="copyToClipboard('bg-skeleton')">
        <h3 class="text-title-small text-primary">
          骨架屏背景
        </h3>
        <p class="text-body-small mb-3 text-secondary">
          bg-skeleton
        </p>
        <p class="text-body-small text-tertiary">
          内容加载占位背景
        </p>
      </div>
    </div>
  </div>
</template>
