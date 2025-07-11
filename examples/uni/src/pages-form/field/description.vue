<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const apiKey = ref('')
</script>

<template>
  <div class="p-4 w-full space-y-4">
    <!-- 基础帮助文本 -->
    <SkField label="用户名" description="用户名只能包含字母、数字和下划线，长度3-20个字符">
      <SkInput v-model="username" placeholder="请输入用户名" />
    </SkField>

    <!-- 自定义帮助文本插槽 -->
    <SkField label="API密钥">
      <SkInput v-model="apiKey" placeholder="请输入API密钥" password />
      <template #description>
        <span class="text-brand">如何获取API密钥？</span>
        <span class="ml-2 text-success">查看文档</span>
      </template>
    </SkField>
  </div>
</template>
