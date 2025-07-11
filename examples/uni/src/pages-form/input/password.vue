<script setup lang="ts">
import { ref } from 'vue'

const passwordValue = ref()
const numericPasswordValue = ref()
</script>

<template>
  <div class="flex flex-col gap-3 p-4 w-full">
    <SkInput
      v-model="passwordValue"
      placeholder="请输入密码"
      password
    />
    <SkInput
      v-model="numericPasswordValue"
      type="number"
      placeholder="请输入6位数字密码"
      password
    />
  </div>
</template>
