<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)

function handleChange(_index: number) {
  // 标签切换回调
}

function setTab(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <view class="p-16px">
    <view class="mb-16px">
      <text class="text-body-large font-semibold">
        受控模式
      </text>
    </view>

    <SkTabs v-model="activeIndex" @change="handleChange">
      <SkTab label="首页">
        <view class="p-16px">
          <text class="text-body-medium">
            首页内容
          </text>
        </view>
      </SkTab>
      <SkTab label="分类">
        <view class="p-16px">
          <text class="text-body-medium">
            分类内容
          </text>
        </view>
      </SkTab>
      <SkTab label="购物车">
        <view class="p-16px">
          <text class="text-body-medium">
            购物车内容
          </text>
        </view>
      </SkTab>
      <SkTab label="我的">
        <view class="p-16px">
          <text class="text-body-medium">
            我的内容
          </text>
        </view>
      </SkTab>
    </SkTabs>

    <view class="mt-16px p-16px bg-surface-container rounded-8px">
      <text class="text-body-medium mb-12px">
        当前激活: {{ ['首页', '分类', '购物车', '我的'][activeIndex] }}
      </text>

      <view class="flex gap-8px mt-16px">
        <SkButton size="small" @click="setTab(0)">
          切换到首页
        </SkButton>
        <SkButton size="small" @click="setTab(2)">
          切换到购物车
        </SkButton>
      </view>
    </view>
  </view>
</template>
