// @unocss-include
/**
 * sk-checkbox 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkCheckboxUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/checkbox
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkCheckboxUcv = ucv({
  element: {
    root: 'inline-flex items-center sk-unit:p-8 -sk-unit:m-8 cursor-pointer select-none',
    checkbox: 'box-border relative inline-flex flex-center border-(~ solid) transition-colors duration-250',
    icon: 'sk-element:opacity-0 transition-opacity duration-250',
    label: 'sk-unit:ml-10 text-primary select-none',
  },
  variants: {
    size: {
      small: {
        checkbox: 'sk-variant:sk-unit:size-15 rounded-tiny',
        icon: 'sk-variant:sk-unit:size-10',
        label: 'text-body-small',
      },
      medium: {
        checkbox: 'sk-variant:sk-unit:size-18 rounded-mini',
        icon: 'sk-variant:sk-unit:size-12',
        label: 'text-body-medium',
      },
      large: {
        checkbox: 'sk-variant:sk-unit:size-21 rounded-mini',
        icon: 'sk-variant:sk-unit:size-14',
        label: 'text-body-large',
      },
    },
    color: {
      brand: {
        icon: 'sk-variant:text-brand-foreground',
        checkbox: 'sk-variant:(border-brand bg-brand)',
      },
      success: {
        icon: 'sk-variant:text-success-foreground',
        checkbox: 'sk-variant:(border-success bg-success)',
      },
      warning: {
        icon: 'sk-variant:text-warning-foreground',
        checkbox: 'sk-variant:(border-warning bg-warning)',
      },
      danger: {
        icon: 'sk-variant:text-danger-foreground',
        checkbox: 'sk-variant:(border-danger bg-danger)',
      },
      neutral: {
        icon: 'sk-variant:text-neutral-foreground',
        checkbox: 'sk-variant:(border-neutral bg-neutral)',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60 cursor-not-allowed pointer-events-none',
      },
      false: {},
    },
    checked: {
      true: {
        icon: 'sk-variant:opacity-100',
      },
      false: {
        checkbox: 'sk-variant-a:(border-base bg-transparent)',
      },
    },
  },
  defaults: {
    size: 'medium',
    color: 'brand',
    disabled: false,
    checked: false,
  },
})

export type SkCheckboxUcvProps = InferProps<typeof SkCheckboxUcv>
