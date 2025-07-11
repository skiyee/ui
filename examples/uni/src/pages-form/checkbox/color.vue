<script setup lang="ts">
import { ref } from 'vue'

const neutral = ref(true)
const primary = ref(true)
const success = ref(true)
const warning = ref(true)
const danger = ref(true)
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkCheckbox v-model="primary" label="主要复选框" color="brand" />
    <SkCheckbox v-model="success" label="成功复选框" color="success" />
    <SkCheckbox v-model="warning" label="警告复选框" color="warning" />
    <SkCheckbox v-model="danger" label="危险复选框" color="danger" />
    <SkCheckbox v-model="neutral" label="中性复选框" color="neutral" />
  </div>
</template>
