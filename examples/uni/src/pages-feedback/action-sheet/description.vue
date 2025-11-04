<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const options = [
  {
    name: '拍照',
    description: '使用相机拍摄照片',
    value: 'camera',
  },
  {
    name: '从相册选择',
    description: '从手机相册中选择图片',
    value: 'album',
  },
  {
    name: '从文件选择',
    description: '从文件管理器中选择',
    value: 'file',
  },
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
      带描述文字
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible"
    title="请选择上传方式"
    :options="options"
    @select="handleSelect"
  />
</template>
