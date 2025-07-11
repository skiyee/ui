<script lang="ts">
/**
 * sk-textarea 组件 - 通用文本域组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-textarea v-model="value" placeholder="请输入..." :rows="4" />
 * ```
 *
 * MAYBE DO:
 * [] 支持左右插槽
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/textarea
 */

import type { SkTextareaUcvProps } from '../styles'

export interface SkTextareaProps {
  /**
   * 占位文本
   * @default '请输入...'
   */
  placeholder?: string;
  /**
   * 文本域尺寸
   * @default 'medium'
   */
  size?: SkTextareaUcvProps['size'];
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 是否显示清空按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 最大长度
   * @default 140
   */
  maxlength?: number;
  /**
   * 是否显示字数统计
   * @default false
   */
  showCount?: boolean;
  /**
   * 是否自适应高度
   * @default false
   */
  autoHeight?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkTextareaUcvProps['clax'];
}

export interface SkTextareaEmits {
  (name: 'input', event: { value: string }): void;
  (name: 'focus', event: { value: string }): void;
  (name: 'blur', event: { value: string }): void;
  (name: 'clear'): void;
}
</script>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'

import { useParent } from '../composables'
import { SK_FIELD_KEY } from '../constants'
import { SkTextareaUcv } from '../styles'
import SkIcon from './sk-icon.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkTextareaProps>(), {
  placeholder: '',
  size: 'medium',
  color: 'brand',
  disabled: false,
  readonly: false,
  clearable: false,
  maxlength: 140,
  showCount: false,
  autoHeight: false,
})

const modelValue = defineModel<string>({
  default: '',
})

const emits = defineEmits<SkTextareaEmits>()

const { parent } = useParent(SK_FIELD_KEY)

const isFocused = ref(false)

const isDisabled = computed(() => props.disabled || parent?.props.disabled)

// 计算样式类
const classes = computed(() => SkTextareaUcv({
  ...props,
  focused: isFocused.value,
  disabled: isDisabled.value,
}))

const showClear = computed(() =>
  props.clearable
  && modelValue.value
  && !isDisabled.value
  && !props.readonly,
)

// 字数统计
const currentLength = computed(() => (modelValue.value || '').length)
const countText = computed(() => {
  if (props.maxlength) {
    return `${currentLength.value}/${props.maxlength}`
  }
  return `${currentLength.value}`
})

function handleInput(event: any) {
  const value = event.detail.value
  modelValue.value = value
  emits('input', { value })

  parent && parent.handleChange(value)
}

function handleFocus(event: any) {
  isFocused.value = true
  const value = event.detail.value
  emits('focus', { value })

  parent && parent.handleFocus(modelValue.value)
}

function handleBlur(event: any) {
  isFocused.value = false
  const value = event.detail.value
  emits('blur', { value })

  parent && parent.handleBlur(modelValue.value)
}

function handleClear() {
  modelValue.value = ''
  emits('clear')

  parent && parent.handleChange('')
}
</script>

<template>
  <div :class="classes.root()">
    <!-- 文本域容器 -->
    <div :class="classes.container()">
      <div :class="classes.inner()">
        <textarea
          v-model="modelValue"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :disabled="isDisabled || readonly"
          :auto-height="autoHeight"
          :disable-default-padding="true"
          :class="classes.content()"
          :placeholder-class="classes.placeholder()"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />

        <!-- 清空按钮 -->
        <div v-if="showClear" :class="classes.clear()" @tap="handleClear">
          <SkIcon name="i-lucide:x" :custom-class="classes.clearIcon()" />
        </div>
      </div>

      <!-- 字数统计 -->
      <span v-if="showCount" :class="classes.counter()">
        {{ countText }}
      </span>
    </div>
  </div>
</template>
