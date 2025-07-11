<script setup lang="ts">
import { ref } from 'vue'

const textValue = ref()
const numberValue = ref()
const digitValue = ref()
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkInput v-model="textValue" type="text" placeholder="请输入文本" />
    <SkInput v-model="numberValue" type="number" placeholder="请输入数字" />
    <SkInput v-model="digitValue" type="digit" placeholder="请输入带小数点的数字" />
  </div>
</template>
