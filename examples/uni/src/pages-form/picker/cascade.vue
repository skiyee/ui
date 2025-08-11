<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['fruit', 'melons', 'watermelon'])

// 创建级联数据
const cascadeData = [
  {
    label: '水果',
    value: 'fruit',
    sub: [
      {
        label: '瓜果类',
        value: 'melons',
        sub: [
          { label: '西瓜', value: 'watermelon' },
          { label: '哈密瓜', value: 'cantaloupe' },
        ],
      },
      {
        label: '柑橘类',
        value: 'citrus',
        sub: [
          { label: '橙子', value: 'orange' },
          { label: '柠檬', value: 'lemon' },
        ],
      },
    ],
  },
  {
    label: '食材',
    value: 'food',
    sub: [
      {
        label: '海鲜',
        value: 'seafood',
        sub: [
          { label: '鱼', value: 'fish' },
          { label: '蟹', value: 'crab' },
        ],
      },
    ],
  },
]
</script>

<template>
  <div class="w-full p-4">
    <SkPicker v-model="value" :columns="cascadeData" />

    <text class="text-body-medium font-medium">
      选中值：{{ JSON.stringify(value) }}
    </text>
  </div>
</template>
