<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref('watermelon')

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
    <SkRollerGroup>
      <SkRoller v-model="selectedOption" :options="options" />
    </SkRollerGroup>
  </div>
</template>
