<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('option2')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="option1" label="禁用未选" disabled />
      <SkRadio value="option2" label="禁用选中" disabled />
    </SkRadioGroup>
  </div>
</template>
