<script lang="ts">
/**
 * sk-overlay 组件 - 通用弹窗组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-overlay v-model="visible">
 *   <p>弹窗内容</p>
 * </sk-overlay>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/overlay
 */

import type { SkOverlayUcvProps } from '../styles'

export interface SkOverlayProps {
  /**
   * 默认是否可见 (非受控)
   */
  defaultVisible?: boolean;
  /**
   * 弹窗位置
   * @default 'center'
   */
  placement?: SkOverlayUcvProps['placement'];
  /**
   * 动画类型
   * @default 'fade'
   */
  animation?: SkOverlayUcvProps['animation'];
  /**
   * 是否显示背景层
   * @default true
   */
  backdrop?: boolean;
  /**
   * 可关闭的
   * @description 是否能够通过点击背景层关闭弹窗
   * @default true
   */
  dismissable?: boolean;
  /**
   * 是否锁定背景滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * 层级
   * @default 1000
   */
  zIndex?: number;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkOverlayUcvProps['clax'];
}

export interface SkOverlayEmits {
  /**
   * 弹窗打开时触发
   * @description 动画结束后
   */
  (name: 'open'): void;
  /**
   * 弹窗关闭时触发
   * @description 动画结束后
   */
  (name: 'close'): void;
}

export interface SkOverlaySlots {
  /**
   * 弹窗内容
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'

import { SkOverlayUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkOverlayProps>(), {
  defaultVisible: false,
  placement: 'center',
  animation: 'fade',
  backdrop: true,
  dismissable: true,
  lockScroll: true,
  zIndex: 1000,
})

const visibleModel = defineModel<boolean>('visible', { default: false })

const emits = defineEmits<SkOverlayEmits>()

defineSlots<SkOverlaySlots>()

// 受控/非受控模式处理
if (visibleModel.value === false && props.defaultVisible) {
  visibleModel.value = props.defaultVisible
}

// 新的状态管理系统
const mounted = ref(false) // 控制 DOM 是否挂载
type AnimationState = 'hidden' | 'entering' | 'visible' | 'leaving'
const animationState = ref<AnimationState>('hidden') // 动画状态

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    state: animationState.value,
  }
  return SkOverlayUcv(computedProps)
})

// 计算内联样式
const backdropStyle = computed(() => ({
  zIndex: props.zIndex,
}))

const overlayStyle = computed(() => ({
  zIndex: props.zIndex + 1,
}))

// 监听外部状态变化，同步到内部动画状态
watch(visibleModel, (newVisible) => {
  if (newVisible && animationState.value === 'hidden') {
    open()
  }
  else if (!newVisible && (animationState.value === 'visible' || animationState.value === 'entering')) {
    close()
  }
}, { immediate: true })

// 打开弹窗
async function open() {
  if (animationState.value !== 'hidden') {
    return
  }

  // 1. 挂载 DOM 并设置初始状态
  mounted.value = true
  animationState.value = 'entering'

  if (props.lockScroll) {
    lockBodyScroll()
  }

  await nextTick()

  // 2. 触发进入动画
  setTimeout(() => {
    animationState.value = 'visible'
  }, 10) // 短暂延迟确保初始状态应用

  // 3. 动画完成后
  setTimeout(() => {
    emits('open')
  }, 290) // 300ms 动画 + 20ms 缓冲
}

// 关闭弹窗
async function close() {
  if (animationState.value !== 'visible') {
    return
  }

  // 1. 开始离开动画
  animationState.value = 'leaving'

  // 2. 动画完成后清理
  setTimeout(() => {
    mounted.value = false
    animationState.value = 'hidden'

    if (props.lockScroll) {
      unlockBodyScroll()
    }

    emits('close')
  }, 270)
}

// 处理背景层点击
function handleBackdropClick() {
  if (props.dismissable) {
    visibleModel.value = false
  }
}

// 处理弹窗内容点击（阻止冒泡）
function handleOverlayClick(event: Event) {
  event.stopPropagation()
}

// 锁定背景滚动
function lockBodyScroll() {
  // UniApp 中的滚动锁定实现
  // 这里可以根据具体需求实现
}

// 解锁背景滚动
function unlockBodyScroll() {
  // UniApp 中的滚动解锁实现
  // 这里可以根据具体需求实现
}

// 组件卸载时清理
onUnmounted(() => {
  if (props.lockScroll) {
    unlockBodyScroll()
  }
})
</script>

<template>
  <!-- 背景层 -->
  <div
    v-if="backdrop && mounted"
    :class="classes.backdrop()"
    :style="backdropStyle"
    @tap="handleBackdropClick"
  />

  <!-- 弹窗 -->
  <div
    v-if="mounted"
    :class="classes.overlay()"
    :style="overlayStyle"
    @tap="handleOverlayClick"
  >
    <div :class="classes.content()">
      <slot />
    </div>
  </div>
</template>
