<script setup lang="ts">
import { ref } from 'vue'

const activeIndex1 = ref(0)
const activeIndex2 = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        切换动画
      </text>
    </view>

    <view class="flex flex-col gap-24px">
      <view>
        <text class="text-body-small text-secondary mb-8px block">
          启用动画（默认）
        </text>
        <SkTabs v-model="activeIndex1" :animated="true">
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

      <view>
        <text class="text-body-small text-secondary mb-8px block">
          禁用动画
        </text>
        <SkTabs v-model="activeIndex2" :animated="false">
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
    </view>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium text-secondary">
        对比启用和禁用动画的切换效果
      </text>
    </view>
  </view>
</template>
