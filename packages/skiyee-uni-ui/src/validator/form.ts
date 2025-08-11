/**
 * Form 表单验证器
 *
 * 提供基于 Schema 的表单验证功能，包含表单级验证、字段级验证、错误处理和消息转换等功能。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 */

import type { FormFieldErrors, FormFieldValidationResult, FormValidationResult, FormValidatorConfig } from './form.type'
import type { Schema, SchemaInferInput, SchemaInferOutput, SchemaIssue } from './schema.type'

import { validateSchema } from './schema'

/**
 * 表单验证器类
 * 接受任何符合 Schema规范的验证库schema
 */
export class FormValidator<TSchema extends Schema> {
  private readonly schema: TSchema
  private readonly messageTransformer?: (issue: SchemaIssue) => string
  private readonly pathTransformer?: (path: string[]) => string

  constructor(config: FormValidatorConfig<TSchema>) {
    this.schema = config.schema
    this.messageTransformer = config.messageTransformer
    this.pathTransformer = config.pathTransformer
  }

  /**
   * 从验证问题中生成点分隔路径
   */
  getDotPath(issue: SchemaIssue): string | undefined {
    return issue.path
      ?.map(item => (typeof item === 'object' ? item.key : item))
      .join('.')
  }

  /**
   * 从验证问题中提取字段级和表单级错误
   */
  private getErrors(issues: ReadonlyArray<SchemaIssue>) {
    const fieldErrors: FormFieldErrors = {}
    const formErrors: string[] = []

    for (const issue of issues) {
      const dotPath = this.getDotPath(issue)
      if (dotPath) {
        if (fieldErrors[dotPath]) {
          fieldErrors[dotPath].push(issue.message)
        }
        else {
          fieldErrors[dotPath] = [issue.message]
        }
      }
      else {
        formErrors.push(issue.message)
      }
    }

    return { fieldErrors, formErrors }
  }

  /** 验证整个表单 */
  async validateForm(
    data: SchemaInferInput<TSchema>,
  ): Promise<FormValidationResult<SchemaInferOutput<TSchema>>> {
    try {
      const validData = await validateSchema(this.schema, data)
      return {
        success: true,
        data: validData,
        fieldErrors: {},
        formErrors: [],
        issues: [],
      }
    }
    catch (error: any) {
      const issues = this.transformIssues(error.issues || [])
      const errors = this.getErrors(issues)
      return {
        success: false,
        fieldErrors: errors.fieldErrors,
        formErrors: errors.formErrors,
        issues,
      }
    }
  }

  async validateField<T>(
    path: string,
    value: T,
    formData?: Partial<SchemaInferInput<TSchema>>,
  ): Promise<FormFieldValidationResult<T>> {
    const data = formData ? { ...formData } : {}
    // 当formData无法即时更新时，这里是解决方案，将value值更新到data中
    // data = this.setNestedValue(data, fieldPath, value)

    const result = await this.validateForm(data)

    // 过滤出与当前字段相关的错误
    const error: FormFieldErrors[string] = []
    const relevantErrors = result.fieldErrors[path]
    if (relevantErrors) {
      error.push(...relevantErrors)
    }

    const issues = result.issues.filter(issue =>
      this.getDotPath(issue) === path,
    )

    return {
      success: !relevantErrors || relevantErrors.length === 0,
      data: value,
      error,
      issues,
    }
  }

  private transformIssues(issues: ReadonlyArray<SchemaIssue>): ReadonlyArray<SchemaIssue> {
    if (!this.messageTransformer && !this.pathTransformer) {
      return issues
    }

    return issues.map((issue) => {
      const transformedIssue = { ...issue }

      if (this.messageTransformer) {
        transformedIssue.message = this.messageTransformer(issue)
      }

      if (this.pathTransformer && issue.path) {
        const pathArray = this.getFieldPath(issue)
        const transformedPath = this.pathTransformer(pathArray)
        transformedIssue.path = transformedPath.split('.')
      }

      return transformedIssue
    })
  }

  /**
   * 从验证问题中生成字段路径数组
   */
  private getFieldPath(issue: SchemaIssue): string[] {
    if (!issue.path) {
      return []
    }
    return issue.path.map(item =>
      typeof item === 'object' ? String(item.key) : String(item),
    )
  }
}

/**
 * 创建表单验证器
 */
export function createFormValidator<TSchema extends Schema>(
  config: FormValidatorConfig<TSchema>,
): FormValidator<TSchema> {
  return new FormValidator(config)
}
