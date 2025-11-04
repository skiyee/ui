<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const options = [
  { name: '编辑', value: 'edit' },
  { name: '分享', value: 'share' },
  { name: '删除', value: 'delete', destructive: true },
]

function handleSelect(option: any) {
  if (option.destructive) {
    uni.showModal({
      title: '确认删除',
      content: '此操作不可恢复',
      success: (res) => {
        if (res.confirm) {
          uni.showToast({
            title: '已删除',
            icon: 'success',
          })
        }
      },
    })
  }
  else {
    uni.showToast({
      title: `选择了：${option.name}`,
      icon: 'none',
    })
  }
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="visible = true">
      危险操作样式
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible"
    title="选择操作"
    :options="options"
    @select="handleSelect"
  />
</template>
