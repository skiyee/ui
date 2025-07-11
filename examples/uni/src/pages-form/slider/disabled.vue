<script setup lang="ts">
import { ref } from 'vue'

const normal = ref(60)
const disabled = ref(40)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="normal" />
    <SkSlider v-model="disabled" disabled />
  </div>
</template>
