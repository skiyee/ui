<script setup lang="ts">
import { ref } from 'vue'

const itemHeight = ref('36')

const value = ref('medium')
const sizeOptions = [
  { label: '小号 (36px)', value: 'small' },
  { label: '中号 (44px)', value: 'medium' },
  { label: '大号 (56px)', value: 'large' },
]
</script>

<template>
  <div class="w-full p-4 space-y-6">
    <SkPicker v-model="value" :columns="sizeOptions" :item-height="Number(itemHeight)" />

    <SkRadioGroup v-model="itemHeight" orientation="horizontal" clax="mt-1" @change="value = 'small'">
      <SkRadio value="36" label="36px" />
      <SkRadio value="44" label="44px" />
      <SkRadio value="56" label="56px" />
    </SkRadioGroup>
  </div>
</template>
