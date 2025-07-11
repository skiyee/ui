<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(5)
const value2 = ref(150)
const value3 = ref(-20)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="value1" show-value :formatter="(val) => `范围 0-10 (${val})`" :min="0" :max="10" />
    <SkSlider v-model="value2" show-value :formatter="(val) => `范围 100-200 (${val})`" :min="100" :max="200" />
    <SkSlider v-model="value3" show-value :formatter="(val) => `范围 -50 到 50 (${val})`" :min="-50" :max="50" />
  </div>
</template>
