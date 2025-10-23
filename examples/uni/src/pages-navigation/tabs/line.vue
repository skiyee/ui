<script setup lang="ts">
import { ref } from 'vue'

const activeIndex1 = ref(0)
const activeIndex2 = ref(0)
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        指示器宽度配置
      </text>
    </view>

    <view class="flex flex-col gap-24px">
      <view>
        <text class="text-body-small text-secondary mb-8px block">
          自动宽度（默认）
        </text>
        <SkTabs v-model="activeIndex1" line-width="auto">
          <SkTab label="标签1">
            <view class="p-16px">
              <text class="text-body-medium">
                标签1的内容
              </text>
            </view>
          </SkTab>
          <SkTab label="标签二">
            <view class="p-16px">
              <text class="text-body-medium">
                标签2的内容
              </text>
            </view>
          </SkTab>
          <SkTab label="标签三三三">
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
          固定宽度 (60px)
        </text>
        <SkTabs v-model="activeIndex2" :line-width="60">
          <SkTab label="标签1">
            <view class="p-16px">
              <text class="text-body-medium">
                标签1的内容
              </text>
            </view>
          </SkTab>
          <SkTab label="标签二">
            <view class="p-16px">
              <text class="text-body-medium">
                标签2的内容
              </text>
            </view>
          </SkTab>
          <SkTab label="标签三三三">
            <view class="p-16px">
              <text class="text-body-medium">
                标签3的内容
              </text>
            </view>
          </SkTab>
        </SkTabs>
      </view>
    </view>
  </view>
</template>
