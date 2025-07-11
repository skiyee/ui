<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Hello')
</script>

<template>
  <div class="p-4 w-full">
    <SkInput v-model="value" />
  </div>
</template>
