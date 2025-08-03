<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['medium'])
const sizeOptions = [
  [
    { label: '小号 (32px)', value: 'small' },
    { label: '中号 (44px)', value: 'medium' },
    { label: '大号 (56px)', value: 'large' },
  ]
]
</script>

<template>
  <div class="w-full space-y-6">
    <div>
      <h4 class="mb-3 font-medium text-gray-700">小号选项 (32px)</h4>
      <SkPicker v-model="value" :columns="sizeOptions" :item-height="32" />
    </div>
    
    <div>
      <h4 class="mb-3 font-medium text-gray-700">中号选项 (44px)</h4>
      <SkPicker v-model="value" :columns="sizeOptions" :item-height="44" />
    </div>
    
    <div>
      <h4 class="mb-3 font-medium text-gray-700">大号选项 (56px)</h4>
      <SkPicker v-model="value" :columns="sizeOptions" :item-height="56" />
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
