<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const selectedOption = ref('')

const options = [
  { name: '选项一', value: 1 },
  { name: '选项二', value: 2 },
  { name: '选项三', value: 3 },
]

function handleSelect(option: any) {
  selectedOption.value = option.name
  // 手动控制关闭
  visible.value = false
}

function handleCancel() {
  uni.showToast({
    title: '取消选择',
    icon: 'none',
  })
}

function handleClose() {
  // ActionSheet 已关闭
}

function handleOpen() {
  // ActionSheet 已打开
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="visible = true">
      受控模式
    </SkButton>

    <div
      v-if="selectedOption"
      class="text-secondary text-body-small"
    >
      当前选择：{{ selectedOption }}
    </div>
  </div>

  <SkActionSheet
    v-model:visible="visible"
    :options="options"
    :close-on-click-action="false"
    @select="handleSelect"
    @cancel="handleCancel"
    @open="handleOpen"
    @close="handleClose"
  />
</template>
