<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkTextarea v-model="value" :maxlength="50" show-count placeholder="最大长度 50 字符" />
  </div>
</template>
