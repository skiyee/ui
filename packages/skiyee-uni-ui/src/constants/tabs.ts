/**
 * Tabs 标签页常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { TabsContext } from '../types'

export const SK_TABS_KEY: InjectionKey<Readonly<TabsContext>> = Symbol('sk-tabs')
