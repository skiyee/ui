<script setup lang="ts">
import { ref } from 'vue'

const checkedItems = ref(['option2', 'option4'])
</script>

<template>
  <div class="p-4">
    <SkCheckboxGroup v-model="checkedItems" disabled>
      <SkCheckbox value="option1" label="北岳恒山" />
      <SkCheckbox value="option2" label="西岳华山" />
      <SkCheckbox value="option3" label="中岳嵩山" />
      <SkCheckbox value="option4" label="东岳泰山" />
      <SkCheckbox value="option5" label="南岳衡山" />
    </SkCheckboxGroup>
  </div>
</template>
