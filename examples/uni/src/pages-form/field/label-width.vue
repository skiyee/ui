<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const mountain = ref('')
</script>

<template>
  <div class="p-4 w-full space-y-4">
    <SkField label="姓名" orientation="horizontal">
      <SkInput v-model="name" placeholder="请输入姓名" />
    </SkField>
    <SkField label="三山五岳" orientation="horizontal" label-width="100px">
      <SkInput v-model="mountain" placeholder="请输入三山五岳" />
    </SkField>
  </div>
</template>
