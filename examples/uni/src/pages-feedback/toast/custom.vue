<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <SkButton label="自定义图标" @click="() => visible = true" />
  <SkToast v-model:visible="visible" type="success">
    <template #icon>
      <SkIcon name="i-lucide:check-check" class="text-red-500" />
    </template>
    <div>
      <span class="block text-sm font-medium">操作成功</span>
      <span class="text-xs opacity-80">您的数据已保存</span>
    </div>
  </SkToast>
</template>
