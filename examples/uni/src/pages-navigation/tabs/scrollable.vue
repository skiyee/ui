<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        可滚动标签页
      </text>
    </view>

    <SkTabs v-model="activeIndex" scrollable>
      <SkTabItem label="标签1" />
      <SkTabItem label="标签2" />
      <SkTabItem label="标签3" />
      <SkTabItem label="标签4" />
      <SkTabItem label="标签5" />
      <SkTabItem label="标签6" />
      <SkTabItem label="标签7" />
      <SkTabItem label="标签8" />
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium">
        当前激活: 标签{{ activeIndex + 1 }}
      </text>
    </view>
  </view>
</template>
