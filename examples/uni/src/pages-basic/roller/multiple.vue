<script setup lang="ts">
import { ref } from 'vue'

const selectedCuisine = ref('chinese')
const selectedPrice = ref('medium')
const selectedDistance = ref('1km')

const cuisineOptions = [
  { label: '中餐', value: 'chinese' },
  { label: '西餐', value: 'western' },
  { label: '日料', value: 'japanese' },
  { label: '韩料', value: 'korean' },
  { label: '泰餐', value: 'thai' },
]

const priceOptions = [
  { label: '￥', value: 'budget' },
  { label: '￥￥', value: 'medium' },
  { label: '￥￥￥', value: 'expensive' },
]

const distanceOptions = [
  { label: '500米', value: '500m' },
  { label: '1公里', value: '1km' },
  { label: '3公里', value: '3km' },
  { label: '5公里', value: '5km' },
]
</script>

<template>
  <div class="p-4 w-full box-border">
    <SkRollerGroup>
      <SkRoller v-model="selectedCuisine" :options="cuisineOptions" />
      <SkRoller v-model="selectedPrice" :options="priceOptions" />
      <SkRoller v-model="selectedDistance" :options="distanceOptions" />
    </SkRollerGroup>
  </div>
</template>
