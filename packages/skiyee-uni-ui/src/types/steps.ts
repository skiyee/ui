/**
 * Steps 步骤条类型定义
 *
 * 定义步骤条相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { SkStepsUcvProps, SkStepUcvProps } from '../styles'

/**
 * 步骤状态类型
 */
export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

/**
 * 步骤条上下文
 */
export interface StepsContext {
  props: {
    active?: number;
    direction?: SkStepsUcvProps['direction'];
    size?: SkStepUcvProps['size'];
    activeColor?: string;
    inactiveColor?: string;
    disabled?: boolean;
  };
  /**
   * 获取步骤的索引
   */
  getStepIndex: (uid: number) => number;
  /**
   * 注册步骤
   */
  registerStep: (uid: number) => void;
  /**
   * 注销步骤
   */
  unregisterStep: (uid: number) => void;
  /**
   * 点击步骤
   */
  onStepClick: (index: number) => void;
}
