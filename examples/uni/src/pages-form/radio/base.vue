<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="option1">
        单选框
      </SkRadio>
    </SkRadioGroup>
  </div>
</template>
