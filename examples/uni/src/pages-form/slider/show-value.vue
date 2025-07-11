<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(30)
const value2 = ref(70)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="value1" />
    <SkSlider v-model="value2" show-value />
  </div>
</template>
