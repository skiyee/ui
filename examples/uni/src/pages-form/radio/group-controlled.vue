<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('option')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="option1" label="九寨沟" />
      <SkRadio value="option2" label="喀纳斯" />
    </SkRadioGroup>
  </div>
</template>
