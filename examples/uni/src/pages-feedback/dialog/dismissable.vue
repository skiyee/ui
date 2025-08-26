<script setup lang="ts">
import { ref } from 'vue'

const showDismissableDialog = ref(false)
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="showDismissableDialog = true">
      不可关闭对话框
    </SkButton>
  </div>

  <SkDialog
    v-model:visible="showDismissableDialog"
    title="提示"
    content="这个对话框不能通过点击背景层关闭"
    left-btn-label="取消"
    right-btn-label="确认"
    :dismissable="false"
    @click-left-btn="showDismissableDialog = false"
    @click-right-btn="showDismissableDialog = false"
  />
</template>
