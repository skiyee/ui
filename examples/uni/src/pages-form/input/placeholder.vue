<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-3 p-4 w-full">
    <SkInput v-model="value" placeholder="请输入您的姓名" />
  </div>
</template>
