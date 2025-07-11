<script setup lang="ts">
import { ref } from 'vue'

const toastVisible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="显示提示" @click="() => toastVisible = true" />
    <SkToast v-model:visible="toastVisible" message="这是一个基础提示消息" />
  </div>
</template>
