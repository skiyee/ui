<script setup lang="ts">
import { ref } from 'vue'

const value = ref('这是一个自动高度的文本域示例。\n当您输入更多内容时，\n文本域会自动调整高度。\n继续输入更多文本来查看效果。')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea v-model="value" :auto-height="true" placeholder="自动高度文本域" />
  </div>
</template>
