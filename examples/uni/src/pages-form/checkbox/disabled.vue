<script setup lang="ts">
import { ref } from 'vue'

const normal = ref(false)
const normalChecked = ref(true)
const disabled = ref(false)
const disabledChecked = ref(true)
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkCheckbox v-model="normal" label="正常状态（未选中）" />
    <SkCheckbox v-model="normalChecked" label="正常状态（已选中）" />
    <SkCheckbox v-model="disabled" label="禁用状态（未选中）" disabled />
    <SkCheckbox v-model="disabledChecked" label="禁用状态（已选中）" disabled />
  </div>
</template>
