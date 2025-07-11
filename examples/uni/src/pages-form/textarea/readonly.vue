<script setup lang="ts">
import { ref } from 'vue'

const value = ref('这是只读内容，无法编辑')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea placeholder="普通文本域" />
    <SkTextarea v-model="value" placeholder="只读文本域" readonly />
  </div>
</template>
