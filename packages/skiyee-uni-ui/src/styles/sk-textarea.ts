// @unocss-include
/**
 * sk-textarea 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkTextareaUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/textarea
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkTextareaUcv = ucv({
  element: {
    root: 'relative flex flex-col w-full box-border bg-subtle rounded-medium',
    container: 'relative box-border flex flex-col w-full sk-unit:p-12',
    inner: 'relative flex w-full',
    content: 'size-full text-primary bg-transparent resize-none overflow-y-auto',
    placeholder: 'text-placeholder',
    clear: 'sk-unit:(size-16 p-6 -m-6) inline-flex shrink-0 text-tertiary hover:text-brand cursor-pointer transition-colors',
    clearIcon: '',
    counter: 'text-sup-large-lt:none text-description sk-unit:mt-4 -sk-unit:mb-2 text-right',
  },
  variants: {
    size: {
      small: {
        inner: 'sk-variant:sk-unit:h-48',
        content: 'text-body-small',
      },
      medium: {
        inner: 'sk-variant:sk-unit:h-60',
        content: 'text-body-medium-lt',
      },
      large: {
        inner: 'sk-variant:sk-unit:h-72',
        content: 'text-body-medium',
      },
    },
    focused: {
      true: {},
      false: {},
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
    autoHeight: {
      true: {
        inner: 'h-auto sk-variant:sk-unit:max-h-150',
      },
      false: {},
    },
  },
  defaults: {
    size: 'medium',
    focused: false,
    disabled: false,
    autoHeight: false,
  },
})

export type SkTextareaUcvProps = InferProps<typeof SkTextareaUcv>
