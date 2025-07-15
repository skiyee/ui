<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <SkButton label="显示弹窗" @click="() => visible = true" />
  <SkOverlay v-model:visible="visible">
    <div class="p-4 bg-page text-primary rounded-lg">
      <span>这是一个基础的弹窗内容</span>
    </div>
  </SkOverlay>
</template>
