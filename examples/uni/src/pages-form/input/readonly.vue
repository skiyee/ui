<script setup lang="ts">
import { ref } from 'vue'

const readonlyValue = ref()
const readonlyWithValue = ref('含值的只读状态输入框')
</script>

<template>
  <div class="flex flex-col gap-3 p-4 w-full">
    <SkInput v-model="readonlyValue" placeholder="只读状态，无法编辑" readonly />
    <SkInput v-model="readonlyWithValue" placeholder="只读状态，有值" readonly />
  </div>
</template>
