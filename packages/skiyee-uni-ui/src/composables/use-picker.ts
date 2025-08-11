/**
 * usePicker 组合式函数
 *
 * 提供统一的选择器功能，支持独立的选择器。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 */

import type { SkRollerOption } from '../components/sk-roller.vue'

import { shallowReactive } from 'vue'

import { normalizePickerColumns } from './use-picker.helper'

export interface SkPickerOptionFieldNames {
  label: string;
  value: string;
  disabled: string;
}

/**
 * 选择器选项接口
 * 基础的选择器选项，支持标签、值和禁用状态
 */
export interface SkPickerOption extends SkRollerOption {
  /**
   * 子选项（级联）
   */
  sub?: SkPickerOption[];
}

export type SkPickerColumn = SkPickerOption[]

export type SkPickerColumns = SkPickerColumn[]

export interface SkPickerColumnState {
  value: SkPickerOption['value'];
  options: SkPickerColumn;
}

// 初始化字段状态
function getPickerColumnState() {
  return shallowReactive<SkPickerColumnState>({
    value: '',
    options: [],
  })
}

export interface SkPickerOptionsTransform<T> {
  (data: T): SkPickerColumn | SkPickerColumns;
}

export interface UsePickerOptions<T = SkPickerColumn | SkPickerColumns> {
  columns: T;
  initial?: SkPickerOption['value'] | SkPickerOption['value'][];
  transform?: SkPickerOptionsTransform<T>;
  onChange?: (event: {
    columnIndex: number;
    value: SkPickerOption['value'];
    option: SkPickerOption;
  }) => void;
}

/**
 * 统一的选择器组合式函数
 */
