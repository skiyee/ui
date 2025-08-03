<script setup lang="ts">
import { ref } from 'vue'

const singleValue = ref(['banana', 'banana'])
const singleColumnData = [
  [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape' },
    { label: '草莓', value: 'strawberry' },
  ],
  [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape' },
    { label: '草莓', value: 'strawberry' },
  ],
]

const handleSingleChange = (event: any) => {
  console.log('单列选择器变化:', event)
}

const handleSingleComplete = (event: any) => {
  console.log('单列选择器完成:', event)
  uni.showToast({
    title: `选择了: ${event.options[0]?.label}`,
    icon: 'none',
  })
}
</script>

<template>
  <div class="w-full">
    <SkPicker
      v-model="singleValue"
      :columns="singleColumnData"
      :item-height="44"
      :visible-item-count="5"
      @change="handleSingleChange"
      @complete="handleSingleComplete"
    />
    <view class="result-display">
      <text class="result-label">
        选中值：
      </text>
      <text class="result-value">
        {{ JSON.stringify(singleValue) }}
      </text>
    </view>
  </div>
</template>
