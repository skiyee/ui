<script setup lang="ts">
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        默认激活第二个标签
      </text>
    </view>

    <SkTabs :default-value="1">
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
            标签2的内容（默认激活）
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
      <text class="text-body-medium text-secondary">
        非受控模式下，使用 default-value 设置默认激活的标签
      </text>
    </view>
  </view>
</template>
