<script setup lang="ts">
import { ref } from 'vue'

const state = ref(false)
</script>

<template>
  <SkSwitch v-model="state" />
</template>
