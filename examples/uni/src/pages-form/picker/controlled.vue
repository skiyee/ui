<script setup lang="ts">
import { ref } from 'vue'

const singleValue = ref(['banana'])
const singleColumnData = [
  [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape' },
    { label: '草莓', value: 'strawberry' },
  ]
]

const handleChange = (event: any) => {
  console.log('选择器变化:', event)
}
</script>

<template>
  <div class="w-full">
    <SkPicker
      v-model="singleValue"
      :columns="singleColumnData"
      :item-height="44"
      :visible-item-count="5"
      @change="handleChange"
    />
    <view class="result-display mt-4 p-4 bg-gray-50 rounded">
      <text class="result-label font-medium">
        选中值：
      </text>
      <text class="result-value">
        {{ JSON.stringify(singleValue) }}
      </text>
    </view>
  </div>
</template>
