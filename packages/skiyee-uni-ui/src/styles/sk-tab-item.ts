// @unocss-include
/**
 * sk-tab-item 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkTabItemUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/tabs
 */

import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkTabItemUcv = ucv({
  element: {
    root: 'relative flex-shrink-0 inline-flex items-center justify-center px-16px py-12px text-body-medium font-medium cursor-pointer transition-colors duration-200 whitespace-nowrap select-none',
    content: 'flex items-center gap-4px',
    icon: 'text-icon-medium',
    label: 'text-inherit',
    badge: 'ml-4px',
  },
  variants: {
    active: {
      true: {
        root: 'text-brand',
      },
      false: {
        root: 'text-secondary',
      },
    },
    disabled: {
      true: {
        root: 'text-disabled cursor-not-allowed opacity-40',
      },
      false: {
        root: 'hover:text-primary active:text-brand',
      },
    },
    scrollable: {
      true: {
        root: 'flex-shrink-0',
      },
      false: {
        root: 'flex-1',
      },
    },
  },
  cases: [
    {
      when: { active: true, disabled: false },
      use: {
        root: 'text-brand',
      },
    },
  ],
  defaults: {
    active: false,
    disabled: false,
    scrollable: false,
  },
})

export type SkTabItemUcvProps = InferProps<typeof SkTabItemUcv>
