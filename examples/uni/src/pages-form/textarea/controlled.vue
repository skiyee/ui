<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello World')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea v-model="value" placeholder="请输入内容" />
    <div class="text-sm text-secondary">
      当前值: {{ value }}
    </div>
  </div>
</template>
