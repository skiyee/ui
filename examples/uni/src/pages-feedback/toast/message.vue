<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const currentMessage = ref('')

function handleShowToast(message: string) {
  currentMessage.value = message
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkButton label="短消息" color="brand" @click="handleShowToast('操作成功')" />
    <SkButton label="长消息" color="brand" @click="handleShowToast('这是一个比较长的提示消息，用于演示消息内容的显示效果')" />
    <SkButton label="多行消息" color="brand" @click="handleShowToast('第一行消息\n第二行消息\n第三行消息')" />
  </div>
  <SkToast v-model:visible="visible" :message="currentMessage" />
</template>
