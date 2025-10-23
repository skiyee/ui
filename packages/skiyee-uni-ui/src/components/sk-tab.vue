<script lang="ts">
/**
 * sk-tab 组件 - 标签项组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-tabs>
 *   <sk-tab label="标签1">
 *     <view>面板内容1</view>
 *   </sk-tab>
 *   <sk-tab label="标签2">
 *     <view>面板内容2</view>
 *   </sk-tab>
 * </sk-tabs>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/tabs
 */

export interface SkTabProps {
  /**
   * 标签文字
   */
  label?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

export interface SkTabSlots {
  /**
   * 标签面板内容
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeUnmount, onMounted } from 'vue'

import { useParent } from '../composables'
import { SK_TABS_KEY } from '../constants'

defineOptions({
  name: 'SkTab',
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkTabProps>(), {
  disabled: false,
})

defineSlots<SkTabSlots>()

const instance = getCurrentInstance()!

const { parent, index } = useParent(SK_TABS_KEY)

// 是否激活
const isActive = computed(() => {
  return parent?.props.activeIndex === index.value
})

// 注册到父组件
onMounted(() => {
  parent?.registerTab({
    uid: instance.uid,
    props,
  })
})

// 从父组件注销
onBeforeUnmount(() => {
  parent?.unregisterTab(instance.uid)
})
</script>

<template>
  <!-- sk-tab 渲染面板内容，通过 v-show 控制显示 -->
  <view v-show="isActive" class="w-full">
    <slot />
  </view>
</template>
