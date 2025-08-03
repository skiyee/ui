<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['option3'])
const options = [
  [
    { label: '选项 1', value: 'option1' },
    { label: '选项 2', value: 'option2' },
    { label: '选项 3', value: 'option3' },
    { label: '选项 4', value: 'option4' },
    { label: '选项 5', value: 'option5' },
    { label: '选项 6', value: 'option6' },
    { label: '选项 7', value: 'option7' },
    { label: '选项 8', value: 'option8' },
    { label: '选项 9', value: 'option9' },
  ]
]
</script>

<template>
  <div class="w-full space-y-6">
    <div>
      <h4 class="mb-3 font-medium text-gray-700">显示 3 个选项</h4>
      <SkPicker v-model="value" :columns="options" :visible-item-count="3" />
    </div>
    
    <div>
      <h4 class="mb-3 font-medium text-gray-700">显示 5 个选项（默认）</h4>
      <SkPicker v-model="value" :columns="options" :visible-item-count="5" />
    </div>
    
    <div>
      <h4 class="mb-3 font-medium text-gray-700">显示 7 个选项</h4>
      <SkPicker v-model="value" :columns="options" :visible-item-count="7" />
    </div>
    
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
