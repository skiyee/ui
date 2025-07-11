<script setup lang="ts">
import { ref } from 'vue'

const email = ref('invalid-email')
const customError = ref('')
const showCustomError = ref(false)

function toggleCustomError() {
  showCustomError.value = !showCustomError.value
}
</script>

<template>
  <div class="p-4 w-full flex flex-col gap-4">
    <SkField label="邮箱" error="请输入有效的邮箱地址">
      <SkInput v-model="email" placeholder="请输入邮箱" />
    </SkField>

    <SkField label="自定义错误样式">
      <SkInput placeholder="这个字段有自定义错误样式" />
      <template #error>
        <div class="flex items-center text-danger">
          <span>🚨</span>
          <span>这是使用插槽自定义的错误信息</span>
        </div>
      </template>
    </SkField>

    <div class="mt-2">
      <SkButton size="small" @click="toggleCustomError">
        {{ showCustomError ? '清除动态错误' : '显示动态错误' }}
      </SkButton>
    </div>

    <SkField label="动态错误" :error="showCustomError ? '这是一个动态显示的错误信息' : ''">
      <SkInput v-model="customError" placeholder="输入任意内容" />
    </SkField>
  </div>
</template>
