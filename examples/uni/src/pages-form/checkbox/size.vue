<script setup lang="ts">
import { ref } from 'vue'

const small = ref(true)
const medium = ref(true)
const large = ref(true)
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkCheckbox v-model="small" label="小型复选框" size="small" />
    <SkCheckbox v-model="medium" label="中型复选框" size="medium" />
    <SkCheckbox v-model="large" label="大型复选框" size="large" />
  </div>
</template>
