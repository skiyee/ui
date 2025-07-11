<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('option1')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="option1">
        九华山
      </SkRadio>
      <SkRadio value="option2">
        梵净山
      </SkRadio>
      <SkRadio value="option3">
        三清山
      </SkRadio>
    </SkRadioGroup>
  </div>
</template>
