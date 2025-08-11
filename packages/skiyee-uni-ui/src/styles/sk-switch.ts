// @unocss-include
/**
 * sk-switch 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkSwitchUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/switch
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkSwitchUcv = ucv({
  element: {
    root: 'inline-flex items-center cursor-pointer text-primary',
    track: 'relative inline-flex items-center shrink-0 rounded-full sk-unit:p-2 box-border transition-colors',
    thumb: 'flex-center inline-flex rounded-full shadow-small transition-transform',
    thumbIcon: 'sk-element:size-1.15em',
    label: 'sk-unit:ml-12 select-none',
  },
  variants: {
    selected: {
      true: {
        thumb: 'translate-x-full',
      },
      false: {
        track: 'bg-muted',
        thumb: 'translate-x-0',
      },
    },
    color: {
      brand: {
        track: 'sk-variant:bg-brand',
        thumb: 'sk-variant:(text-brand bg-brand-foreground)',
      },
      success: {
        track: 'sk-variant:bg-success',
        thumb: 'sk-variant:(text-success bg-success-foreground)',
      },
      warning: {
        track: 'sk-variant:bg-warning',
        thumb: 'sk-variant:(text-warning bg-warning-foreground)',
      },
      danger: {
        track: 'sk-variant:bg-danger',
        thumb: 'sk-variant:(text-danger bg-danger-foreground)',
      },
      neutral: {
        track: 'sk-variant:bg-neutral',
        thumb: 'sk-variant:(text-neutral bg-neutral-foreground)',
      },
    },
    size: {
      small: {
        root: 'text-body-small',
        track: 'sk-unit:w-44',
        thumb: 'sk-unit:size-20',
      },
      medium: {
        root: 'text-body-medium',
        track: 'sk-unit:w-52',
        thumb: 'sk-unit:size-24',
      },
      large: {
        root: 'text-body-large',
        track: 'sk-unit:w-60',
        thumb: 'sk-unit:size-28',
      },
    },
    readonly: {
      true: {
        root: 'cursor-not-allowed pointer-events-none',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60 cursor-not-allowed pointer-events-none',
      },
    },
  },
  defaults: {
    size: 'medium',
    color: 'brand',
    selected: false,
    readonly: false,
    disabled: false,
  },
})

export type SkSwitchUcvProps = InferProps<typeof SkSwitchUcv>
