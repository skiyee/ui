<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const currentZIndex = ref(2000)
const currentMessage = ref('')

function handleShowToast(zIndex: number, message: string) {
  currentZIndex.value = zIndex
  currentMessage.value = message
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <div class="relative bg-orange-500 p-4 text-white z-1500 rounded-lg">
      这是 zIndex = 1500 的盒子
    </div>
    <SkButton label="低层级 (1000)" @click="handleShowToast(1000, '层级 1000 的提示')" />
    <SkButton label="默认层级 (2000)" @click="handleShowToast(2000, '层级 2000 的提示')" />
    <SkButton label="高层级 (3000)" @click="handleShowToast(3000, '层级 3000 的提示')" />
  </div>
  <SkToast v-model:visible="visible" :z-index="currentZIndex" :message="currentMessage" />
</template>
