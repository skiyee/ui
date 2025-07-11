<script setup lang="ts">
import { ref } from 'vue'

const toastVisible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="显示带背景层的提示" @click="() => toastVisible = true" />
    <SkToast
      v-model:visible="toastVisible"
      message="这是一个带背景层的提示消息"
      :backdrop="true"
      :duration="3000"
    />
  </div>
</template>
