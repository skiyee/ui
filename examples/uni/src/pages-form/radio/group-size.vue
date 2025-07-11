<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="option1" label="黄山" size="large" />
      <SkRadio value="option2" label="庐山" />
      <SkRadio value="option3" label="雁荡山" />
    </SkRadioGroup>
  </div>
</template>
