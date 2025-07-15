<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const lockScroll = ref(true)

function handleShow(lock: boolean) {
  lockScroll.value = lock
  visible.value = true
}
</script>

<template>
  <div class="flex flex-col p-4 gap-3">
    <div class="h-40 overflow-y-auto bg-gray-100 p-4 rounded-lg">
      <div class="h-400">
        <p class="mb-4">
          这是一个可滚动的内容区域
        </p>
        <p class="mb-4">
          当弹窗显示时，根据 lockScroll 设置：
        </p>
        <p class="mb-4">
          • lockScroll=true: 背景滚动被锁定
        </p>
        <p class="mb-4">
          • lockScroll=false: 背景可以正常滚动
        </p>
        <p class="mb-4">
          滚动内容...
        </p>
        <p class="mb-4">
          更多内容...
        </p>
        <p class="mb-4">
          继续滚动...
        </p>
        <p class="mb-4">
          底部内容
        </p>
      </div>
    </div>

    <SkButton label="锁定滚动弹窗" @click="handleShow(true)" />
    <SkButton label="允许滚动弹窗" @click="handleShow(false)" />

    <SkOverlay v-model:visible="visible" :lock-scroll="lockScroll">
      <div class="p-4 bg-page rounded-lg">
        <span class="block mb-3">锁定滚动: {{ lockScroll ? '是' : '否' }}</span>
        <SkButton label="关闭" size="small" @click="() => visible = false" />
      </div>
    </SkOverlay>
  </div>
</template>
