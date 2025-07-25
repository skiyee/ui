<script setup lang="ts">
import { ref } from 'vue'

const smallValue = ref('option2')
const mediumValue = ref('option2')
const largeValue = ref('option2')

const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
  { label: '选项 4', value: 'option4' },
  { label: '选项 5', value: 'option5' },
]
</script>

<template>
  <div class="p-4 w-full space-y-6">
    <div>
      <h3 class="text-base font-medium mb-3">小尺寸 (高度: 36px)</h3>
      <SkRollerGroup :item-height="36" :visible-item-count="5">
        <SkRoller v-model="smallValue" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ smallValue }}
      </p>
    </div>

    <div>
      <h3 class="text-base font-medium mb-3">中等尺寸 (高度: 44px)</h3>
      <SkRollerGroup :item-height="44" :visible-item-count="5">
        <SkRoller v-model="mediumValue" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ mediumValue }}
      </p>
    </div>

    <div>
      <h3 class="text-base font-medium mb-3">大尺寸 (高度: 56px)</h3>
      <SkRollerGroup :item-height="56" :visible-item-count="5">
        <SkRoller v-model="largeValue" :options="options" />
      </SkRollerGroup>
      <p class="text-sm text-primary mt-2">
        选中值: {{ largeValue }}
      </p>
    </div>
  </div>
</template>
