<script setup lang="ts">
import { ref } from 'vue'

const normalValue = ref(7)
const strictValue = ref(10)
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkNumberInput v-model="normalValue" :step="5" placeholder="普通步长模式" />
    <SkNumberInput v-model="strictValue" :step="5" step-strictly placeholder="严格步长模式" />
  </div>
</template>
