<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const animation = ref<'fade' | 'scale' | 'slide' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'>('fade')

function handleAnimationChange(newAnimation: typeof animation.value) {
  animation.value = newAnimation
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkButton label="淡入淡出" @click="handleAnimationChange('fade')" />
    <SkButton label="缩放动画" @click="handleAnimationChange('scale')" />
    <SkButton label="滑动动画" @click="handleAnimationChange('slide')" />
    <SkButton label="向上滑动" @click="handleAnimationChange('slide-up')" />
    <SkButton label="向下滑动" @click="handleAnimationChange('slide-down')" />

    <SkOverlay v-model:visible="visible" :animation="animation">
      <div class="p-4 bg-page rounded-lg">
        <span>当前动画: {{ animation }}</span>
      </div>
    </SkOverlay>
  </div>
</template>
