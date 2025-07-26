<script setup lang="ts">
import { ref } from 'vue'

const visibleItemCount = ref('3')

const value = ref('option2')

const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
  { label: '选项 4', value: 'option4' },
  { label: '选项 5', value: 'option5' },
]
</script>

<template>
  <div class="p-4 w-full">
    <SkRollerGroup :visible-item-count="Number(visibleItemCount)">
      <SkRoller v-model="value" :options="options" />
    </SkRollerGroup>

    <SkRadioGroup v-model="visibleItemCount" orientation="horizontal" clax="mt-1" @change="value = 'option1'">
      <SkRadio value="3" label="3项" />
      <SkRadio value="5" label="5项" />
      <SkRadio value="7" label="7项" />
    </SkRadioGroup>
  </div>
</template>
