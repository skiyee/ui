<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
</script>

<template>
  <div class="p-4 w-full space-y-4">
    <SkField label="姓名" orientation="vertical" description="垂直布局，标签在上方" required>
      <SkInput v-model="name" placeholder="请输入姓名" />
    </SkField>

    <SkField label="邮箱地址" orientation="vertical" description="标签和输入框垂直排列">
      <SkInput v-model="email" placeholder="请输入邮箱" />
    </SkField>

    <SkField label="手机号" orientation="horizontal" description="水平布局，标签在左侧">
      <SkInput v-model="phone" placeholder="请输入手机号" />
    </SkField>

    <SkField
      label="地址"
      orientation="horizontal"
      description="标签和输入框水平排列"
      error="一些错误信息展示"
      required
    >
      <SkInput v-model="address" placeholder="请输入地址" />
    </SkField>
  </div>
</template>
