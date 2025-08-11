<script setup lang="ts">
import { ref } from 'vue'

const singleValue = ref(['banana'])
const singleColumnData = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '草莓', value: 'strawberry' },
]
</script>

<template>
  <div class="w-full p-4">
    <SkPicker v-model="singleValue" :columns="singleColumnData" />

    <text class="text-body-medium font-medium">
      选中值：{{ JSON.stringify(singleValue) }}
    </text>
  </div>
</template>
