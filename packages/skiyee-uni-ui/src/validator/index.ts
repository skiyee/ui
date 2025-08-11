/**
 * Validator 验证器模块
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

export { createFormValidator } from './form'
export type { FormFieldError, FormFieldErrors, FormValidationResult, FormValidatorConfig, SchemaIssues } from './form.type'

export { validateSchema, validateSchemaSync, validateSchemaWithResult, validateSchemaWithResultSync } from './schema'
export type { Schema, SchemaInferInput, SchemaInferOutput } from './schema.type'
