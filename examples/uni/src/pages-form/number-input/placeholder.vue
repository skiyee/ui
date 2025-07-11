<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <div class="flex flex-col gap-3 p-4">
    <SkNumberInput v-model="value" placeholder="请输入数字" />
  </div>
</template>
