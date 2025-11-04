<script setup lang="ts">
import { ref } from 'vue'

const activeNames = ref<string[]>(['1'])
</script>

<template>
  <SkAccordion v-model="activeNames">
    <SkAccordionItem name="1" title="正常项目">
      这是一个正常的手风琴项，可以正常展开和收起。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="禁用的项目" disabled>
      这个项目被禁用了，无法点击展开。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="另一个正常项">
      这也是一个正常的手风琴项。
    </SkAccordionItem>
    <SkAccordionItem name="4" title="第二个禁用项" disabled>
      这也是一个被禁用的项目。
    </SkAccordionItem>
  </SkAccordion>
</template>
