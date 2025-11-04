<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const options = [
  { name: '选项一', value: 1 },
  { name: '选项二（禁用）', value: 2, disabled: true },
  { name: '选项三', value: 3 },
  { name: '选项四（禁用）', value: 4, disabled: true },
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
      禁用选项
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible"
    title="部分选项已禁用"
    :options="options"
    @select="handleSelect"
  />
</template>
