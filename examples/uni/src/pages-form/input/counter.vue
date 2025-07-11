<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="p-4 w-full">
    <SkInput
      v-model="value"
      placeholder="写下你的名言..."
      :maxlength="20"
    >
      <template #trailing="{ clax }">
        <span :class="clax">{{ value.length }}/20</span>
      </template>
    </SkInput>
  </div>
</template>
