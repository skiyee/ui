<script setup lang="ts">
import { ref } from 'vue'

const smallValue = ref('')
const mediumValue = ref('')
const largeValue = ref('')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkInput v-model="smallValue" size="small" placeholder="小尺寸输入框" />
    <SkInput v-model="mediumValue" size="medium" placeholder="中尺寸输入框" />
    <SkInput v-model="largeValue" size="large" placeholder="大尺寸输入框" />
  </div>
</template>
