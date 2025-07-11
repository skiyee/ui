<script setup lang="ts">
import { ref } from 'vue'

const color = ref(60)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="color" color="brand" />
    <SkSlider v-model="color" color="success" />
    <SkSlider v-model="color" color="warning" />
    <SkSlider v-model="color" color="danger" />
    <SkSlider v-model="color" color="neutral" />
  </div>
</template>
