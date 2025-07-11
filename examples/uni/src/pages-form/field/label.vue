<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const note = ref('')
</script>

<template>
  <div class="w-full p-4 flex flex-col gap-4">
    <SkField label="姓名">
      <SkInput v-model="name" placeholder="请输入您的姓名" />
    </SkField>
    <SkField>
      <template #label>
        <div class="flex items-center">
          <span>性别</span>
          <SkIcon name="i-lucide:pencil-line" clax="sk-unit:ml-4 text-danger" />
        </div>
      </template>
      <SkInput v-model="note" placeholder="备注信息（无标签字段）" />
    </SkField>
  </div>
</template>
