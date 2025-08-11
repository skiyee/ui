/**
 * 通用选择器辅助工具函数
 *
 * 提供数据转换、查找、验证等工具函数，支持单列、多列、级联等多种选择模式。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { SkPickerColumn, SkPickerColumns, SkPickerOption, SkPickerOptionFieldNames } from './use-picker'

/**
 * 默认字段映射配置
 */
const DEFAULT_FIELD_NAMES: Required<SkPickerOptionFieldNames> = {
  label: 'label',
  value: 'value',
  disabled: 'disabled',
}
/**
 * 检查是否为标准的SkPickerOption
 */
function isPickerOption(item: any): item is SkPickerOption {
  return (
    typeof item === 'object'
    && item !== null
    && typeof item.label === 'string'
    && item.value !== undefined
  )
}

/**
 * 标准化单个选择器项目
 */
function normalizePickerColumnOption(
  option: any,
  fieldNames: Required<SkPickerOptionFieldNames>,
): SkPickerOption {
  // 如果已经是标准格式
  if (isPickerOption(option)) {
    return option
  }

  // 如果是字符串或数字
  if (typeof option === 'string' || typeof option === 'number') {
    return {
      label: String(option),
      value: option,
      disabled: false,
    }
  }

  // 如果是对象
  if (typeof option === 'object' && option !== null) {
    const normalized: SkPickerOption & { [key: string]: any } = {
      label: option[fieldNames.label] ?? String(option[fieldNames.value] ?? ''),
      value: option[fieldNames.value],
      disabled: Boolean(option[fieldNames.disabled]),
    }

    // 保存原始数据
    const known = new Set([fieldNames.label, fieldNames.value, fieldNames.disabled])
    for (const k in option) {
      if (!known.has(k)) {
        normalized[k] = option[k]
      }
    }

    return normalized
  }

  // 兜底处理
  return {
    label: String(option),
    value: option,
    disabled: false,
  }
}

/**
 * 标准化选择器数据
 * 将各种格式的数据转换为标准的 SkPickerOption 格式
 */
export function normalizePickerColumns<
  T = SkPickerColumn | SkPickerColumns,
>(
  columns: T,
  transform?: (data: T) => SkPickerColumn | SkPickerColumns,
): SkPickerColumns {
  if (!columns || (Array.isArray(columns) && columns.length === 0)) {
    return []
  }

  // 如果提供了自定义转换函数，优先使用
  if (transform && typeof transform === 'function') {
    try {
      const result = transform(columns)
      return Array.isArray(result[0])
        ? result as SkPickerColumns
        : [result as SkPickerColumn]
    }
    catch (error) {
      console.error('[SkPicker] 自定义转换函数执行失败:', error)
      return []
    }
  }

  const fieldNames = DEFAULT_FIELD_NAMES

  // return normalizeOptions(options, DEFAULT_FIELD_NAMES)
  if (!Array.isArray(columns)) {
    console.warn('[SkPicker] 需要数组格式的数据')
    return []
  }

  // 检查是否为二维数组
  if (columns.length > 0 && Array.isArray(columns[0])) {
    return (columns as SkPickerColumns).map(column =>
      column.map(option => normalizePickerColumnOption(option, fieldNames)),
    )
  }

  // 如果是一维数组，转换为单列
  return [columns.map(option => normalizePickerColumnOption(option, fieldNames))]
}
