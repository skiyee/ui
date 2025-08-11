// @unocss-include
/**
 * sk-field 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkFieldUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/field
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkFieldUcv = ucv({
  element: {
    root: 'w-full sk-unit:mt-14 first:mt-0',
    label: 'text-body-medium text-primary',
    required: 'text-danger sk-unit:ml-4',
    content: 'w-full',
    description: 'w-full text-description text-sup-large-lt sk-unit:(px-2 mt-4)',
    error: 'w-full text-danger text-sup-large-lt sk-unit:(px-2 mt-4)',
  },
  variants: {
    size: {
      small: {
        label: 'text-body-small',
        description: 'text-body-small',
      },
      medium: {
        label: 'text-body-medium',
        description: 'text-body-small',
      },
      large: {
        label: 'text-body-large',
        description: 'text-body-medium',
      },
    },
    orientation: {
      vertical: {
        root: 'flex flex-col',
        content: 'sk-unit:mt-8',
      },
      horizontal: {
        root: 'flex flex-row items-center flex-wrap',
        label: 'shrink-0',
        content: 'flex-1',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60 pointer-events-none',
      },
      false: {},
    },
  },
  defaults: {
    size: 'medium',
    orientation: 'vertical',
    disabled: false,
  },
})

export type SkFieldUcvProps = InferProps<typeof SkFieldUcv>
