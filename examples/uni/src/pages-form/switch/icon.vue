<script setup lang="ts">
import { ref } from 'vue'

const state = ref(false)
</script>

<template>
  <SkSwitch v-model="state">
    <template #thumbIcon="{ selected, clax }">
      <SkIcon v-if="selected" name="i-lucide:wind" :clax="clax" />
    </template>
  </SkSwitch>
</template>
