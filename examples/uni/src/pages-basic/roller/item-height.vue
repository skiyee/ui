<script setup lang="ts">
import { ref } from 'vue'

const itemHeight = ref('44')

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
    <SkRollerGroup :item-height="Number(itemHeight)">
      <SkRoller v-model="value" :options="options" />
    </SkRollerGroup>

    <SkRadioGroup v-model="itemHeight" orientation="horizontal" clax="mt-1" @change="value = 'option1'">
      <SkRadio value="36" label="36px" />
      <SkRadio value="44" label="44px" />
      <SkRadio value="56" label="56px" />
    </SkRadioGroup>
  </div>
</template>
