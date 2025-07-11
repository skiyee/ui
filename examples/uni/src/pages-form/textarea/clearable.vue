<script setup lang="ts">
import { ref } from 'vue'

const value = ref('这是一些示例文本')
</script>

<template>
  <div class="flex p-4 w-full">
    <SkTextarea v-model="value" clearable placeholder="可清空的文本域" />
  </div>
</template>
