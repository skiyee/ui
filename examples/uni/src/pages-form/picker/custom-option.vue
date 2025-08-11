<script setup lang="ts">
import { ref } from 'vue'

const value = ref('user1')
const userOptions = [
  { label: '张三', value: 'user1', avatar: '👨‍💼', role: '管理员', department: '技术部' },
  { label: '李四', value: 'user2', avatar: '👩‍💻', role: '开发者', department: '技术部' },
  { label: '王五', value: 'user3', avatar: '👨‍🎨', role: '设计师', department: '设计部' },
  { label: '赵六', value: 'user4', avatar: '👩‍💼', role: '产品经理', department: '产品部' },
]
</script>

<template>
  <div class="w-full p-4">
    <SkPicker v-model="value" :columns="userOptions" :item-height="60">
      <template #option="{ option, selected }">
        <div class="flex items-center justify-center space-x-3 w-full px-4">
          <span class="text-title-medium">{{ option.avatar }}</span>
          <div class="flex flex-col">
            <text class="font-medium text-base" :class="[selected ? 'text-brand' : 'text-gray-800']">
              {{ option.label }}
            </text>
            <text class="text-xs text-gray-500 mt-1">
              {{ option.role }} · {{ option.department }}
            </text>
          </div>
        </div>
      </template>
    </SkPicker>
  </div>
</template>
