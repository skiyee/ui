import { isNil } from './is'

/**
 * 格式化值尺寸单位
 * @description 数值型(包括字符串类型)均默认采用rpx，否则原样返回
 */
export function formatSize(size: string | number) {
  const isNumeric = !Number.isNaN(Number(size))
  return isNumeric ? `${size}rpx` : `${size}`
}

/**
 * 限制数值范围的工具函数
 * @param num 要限制的数值
 * @param min 最小值
 * @param max 最大值
 * @returns 限制后的数值
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max)
}

/**
 * 将值转换为数组，无效值返回空数组
 * @param value 要转换的值
 */

export function toArray<T>(value: T): T[] {
  if (isNil(value)) {
    return []
  }

  return Array.isArray(value) ? value : [value]
}
