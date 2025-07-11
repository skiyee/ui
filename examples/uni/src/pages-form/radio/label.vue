<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('option1')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="option1" label="峨眉山" />
      <SkRadio value="option2" label="武当山" />
      <SkRadio value="option3" label="老君山" />
    </SkRadioGroup>
  </div>
</template>
