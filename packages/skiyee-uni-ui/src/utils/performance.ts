/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => () => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    }
  }

  return debounced
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let lastTime = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastTime >= wait) {
      lastTime = now
      func(...args)
    }
  }
}

/**
 * 深度克隆
 */
export function deepClone<T>(obj: T, visited = new WeakMap()): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (visited.has(obj as object)) {
    return visited.get(obj as object)
  }

  if (obj instanceof Date) {
    const cloned = new Date(obj.getTime()) as T
    visited.set(obj as object, cloned)
    return cloned
  }

  if (obj instanceof RegExp) {
    const cloned = new RegExp(obj.source, obj.flags) as T
    visited.set(obj as object, cloned)
    return cloned
  }

  if (Array.isArray(obj)) {
    const cloned = [] as T
    visited.set(obj, cloned)
    obj.forEach((item, index) => {
      (cloned as Record<string, unknown>)[index] = deepClone(item, visited)
    })
    return cloned
  }

  const cloned = {} as T
  visited.set(obj as object, cloned)
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key], visited)
    }
  }

  return cloned
}

/**
 * 全类型比较
 */
export function isEqual(a: any, b: any, visited = new WeakMap()): boolean {
  if (a === b) {
    return true
  }

  if (a == null || b == null) {
    return a === b
  }

  if (typeof a !== typeof b) {
    return false
  }

  if (typeof a !== 'object') {
    return a === b
  }

  if (visited.has(a)) {
    return visited.get(a) === b
  }
  visited.set(a, b)

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime()
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString()
  }

  if (Array.isArray(a) !== Array.isArray(b)) {
    return false
  }

  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false
    }
    return a.every((item, index) => isEqual(item, b[index], visited))
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) {
    return false
  }

  return keysA.every(key => Object.prototype.hasOwnProperty.call(b, key) && isEqual(a[key], b[key], visited))
}
