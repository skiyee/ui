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
    <!-- 文本颜色展示 - 响应式网格布局 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <!-- 主要文本 -->
      <div class="p-4 text-primary cursor-pointer" @click="copyToClipboard('text-primary')">
        <h3 class="text-title-small">
          主要文本
        </h3>
        <p class="text-body-small mb-3">
          text-primary
        </p>
        <p class="text-body-small">
          最重要的文本内容，用于标题、关键信息等
        </p>
      </div>

      <!-- 次要文本 -->
      <div class="p-4 text-secondary cursor-pointer" @click="copyToClipboard('text-secondary')">
        <h3 class="text-title-small">
          次要文本
        </h3>
        <p class="text-body-small mb-3">
          text-secondary
        </p>
        <p class="text-body-small">
          次要的文本内容，重要性低于主要文本
        </p>
      </div>

      <!-- 三级文本 -->
      <div class="p-4 text-tertiary cursor-pointer" @click="copyToClipboard('text-tertiary')">
        <h3 class="text-title-small">
          三级文本
        </h3>
        <p class="text-body-small mb-3">
          text-tertiary
        </p>
        <p class="text-body-small">
          更加次要的文本内容，视觉重要性较低
        </p>
      </div>

      <!-- 标签文本 -->
      <div class="p-4 text-label cursor-pointer" @click="copyToClipboard('text-label')">
        <h3 class="text-title-small">
          标签文本
        </h3>
        <p class="text-body-small mb-3">
          text-label
        </p>
        <p class="text-body-small">
          用于表单标签、分类标签等标识性文本
        </p>
      </div>

      <!-- 选中文本 -->
      <div class="p-4 text-selected cursor-pointer" @click="copyToClipboard('text-selected')">
        <h3 class="text-title-small">
          选中文本
        </h3>
        <p class="text-body-small mb-3">
          text-selected
        </p>
        <p class="text-body-small">
          表示选中状态的文本颜色
        </p>
      </div>

      <!-- 描述文本 -->
      <div class="p-4 text-description cursor-pointer" @click="copyToClipboard('text-description')">
        <h3 class="text-title-small">
          描述文本
        </h3>
        <p class="text-body-small mb-3">
          text-description
        </p>
        <p class="text-body-small">
          用于描述性内容的文本颜色
        </p>
      </div>

      <!-- 占位符文本 -->
      <div class="p-4 text-placeholder cursor-pointer" @click="copyToClipboard('text-placeholder')">
        <h3 class="text-title-small">
          占位符文本
        </h3>
        <p class="text-body-small mb-3">
          text-placeholder
        </p>
        <p class="text-body-small">
          输入框占位符文本的颜色
        </p>
      </div>

      <!-- 禁用文本 -->
      <div class="p-4 text-disabled cursor-pointer" @click="copyToClipboard('text-disabled')">
        <h3 class="text-title-small">
          禁用文本
        </h3>
        <p class="text-body-small mb-3">
          text-disabled
        </p>
        <p class="text-body-small">
          表示禁用状态的文本颜色
        </p>
      </div>
    </div>
  </div>
</template>
