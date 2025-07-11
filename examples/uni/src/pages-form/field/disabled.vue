<script setup lang="ts">
import { ref } from 'vue'

const isDisabled = ref(true)
const value = ref('')
</script>

<template>
  <div class="w-full p-4">
    <SkButton size="small" clax="mb-4" @click="isDisabled = !isDisabled">
      切换{{ isDisabled ? '启用' : '禁用' }}状态
    </SkButton>

    <SkField label="昵称" description="可以是圆也可以是方的" :disabled="isDisabled">
      <SkInput v-model="value" placeholder="请输入昵称" />
    </SkField>
  </div>
</template>
