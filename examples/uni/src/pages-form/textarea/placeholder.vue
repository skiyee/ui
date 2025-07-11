<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="p-4 w-full">
    <SkTextarea v-model="value" placeholder="请输入您的意见和建议..." />
  </div>
</template>
