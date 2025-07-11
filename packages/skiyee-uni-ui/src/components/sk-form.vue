<script lang="ts">
/**
 * sk-form 组件 - 用于管理表单数据和验证的表单容器组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-form :schema="schema" @submit="handleSubmit">
 *   <sk-field name="username" label="用户名" required>
 *     <sk-input v-model="formData.username" placeholder="请输入用户名" />
 *   </sk-field>
 * </sk-form>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/form
 */

import type { FormContext, FormFieldState } from '../types'
// eslint-disable-next-line import/no-duplicates
import type { Schema, SchemaInferInput, SchemaInferOutput } from '../validator'

export interface SkFormProps<TSchema extends Schema> {
  /**
   * 表单验证schema
   * @description 支持Zod、Valibot、ArkType或原生Standard Schema等
   */
  schema?: TSchema;
  /**
   * 表单数据内容
   */
  values?: Partial<SchemaInferInput<TSchema>>;
  /**
   * 是否禁用整个表单
   * @default false
   */
  disabled?: boolean;
  /**
   * 验证触发时机
   * @default ['change','blur']
   */
  validateOn?: ('change' | 'blur' | 'focus')[];
  /**
   * 防抖延迟（毫秒）
   * @default 300
   */
  debounceTime?: number;
}

export interface SkFormEmits<TSchema extends Schema> {
  /**
   * 表单提交时触发
   * @description 验证成功后触发
   * @param data 验证后的数据
   */
  (name: 'submit', data: SchemaInferOutput<TSchema>): void;
  /**
   * 表单重置时触发
   */
  (name: 'reset'): void;
}

export interface SkFormSlots {
  /**
   * 表单内容区域
   */
  default?: () => any;
  /**
   * 表单底部区域，通常放按钮
   */
  footer?: () => any;
}
</script>

<script setup lang="ts" generic="T extends Schema = Schema">
// eslint-disable-next-line import/no-duplicates
import type { FormFieldError, FormFieldErrors, FormValidationResult, SchemaIssues } from '../validator'

import { computed, reactive, readonly, ref } from 'vue'

import { useProvide } from '../composables'
import { SK_FORM_KEY } from '../constants'
import { createFormValidator } from '../validator'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkFormProps<T>>(), {
  size: 'medium',
  disabled: false,
  validateOn: () => ['change', 'blur'],
  debounceTime: 300,
})

const emits = defineEmits<SkFormEmits<T>>()

defineSlots<SkFormSlots>()

const schema = computed(() => props.schema as T)

const formValidator = computed(() => createFormValidator({
  schema: schema.value,
}))

const fields = ref<Record<string, FormFieldState>>({})

const useFieldState = () => {
  const init = (name: string): FormFieldState => {
    return {
      name,
      value: undefined,
      touched: false,
      errors: [],
      dirty: false,
      validating: false,
      valid: true,
    }
  }

  const update = (
    name: string,
    newState: Partial<FormFieldState>,
  ) => {
    const oldState = fields.value[name] || init(name)

    fields.value[name] = { ...oldState, ...newState }
  }

  const get = (name: string): FormFieldState => {
    return fields.value[name] || init(name)
  }

  return {
    update,
    get,
  }
}

const fieldState = useFieldState()

const issues = ref<Record<string, SchemaIssues>>({})
const errors = ref<Record<string, FormFieldError>>({})

function setFieldError(
  name: string,
  fieldIssue: SchemaIssues,
  fieldError: FormFieldErrors[string],
) {
  issues.value[name] = fieldIssue
  errors.value[name] = fieldError

  fieldState.update(name, {
    errors: fieldError,
    valid: false,
  })
}

function clearFieldError(name: string) {
  delete issues.value[name]
  delete errors.value[name]

  fieldState.update(name, {
    errors: [],
    valid: true,
  })
}

const currentFormData = computed<Partial<SchemaInferInput<T>>>(() => props.values || {})

/*
// 重置字段
function resetField(name: string) {
  delete fields.value[name]
  delete touched.value[name]
  delete dirty.value[name]

  clearFieldError(name)
}
*/

