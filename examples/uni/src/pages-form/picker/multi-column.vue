<script setup lang="ts">
import { ref } from 'vue'

const multiValue = ref(['banana', 'orange'])
const multiColumnData = [
  [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape' },
    { label: '草莓', value: 'strawberry' },
  ],
  [
    { label: '红色', value: 'red' },
    { label: '橙色', value: 'orange' },
    { label: '黄色', value: 'yellow' },
    { label: '绿色', value: 'green' },
    { label: '蓝色', value: 'blue' },
  ]
]

const handleChange = (event: any) => {
  console.log('多列选择器变化:', event)
}
</script>

<template>
  <div class="w-full">
    <SkPicker
      v-model="multiValue"
      :columns="multiColumnData"
      :item-height="44"
      :visible-item-count="5"
      @change="handleChange"
    />
    <view class="result-display mt-4 p-4 bg-gray-50 rounded">
      <text class="result-label font-medium">
        选中值：
      </text>
      <text class="result-value">
        {{ JSON.stringify(multiValue) }}
      </text>
    </view>
  </div>
</template>
