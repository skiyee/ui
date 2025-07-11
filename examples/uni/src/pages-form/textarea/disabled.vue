<script setup lang="ts">
import { ref } from 'vue'

const normalValue = ref('')
const disabledValue = ref('这是禁用状态的文本域')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea v-model="normalValue" placeholder="正常状态" />
    <SkTextarea v-model="disabledValue" disabled placeholder="禁用状态" />
  </div>
</template>
