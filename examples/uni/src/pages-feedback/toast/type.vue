<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const currentType = ref<'default' | 'success' | 'warning' | 'error'>('default')
const currentMessage = ref('')

function handleShowToast(type: typeof currentType.value, message: string) {
  currentType.value = type
  currentMessage.value = message
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkButton label="默认提示" color="neutral" @click="handleShowToast('default', '这是一个默认提示')" />
    <SkButton label="成功提示" color="success" @click="handleShowToast('success', '操作成功')" />
    <SkButton label="警告提示" color="warning" @click="handleShowToast('warning', '请注意这个警告')" />
    <SkButton label="错误提示" color="danger" @click="handleShowToast('error', '发生了错误')" />
  </div>
  <SkToast v-model:visible="visible" :type="currentType" :message="currentMessage" />
</template>
