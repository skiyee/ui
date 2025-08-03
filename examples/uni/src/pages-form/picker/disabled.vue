<script setup lang="ts">
import { ref } from 'vue'

const normalValue = ref(['apple'])
const disabledValue = ref(['banana'])
const options = [
  [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape' },
    { label: '草莓', value: 'strawberry' },
  ]
]

const handleNormalChange = (event: any) => {
  console.log('正常状态选择器变化:', event)
}
</script>

<template>
  <div class="w-full space-y-6">
    <div>
      <h4 class="mb-3 font-medium text-gray-700">正常状态</h4>
      <SkPicker 
        v-model="normalValue" 
        :columns="options" 
        @change="handleNormalChange"
      />
      <view class="result-display mt-2 p-3 bg-green-50 rounded">
        <text class="result-label text-sm font-medium text-green-700">
          选中值：
        </text>
        <text class="result-value text-sm text-green-600">
          {{ JSON.stringify(normalValue) }}
        </text>
      </view>
    </div>
    
    <div>
      <h4 class="mb-3 font-medium text-gray-700">禁用状态</h4>
      <SkPicker 
        v-model="disabledValue" 
        :columns="options" 
        disabled 
      />
      <view class="result-display mt-2 p-3 bg-gray-50 rounded">
        <text class="result-label text-sm font-medium text-gray-500">
          选中值：
        </text>
        <text class="result-value text-sm text-gray-400">
          {{ JSON.stringify(disabledValue) }}
        </text>
      </view>
    </div>
  </div>
</template>