async function validateField(
  name: string,
  value: unknown,
) {
  const result = await formValidator.value.validateField(
    name,
    value,
    currentFormData.value,
  )

  fieldState.update(name, {
    value,
    validating: false,
  })

  if (result.success) {
    clearFieldError(name)
  }
  else {
    setFieldError(
      name,
      result.issues,
      result.error,
    )
  }

  return result
}

const debounceTimers = new Map<string, NodeJS.Timeout>()

function handleFieldValidation(name: string, value: unknown) {
  if (debounceTimers.has(name)) {
    clearTimeout(debounceTimers.get(name)!)
  }

  const timer = setTimeout(async () => {
    fieldState.update(name, { validating: true })

    await validateField(name, value)

    debounceTimers.delete(name)
  }, props.debounceTime)

  debounceTimers.set(name, timer)
}

const dirty = ref<Record<string, boolean>>({})
function setFieldValue(name: string, value: unknown) {
  dirty.value[name] = true

  fieldState.update(name, { value, dirty: true })
}

function handleFieldChange(name: string, value: unknown) {
  setFieldValue(name, value)

  if (props.validateOn.includes('change')) {
    handleFieldValidation(name, value)
  }
}

const touched = ref<Record<string, boolean>>({})
function setFieldTouched(name: string, isTouched = true) {
  touched.value[name] = isTouched
  fieldState.update(name, { touched: isTouched })
}

function handleFieldBlur(name: string, value: unknown) {
  setFieldTouched(name, true)

  /*
  // 触发blur事件
  emits('blur', { name, value: fieldValue })
  */

  if (props.validateOn.includes('blur')) {
    handleFieldValidation(name, value)
  }
}

function handleFieldFocus(name: string, value: unknown) {
  setFieldTouched(name, true)

  if (props.validateOn.includes('focus')) {
    handleFieldValidation(name, value)
  }
}

const globalErrors = ref<string[]>([])

const isGlobalValidating = ref(false)
const isGlobalValid = ref(true)

const isSubmitted = ref(false)

async function validateForm(): Promise<FormValidationResult<SchemaInferOutput<T>>> {
  isGlobalValidating.value = true

  try {
    const result = await formValidator.value.validateForm(currentFormData.value as SchemaInferInput<T>)

    globalErrors.value = result.formErrors
    isGlobalValid.value = result.success

    for (const [name, error] of Object.entries(result.fieldErrors)) {
      const issues = result.issues.filter(
        issue => formValidator.value.getDotPath(issue) === name,
      )

      setFieldError(
        name,
        issues,
        error,
      )
    }

    // 触发验证事件
    // emits('validate', result)

    return result
  }
  finally {
    isGlobalValidating.value = false
  }
}

async function submitForm() {
  isSubmitted.value = true

  const result = await validateForm()
  if (result.success && result.data) {
    emits('submit', result.data)
  }
}

function resetForm() {
  issues.value = {}
  errors.value = {}
  fields.value = {}
  touched.value = {}
  dirty.value = {}
  globalErrors.value = []
  isGlobalValid.value = true
  isSubmitted.value = false

  debounceTimers.forEach(timer => clearTimeout(timer))
  debounceTimers.clear()

  emits('reset')
}

const formContext = readonly({
  props,
  state: reactive({
    isSubmitted,
    isGlobalValid,
  }),

  getFieldState: fieldState.get,

  handleFieldChange,
  handleFieldBlur,
  handleFieldFocus,
})

useProvide(SK_FORM_KEY)(formContext as FormContext<T>)

defineExpose({
  validate: validateForm,
  submit: submitForm,
  reset: resetForm,
})
</script>

<template>
  <form>
    <div class="flex flex-col sk-unit:gap-14">
      <slot />
    </div>

    <template v-if="globalErrors.length > 0">
      <div
        v-for="error in globalErrors"
        :key="error"
        class="text-danger text-sup-medium"
      >
        {{ error }}
      </div>
    </template>

    <slot name="footer" />
  </form>
</template>
