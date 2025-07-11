/**
 * Field 字段常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { FieldContext } from '../types'

export const SK_FIELD_KEY: InjectionKey<Readonly<FieldContext>> = Symbol('sk-field')
