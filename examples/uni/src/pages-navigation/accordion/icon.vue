<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <SkAccordion
    v-model="activeNames"
    expand-icon="i-lucide:chevron-up"
    collapse-icon="i-lucide:chevron-down"
  >
    <SkAccordionItem name="1" title="使用默认图标">
      使用 Accordion 组件的 expand-icon 和 collapse-icon 属性设置图标。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="左侧显示图标" icon="i-lucide:star">
      可以为单个 AccordionItem 设置自定义图标。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="右侧显示图标" icon="i-lucide:heart">
      图标会覆盖默认的展开/收起图标。
    </SkAccordionItem>
  </SkAccordion>

  <view class="sk-unit:mt-24" />

  <SkAccordion
    v-model="activeNames"
    icon-position="left"
    expand-icon="i-lucide:minus"
    collapse-icon="i-lucide:plus"
  >
    <SkAccordionItem name="4" title="图标在左侧">
      通过 icon-position 属性设置图标位置为左侧。
    </SkAccordionItem>
    <SkAccordionItem name="5" title="加减号图标">
      使用加减号作为展开/收起的图标。
    </SkAccordionItem>
  </SkAccordion>
</template>
