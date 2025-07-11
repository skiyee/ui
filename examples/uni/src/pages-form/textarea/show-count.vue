<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('这是一些示例文本')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea v-model="value1" :show-count="false" placeholder="不显示字数统计" />
    <SkTextarea v-model="value2" :show-count="true" :max-length="100" placeholder="显示字数统计" />
  </div>
</template>
