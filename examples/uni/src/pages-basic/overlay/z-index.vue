<script setup lang="ts">
import { ref } from 'vue'

const zIndex = ref(1000)
const visible = ref(false)

function handleVisibleChange(newZIndex: number) {
  zIndex.value = newZIndex
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <div class="relative bg-orange-500 p-4 text-white z-1500 rounded-lg">
      这是 zIndex = 1500 的盒子
    </div>
    <SkButton label="默认弹窗" @click="handleVisibleChange(1000)" />
    <SkButton label="覆盖弹窗" @click="handleVisibleChange(2000)" />

    <SkOverlay v-model:visible="visible" :z-index="zIndex">
      <div class="p-4 bg-white rounded-lg">
        <span>这个弹窗的层级为 {{ zIndex }}</span>
      </div>
    </SkOverlay>
  </div>
</template>
