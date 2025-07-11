<script setup lang="ts">
import { ref } from 'vue'

const temperature = ref(25)
const percentage = ref(60)
const price = ref(150)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="temperature" show-value :formatter="(val) => `${val}°C`" />
    <SkSlider v-model="percentage" show-value :formatter="(val) => `${val}%`" />
    <SkSlider v-model="price" show-value :formatter="(val) => `¥${val}`" :min="0" :max="500" />
  </div>
</template>
