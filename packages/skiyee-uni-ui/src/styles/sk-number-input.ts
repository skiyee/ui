// @unocss-include
/**
 * sk-number-input 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkNumberInputUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/number-input
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkNumberInputUcv = ucv({
  element: {
    root: 'relative inline-flex items-center rounded-medium bg-subtle overflow-hidden',
    input: 'flex-1 h-full text-center text-primary',
    button: 'flex-center h-full shrink-0 bg-muted cursor-pointer transition-colors duration-200',
    icon: 'text-secondary',
    placeholder: 'text-placeholder',
  },
  variants: {
    size: {
      small: {
        root: 'sk-unit:h-42',
        input: 'sk-unit:w-68 text-body-small',
        button: 'sk-unit:px-16',
        icon: 'sk-unit:size-16',
      },
      medium: {
        root: 'sk-unit:h-44',
        input: 'sk-unit:w-80 text-body-medium',
        button: 'sk-unit:px-18',
        icon: 'sk-unit:size-18',
      },
      large: {
        root: 'sk-unit:h-46',
        input: 'sk-unit:w-92 text-body-large',
        button: 'sk-unit:px-18',
        icon: 'sk-unit:size-20',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60 cursor-not-allowed',
        input: 'cursor-not-allowed',
        button: 'cursor-not-allowed pointer-events-none',
      },
      false: {},
    },
    readonly: {
      true: {
        input: 'cursor-not-allowed',
        button: 'cursor-not-allowed pointer-events-none',
      },
      false: {},
    },
    range: {
      true: {},
      false: {
        button: 'opacity-60',
      },
    },
  },
  defaults: {
    size: 'medium',
    disabled: false,
    readonly: false,
  },
})

export type SkNumberInputUcvProps = InferProps<typeof SkNumberInputUcv>
