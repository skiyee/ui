<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const selectedOption = ref('a')

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '草莓', value: 'strawberry' },
  { label: '西瓜', value: 'watermelon' },
  { label: '芒果', value: 'mango' },
  { label: '菠萝', value: 'pineapple' },
  { label: '梨子', value: 'pear' },
  { label: '桃子', value: 'peach' },
  { label: '李子', value: 'plum' },
  { label: '樱桃', value: 'cherry' },
  { label: '龙眼', value: 'longan' },
  { label: '柚子', value: 'grapefruit' },
  { label: '猕猴桃', value: 'kiwi' },
  { label: '哈密瓜', value: 'melon' },
  { label: '荔枝', value: 'lychee' },
  { label: '橄榄', value: 'olive' },
  { label: '石榴', value: 'pomegranate' },
]
</script>

<template>
  <div class="p-4 w-full">
    <SkRollerGroup :item-height="44" :visible-item-count="5">
      <SkRoller v-model="selectedOption" :options="options" />
    </SkRollerGroup>

    <p class="text-sm text-primary mt-2">
      选中值: {{ options || '(未选择)' }}
    </p>
  </div>
</template>
