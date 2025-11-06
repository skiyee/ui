<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <view class="p-16px overflow-auto">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        可滚动标签页
      </text>
    </view>

    <SkTabs v-model="activeIndex" scrollable>
      <SkTab
        v-for="i in 8"
        :key="i"
        :label="`标签${i}`"
      >
        <view class="p-16px">
          <text class="text-body-medium">
            标签{{ i }}的内容
          </text>
        </view>
      </SkTab>
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium">
        当前激活: 标签{{ activeIndex + 1 }}
      </text>
    </view>
  </view>
</template>
