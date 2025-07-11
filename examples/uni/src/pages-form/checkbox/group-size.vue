<script setup lang="ts">
import { ref } from 'vue'

const checkedItems = ref(['option1', 'option2', 'option3'])
</script>

<template>
  <div class="p-4">
    <SkCheckboxGroup v-model="checkedItems">
      <SkCheckbox value="option1" label="峨眉山" />
      <SkCheckbox value="option2" label="武当山" />
      <SkCheckbox value="option3" label="老君山" size="large" />
    </SkCheckboxGroup>
  </div>
</template>
