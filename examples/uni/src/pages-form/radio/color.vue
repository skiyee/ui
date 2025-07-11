<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('')
</script>

<template>
  <div class="p-4">
    <SkRadioGroup v-model="selected">
      <SkRadio value="brand" label="品牌单选框" color="brand" />
      <SkRadio value="success" label="成功单选框" color="success" />
      <SkRadio value="warning" label="警告单选框" color="warning" />
      <SkRadio value="danger" label="危险单选框" color="danger" />
      <SkRadio value="neutral" label="中性单选框" color="neutral" />
    </SkRadioGroup>
  </div>
</template>
