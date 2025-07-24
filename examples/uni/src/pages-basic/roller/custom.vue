<script setup lang="ts">
import { computed, ref } from 'vue'

const selectedCity = ref('beijing')

const cityOptions = [
  {
    label: '北京',
    value: 'beijing',
    icon: 'i-lucide:building-2',
    description: '首都',
  },
  {
    label: '上海',
    value: 'shanghai',
    icon: 'i-lucide:landmark',
    description: '魔都',
  },
  {
    label: '广州',
    value: 'guangzhou',
    icon: 'i-lucide:palmtree',
    description: '花城',
  },
  {
    label: '深圳',
    value: 'shenzhen',
    icon: 'i-lucide:zap',
    description: '科技之城',
  },
  {
    label: '杭州',
    value: 'hangzhou',
    icon: 'i-lucide:waves',
    description: '人间天堂',
  },
  {
    label: '成都',
    value: 'chengdu',
    icon: 'i-lucide:coffee',
    description: '天府之国',
  },
  {
    label: '西安',
    value: 'xian',
    icon: 'i-lucide:castle',
    description: '古都',
  },
]

const selectedCityInfo = computed(() => {
  return cityOptions.find(city => city.value === selectedCity.value)
})
</script>

<template>
  <div class="p-4 w-full">
    <h3 class="text-base font-medium mb-3">
      城市选择器 (自定义选项)
    </h3>

    <SkRollerGroup :item-height="60" :visible-item-count="5">
      <SkRoller v-model="selectedCity" :options="cityOptions">
        <template #option="{ option, selected }">
          <div class="flex items-center gap-3 px-4 py-2">
            <SkIcon
              :name="option.icon"
              class="text-lg" :class="selected ? 'text-brand-500' : 'text-neutral-400'"
            />
            <div class="flex-1">
              <div
                class="font-medium" :class="selected ? 'text-neutral-900' : 'text-neutral-600'"
              >
                {{ option.label }}
              </div>
              <div
                class="text-xs" :class="[
                  selected ? 'text-neutral-500' : 'text-neutral-400',
                ]"
              >
                {{ option.description }}
              </div>
            </div>
          </div>
        </template>
      </SkRoller>
    </SkRollerGroup>

    <div class="mt-4 p-3 bg-neutral-50 rounded-lg">
      <p class="text-sm text-primary">
        选中城市: {{ selectedCityInfo?.label }} ({{ selectedCityInfo?.description }})
      </p>
    </div>
  </div>
</template>
