// @unocss-include
/**
 * sk-spinner 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkSpinnerUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/spinner
 */

import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkSpinnerUcv = ucv({
  element: {
    root: 'relative flex-center inline-flex',
    spinner: 'flex-center',
    icon: 'sk-icon',
  },
  variants: {
    variant: {
      circular: {
        icon: 'sk-icon--circle animate-spin',
      },
      dots: {
        icon: 'sk-icon--dots',
      },
      custom: {},
    },
    size: {
      small: {
        spinner: 'sk-unit:size-16',
      },
      medium: {
        spinner: 'sk-unit:size-20',
      },
      large: {
        spinner: 'sk-unit:size-28',
      },
    },
    color: {
      current: {
        spinner: 'text-current',
      },
      brand: {
        spinner: 'text-brand',
      },
      success: {
        spinner: 'text-success',
      },
      warning: {
        spinner: 'text-warning',
      },
      danger: {
        spinner: 'text-danger',
      },
      neutral: {
        spinner: 'text-neutral',
      },
    },
  },
  defaults: {
    variant: 'circular',
    size: 'medium',
    color: 'current',
  },
})

export type SkSpinnerUcvProps = InferProps<typeof SkSpinnerUcv>
