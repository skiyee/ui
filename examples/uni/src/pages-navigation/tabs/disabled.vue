<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        禁用状态
      </text>
    </view>

    <view class="mb-24px">
      <text class="text-body-small text-secondary mb-8px block">
        部分标签禁用
      </text>
      <SkTabs v-model="activeIndex">
        <SkTab label="标签1">
          <view class="p-16px">
            <text class="text-body-medium">
              标签1的内容
            </text>
          </view>
        </SkTab>
        <SkTab label="标签2" disabled>
          <view class="p-16px">
            <text class="text-body-medium">
              标签2的内容（已禁用）
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
        <SkTab label="标签4" disabled>
          <view class="p-16px">
            <text class="text-body-medium">
              标签4的内容（已禁用）
            </text>
          </view>
        </SkTab>
      </SkTabs>
    </view>

    <view class="mb-24px">
      <text class="text-body-small text-secondary mb-8px block">
        整个标签页禁用
      </text>
      <SkTabs disabled>
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

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium">
        当前激活: 标签{{ activeIndex + 1 }}
      </text>
    </view>
  </view>
</template>
