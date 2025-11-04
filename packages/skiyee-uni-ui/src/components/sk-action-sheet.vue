<script lang="ts">
/**
 * sk-action-sheet 组件 - 动作面板组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-action-sheet v-model="visible" :options="options">
 * </sk-action-sheet>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/action-sheet
 */

import type { SkActionSheetUcvProps } from '../styles'

export interface ActionSheetOption {
  /**
   * 选项名称
   */
  name: string;
  /**
   * 选项描述
   */
  description?: string;
  /**
   * 选项图标
   */
  icon?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否为危险操作
   */
  destructive?: boolean;
  /**
   * 选项值
   */
  value?: any;
}

export interface SkActionSheetProps {
  /**
   * 默认是否可见 (非受控)
   */
  defaultVisible?: boolean;
  /**
   * 选项列表
   */
  options: ActionSheetOption[];
  /**
   * 取消按钮文本
   * @default '取消'
   */
  cancelText?: string;
  /**
   * 标题
   */
  title?: string;
  /**
   * 描述文本
   */
  description?: string;
  /**
   * 点击选项后是否关闭
   * @default true
   */
  closeOnClickAction?: boolean;
  /**
   * 点击取消按钮后是否关闭
   * @default true
   */
  closeOnClickCancel?: boolean;
  /**
   * 点击遮罩层后是否关闭
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 是否显示安全区域
   * @default true
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 是否显示圆角
   * @default true
   */
  round?: boolean;
  /**
   * 层级
   * @default 1100
   */
  zIndex?: number;
  /**
   * 间距类型
   * @default 'normal'
   */
  spacing?: SkActionSheetUcvProps['spacing'];
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkActionSheetUcvProps['clax'];
}

export interface SkActionSheetEmits {
  /**
   * 选择选项时触发
   */
  (name: 'select', option: ActionSheetOption, index: number): void;
  /**
   * 点击取消按钮时触发
   */
  (name: 'cancel'): void;
  /**
   * 关闭时触发
   */
  (name: 'close'): void;
  /**
   * 打开时触发
   */
  (name: 'open'): void;
}

export interface SkActionSheetSlots {
  /**
   * 自定义标题
   */
  title?: () => any;
  /**
   * 自定义描述
   */
  description?: () => any;
  /**
   * 自定义选项内容
   */
  option?: (props: { option: ActionSheetOption; index: number }) => any;
  /**
   * 自定义取消按钮
   */
  cancel?: () => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkActionSheetUcv } from '../styles'
import SkIcon from './sk-icon.vue'
import SkOverlay from './sk-overlay.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkActionSheetProps>(), {
  defaultVisible: false,
  cancelText: '取消',
  closeOnClickAction: true,
  closeOnClickCancel: true,
  closeOnClickOverlay: true,
  safeAreaInsetBottom: true,
  round: true,
  zIndex: 1100,
  spacing: 'normal',
})

const visibleModel = defineModel<boolean>('visible', { default: false })

const emits = defineEmits<SkActionSheetEmits>()

defineSlots<SkActionSheetSlots>()

// 受控/非受控模式处理
if (visibleModel.value === false && props.defaultVisible) {
  visibleModel.value = props.defaultVisible
}

// 计算是否有标题或描述
const hasHeader = computed(() => props.title || props.description)

// 计算是否有图标
const hasIcon = computed(() => props.options.some(option => option.icon))

// 计算是否有描述
const hasDescription = computed(() => props.options.some(option => option.description))

// 计算是否显示取消按钮
const hasCancel = computed(() => !!props.cancelText)

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    hasIcon: hasIcon.value,
    hasDescription: hasDescription.value,
    hasCancel: hasCancel.value,
  }
  return SkActionSheetUcv(computedProps)
})

// 处理选项点击
function handleOptionClick(option: ActionSheetOption, index: number) {
  if (option.disabled) {
    return
  }

  emits('select', option, index)

  if (props.closeOnClickAction) {
    visibleModel.value = false
  }
}

// 处理取消按钮点击
function handleCancelClick() {
  emits('cancel')

  if (props.closeOnClickCancel) {
    visibleModel.value = false
  }
}

// 处理打开事件
function handleOpen() {
  emits('open')
}

// 处理关闭事件
function handleClose() {
  emits('close')
}
</script>

<template>
  <SkOverlay
    v-model:visible="visibleModel"
    placement="bottom"
    animation="slide-up"
    :z-index="zIndex"
    :dismissable="closeOnClickOverlay"
    @open="handleOpen"
    @close="handleClose"
  >
    <div :class="classes.root()">
      <!-- 标题区域 -->
      <div
        v-if="hasHeader"
        :class="classes.header()"
      >
        <slot name="title">
          <span
            v-if="title"
            :class="classes.title()"
          >{{ title }}</span>
        </slot>
        <slot name="description">
          <span
            v-if="description"
            :class="classes.description()"
          >{{ description }}</span>
        </slot>
      </div>

      <!-- 选项列表 -->
      <div :class="classes.optionList()">
        <div
          v-for="(option, index) in options"
          :key="index"
          :class="classes.option({ disabled: option.disabled })"
          @tap="handleOptionClick(option, index)"
        >
          <slot
            name="option"
            :option="option"
            :index="index"
          >
            <SkIcon
              v-if="option.icon"
              :name="option.icon"
              :class="classes.optionIcon()"
            />
            <div :class="classes.optionContent()">
              <span :class="classes.optionName({ optionVariant: option.destructive ? 'destructive' : 'default' })">
                {{ option.name }}
              </span>
              <span
                v-if="option.description"
                :class="classes.optionDescription()"
              >
                {{ option.description }}
              </span>
            </div>
          </slot>
        </div>
      </div>

      <!-- 取消按钮 -->
      <div
        v-if="hasCancel"
        :class="classes.cancel()"
        @tap="handleCancelClick"
      >
        <slot name="cancel">
          <span :class="classes.cancelText()">{{ cancelText }}</span>
        </slot>
      </div>

      <!-- 安全区域 -->
      <div
        v-if="safeAreaInsetBottom"
        :class="classes.safeArea()"
      />
    </div>
  </SkOverlay>
</template>
