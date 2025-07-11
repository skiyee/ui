<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="p-4 w-full">
    <SkInput
      v-model="value"
      :maxlength="10"
      placeholder="最多输入10个字符"
    />
  </div>
</template>
