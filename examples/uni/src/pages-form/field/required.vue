<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>

<template>
  <div class="p-4 w-full">
    <SkField label="姓名" required>
      <SkInput v-model="name" placeholder="请输入您的姓名" />
    </SkField>
  </div>
</template>
