// @unocss-include
/**
 * sk-input 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkInputUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/input
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkInputUcv = ucv({
  element: {
    root: 'relative flex flex-row items-center w-full sk-unit:(gap-x-8 px-12) rounded-medium bg-subtle box-border transition-colors',
    leading: 'inline-flex items-center shrink-0 sk-element:text-description',
    inner: 'inline-flex size-full items-center box-border',
    content: 'size-full font-normal text-primary border-none outline-none',
    placeholder: 'text-placeholder',
    trailing: 'inline-flex items-center shrink-0 sk-element:text-description',
  },
  variants: {
    size: {
      small: {
        root: 'sk-variant:sk-unit:h-42',
        leading: 'sk-variant:text-body-small',
        content: 'text-body-small',
        trailing: 'sk-variant:text-body-small',
      },
      medium: {
        root: 'sk-variant:sk-unit:h-44',
        leading: 'sk-variant:text-body-medium-lt',
        content: 'text-body-medium-lt',
        trailing: 'sk-variant:text-body-medium-lt',
      },
      large: {
        root: 'sk-variant:sk-unit:h-46',
        leading: 'sk-variant:text-body-medium',
        content: 'text-body-medium',
        trailing: 'sk-variant:text-body-medium',
      },
    },
    readonly: {
      true: {
        root: 'cursor-not-allowed',
      },
      false: {},
    },
    disabled: {
      true: {
        root: 'sk-variant:opacity-60 cursor-not-allowed',
      },
      false: {},
    },
  },
  defaults: {
    size: 'medium',
    readonly: false,
    disabled: false,
  },
})

export type SkInputUcvProps = InferProps<typeof SkInputUcv>
