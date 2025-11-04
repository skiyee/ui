<script lang="ts">
/**
 * sk-steps 组件 - 步骤条组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-steps v-model:active="active" direction="horizontal">
 *   <sk-step title="步骤1" />
 *   <sk-step title="步骤2" />
 *   <sk-step title="步骤3" />
 * </sk-steps>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/info/steps
 */

import type { SkStepsUcvProps, SkStepUcvProps } from '../styles'

export interface SkStepsProps {
  /**
   * 当前激活步骤的索引
   * @default 0
   */
  active?: number;
  /**
   * 步骤条方向
   * @default 'horizontal'
   */
  direction?: SkStepsUcvProps['direction'];
  /**
   * 步骤尺寸
   * @default 'medium'
   */
  size?: SkStepUcvProps['size'];
  /**
   * 激活状态的颜色
   */
  activeColor?: string;
  /**
   * 未激活状态的颜色
   */
  inactiveColor?: string;
  /**
   * 是否禁用整个步骤条
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkStepsUcvProps['clax'];
}

export interface SkStepsEmits {
  /**
   * 当前激活步骤改变时触发
   */
  (name: 'update:active', value: number): void;
  /**
   * 当前激活步骤改变时触发
   */
  (name: 'change', index: number): void;
  /**
   * 点击步骤时触发
   */
  (name: 'clickStep', index: number): void;
}

export interface SkStepsSlots {
  /**
   * 步骤列表
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, reactive, readonly, ref } from 'vue'

import { useProvide } from '../composables'
import { SK_STEPS_KEY } from '../constants'
import { SkStepsUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkStepsProps>(), {
  active: 0,
  direction: 'horizontal',
  size: 'medium',
  disabled: false,
})

const emits = defineEmits<SkStepsEmits>()

defineSlots<SkStepsSlots>()

// 存储步骤的 uid 列表
const stepUids = ref<number[]>([])

const classes = computed(() => {
  return SkStepsUcv(props)
})

/**
 * 注册步骤
 */
function registerStep(uid: number) {
  if (!stepUids.value.includes(uid)) {
    stepUids.value.push(uid)
  }
}

/**
 * 注销步骤
 */
function unregisterStep(uid: number) {
  const index = stepUids.value.indexOf(uid)
  if (index > -1) {
    stepUids.value.splice(index, 1)
  }
}

/**
 * 获取步骤的索引
 */
function getStepIndex(uid: number): number {
  return stepUids.value.indexOf(uid)
}

/**
 * 点击步骤
 */
function onStepClick(index: number) {
  if (props.disabled) {
    return
  }

  emits('update:active', index)
  emits('change', index)
  emits('clickStep', index)
}

// 提供给子组件的上下文
const stepsContext = readonly({
  props: reactive(computed(() => ({
    active: props.active,
    direction: props.direction,
    size: props.size,
    activeColor: props.activeColor,
    inactiveColor: props.inactiveColor,
    disabled: props.disabled,
  }))),
  getStepIndex,
  registerStep,
  unregisterStep,
  onStepClick,
})

useProvide(SK_STEPS_KEY)(stepsContext)
</script>

<template>
  <view :class="classes">
    <slot />
  </view>
</template>
