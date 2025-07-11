<script setup lang="ts">
import { ref } from 'vue'

const checkedItems = ref(['option1', 'option2'])
</script>

<template>
  <SkCheckboxGroup v-model="checkedItems">
    <SkCheckbox value="option1" label="长白山" />
    <SkCheckbox value="option2" label="张家界" />
  </SkCheckboxGroup>
</template>
