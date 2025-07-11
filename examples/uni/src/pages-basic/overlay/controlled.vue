<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="显示弹窗" @click="() => visible = true" />
    <SkOverlay v-model:visible="visible">
      <div class="p-4 bg-white rounded-lg">
        <span>您可以在这里放置任何内容。</span>
      </div>
    </SkOverlay>
  </div>
</template>
