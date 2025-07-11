<script setup lang="ts">
import { ref } from 'vue'

const normalValue = ref(10)
const readonlyValue = ref(20)
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkNumberInput v-model="normalValue" placeholder="正常状态" />
    <SkNumberInput v-model="readonlyValue" readonly placeholder="只读状态" />
  </div>
</template>
