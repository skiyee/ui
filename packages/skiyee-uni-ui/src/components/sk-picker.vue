<!-- eslint-disable import/no-duplicates -->
<script lang="ts">
/**
 * sk-picker 组件 - 通用选择器组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-picker
 *   v-model="selectedValue"
 *   :columns="singleColumnData"
 *   @change="handleChange"
 * />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/picker
 */

import type { SkRollerOption } from '../components/sk-roller.vue'
import type { SkPickerColumn, SkPickerColumns, SkPickerOptionsTransform } from '../composables/use-picker'
import type { SkRollerGroupUcvProps } from '../styles'

export interface SkPickerProps<T> {
  /**
   * 选项列表
   */
  columns: T;
  /**
   * 选项高度
   * @default 44
   */
  itemHeight?: number;
  /**
   * 可见选项数量
   * @default 5
   */
  visibleItemCount?: number;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 选项转换函数
   */
  transform?: SkPickerOptionsTransform<T>;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkRollerGroupUcvProps['clax'];
}

/**
 * 选择器组件事件
 */
export interface SkPickerEmits {
  /**
   * 选择变化事件
   */
  (name: 'change', event: any): void;
  /**
   * 选择完成事件
   */
  // (name: 'complete', event: SkPickerCompleteEvent): void;
}

/**
 * 选择器组件插槽
 */
export interface SkPickerSlots {
  /**
   * 自定义选项内容
   */
  option?: (props: { option: SkRollerOption; selected: boolean; columnIndex: number }) => any;
}
</script>

<script setup lang="ts" generic="T = SkPickerColumn | SkPickerColumns">
import { nextTick } from 'vue'

import { usePicker } from '../composables/use-picker'
import { isNil } from '../utils/is'
import SkRollerGroup from './sk-roller-group.vue'
import SkRoller from './sk-roller.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkPickerProps<T>>(), {
  itemHeight: 44,
  visibleItemCount: 5,
  disabled: false,
})

const modelValue = defineModel<SkRollerOption['value'] | SkRollerOption['value'][]>({
  default: () => [],
})

defineEmits<SkPickerEmits>()

defineSlots<SkPickerSlots>()

// 创建级联选择器
const picker = usePicker<T>({
  columns: props.columns,
  initial: modelValue.value,
  transform: props.transform,
})

const { columns, select } = picker

// 处理选择事件
const handleSelect = (columnIndex: number, value: SkRollerOption['value']) => {
  if (props.disabled) {
    return
  }

  select(columnIndex, value)

  nextTick(() => modelValue.value = picker.selectedValues)
}

/*
// 暴露方法给父组件
defineExpose({
  // 选择方法
  select: picker.select,
  reset: picker.reset,
  setOptions: picker.setOptions,

  // 获取方法
  getOptions: picker.getOptions,
  getSelectedPath: picker.getSelectedPath,
  validate: picker.validate,

  // 状态
  state: picker.state,
  isLoading,
  hasError,
})
*/
</script>

<template>
  <SkRollerGroup
    :item-height="itemHeight"
    :visible-item-count="visibleItemCount"
    :clax="clax"
  >
    <!-- 正常状态 -->
    <SkRoller
      v-for="({ value, options }, columnIndex) in columns"
      :key="columnIndex"
      :options="options"
      :model-value="value"
      :disabled="disabled"
      @update:model-value="(value) => !isNil(value) && handleSelect(columnIndex, value)"
    >
      <template #option="{ option, selected }">
        <slot name="option" :option="option" :selected="selected" :column-index="columnIndex">
          <span class="text-center truncate">
            {{ option.label }}
          </span>
        </slot>
      </template>
    </SkRoller>
  </SkRollerGroup>
</template>
