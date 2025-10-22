<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        基础用法
      </text>
    </view>

    <SkTabs v-model="activeIndex">
      <SkTabItem label="标签1" />
      <SkTabItem label="标签2" />
      <SkTabItem label="标签3" />
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium">
        当前激活: 标签{{ activeIndex + 1 }}
      </text>
    </view>
  </view>
</template>
