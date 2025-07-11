<script setup lang="ts">
import { ref } from 'vue'

const smallValue = ref(0)
const mediumValue = ref(0)
const largeValue = ref(0)
</script>

<template>
  <div class="flex flex-col items-center p-4 gap-3">
    <SkNumberInput v-model="smallValue" size="small" placeholder="小尺寸" />
    <SkNumberInput v-model="mediumValue" size="medium" placeholder="中尺寸" />
    <SkNumberInput v-model="largeValue" size="large" placeholder="大尺寸" />
  </div>
</template>
