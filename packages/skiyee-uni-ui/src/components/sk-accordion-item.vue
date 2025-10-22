<script lang="ts">
/**
 * sk-accordion-item 组件 - 手风琴子项组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-accordion-item name="1" title="标题">
 *   内容区域
 * </sk-accordion-item>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/accordion
 */

import type { SkAccordionItemEmits, SkAccordionItemProps, SkAccordionItemSlots } from '../types/accordion'

export type { SkAccordionItemEmits, SkAccordionItemProps, SkAccordionItemSlots }
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useParent } from '../composables'
import { SK_ACCORDION_KEY } from '../constants'
import { SkAccordionItemUcv } from '../styles'
import SkIcon from './sk-icon.vue'

defineOptions({
  name: 'SkAccordionItem',
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkAccordionItemProps>(), {
  disabled: false,
})

const emits = defineEmits<SkAccordionItemEmits>()

const slots = defineSlots<SkAccordionItemSlots>()

const { parent } = useParent(SK_ACCORDION_KEY)

const contentRef = ref<HTMLElement>()
const contentHeight = ref<string>('auto')

// 当前是否处于展开状态
const isActive = computed(() => {
  if (!parent || props.name === undefined) {
    return false
  }
  return parent.isActive(props.name)
})

// 计算图标
const iconName = computed(() => {
  if (props.icon) {
    return props.icon
  }
  if (!parent) {
    return 'i-lucide:chevron-down'
  }
  return isActive.value ? (parent.props.expandIcon || 'i-lucide:chevron-up') : (parent.props.collapseIcon || 'i-lucide:chevron-down')
})

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    active: isActive.value,
    border: parent?.props.border ?? true,
    iconPosition: parent?.props.iconPosition ?? 'right',
  }
  return SkAccordionItemUcv(computedProps)
})

// 点击标题栏
function handleClick() {
  if (props.disabled || !parent || props.name === undefined) {
    return
  }

  parent.toggle(props.name)
  emits('click')
}

// 计算内容区域高度（用于动画）
const contentStyle = computed(() => {
  if (isActive.value) {
    return {
      maxHeight: contentHeight.value === 'auto' ? 'none' : contentHeight.value,
    }
  }
  return {
    maxHeight: '0',
  }
})

// 监听展开状态变化
function onTransitionEnd() {
  if (isActive.value) {
    contentHeight.value = 'auto'
  }
}
</script>

<template>
  <div :class="classes.root()">
    <!-- 标题栏 -->
    <div :class="classes.header()" @click="handleClick">
      <div :class="classes.title()">
        <slot v-if="slots.title" name="title" />
        <template v-else>
          {{ title }}
        </template>
      </div>
      <div :class="classes.icon()">
        <slot v-if="slots.icon" name="icon" />
        <SkIcon v-else :name="iconName" />
      </div>
    </div>

    <!-- 内容区域 -->
    <div
      ref="contentRef"
      :class="classes.content()"
      :style="contentStyle"
      @transitionend="onTransitionEnd"
    >
      <div :class="classes.contentInner()">
        <slot />
      </div>
    </div>
  </div>
</template>
