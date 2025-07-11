<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
const indeterminate = ref(false)
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkCheckbox v-model="checked" label="正常状态" />
    <SkCheckbox v-model="indeterminate" :indeterminate="true" label="半选状态" />
  </div>
</template>
