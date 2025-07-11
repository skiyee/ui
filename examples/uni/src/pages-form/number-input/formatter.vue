<script setup lang="ts">
import { ref } from 'vue'

const currencyValue = ref(1000)
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <SkNumberInput
      v-model="currencyValue"
      :format-options="{ style: 'currency', currency: 'CNY' }"
      placeholder="货币格式"
    />
  </div>
</template>
