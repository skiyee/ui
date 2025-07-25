<script lang="ts">
/**
 * sk-roller-group 组件 - 滚动选择器组组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-roller-group height="200px">
 *   <sk-roller v-model="value1" :options="options1" />
 *   <sk-roller v-model="value2" :options="options2" />
 * </sk-roller-group>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/roller
 */

import type { SkRollerGroupUcvProps } from '../styles'

export interface SkRollerGroupProps {
  /**
   * 选项高度
   * @default 44
   * @description 自动识别为 px 不可更改
   */
  itemHeight?: number;
  /**
   * 可见选项数量
   * @default 5
   */
  visibleItemCount?: number;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkRollerGroupUcvProps['clax'];
}

export interface SkRollerGroupSlots {
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, reactive, readonly, toRef } from 'vue'

import { useProvide } from '../composables'
import { SK_ROLLER_GROUP_KEY } from '../constants'
import { SkRollerGroupUcv } from '../styles'

const props = withDefaults(defineProps<SkRollerGroupProps>(), {
  itemHeight: 44,
  visibleItemCount: 5,
})

defineSlots<SkRollerGroupSlots>()

const classes = computed(() => SkRollerGroupUcv(props))

const containerHeight = computed(() => props.itemHeight * props.visibleItemCount)

const rollerGroupContext = readonly({
  props: reactive({
    itemHeight: toRef(() => props.itemHeight),
    visibleItemCount: toRef(() => props.visibleItemCount),
  }),
})

useProvide(SK_ROLLER_GROUP_KEY)(rollerGroupContext)
</script>

<template>
  <div
    :class="classes.root()"
    :style="{ height: `${containerHeight}px` }"
  >
    <div :class="classes.mask()">
      <div :class="classes.gradient({ clax: 'bg-gradient-to-b' })" />
      <div :class="classes.indicator()" :style="{ height: `${itemHeight}px` }" />
      <div :class="classes.gradient({ clax: 'bg-gradient-to-t' })" />
    </div>

    <div :class="classes.rollers()">
      <slot />
    </div>
  </div>
</template>
