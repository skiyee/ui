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
    }))
  ]
}

const handleChange = (event: any) => {
  console.log('转换数据选择器变化:', event)
}

// 获取选中城市的详细信息
const getSelectedCity = () => {
  const selectedId = value.value[0]
  return rawData.find(city => city.id.toString() === selectedId)
}
</script>

<template>
  <div class="w-full">
    <div class="mb-4">
      <h4 class="font-medium text-gray-700 mb-2">原始数据格式</h4>
      <pre class="text-xs bg-gray-100 p-3 rounded overflow-x-auto">{{ JSON.stringify(rawData[0], null, 2) }}</pre>
    </div>
    
    <SkPicker 
      v-model="value" 
      :columns="rawData" 
      :transform="transformData"
      @change="handleChange"
    />
    
    <view class="result-display mt-4 p-4 bg-gray-50 rounded">
      <text class="result-label font-medium">
        选中值：
      </text>
      <text class="result-value">
        {{ JSON.stringify(value) }}
      </text>
    </view>
    
    <view v-if="getSelectedCity()" class="city-info mt-4 p-4 bg-blue-50 rounded">
      <text class="city-info-title font-medium text-blue-800 block mb-2">
        选中城市详情：
      </text>
      <view class="city-details space-y-1">
        <text class="city-detail text-sm text-blue-700 block">
          城市：{{ getSelectedCity()?.name }}
        </text>
        <text class="city-detail text-sm text-blue-700 block">
          代码：{{ getSelectedCity()?.code }}
        </text>
        <text class="city-detail text-sm text-blue-700 block">
          人口：{{ getSelectedCity()?.population }}
        </text>
      </view>
    </view>
  </div>
</template>
