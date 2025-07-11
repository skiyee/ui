<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('option1')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected" disabled>
      <SkRadio value="option1" label="黄山" />
      <SkRadio value="option2" label="庐山" />
      <SkRadio value="option3" label="雁荡山" />
    </SkRadioGroup>
  </div>
</template>
