// @unocss-include
/**
 * sk-slider 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkSliderUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/slider
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkSliderUcv = ucv({
  element: {
    root: 'relative w-full select-none touch-none',
    value: 'w-full flex-center text-primary sk-unit:mb-8',
    track: 'relative box-border w-full bg-muted rounded-full sk-element:(sk-unit:my-6 border-x-(20rpx solid transparent) border-l-current)',
    fill: 'absolute top-0 left-0 h-full',
    mark: 'absolute top-full sk-unit:mt-8 text-secondary transform -translate-x-1/2',
    thumb: 'absolute position-center border-2 border-solid rounded-full shadow-small cursor-pointer',
  },
  variants: {
    size: {
      small: {
        value: 'text-sup-medium',
        track: 'sk-unit:h-7',
        thumb: 'sk-unit:size-14',
      },
      medium: {
        value: 'text-sup-large-lt',
        track: 'sk-unit:h-8',
        thumb: 'sk-unit:size-16',
      },
      large: {
        value: 'text-sup-large',
        track: 'sk-unit:h-9',
        thumb: 'sk-unit:size-18',
      },
    },
    color: {
      brand: {
        track: 'text-brand',
        fill: 'bg-brand',
        thumb: 'border-brand bg-brand-foreground',
      },
      success: {
        track: 'text-success',
        fill: 'bg-success',
        thumb: 'border-success bg-success-foreground',
      },
      warning: {
        track: 'text-warning',
        fill: 'bg-warning',
        thumb: 'border-warning bg-warning-foreground',
      },
      danger: {
        track: 'text-danger',
        fill: 'bg-danger',
        thumb: 'border-danger bg-danger-foreground',
      },
      neutral: {
        track: 'text-neutral',
        fill: 'bg-neutral',
        thumb: 'border-neutral bg-neutral-foreground',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60 pointer-events-none',
      },
    },
  },
  defaults: {
    size: 'medium',
    color: 'brand',
    disabled: false,
  },
})

export type SkSliderUcvProps = InferProps<typeof SkSliderUcv>
