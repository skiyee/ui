<script setup lang="ts">
import { ref } from 'vue'

const smallValue = ref('')
const mediumValue = ref('')
const largeValue = ref('')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea v-model="smallValue" size="small" placeholder="小尺寸文本域" />
    <SkTextarea v-model="mediumValue" size="medium" placeholder="中尺寸文本域" />
    <SkTextarea v-model="largeValue" size="large" placeholder="大尺寸文本域" />
  </div>
</template>
