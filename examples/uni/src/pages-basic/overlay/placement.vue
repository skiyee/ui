<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const placement = ref<'top' | 'center' | 'bottom' | 'left' | 'right'>('center')

function handlePositionChange(newPosition: typeof placement.value) {
  placement.value = newPosition
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkButton label="顶部位置" @click="handlePositionChange('top')" />
    <SkButton label="居中位置" @click="handlePositionChange('center')" />
    <SkButton label="底部位置" @click="handlePositionChange('bottom')" />
    <SkButton label="左侧位置" @click="handlePositionChange('left')" />
    <SkButton label="右侧位置" @click="handlePositionChange('right')" />

    <SkOverlay v-model:visible="visible" :placement="placement">
      <div class="p-4 bg-white rounded-lg">
        <span>这个弹窗显示在 {{ placement }} 位置。</span>
      </div>
    </SkOverlay>
  </div>
</template>
