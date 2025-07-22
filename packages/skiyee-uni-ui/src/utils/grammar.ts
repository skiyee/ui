/**
 * 动画帧请求 ID 类型
 * 在不同环境下可能是 number 或 NodeJS.Timeout
 */
export type AnimationFrameId = number | NodeJS.Timeout

/**
 * 跨平台的动画帧请求函数
 * 在 H5 环境使用原生 requestAnimationFrame，在非 H5 环境使用 setTimeout 模拟
 * @param cb 回调函数
 * @returns 返回可用于取消的 ID
 */
export function skRequestAnimationFrame(cb: () => void): AnimationFrameId {
  // #ifndef H5
  return setTimeout(cb, 16) // 约 60fps
  // #endif
  // #ifdef H5
  return requestAnimationFrame(cb)
  // #endif
}

/**
 * 取消动画帧请求
 * @param id skRequestAnimationFrame 返回的 ID
 */
export function skCancelAnimationFrame(id: AnimationFrameId): void {
  // #ifndef H5
  clearTimeout(id as NodeJS.Timeout)
  // #endif
  // #ifdef H5
  cancelAnimationFrame(id as number)
  // #endif
}
