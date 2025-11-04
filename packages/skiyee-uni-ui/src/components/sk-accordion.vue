<script lang="ts">
/**
 * sk-accordion 组件 - 手风琴组件（父组件）
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-accordion v-model="activeNames">
 *   <sk-accordion-item name="1" title="标题1">内容1</sk-accordion-item>
 *   <sk-accordion-item name="2" title="标题2">内容2</sk-accordion-item>
 * </sk-accordion>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/accordion
 */

import type { SkAccordionEmits, SkAccordionProps, SkAccordionSlots } from '../types/accordion'

export type { SkAccordionEmits, SkAccordionProps, SkAccordionSlots }
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { useProvide } from '../composables'
import { SK_ACCORDION_KEY } from '../constants'
import { SkAccordionUcv } from '../styles'

defineOptions({
  name: 'SkAccordion',
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkAccordionProps>(), {
  accordion: false,
  border: true,
  iconPosition: 'right',
  expandIcon: 'i-lucide:chevron-up',
  collapseIcon: 'i-lucide:chevron-down',
})

const modelValue = defineModel<string | number | (string | number)[]>({
  default: () => [],
})

const emits = defineEmits<SkAccordionEmits>()

defineSlots<SkAccordionSlots>()

const classes = computed(() => {
  return SkAccordionUcv(props)
})

// 判断某个面板是否处于展开状态
function isActive(name: string | number): boolean {
  if (props.accordion) {
    return modelValue.value === name
  }
  else {
    return Array.isArray(modelValue.value) && modelValue.value.includes(name)
  }
}

// 切换面板的展开状态
function toggle(name: string | number) {
  let newValue: string | number | (string | number)[]

  if (props.accordion) {
    // 手风琴模式：每次只能展开一个
    newValue = isActive(name) ? '' : name
  }
  else {
    // 多选模式：可以同时展开多个
    const currentValues = Array.isArray(modelValue.value) ? [...modelValue.value] : []
    const index = currentValues.indexOf(name)

    if (index > -1) {
      // 已展开，则收起
      currentValues.splice(index, 1)
    }
    else {
      // 未展开，则展开
      currentValues.push(name)
    }

    newValue = currentValues
  }

  modelValue.value = newValue
  emits('change', newValue)
}

useProvide(SK_ACCORDION_KEY)({
  props,
  isActive,
  toggle,
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
