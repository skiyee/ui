<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('small')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio label="小型单项框" value="small" size="small" />
      <SkRadio label="中型单项框" value="medium" size="medium" />
      <SkRadio label="大型单项框" value="large" size="large" />
    </SkRadioGroup>
  </div>
</template>
