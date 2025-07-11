<script setup lang="ts">
import { ref } from 'vue'

const toastVisible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="展示Toast" @click="() => toastVisible = true" />
    <SkToast v-model:visible="toastVisible" message="Hello World" />
  </div>
</template>