export function usePicker<T = SkPickerColumn | SkPickerColumns>({
  columns,
  initial,
  transform,
  onChange,
}: UsePickerOptions<T>) {
  let pickerColumns = normalizePickerColumns(columns, transform)

  // 响应式状态 - 每列的状态
  const columnStates = shallowReactive(
    Array.from({ length: pickerColumns.length }).map(() => getPickerColumnState()),
  )

  // 检测是否为级联模式
  const isCascadeMode = () => {
    return pickerColumns.length === 1 && pickerColumns[0].some(option => option.sub && option.sub.length > 0)
  }

  // 初始化选项列表
  const initializeOptions = () => {
    if (isCascadeMode()) {
      columnStates[0].options = pickerColumns[0]
    }
    else {
      // 普通多列模式
      pickerColumns.forEach((column, index) => {
        if (columnStates[index]) {
          columnStates[index].options = column
        }
      })
    }
  }

  // 更新级联列
  const updateCascadeColumns = (fromColumnIndex: number) => {
    if (!isCascadeMode()) {
      return
    }

    const currentColumn = columnStates[fromColumnIndex]
    if (!currentColumn) {
      return
    }

    const selectedOption = currentColumn.options.find(opt => opt.value === currentColumn.value)

    // 移除后续所有列
    while (columnStates.length > fromColumnIndex + 1) {
      columnStates.pop()
    }

    // 如果选中的选项有子选项，添加下一列
    if (selectedOption && selectedOption.sub && selectedOption.sub.length > 0) {
      const nextColumnState = getPickerColumnState()
      nextColumnState.options = selectedOption.sub

      // 自动选择第一个可用选项
      const firstAvailable = nextColumnState.options.find(opt => !opt.disabled)
      if (firstAvailable) {
        nextColumnState.value = firstAvailable.value
      }

      columnStates.push(nextColumnState)

      // 递归处理下一级级联
      updateCascadeColumns(fromColumnIndex + 1)
    }
  }

  // 处理初始值
  const initializeValues = () => {
    if (isCascadeMode()) {
      // 级联模式的初始值处理
      if (initial !== undefined) {
        const initialValues = Array.isArray(initial) ? initial : [initial]

        // 逐级设置初始值并展开级联
        let currentColumnIndex = 0
        for (const value of initialValues) {
          if (currentColumnIndex < columnStates.length) {
            const option = columnStates[currentColumnIndex].options.find(opt => opt.value === value)
            if (option && !option.disabled) {
              columnStates[currentColumnIndex].value = value
              updateCascadeColumns(currentColumnIndex)
              currentColumnIndex++
            }
            else {
              break // 如果找不到对应选项，停止处理
            }
          }
        }
      }

      // 确保第一列有选中值
      if (columnStates[0] && (columnStates[0].value === '' || columnStates[0].value === undefined)) {
        const firstAvailable = columnStates[0].options.find(opt => !opt.disabled)
        if (firstAvailable) {
          columnStates[0].value = firstAvailable.value
          updateCascadeColumns(0)
        }
      }
    }
    else {
      // 普通多列模式的初始值处理
      if (initial !== undefined) {
        const initialValues = Array.isArray(initial) ? initial : [initial]

        initialValues.forEach((value, index) => {
          if (index < columnStates.length && columnStates[index]) {
            const option = columnStates[index].options.find(opt => opt.value === value)
            if (option && !option.disabled) {
              columnStates[index].value = value
            }
          }
        })
      }

      // 为没有设置初始值的列选择第一个可用选项
      columnStates.forEach((state) => {
        if (state.value === '' || state.value === undefined) {
          const firstAvailable = state.options.find(opt => !opt.disabled)
          if (firstAvailable) {
            state.value = firstAvailable.value
          }
        }
      })
    }
  }

  // 选择指定列的值
  const select = (columnIndex: number, value: SkPickerOption['value']) => {
    if (columnIndex < 0 || columnIndex >= columnStates.length) {
      console.warn(`[usePicker] 无效的列索引: ${columnIndex}`)
      return
    }

    const columnState = columnStates[columnIndex]
    const option = columnState.options.find(opt => opt.value === value)

    if (!option) {
      console.warn(`[usePicker] 在第 ${columnIndex} 列中找不到值为 ${value} 的选项`)
      return
    }

    if (option.disabled) {
      console.warn(`[usePicker] 选项 ${value} 已被禁用`)
      return
    }

    // 更新选中值
    columnState.value = value

    // 如果是级联模式，更新后续列
    if (isCascadeMode()) {
      updateCascadeColumns(columnIndex)
    }

    // 触发变化事件（如果需要的话，可以在这里添加事件回调）
    onChange?.({ columnIndex, value, option })
  }

  // 获取所有列的选中值
  const getSelectedValues = (): SkPickerOption['value'][] => {
    return columnStates.map(state => state.value)
  }

  // 获取所有列的选中选项
  const getSelectedOptions = (): SkPickerOption[] => {
    return columnStates.map((state) => {
      return state.options.find(opt => opt.value === state.value) || state.options.find(opt => !opt.disabled)!
    }).filter(Boolean)
  }

  // 获取指定列的选项列表
  const getColumnOptions = (columnIndex: number): SkPickerOption[] => {
    if (columnIndex < 0 || columnIndex >= columnStates.length) {
      return []
    }
    return columnStates[columnIndex].options
  }

  // 验证当前选择是否有效
  const validate = (): boolean => {
    return columnStates.every((state) => {
      const option = state.options.find(opt => opt.value === state.value)
      return option && !option.disabled
    })
  }

  // 重置选择器
  const reset = () => {
    if (isCascadeMode()) {
      if (columnStates[0]) {
        const first = columnStates[0].options.find(opt => !opt.disabled)
        columnStates[0].value = first ? first.value : ''
        updateCascadeColumns(0)
      }
      return
    }

    columnStates.forEach((state) => {
      const firstAvailable = state.options.find(opt => !opt.disabled)
      state.value = firstAvailable ? firstAvailable.value : ''
    })
  }

  // 设置新的数据源
  const setColumns = (newColumns: T) => {
    const newPickerColumns = normalizePickerColumns(newColumns, transform)
    pickerColumns = newPickerColumns

    if (isCascadeMode()) {
      while (columnStates.length > 1) {
        columnStates.pop()
      }

      if (!columnStates[0]) {
        columnStates.push(getPickerColumnState())
      }

      columnStates[0].options = newPickerColumns[0]

      const current = columnStates[0].options.find(opt => opt.value === columnStates[0].value && !opt.disabled)
      if (!current) {
        const first = columnStates[0].options.find(opt => !opt.disabled)
        columnStates[0].value = first ? first.value : ''
      }

      updateCascadeColumns(0)
      return
    }

    // 更新列状态数组长度
    while (columnStates.length > newPickerColumns.length) {
      columnStates.pop()
    }
    while (columnStates.length < newPickerColumns.length) {
      columnStates.push(getPickerColumnState())
    }

    // 更新每列的选项
    newPickerColumns.forEach((column, index) => {
      columnStates[index].options = column
      // 检查当前选中值是否仍然有效
      const currentValue = columnStates[index].value
      const isValid = column.find(opt => opt.value === currentValue && !opt.disabled)
      if (!isValid) {
        const firstAvailable = column.find(opt => !opt.disabled)
        columnStates[index].value = firstAvailable ? firstAvailable.value : ''
      }
    })
  }

  // 设置选中值
  const setValues = (values: SkPickerOption['value'][]) => {
    if (!Array.isArray(values)) {
      console.warn(`[usePicker] setValues 需要数组参数`)
      return
    }

    values.forEach((value, index) => {
      if (index < columnStates.length) {
        select(index, value)
      }
    })
  }

  // 初始化
  initializeOptions()
  initializeValues()

  // 获取级联路径（完整的选择路径）
  const getCascadePath = (): SkPickerOption[] => {
    if (!isCascadeMode()) {
      return getSelectedOptions()
    }

    const path: SkPickerOption[] = []
    for (let i = 0; i < columnStates.length; i++) {
      const state = columnStates[i]
      const option = state.options.find(opt => opt.value === state.value)
      if (option) {
        path.push(option)
      }
    }
    return path
  }

  return {
    // 响应式状态
    columns: columnStates,

    // 核心方法
    select,
    getSelectedValues,
    getSelectedOptions,
    getColumnOptions,

    // 工具方法
    validate,
    reset,
    setColumns,
    setValues,

    // 级联相关方法
    isCascadeMode,
    getCascadePath,

    // 计算属性
    get selectedValues() {
      return getSelectedValues()
    },
    get selectedOptions() {
      return getSelectedOptions()
    },
    get isValid() {
      return validate()
    },
    get cascadePath() {
      return getCascadePath()
    },
  }
}
