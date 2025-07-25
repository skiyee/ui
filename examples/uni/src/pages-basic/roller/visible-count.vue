<script setup lang="ts">
import { ref } from 'vue'

const value3 = ref('option2')
const value5 = ref('option3')
const value7 = ref('option4')

const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
  { label: '选项 4', value: 'option4' },
  { label: '选项 5', value: 'option5' },
  { label: '选项 6', value: 'option6' },
  { label: '选项 7', value: 'option7' },
  { label: '选项 8', value: 'option8' },
  { label: '选项 9', value: 'option9' },
]
</script>

<template>
  <div class="p-4 w-full space-y-6">
    <div>
      <h3 class="text-base font-medium mb-3">显示 3 项</h3>
      <SkRollerGroup :item-height="44" :visible-item-count="3">
        <SkRoller v-model="value3" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ value3 }}
      </p>
    </div>

    <div>
      <h3 class="text-base font-medium mb-3">显示 5 项 (默认)</h3>
      <SkRollerGroup :item-height="44" :visible-item-count="5">
        <SkRoller v-model="value5" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ value5 }}
      </p>
    </div>

    <div>
      <h3 class="text-base font-medium mb-3">显示 7 项</h3>
      <SkRollerGroup :item-height="44" :visible-item-count="7">
        <SkRoller v-model="value7" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ value7 }}
      </p>
    </div>
  </div>
</template>
