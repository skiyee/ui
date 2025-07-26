<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref('apple')

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '草莓', value: 'strawberry' },
  // ... 更多选项
]
</script>

<template>
  <div class="p-4 w-full">
    <SkRollerGroup>
      <SkRoller v-model="selectedOption" :options="options" />
    </SkRollerGroup>

    <SkButton label="吃葡萄" size="small" @click="selectedOption = 'grape'" />
  </div>
</template>
