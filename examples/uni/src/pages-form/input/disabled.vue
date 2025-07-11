<script setup lang="ts">
import { ref } from 'vue'

const disabledValue = ref()
const disabledWithValue = ref('这是禁用状态含值的输入框')
</script>

<template>
  <div class="flex flex-col gap-3 p-4 w-full">
    <SkInput v-model="disabledValue" disabled placeholder="禁用状态，无法输入" />
    <SkInput v-model="disabledWithValue" disabled />
  </div>
</template>
