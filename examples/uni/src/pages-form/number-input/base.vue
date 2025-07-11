<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <div class="flex justify-center p-4 w-full">
    <SkNumberInput v-model="value" placeholder="请输入数字" />
  </div>
</template>
