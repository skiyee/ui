<script setup lang="ts">
import { ref } from 'vue'

const showLongContentDialog = ref(false)
const longContent = `这是一段很长的内容，用来演示当对话框内容过长时的效果。当内容超出对话框的高度时，会自动显示垂直滚动条，让用户可以滚动查看全部内容。${'这是重复的内容，用来增加长度。'.repeat(20)}`
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="showLongContentDialog = true">
      长内容对话框
    </SkButton>
  </div>

  <SkDialog
    v-model:visible="showLongContentDialog"
    title="长内容"
    :content="longContent"
    left-btn-label="取消"
    right-btn-label="确认"
    @click-left-btn="showLongContentDialog = false"
    @click-right-btn="showLongContentDialog = false"
  />
</template>
