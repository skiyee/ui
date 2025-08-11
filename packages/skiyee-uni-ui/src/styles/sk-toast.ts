// @unocss-include
/**
 * sk-toast 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkToastUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/toast
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkToastUcv = ucv({
  element: {
    root: 'flex items-center justify-center w-full',
    toast: 'relative flex items-center sk-unit:(max-w-320 px-16 py-12 gap-x-8) rounded-medium shadow-large',
    icon: 'shrink-0 flex-center',
    iconInner: 'sk-unit:size-18',
    content: 'flex-1 min-w-0',
    message: 'text-body-medium',
    close: 'sk-variant-a:h-auto shrink-0 -sk-unit:m-8 sk-unit:p-8 cursor-pointer',
    closeIcon: 'sk-unit:size-12 text-secondary hover:text-primary transition-colors',
  },
  variants: {
    type: {
      default: {
        toast: 'bg-surface text-primary',
        iconInner: 'text-primary',
      },
      info: {
        toast: 'bg-brand text-brand-foreground',
        iconInner: 'text-brand-foreground',
      },
      success: {
        toast: 'bg-success text-success-foreground',
        iconInner: 'text-success-foreground',
      },
      warning: {
        toast: 'bg-warning text-warning-foreground',
        iconInner: 'text-warning-foreground',
      },
      error: {
        toast: 'bg-danger text-danger-foreground',
        iconInner: 'text-danger-foreground',
      },
    },
    hasIcon: {
      true: {},
      false: {
        icon: 'hidden',
      },
    },
    hasMessage: {
      true: {},
      false: {
        content: 'hidden',
      },
    },
    closable: {
      true: {},
      false: {
        close: 'hidden',
      },
    },
  },
  defaults: {
    type: 'info',
    hasIcon: false,
    hasMessage: true,
    closable: false,
  },
})

export type SkToastUcvProps = InferProps<typeof SkToastUcv>
