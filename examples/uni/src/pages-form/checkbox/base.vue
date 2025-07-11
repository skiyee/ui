<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
const checkedItems = ref([])
</script>

<template>
  <div class="flex gap-4 p-4">
    <SkCheckbox v-model="checked" label="独立复选框" />

    <SkCheckboxGroup v-model="checkedItems">
      <SkCheckbox value="option1" label="组合复选框 1" />
      <SkCheckbox value="option2" label="组合复选框 2" />
    </SkCheckboxGroup>
  </div>
</template>
