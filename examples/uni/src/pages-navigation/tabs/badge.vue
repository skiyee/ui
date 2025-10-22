<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        带徽标的标签页
      </text>
    </view>

    <SkTabs v-model="activeIndex">
      <SkTabItem label="消息" badge="99+" />
      <SkTabItem label="通知" badge="3" />
      <SkTabItem label="动态" />
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium">
        当前激活: {{ ['消息', '通知', '动态'][activeIndex] }}
      </text>
    </view>
  </view>
</template>
