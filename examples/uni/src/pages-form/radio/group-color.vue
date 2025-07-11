<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected" color="warning">
      <SkRadio value="option1" label="北岳恒山" />
      <SkRadio value="option2" label="西岳华山" />
      <SkRadio value="option3" label="中岳嵩山" />
      <SkRadio value="option4" label="东岳泰山" color="danger" />
      <SkRadio value="option5" label="南岳衡山" />
    </SkRadioGroup>
  </div>
</template>
