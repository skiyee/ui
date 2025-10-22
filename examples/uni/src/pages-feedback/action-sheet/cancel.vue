<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)

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

function handleCancel() {
  uni.showToast({
    title: '取消了操作',
    icon: 'none',
  })
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="visible1 = true">
      默认取消按钮
    </SkButton>

    <SkButton @click="visible2 = true">
      自定义取消文本
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible1"
    :options="options"
    @select="handleSelect"
    @cancel="handleCancel"
  />

  <SkActionSheet
    v-model:visible="visible2"
    :options="options"
    cancel-text="关闭"
    @select="handleSelect"
    @cancel="handleCancel"
  />
</template>
