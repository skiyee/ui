<script setup lang="ts">
import { ref } from 'vue'

const state = ref(true)
</script>

<template>
  <SkSwitch v-model="state" readonly />
</template>
