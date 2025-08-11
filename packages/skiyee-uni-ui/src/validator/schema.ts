/**
 * Schema 验证器
 *
 * 提供基于 Schema 的数据验证功能，支持同步和异步验证。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type {
  Schema,
  SchemaInferInput,
  SchemaInferOutput,
  SchemaIssue,
  SchemaResult,
} from './schema.type'

/**
 * 异步验证函数
 */
export async function validateSchema<T extends Schema>(
  schema: T,
  input: SchemaInferInput<T>,
): Promise<SchemaInferOutput<T>> {
  let result = schema['~standard'].validate(input)

  if (result instanceof Promise) {
    result = await result
  }

  if (result.issues) {
    throw new SchemaError(result.issues)
  }

  return result.value as SchemaInferOutput<T>
}

/**
 * 同步验证函数
 */
export function validateSchemaSync<T extends Schema>(
  schema: T,
  input: SchemaInferInput<T>,
): SchemaInferOutput<T> {
  const result = schema['~standard'].validate(input)

  if (result instanceof Promise) {
    throw new TypeError('Schema validation must be synchronous')
  }

  if (result.issues) {
    throw new SchemaError(result.issues)
  }

  return result.value as SchemaInferOutput<T>
}

/**
 * 验证并返回详细结果（不抛出错误）
 */
export async function validateSchemaWithResult<T extends Schema>(
  schema: T,
  input: SchemaInferInput<T>,
): Promise<SchemaResult<SchemaInferOutput<T>>> {
  let result = schema['~standard'].validate(input)

  if (result instanceof Promise) {
    result = await result
  }

  return result as SchemaResult<SchemaInferOutput<T>>
}

/**
 * 同步版本的验证结果函数
 */
export function validateSchemaWithResultSync<T extends Schema>(
  schema: T,
  input: SchemaInferInput<T>,
): SchemaResult<SchemaInferOutput<T>> {
  const result = schema['~standard'].validate(input)

  if (result instanceof Promise) {
    throw new TypeError('Schema validation must be synchronous')
  }

  return result as SchemaResult<SchemaInferOutput<T>>
}

// 验证错误类
export class SchemaError extends Error {
  public readonly issues: ReadonlyArray<SchemaIssue>

  constructor(issues: ReadonlyArray<SchemaIssue>) {
    super(issues[0]?.message || 'Validation failed')
    this.name = 'SchemaError'
    this.issues = issues
  }
}
