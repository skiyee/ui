<script setup lang="ts">
import { ref } from 'vue'

const roundedValue = ref('')
const gradientValue = ref('')
</script>

<template>
  <div class="flex flex-col gap-3 p-4 w-full">
    <SkInput
      v-model="roundedValue"
      placeholder="圆角输入框"
      :clax="{
        root: 'rounded-full bg-transparent border-2 border-solid border-brand',
      }"
    />
    <SkInput
      v-model="gradientValue"
      placeholder="渐变背景输入框"
      :clax="{
        root: 'bg-gradient-to-r from-brand/10 to-success/10 border border-brand/30',
      }"
    />
  </div>
</template>
