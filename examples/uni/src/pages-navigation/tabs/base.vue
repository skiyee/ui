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
  </view>
</template>
