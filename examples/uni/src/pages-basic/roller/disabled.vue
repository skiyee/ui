<script setup lang="ts">
import { ref } from 'vue'

const isDisabled = ref(false)

const value = ref('apple')

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '草莓', value: 'strawberry' },
]
</script>

<template>
  <div class="p-4 w-full">
    <SkRollerGroup>
      <SkRoller v-model="value" :options="options" :disabled="isDisabled" />
    </SkRollerGroup>

    <SkButton size="small" @click="isDisabled = !isDisabled">
      {{ isDisabled ? '启用' : '禁用' }}滚动
    </SkButton>
  </div>
</template>
