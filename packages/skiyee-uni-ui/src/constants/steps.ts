/**
 * Steps 步骤条常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { StepsContext } from '../types'

export const SK_STEPS_KEY: InjectionKey<Readonly<StepsContext>> = Symbol('sk-steps')
