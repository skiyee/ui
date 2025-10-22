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
    scrollView: 'w-full overflow-x-auto overflow-y-hidden',
    nav: 'relative inline-flex min-w-full',
    line: 'absolute bottom-0 left-0 h-2px bg-brand transition-all duration-300 ease-out',
  },
  variants: {
    scrollable: {
      true: {
        scrollView: 'scrollbar-hide',
      },
      false: {
        nav: 'w-full',
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
  },
  defaults: {
    scrollable: false,
    animated: true,
  },
})

export type SkTabsUcvProps = InferProps<typeof SkTabsUcv>
