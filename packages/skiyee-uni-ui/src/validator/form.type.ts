/**
 * Form 表单验证器类型定义
 *
 * 定义表单验证器相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { Schema, SchemaIssue } from './schema.type'

/**
 * 字段验证选项
 */
export interface FieldValidationOptions {
  /** 字段路径 */
  path?: string;
  /** 是否在第一个错误时停止 */
  abortEarly?: boolean;
  /** 自定义错误消息 */
  customMessage?: string;
}

/**
 * 表单验证器配置
 */
export interface FormValidatorConfig<TSchema extends Schema> {
  /** 验证schema */
  schema: TSchema;
  /** 默认验证选项 */
  defaultOptions?: FieldValidationOptions;
  /** 错误消息转换函数 */
  messageTransformer?: (issue: SchemaIssue) => string;
  /** 路径转换函数 */
  pathTransformer?: (path: string[]) => string;
}

/**
 * 表单验证问题
 */
export type SchemaIssues = ReadonlyArray<SchemaIssue>

/**
 * 表单级错误问题
 */
export type FormErrors = string[]

export type FormFieldError = string[]

/**
 * 字段级错误映射
 * 键为字段路径（点分隔），值为错误消息数组
 */
export interface FormFieldErrors {
  [fieldPath: string]: FormFieldError;
}

/**
 * 表单验证结果
 */
export interface FormValidationResult<T = any> {
  /** 验证是否成功 */
  success: boolean;
  /** 验证后的数据（成功时） */
  data?: T;
  /** 字段级错误 */
  fieldErrors: FormFieldErrors;
  /** 表单级错误 */
  formErrors: FormErrors;
  /** 原始验证问题 */
  issues: SchemaIssues;
}

/**
 * 字段验证结果
 */
export interface FormFieldValidationResult<T> {
  /** 验证是否成功 */
  success: boolean;
  /** 验证后的数据（成功时） */
  data?: T;
  /** 字段级错误 */
  error: FormFieldErrors[string];
  /** 原始验证问题 */
  issues: SchemaIssues;
}
