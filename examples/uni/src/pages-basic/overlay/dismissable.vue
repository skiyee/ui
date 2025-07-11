<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="显示弹窗" @click="() => visible = true" />
    <SkOverlay v-model:visible="visible" :dismissable="false">
      <div class="text-center p-4 bg-white rounded-lg">
        <span class="block mb-2">点击背景层不会关闭弹窗</span>
        <SkButton label="手动关闭" color="warning" size="small" @click="() => visible = false" />
      </div>
    </SkOverlay>
  </div>
</template>
