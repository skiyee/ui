<script setup lang="ts">
import { ref } from 'vue'

const option1 = ref(false)
const option2 = ref(true)
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <SkCheckbox v-model="option1">
      我同意用户协议和隐私政策
    </SkCheckbox>
    <SkCheckbox v-model="option2" label="接收产品更新和营销信息" />
  </div>
</template>
