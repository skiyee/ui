<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <SkAccordion v-model="activeNames">
    <SkAccordionItem name="1" title="什么是 Skiyee UI？">
      Skiyee UI 是一个基于 uni-app 的跨平台 UI 组件库，支持 H5、小程序、APP 等多个平台。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="如何安装？">
      使用 npm 或 pnpm 安装：pnpm add @skiyee/uni-ui
    </SkAccordionItem>
    <SkAccordionItem name="3" title="支持哪些平台？">
      支持 H5、微信小程序、支付宝小程序、APP 等 uni-app 支持的所有平台。
    </SkAccordionItem>
  </SkAccordion>
</template>
