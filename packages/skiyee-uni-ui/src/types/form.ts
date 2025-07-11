/**
 * Form 表单类型定义
 *
 * 定义表单相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { Schema, SchemaInferInput } from '../validator/schema.type'

/**
 * 表单字段状态
 * 用于存储表单字段的值、状态和错误信息
 */
export interface FormFieldState {
  /**
   * 字段名称
   */
  name: string;
  /**
   * 字段值
   */
  value: unknown;
  /**
   * 是否已触摸
   *
   * 作用：标记用户是否与该字段进行过交互
   *
   * 触发时机：通常在用户第一次点击或聚焦到字段时设置为 true
   *
   * 用途：
   * - 控制错误信息的显示时机（只有用户触摸过的字段才显示错误）
   * - 避免在用户还没有操作字段时就显示验证错误
   * - 提升用户体验，不会在页面加载时就显示一堆错误信息
   */
  touched: boolean;
  /**
   * 错误信息
   *
   * 作用：存储字段的验证错误信息
   *
   * 触发时机：当字段的值发生变化时，根据验证规则重新计算错误信息
   *
   * 用途：
   * - 显示错误信息
   * - 控制错误信息的显示时机（通常只有在字段被触摸后才显示错误信息）
   */
  errors: string[];
  /**
   * 是否已修改
   *
   * 作用：标记字段的值是否已经被用户修改过
   *
   * 触发时机：当字段的当前值与初始值不同时设置为 true
   *
   * 用途：
   * - 判断表单是否有未保存的更改
   * - 在用户离开页面时提示保存
   * - 控制某些UI状态（如保存按钮的启用/禁用）
   * - 实现"重置"功能的逻辑判断
   */
  dirty: boolean;
  /**
   * 是否正在验证
   *
   * 作用：标记字段是否正在进行异步验证
   *
   * 触发时机：在异步验证开始时设置为 true，验证完成后设置为 false
   *
   * 用途：
   * - 显示加载状态（如旋转图标）
   * - 防止用户在验证期间重复提交
   * - 提供视觉反馈告知用户系统正在处理
   * - 在验证期间禁用某些操作
   */
  validating: boolean;
  /**
   * 是否有效
   *
   * 作用：标记字段当前的验证状态是否通过
   *
   * 计算方式：基于字段的验证规则和当前值计算得出
   *
   * 用途：
   * - 控制字段的视觉反馈（红色边框表示无效，绿色表示有效）
   * - 决定表单是否可以提交
   * - 显示/隐藏相关的错误信息
   * - 控制下一步操作的可用性
   */
  valid: boolean;
}

export interface FormContext<TSchema extends Schema = Schema> {
  props: {
    schema?: TSchema;
    values?: Partial<SchemaInferInput<TSchema>>;
    disabled?: boolean;
    validateOn?: ('change' | 'blur' | 'focus')[];
    debounceMs?: number;
    abortEarly?: boolean;
  };

  state: {
    isSubmitted: boolean;
    isGlobalValid: boolean;
  };

  getFieldState: (name: string) => FormFieldState;

  handleFieldChange: (name: string, value: unknown) => void;
  handleFieldFocus: (name: string, value: unknown) => void;
  handleFieldBlur: (name: string, value: unknown) => void;
}
