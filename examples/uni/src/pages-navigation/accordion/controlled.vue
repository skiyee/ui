<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])

function expandAll() {
  activeNames.value = ['1', '2', '3', '4']
}

function collapseAll() {
  activeNames.value = []
}

function toggleFirst() {
  const index = activeNames.value.indexOf('1')
  if (index > -1) {
    activeNames.value.splice(index, 1)
  }
  else {
    activeNames.value.push('1')
  }
}
</script>

<template>
  <view class="flex sk-unit:(gap-12 mb-16)">
    <SkButton size="small" @click="expandAll">
      全部展开
    </SkButton>
    <SkButton size="small" @click="collapseAll">
      全部收起
    </SkButton>
    <SkButton size="small" @click="toggleFirst">
      切换第一项
    </SkButton>
  </view>

  <SkAccordion v-model="activeNames">
    <SkAccordionItem name="1" title="React 框架">
      React 是一个用于构建用户界面的 JavaScript 库。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="Vue 框架">
      Vue 是一套用于构建用户界面的渐进式框架。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="Angular 框架">
      Angular 是一个应用设计框架与开发平台。
    </SkAccordionItem>
    <SkAccordionItem name="4" title="Svelte 框架">
      Svelte 是一种全新的构建用户界面的方法。
    </SkAccordionItem>
  </SkAccordion>

  <view class="text-body-small text-tertiary sk-unit:mt-16">
    当前展开项：{{ activeNames.length > 0 ? activeNames.join(', ') : '无' }}
  </view>
</template>
