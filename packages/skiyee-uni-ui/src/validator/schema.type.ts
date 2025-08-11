/**
 * Schema 验证器类型定义
 *
 * 定义 Schema 验证器相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { StandardSchemaV1 } from '@standard-schema/spec'

// Schema 主接口
export type Schema<
  Input extends object = object,
  Output extends object = Input,
> = StandardSchemaV1<Input, Output>

// 验证结果类型
export type SchemaResult<o> = StandardSchemaV1.Result<o>

// 验证问题接口
export type SchemaIssue = StandardSchemaV1.Issue

// 类型推断工具
export type SchemaInferInput<
  Schema extends StandardSchemaV1,
> = StandardSchemaV1.InferInput<Schema>

export type SchemaInferOutput<
  Schema extends StandardSchemaV1,
> = StandardSchemaV1.InferOutput<Schema>
