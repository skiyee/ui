<script setup lang="ts">
import { ref } from 'vue'

const selectedCity = ref('beijing')

const cityOptions = [
  { label: '北京', value: 'beijing', icon: 'i-lucide:building-2', description: '首都' },
  { label: '上海', value: 'shanghai', icon: 'i-lucide:landmark', description: '魔都' },
  { label: '广州', value: 'guangzhou', icon: 'i-lucide:palmtree', description: '花城' },
  { label: '深圳', value: 'shenzhen', icon: 'i-lucide:zap', description: '科技之城' },
  { label: '杭州', value: 'hangzhou', icon: 'i-lucide:waves', description: '人间天堂' },
  { label: '成都', value: 'chengdu', icon: 'i-lucide:coffee', description: '天府之国' },
  { label: '西安', value: 'xian', icon: 'i-lucide:castle', description: '古都' },
]
</script>

<template>
  <div class="p-4 w-full">
    <SkRollerGroup :item-height="56" :visible-item-count="5">
      <SkRoller v-model="selectedCity" :options="cityOptions">
        <template #option="{ option, selected }">
          <div class="flex items-center gap-3">
            <SkIcon :name="option.icon" size="24rpx" :clax="selected ? 'text-brand' : 'text-neutral'" />
            <span class="font-bold" :class="selected ? 'text-brand' : 'text-neutral'">
              {{ option.label }}
            </span>
            <span class="text-xs" :class="selected ? 'text-description' : 'text-placeholder'">
              {{ option.description }}
            </span>
          </div>
        </template>
      </SkRoller>
    </SkRollerGroup>
  </div>
</template>
