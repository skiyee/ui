<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['shanghai'])

// 创建级联数据
const cascadeData = [
  {
    label: '北京市',
    value: 'beijing',
    sub: [
      {
        label: '朝阳区',
        value: 'chaoyang',
        sub: [
          { label: '建国门街道', value: 'jianguomen' },
          { label: '东华门街道', value: 'donghuamen' },
        ],
      },
      {
        label: '海淀区',
        value: 'haidian',
        sub: [
          { label: '中关村街道', value: 'zhongguancun' },
          { label: '学院路街道', value: 'xueyuanlu' },
        ],
      },
    ],
  },
  {
    label: '上海市',
    value: 'shanghai',
    sub: [
      {
        label: '黄浦区',
        value: 'huangpu',
        sub: [
          { label: '南京东路街道', value: 'nanjingdonglu' },
          { label: '外滩街道', value: 'waitan' },
        ],
      },
    ],
  },
]
</script>

<template>
  <div class="w-full">
    <SkPicker
      v-model="value"
      :columns="cascadeData"
      :item-height="44"
      :visible-item-count="5"
    />
    <view class="result-display">
      <text class="result-label">
        选中值：
      </text>
      <text class="result-value">
        {{ JSON.stringify(value) }}
      </text>
    </view>
  </div>
</template>
