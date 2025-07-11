<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const currentPosition = ref<'top' | 'center' | 'bottom'>('center')
const currentMessage = ref('')

function handleShowToast(placement: typeof currentPosition.value, message: string) {
  currentPosition.value = placement
  currentMessage.value = message
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkButton label="顶部提示" color="brand" @click="handleShowToast('top', '顶部显示的提示')" />
    <SkButton label="中间提示" color="brand" @click="handleShowToast('center', '中间显示的提示')" />
    <SkButton label="底部提示" color="brand" @click="handleShowToast('bottom', '底部显示的提示')" />
  </div>
  <SkToast v-model:visible="visible" :placement="currentPosition" :message="currentMessage" />
</template>
