<script setup lang="ts">
import { ref } from 'vue'

// 响应式状态管理
const visible = ref(false)
const currentDuration = ref(3000)
const currentMessage = ref('')
const currentClosable = ref(false)

function handleShowToast(duration: number, message: string, closable = false) {
  currentDuration.value = duration
  currentMessage.value = message
  currentClosable.value = closable
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkButton label="短时间 (1秒)" color="brand" @click="handleShowToast(1000, '短时间显示 (1秒)')" />
    <SkButton label="正常时间 (3秒)" color="brand" @click="handleShowToast(3000, '正常时间显示 (3秒)')" />
    <SkButton label="长时间 (5秒)" color="brand" @click="handleShowToast(5000, '长时间显示 (5秒)')" />
    <SkButton label="持续显示" color="brand" @click="handleShowToast(0, '持续显示，需要手动关闭', true)" />
  </div>
  <SkToast v-model:visible="visible" :duration="currentDuration" :message="currentMessage" :closable="currentClosable" />
</template>
