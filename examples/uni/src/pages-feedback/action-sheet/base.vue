<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const options = [
  { name: '选项一', value: 1 },
  { name: '选项二', value: 2 },
  { name: '选项三', value: 3 },
]

function handleSelect(option: any) {
  uni.showToast({
    title: `选择了：${option.name}`,
    icon: 'none',
  })
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="visible = true">
      基础用法
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible"
    :options="options"
    @select="handleSelect"
  />
</template>
