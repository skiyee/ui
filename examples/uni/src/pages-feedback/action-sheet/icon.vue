<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const options = [
  {
    name: '微信',
    icon: 'wechat',
    value: 'wechat',
  },
  {
    name: '朋友圈',
    icon: 'moments',
    value: 'moments',
  },
  {
    name: '微博',
    icon: 'weibo',
    value: 'weibo',
  },
  {
    name: 'QQ',
    icon: 'qq',
    value: 'qq',
  },
]

function handleSelect(option: any) {
  uni.showToast({
    title: `分享到：${option.name}`,
    icon: 'none',
  })
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="visible = true">
      带图标
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible"
    title="分享到"
    :options="options"
    @select="handleSelect"
  />
</template>
