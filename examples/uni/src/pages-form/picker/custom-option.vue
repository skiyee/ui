<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['user1'])
const userOptions = [
  [
    { 
      label: '张三', 
      value: 'user1',
      avatar: '👨‍💼',
      role: '管理员',
      department: '技术部'
    },
    { 
      label: '李四', 
      value: 'user2',
      avatar: '👩‍💻',
      role: '开发者',
      department: '技术部'
    },
    { 
      label: '王五', 
      value: 'user3',
      avatar: '👨‍🎨',
      role: '设计师',
      department: '设计部'
    },
    { 
      label: '赵六', 
      value: 'user4',
      avatar: '👩‍💼',
      role: '产品经理',
      department: '产品部'
    },
  ]
]

const handleChange = (event: any) => {
  console.log('自定义选项选择器变化:', event)
}
</script>

<template>
  <div class="w-full">
    <SkPicker 
      v-model="value" 
      :columns="userOptions"
      :item-height="60"
      @change="handleChange"
    >
      <template #option="{ option, selected }">
        <div class="flex items-center justify-center space-x-3 w-full px-4">
          <span class="text-2xl">{{ option.avatar }}</span>
          <div class="text-center flex-1">
            <div :class="['font-medium text-base', selected ? 'text-brand' : 'text-gray-800']">
              {{ option.label }}
            </div>
            <div class="text-xs text-gray-500 mt-1">
              {{ option.role }} · {{ option.department }}
            </div>
          </div>
        </div>
      </template>
    </SkPicker>
    
    <view class="result-display mt-4 p-4 bg-gray-50 rounded">
      <text class="result-label font-medium">
        选中值：
      </text>
      <text class="result-value">
        {{ JSON.stringify(value) }}
      </text>
    </view>
  </div>
</template>
