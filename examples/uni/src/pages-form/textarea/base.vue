<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="p-4 w-full">
    <SkTextarea v-model="value" />
  </div>
</template>
