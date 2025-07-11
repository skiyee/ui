<script setup lang="ts">
import { ref } from 'vue'

const value = ref(50)
</script>

<template>
  <div class="p-4 w-full">
    <SkSlider v-model="value" />
  </div>
</template>
