<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected" orientation="horizontal">
      <SkRadio value="option1" label="黄山" />
      <SkRadio value="option2" label="庐山" />
      <SkRadio value="option3" label="雁荡山" />
    </SkRadioGroup>
  </div>
</template>
