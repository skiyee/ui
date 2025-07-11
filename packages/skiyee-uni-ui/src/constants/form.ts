/**
 * Form 表单常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { FormContext } from '../types'

export const SK_FORM_KEY: InjectionKey<Readonly<FormContext>> = Symbol('sk-form')
