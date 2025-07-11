<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(50)
const value2 = ref(25)
const value3 = ref(5.5)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="value1" show-value :formatter="(val) => `步长 1 (${val})`" :step="1" />
    <SkSlider v-model="value2" show-value :formatter="(val) => `步长 5 (${val})`" :step="5" />
    <SkSlider v-model="value3" show-value :formatter="(val) => `步长 0.5 (${val})`" :step="0.5" :min="0" :max="10" />
  </div>
</template>
