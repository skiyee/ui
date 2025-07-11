<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <SkCheckbox v-model="checked">
    确认输入信息无误
  </SkCheckbox>
</template>
