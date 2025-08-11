<script setup lang="ts">
import { ref } from 'vue'

const value = ref(['1'])

// 非标准格式的数据
const rawData = [
  { id: 1, name: '北京', code: 'BJ', population: '2154万' },
  { id: 2, name: '上海', code: 'SH', population: '2489万' },
  { id: 3, name: '广州', code: 'GZ', population: '1881万' },
  { id: 4, name: '深圳', code: 'SZ', population: '1756万' },
  { id: 5, name: '杭州', code: 'HZ', population: '1220万' },
  { id: 6, name: '成都', code: 'CD', population: '2119万' },
]

// 数据转换函数
const transformData = (data: typeof rawData) => {
  return [
    data.map(item => ({
      label: `${item.name} (${item.code})`,
      value: item.id.toString(),
      population: item.population,
      code: item.code,
      name: item.name,
    })),
  ]
}
</script>

<template>
  <div class="w-full p-4">
    <SkPicker v-model="value" :columns="rawData" :transform="transformData" />
  </div>
</template>
