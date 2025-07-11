<script lang="ts">
/**
 * sk-switch 组件 - 用于切换状态的开关组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-switch v-model="value" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/switch
 */

import type { SkSwitchUcvProps } from '../styles'

export interface SkSwitchProps {
  /**
   * 开关尺寸
   * @default 'medium'
   */
  size?: SkSwitchUcvProps['size'];
  /**
   * 开关颜色
   * @default 'brand'
   */
  color?: SkSwitchUcvProps['color'];
  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkSwitchUcvProps['clax'];
}

export interface SkSwitchEmits {
  (name: 'change', value: boolean): void;
}

export interface SkSwitchSlots {
  default?: () => any;
  thumbIcon?: (props: { selected: boolean; clax: string }) => any;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { useParent } from '../composables'
import { SK_FIELD_KEY } from '../constants'
import { SkSwitchUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkSwitchProps>(), {
  size: 'medium',
  color: 'brand',
  disabled: false,
})

const modelValue = defineModel<boolean>({
  default: false,
})

const emits = defineEmits<SkSwitchEmits>()

const slots = defineSlots<SkSwitchSlots>()

const { parent } = useParent(SK_FIELD_KEY)

const isDisabled = computed(() => props.disabled || !!parent?.props?.disabled)

const canClick = computed(() => {
  return !isDisabled.value && !props.readonly
})

// 计算样式类
const classes = computed(() => {
  const computedProps = {
    ...props,
    selected: modelValue.value,
    disabled: isDisabled.value,
  }
  return SkSwitchUcv(computedProps)
})

function handleClick() {
  if (!canClick.value) {
    return
  }

  const newValue = !modelValue.value

  modelValue.value = newValue
  emits('change', newValue)

  parent && parent.handleChange(newValue)
}
</script>

<template>
  <div :class="classes.root()" @click="handleClick">
    <div :class="classes.track()">
      <div :class="classes.thumb()">
        <slot name="thumbIcon" :selected="modelValue" :clax="classes.thumbIcon()" />
      </div>
    </div>

    <span
      v-if="slots.default"
      :class="classes.label()"
    >
      <slot />
    </span>
  </div>
</template>
