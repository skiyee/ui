<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <SkAccordion v-model="activeNames">
    <SkAccordionItem name="1" title="自定义标题插槽">
      <template #title>
        <view class="flex items-center sk-unit:gap-8">
          <SkIcon name="i-lucide:rocket" class="text-brand" />
          <text class="font-bold text-brand">
            自定义标题样式
          </text>
        </view>
      </template>
      使用 title 插槽可以完全自定义标题区域的内容和样式。
    </SkAccordionItem>

    <SkAccordionItem name="2" title="自定义图标插槽">
      <template #icon>
        <SkIcon name="i-lucide:settings" class="text-warning" />
      </template>
      使用 icon 插槽可以自定义图标的内容。
    </SkAccordionItem>

    <SkAccordionItem name="3" title="丰富的内容">
      <view class="flex flex-col sk-unit:gap-12">
        <view class="text-body-medium text-primary">
          内容区域支持任意复杂的布局：
        </view>
        <view class="flex flex-col sk-unit:gap-8">
          <view class="flex items-center sk-unit:gap-8">
            <SkIcon name="i-lucide:check" class="text-success" />
            <text>支持文本</text>
          </view>
          <view class="flex items-center sk-unit:gap-8">
            <SkIcon name="i-lucide:check" class="text-success" />
            <text>支持图标</text>
          </view>
          <view class="flex items-center sk-unit:gap-8">
            <SkIcon name="i-lucide:check" class="text-success" />
            <text>支持按钮等交互组件</text>
          </view>
        </view>
        <SkButton size="small" class="self-start">
          了解更多
        </SkButton>
      </view>
    </SkAccordionItem>

    <SkAccordionItem name="4">
      <template #title>
        <view class="flex items-center justify-between w-full sk-unit:pr-8">
          <view class="flex items-center sk-unit:gap-8">
            <SkBadge content="NEW" color="danger" size="small" />
            <text>带徽章的标题</text>
          </view>
          <text class="text-body-small text-tertiary">
            2024-01-01
          </text>
        </view>
      </template>
      完全自定义的标题可以包含任何你想要的内容。
    </SkAccordionItem>
  </SkAccordion>
</template>
