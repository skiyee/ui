<script setup lang="ts">
import { ref } from 'vue'

const smallValue = ref('')
const mediumValue = ref('')
const largeValue = ref('')
</script>

<template>
  <div class="p-4 w-full space-y-6">
    <SkField label="小尺寸输入框" description="适用于紧凑的界面布局" size="small">
      <SkInput v-model="smallValue" placeholder="小尺寸输入框" size="small" />
    </SkField>
    <SkField label="中等尺寸输入框" description="默认尺寸，适用于大多数场景" size="medium">
      <SkInput v-model="mediumValue" placeholder="中等尺寸输入框" />
    </SkField>
    <SkField label="大尺寸输入框" description="适用于重要的输入字段或宽松的布局" size="large">
      <SkInput v-model="largeValue" placeholder="大尺寸输入框" size="large" />
    </SkField>
  </div>
</template>
