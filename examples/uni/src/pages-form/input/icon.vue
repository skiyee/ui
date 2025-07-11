<script setup lang="ts">
import { ref } from 'vue'

const searchValue = ref('')
const infoValue = ref('')
const prefixValue = ref('')
const combinedValue = ref('')
</script>

<template>
  <div class="flex flex-col gap-3 p-4 w-full">
    <SkInput
      v-model="searchValue"
      placeholder="搜索内容..."
    >
      <template #leading="{ clax }">
        <SkIcon name="i-lucide:search" size="18px" :clax="clax" />
      </template>
    </SkInput>
    <SkInput
      v-model="infoValue"
      placeholder="输入信息..."
    >
      <template #trailing="{ clax }">
        <SkIcon name="i-lucide:info" size="18px" :clax="clax" />
      </template>
    </SkInput>

    <SkInput
      v-model="prefixValue"
      type="number"
      placeholder="0.00"
    >
      <template #leading="{ clax }">
        <span :class="clax">￥</span>
      </template>
    </SkInput>
    <SkInput
      v-model="combinedValue"
      placeholder="距离"
      type="number"
    >
      <template #leading="{ clax }">
        <SkIcon name="i-lucide:map-pin" size="16px" :clax="[clax, 'text-brand']" />
      </template>
      <template #trailing="{ clax }">
        <span :class="clax">km</span>
      </template>
    </SkInput>
  </div>
</template>
