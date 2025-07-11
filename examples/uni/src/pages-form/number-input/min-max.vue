<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(100)
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkNumberInput v-model="value1" :min="0" :max="10" placeholder="范围 0-10" />
    <SkNumberInput v-model="value2" :min="10" :max="100" placeholder="范围 10-100" />
  </div>
</template>
