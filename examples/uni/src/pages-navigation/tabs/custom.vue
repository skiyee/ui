<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        自定义标签内容
      </text>
    </view>

    <SkTabs v-model="activeIndex">
      <SkTabItem icon="home-line">
        <text>首页</text>
      </SkTabItem>
      <SkTabItem icon="user-line">
        <text>用户</text>
      </SkTabItem>
      <SkTabItem icon="settings-line">
        <text>设置</text>
      </SkTabItem>
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium">
        当前激活: {{ ['首页', '用户', '设置'][activeIndex] }}
      </text>
    </view>
  </view>
</template>
