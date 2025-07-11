<script setup lang="ts">
import { ref } from 'vue'

const small = ref(30)
const medium = ref(50)
const large = ref(70)
</script>

<template>
  <div class="flex flex-col p-4 gap-4 w-full">
    <SkSlider v-model="small" show-value size="small" />
    <SkSlider v-model="medium" show-value size="medium" />
    <SkSlider v-model="large" show-value size="large" />
  </div>
</template>
