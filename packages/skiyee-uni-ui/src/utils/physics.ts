/**
 * 物理计算相关工具函数
 * @description 包含惯性滚动、速度计算等物理相关的工具函数
 */

// 惯性滚动参数配置
export interface InertiaConfig {
  friction: number; // 摩擦系数
  minVelocity: number; // 最小速度阈值 (px/ms)
  velocityHistoryTime: number; // 速度历史记录时间窗口 (ms)
}

// 默认惯性滚动配置
export const DEFAULT_INERTIA_CONFIG: InertiaConfig = {
  friction: 0.002, // 摩擦系数（降低以增加惯性）
  minVelocity: 0.05, // 最小速度阈值 (px/ms)（降低以支持缓慢滑动）
  velocityHistoryTime: 80, // 速度历史记录时间窗口 (ms)
}

// 速度历史记录类型
export interface VelocityRecord {
  velocity: number;
  time: number;
}

// 触摸状态接口
export interface TouchState {
  velocity: number;
  velocityHistory: VelocityRecord[];
}

/**
 * 计算平滑速度（基于历史记录）
 * @param touchState 触摸状态对象
 * @param config 惯性配置
 * @returns 平滑后的速度值
 */
export function calculateSmoothVelocity(
  touchState: TouchState,
  config: InertiaConfig = DEFAULT_INERTIA_CONFIG,
): number {
  const now = Date.now()

  // 清理过期的历史记录
  touchState.velocityHistory = touchState.velocityHistory.filter(
    record => now - record.time <= config.velocityHistoryTime,
  )

  if (touchState.velocityHistory.length === 0) {
    return touchState.velocity
  }

  // 计算加权平均速度（越新的权重越大）
  let totalWeight = 0
  let weightedSum = 0

  touchState.velocityHistory.forEach((record, index) => {
    const weight = index + 1 // 越新的记录权重越大
    totalWeight += weight
    weightedSum += record.velocity * weight
  })

  return totalWeight > 0 ? weightedSum / totalWeight : touchState.velocity
}

/**
 * 计算惯性滚动距离
 * @param touchState 触摸状态对象
 * @param config 惯性配置
 * @returns 惯性滚动距离
 */
export function calculateInertiaDistance(
  touchState: TouchState,
  config: InertiaConfig = DEFAULT_INERTIA_CONFIG,
): number {
  // 注意方向转换
  const velocity = calculateSmoothVelocity(touchState, config) * -1

  if (Math.abs(velocity) < config.minVelocity) {
    return 0
  }

  // 基于物理公式：距离 = 速度² / (2 × 摩擦系数)
  return (velocity * velocity) / (2 * config.friction) * Math.sign(velocity)
}
