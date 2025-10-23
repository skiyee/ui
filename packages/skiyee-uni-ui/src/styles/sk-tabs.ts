// @unocss-include
/**
 * sk-tabs 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkTabsUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/tabs
 */

import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkTabsUcv = ucv({
  element: {
    root: 'relative w-full bg-surface',
    scrollWrapper: 'w-full overflow-x-auto overflow-y-hidden',
    nav: 'relative inline-flex min-w-full',
    tab: 'relative inline-flex items-center justify-center whitespace-nowrap select-none transition-colors',
    tabContent: 'flex items-center sk-unit:gap-8 sk-unit:px-16 sk-unit:py-8 text-sm font-medium sk-element:text-secondary',
    line: 'absolute bottom-0 left-0 sk-unit:h-2 bg-brand transition-all duration-300 ease-out',
    panels: 'w-full',
  },
  variants: {
    scrollable: {
      true: {
        scrollWrapper: 'scrollbar-hide',
        tab: 'flex-shrink-0',
      },
      false: {
        nav: 'w-full',
        tab: 'flex-1',
      },
    },
    animated: {
      true: {
        line: 'transition-all duration-300',
      },
      false: {
        line: 'transition-none',
      },
    },
    active: {
      true: {
        tabContent: 'sk-variant:text-brand',
      },
      false: {},
    },
    disabled: {
      true: {
        tab: 'cursor-not-allowed',
        tabContent: 'sk-variant:text-disabled',
      },
      false: {
        tab: 'cursor-pointer',
      },
    },
  },
  defaults: {
    scrollable: false,
    animated: true,
    active: false,
    disabled: false,
  },
})

export type SkTabsUcvProps = InferProps<typeof SkTabsUcv>
