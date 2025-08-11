// @unocss-include
/**
 * sk-radio 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkRadioUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/radio
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkRadioUcv = ucv({
  element: {
    root: 'max-w-fit inline-flex items-center cursor-pointer select-none sk-unit:p-8 -sk-unit:m-8',
    radio: 'box-border relative inline-flex flex-center border-(~ solid) rounded-full',
    dot: 'rounded-full opacity-0 scale-0 origin-center transition-[transform,opacity] duration-250',
    label: 'sk-unit:ml-10 text-primary select-none',
  },
  variants: {
    size: {
      small: {
        radio: 'sk-variant:sk-unit:size-16',
        dot: 'sk-variant:sk-unit:size-6',
        label: 'text-body-small',
      },
      medium: {
        radio: 'sk-variant:sk-unit:size-18',
        dot: 'sk-variant:sk-unit:size-8',
        label: 'text-body-medium',
      },
      large: {
        radio: 'sk-variant:sk-unit:size-20',
        dot: 'sk-variant:sk-unit:size-10',
        label: 'text-body-large',
      },
    },
    color: {
      brand: {},
      success: {},
      warning: {},
      danger: {},
      neutral: {},
    },
    isSelected: {
      true: {
        radio: 'border-2',
        dot: 'scale-100 opacity-100',
      },
      false: {
        radio: 'border-base',
      },
    },
    isDisabled: {
      true: {
        root: 'opacity-60 cursor-not-allowed pointer-events-none',
      },
      false: {},
    },
  },
  cases: [
    {
      when: { isSelected: true, color: 'neutral' },
      use: {
        radio: 'border-neutral',
        dot: 'bg-neutral',
      },
    },
    {
      when: { isSelected: true, color: 'brand' },
      use: {
        radio: 'border-brand',
        dot: 'bg-brand',
      },
    },
    {
      when: { isSelected: true, color: 'success' },
      use: {
        radio: 'border-success',
        dot: 'bg-success',
      },
    },
    {
      when: { isSelected: true, color: 'warning' },
      use: {
        radio: 'border-warning',
        dot: 'bg-warning',
      },
    },
    {
      when: { isSelected: true, color: 'danger' },
      use: {
        radio: 'border-danger',
        dot: 'bg-danger',
      },
    },
  ],
  defaults: {
    size: 'medium',
    color: 'brand',
    isSelected: false,
    isDisabled: false,
  },
})

export type SkRadioUcvProps = InferProps<typeof SkRadioUcv>
