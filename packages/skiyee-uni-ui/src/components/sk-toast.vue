<script lang="ts">
/**
 * sk-toast 组件 - 通用吐司提示组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-toast message="操作成功" />
 * ```
 *
 * MAYBE DO:
 * [] 优化结构
 * [] 提供命令式调用
 * [] 确定插槽位置
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/toast
 */

import type { SkToastUcvProps } from '../styles'

export interface SkToastProps {
  /**
   * 提示类型
   * @default 'default'
   */
  type?: SkToastUcvProps['type'];
  /**
   * 提示内容
   */
  message?: string;
  /**
   * 显示位置
   * @default 'center'
   */
  placement?: 'center' | 'top' | 'bottom';
  /**
   * 显示时长（毫秒），0 表示不自动关闭
   * @default 3000
   */
  duration?: number;
  /**
   * 是否可关闭
   * @default false
   */
  closable?: boolean;
  /**
   * 图标名称
   */
  icon?: string;
  /**
   * 是否显示图标
   * @default true
   */
  showIcon?: boolean;
  /**
   * 是否显示背景层
   * @default false
   */
  backdrop?: boolean;
  /**
   * 层级
   * @default 2000
   */
  zIndex?: number;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkToastUcvProps['clax'];
}

export interface SkToastEmits {
  (name: 'close'): void;
}

export interface SkToastSlots {
  default?: () => any;
  icon?: () => any;
}
</script>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'

import { SkToastUcv } from '../styles'
import SkButton from './sk-button.vue'
import SkIcon from './sk-icon.vue'
import SkOverlay from './sk-overlay.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkToastProps>(), {
  type: 'default',
  placement: 'center',
  duration: 3000,
  closable: false,
  showIcon: true,
  backdrop: false,
  zIndex: 2000,
})

// 使用 defineModel 实现双向绑定
const visible = defineModel<boolean>('visible', { default: false })

const emits = defineEmits<SkToastEmits>()

const slots = defineSlots<SkToastSlots>()

const hasIcon = computed(() => !!(props.showIcon && (props.icon || slots.icon || getDefaultIcon())))
const hasMessage = computed(() => !!(props.message || slots.default))

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    hasIcon: hasIcon.value,
    hasMessage: hasMessage.value,
  }
  return SkToastUcv(computedProps)
})

// 获取默认图标
function getDefaultIcon() {
  const iconMap: Record<NonNullable<SkToastProps['type']>, string> = {
    default: 'i-lucide:badge-info',
    success: 'i-lucide:badge-check',
    warning: 'i-lucide:badge-alert',
    error: 'i-lucide:badge-x',
    info: 'i-lucide:badge-info',
  }
  return iconMap[props.type] || ''
}

let timer: NodeJS.Timeout | null = null

// 监听 visible 变化，设置自动关闭定时器
watch(visible, (newVisible) => {
  if (newVisible && props.duration > 0) {
    clearTimer()

    timer = setTimeout(() => {
      visible.value = false
      emits('close')
    }, props.duration)
  }
  else if (!newVisible) {
    clearTimer()
  }
}, { immediate: true })

// 清除定时器
function clearTimer() {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

// 处理关闭按钮点击
function handleClose() {
  visible.value = false
  emits('close')
}

// 组件卸载时清理定时器
onUnmounted(() => {
  clearTimer()
})
</script>

<template>
  <SkOverlay
    v-model:visible="visible"
    :backdrop="backdrop"
    :dismissable="false"
    :z-index="zIndex"
    :placement="placement"
    @close="emits('close')"
  >
    <div :class="classes.root()">
      <div :class="classes.toast()">
        <!-- 图标 -->
        <div v-if="hasIcon" :class="classes.icon()">
          <slot name="icon">
            <SkIcon
              :name="icon || getDefaultIcon()"
              :clax="classes.iconInner()"
            />
          </slot>
        </div>

        <!-- 内容 -->
        <div :class="classes.content()">
          <slot>
            <span :class="classes.message()">
              {{ message }}
            </span>
          </slot>
        </div>

        <!-- 关闭按钮 -->
        <SkButton
          v-if="closable"
          variant="text"
          size="small"
          color="neutral"
          :clax="classes.close()"
          @click="handleClose"
        >
          <SkIcon name="i-lucide:x" :clax="classes.closeIcon()" />
        </SkButton>
      </div>
    </div>
  </SkOverlay>
</template>
