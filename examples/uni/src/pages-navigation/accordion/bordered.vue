<script setup lang="ts">
import { ref } from 'vue'

const activeNames1 = ref<string[]>(['1'])
const activeNames2 = ref<string[]>(['1'])
</script>

<template>
  <view class="text-body-medium text-secondary sk-unit:mb-12">
    有边框（默认）
  </view>
  <SkAccordion v-model="activeNames1" :border="true">
    <SkAccordionItem name="1" title="标题 1">
      有边框的手风琴，所有项被包裹在一个带边框的容器中。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="标题 2">
      项与项之间有分隔线。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="标题 3">
      整体更加紧凑和统一。
    </SkAccordionItem>
  </SkAccordion>

  <view class="text-body-medium text-secondary sk-unit:(mt-24 mb-12)">
    无边框
  </view>
  <SkAccordion v-model="activeNames2" :border="false">
    <SkAccordionItem name="1" title="标题 1">
      无边框的手风琴，每个项独立显示。
    </SkAccordionItem>
    <SkAccordionItem name="2" title="标题 2">
      项与项之间有间距。
    </SkAccordionItem>
    <SkAccordionItem name="3" title="标题 3">
      视觉上更加轻量和分散。
    </SkAccordionItem>
  </SkAccordion>
</template>
