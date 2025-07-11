<script setup lang="ts">
import { ref } from 'vue'

const toastVisible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="显示可关闭提示" @click="() => toastVisible = true" />
    <SkToast v-model:visible="toastVisible" message="这是一个可关闭的提示消息" :closable="true" :duration="0" />
  </div>
</template>
