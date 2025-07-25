<script setup lang="ts">
import { ref } from 'vue'

const normalValue = ref('apple')
const disabledValue = ref('banana')

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '草莓', value: 'strawberry' },
]
</script>

<template>
  <div class="p-4 w-full space-y-6">
    <div>
      <h3 class="text-base font-medium mb-3">正常状态</h3>
      <SkRollerGroup :item-height="44" :visible-item-count="5">
        <SkRoller v-model="normalValue" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ normalValue }}
      </p>
    </div>

    <div>
      <h3 class="text-base font-medium mb-3">禁用状态</h3>
      <SkRollerGroup :item-height="44" :visible-item-count="5">
        <SkRoller v-model="disabledValue" :options="options" disabled />
      </SkRollerGroup>
      <p class="text-sm text-neutral-400 mt-2">
        选中值: {{ disabledValue }} (禁用状态)
      </p>
    </div>
  </div>
</template>
