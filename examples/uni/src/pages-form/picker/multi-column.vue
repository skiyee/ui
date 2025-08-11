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
  ],
]
</script>

<template>
  <div class="w-full p-4">
    <SkPicker v-model="multiValue" :columns="multiColumnData" />

    <text class="text-body-medium font-medium">
      选中值：{{ JSON.stringify(multiValue) }}
    </text>
  </div>
</template>
