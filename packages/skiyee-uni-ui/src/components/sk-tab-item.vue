<script lang="ts">
/**
 * sk-tab-item 组件 - 标签项组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-tabs>
 *   <sk-tab-item label="标签1" />
 *   <sk-tab-item label="标签2" badge="99+" />
 *   <sk-tab-item label="标签3" disabled />
 * </sk-tabs>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/tabs
 */

import type { SkTabItemUcvProps } from '../styles'

export interface SkTabItemProps {
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 徽标内容
   */
  badge?: string | number;
  /**
   * 图标名称
   */
  icon?: string;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkTabItemUcvProps['clax'];
}

export interface SkTabItemSlots {
  /**
   * 自定义标签内容
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, onUnmounted } from 'vue'

import { useParent } from '../composables'
import { SK_TABS_KEY } from '../constants'
import { SkTabItemUcv } from '../styles'
import SkBadge from './sk-badge.vue'
import SkIcon from './sk-icon.vue'

defineOptions({
  name: 'SkTabItem',
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkTabItemProps>(), {
  disabled: false,
})

defineSlots<SkTabItemSlots>()

const instance = getCurrentInstance()!

const { parent, index } = useParent(SK_TABS_KEY)

// 是否激活
const isActive = computed(() => {
  return parent?.props.activeIndex === index.value
})

// 是否禁用
const isDisabled = computed(() => {
  return props.disabled || parent?.props.disabled
})

// 是否可滚动
const isScrollable = computed(() => {
  return parent ? !!parent.props : false
})

const classes = computed(() => {
  const computedProps = {
    ...props,
    active: isActive.value,
    disabled: isDisabled.value,
    scrollable: isScrollable.value,
  }
  return SkTabItemUcv(computedProps)
})

// 点击处理
function handleClick() {
  if (isDisabled.value) {
    return
  }

  parent?.setActiveIndex(index.value)
}

// 注册到父组件
onMounted(() => {
  parent?.registerTabItem(instance)
})

// 从父组件注销
onUnmounted(() => {
  parent?.unregisterTabItem(instance)
})
</script>

<template>
  <view
    class="sk-tab-item" :class="[classes.root()]"
    @tap="handleClick"
  >
    <view :class="classes.content()">
      <!-- 图标 -->
      <SkIcon
        v-if="icon"
        :name="icon"
        :class="classes.icon()"
      />

      <!-- 标签文字或自定义内容 -->
      <view :class="classes.label()">
        <slot>
          {{ label }}
        </slot>
      </view>

      <!-- 徽标 -->
      <SkBadge
        v-if="badge"
        :content="badge"
        :class="classes.badge()"
        size="small"
        standalone
      />
    </view>
  </view>
</template>
