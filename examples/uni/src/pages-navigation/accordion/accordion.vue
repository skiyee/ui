<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref<string>('1')
</script>

<template>
  <SkAccordion v-model="activeName" accordion>
    <SkAccordionItem name="1" title="功能特性">
      组件库提供丰富的 UI 组件，满足各种业务场景需求。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="设计系统">
      采用统一的设计语言，提供一致的用户体验。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="主题定制">
      支持深色模式和自定义主题颜色。
    </SkAccordionItem>
    <SkAccordionItem name="4" title="性能优化">
      针对移动端进行优化，提供流畅的交互体验。
    </SkAccordionItem>
  </SkAccordion>
</template>
