<script setup lang="ts">
import { ref } from 'vue'

const checkedItems = ref([])
</script>

<template>
  <div class="p-4">
    <SkCheckboxGroup v-model="checkedItems">
      <SkCheckbox value="option1" label="黄山" />
      <SkCheckbox value="option2" label="庐山" />
      <SkCheckbox value="option3" label="雁荡山" />
    </SkCheckboxGroup>
  </div>
</template>
