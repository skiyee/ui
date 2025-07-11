<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkNumberInput v-model="value1" :step="5" placeholder="步长 5" />
    <SkNumberInput v-model="value2" :step="0.1" placeholder="步长 0.1" />
  </div>
</template>
