<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const type = ref<'default' | 'success' | 'warning' | 'error' | 'info'>('default')

function handleShowToast(newType: typeof type.value) {
  type.value = newType

  visible.value = true
}
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkButton label="默认 Toast" color="neutral" @click="handleShowToast('default')" />
    <SkButton label="成功 Toast" color="success" @click="handleShowToast('success')" />
    <SkButton label="警告 Toast" color="warning" @click="handleShowToast('warning')" />
    <SkButton label="错误 Toast" color="danger" @click="handleShowToast('error')" />
    <SkButton label="信息 Toast" color="brand" @click="handleShowToast('info')" />
  </div>
  <SkToast v-model:visible="visible" :type="type" message="显示含图标的消息提示" />
</template>
