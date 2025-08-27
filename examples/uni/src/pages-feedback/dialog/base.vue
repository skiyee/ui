<script setup lang="ts">
import { ref } from 'vue'

const showBasicDialog = ref(false)
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="showBasicDialog = true">
      基础对话框
    </SkButton>
  </div>

  <SkDialog
    v-model:visible="showBasicDialog"
    title="提示"
    content="这是一段提示信息"
    left-btn-label="取消"
    right-btn-label="确认"
    @click-left-btn="showBasicDialog = false"
    @click-right-btn="showBasicDialog = false"
  />
</template>
