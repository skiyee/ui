<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
const logs = ref<string[]>([])

function handleChange(index: number) {
  const message = `切换到标签 ${index + 1}`
  logs.value.unshift(message)

  // 最多保留 5 条日志
  if (logs.value.length > 5) {
    logs.value.pop()
  }

  uni.showToast({
    title: message,
    icon: 'none',
    duration: 1500,
  })
}

function handleClick(_index: number) {
  // 点击事件处理
}
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        监听切换事件
      </text>
    </view>

    <SkTabs
      v-model="activeIndex"
      @change="handleChange"
      @click="handleClick"
    >
      <SkTab label="标签1">
        <view class="p-16px">
          <text class="text-body-medium">
            标签1的内容
          </text>
        </view>
      </SkTab>
      <SkTab label="标签2">
        <view class="p-16px">
          <text class="text-body-medium">
            标签2的内容
          </text>
        </view>
      </SkTab>
      <SkTab label="标签3">
        <view class="p-16px">
          <text class="text-body-medium">
            标签3的内容
          </text>
        </view>
      </SkTab>
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium font-semibold mb-8px block">
        事件日志:
      </text>
      <view v-if="logs.length === 0" class="text-body-small text-secondary">
        暂无日志，请切换标签
      </view>
      <view v-else class="flex flex-col gap-4px">
        <text
          v-for="(log, index) in logs"
          :key="index"
          class="text-body-small text-secondary"
        >
          {{ log }}
        </text>
      </view>
    </view>
  </view>
</template>
