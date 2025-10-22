<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1', '3'])
</script>

<template>
  <SkAccordion v-model="activeNames">
    <SkAccordionItem name="1" title="基础组件">
      包括按钮、图标、徽章等基础 UI 组件。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="表单组件">
      包括输入框、复选框、单选框、开关等表单组件。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="反馈组件">
      包括对话框、提示框、加载动画等反馈组件。
    </SkAccordionItem>
    <SkAccordionItem name="4" title="导航组件">
      包括标签页、手风琴、下拉菜单等导航组件。
    </SkAccordionItem>
  </SkAccordion>
</template>
