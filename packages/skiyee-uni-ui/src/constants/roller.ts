/**
 * Roller 滚动选择器常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { RollerGroupContext } from '../types'

export const SK_ROLLER_GROUP_KEY: InjectionKey<Readonly<RollerGroupContext>> = Symbol('sk-roller-group')
