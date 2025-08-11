// @unocss-include
/**
 * sk-button 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkButtonUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/button
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkButtonUcv = ucv({
  element: 'sk-element:(m-initial after:(content-none b-none)) flex-center inline-flex truncate',
  variants: {
    color: {
      neutral: 'sk-variant:text-neutral',
      brand: 'sk-variant:text-brand',
      success: 'sk-variant:text-success',
      warning: 'sk-variant:text-warning',
      danger: 'sk-variant:text-danger',
    },
    size: {
      small: 'sk-variant:(sk-unit:(px-12 h-36 gap-4) rounded-small text-body-medium-lt)',
      medium: 'sk-variant:(sk-unit:(px-16 h-40 gap-x-6) rounded-medium text-body-medium)',
      large: 'sk-variant:(sk-unit:(px-20 h-46 gap-8) rounded-large text-body-large)',
    },
    variant: {
      solid: '',
      bound: 'border border-solid bg-surface',
      text: 'bg-transparent',
    },
    radius: {
      tiny: 'rounded-tiny',
      small: 'rounded-small',
      medium: 'rounded-medium',
      large: 'rounded-large',
      huge: 'rounded-full',
    },
    disabled: {
      true: 'opacity-60 cursor-not-allowed',
    },
    loading: {
      true: 'opacity-60 cursor-not-allowed',
    },
    full: {
      true: 'w-full',
    },
  },
  cases: [
    {
      when: { color: 'neutral', variant: 'solid' },
      use: 'bg-neutral text-neutral-foreground',
    },
    {
      when: { color: 'brand', variant: 'solid' },
      use: 'bg-brand text-brand-foreground',
    },
    {
      when: { color: 'success', variant: 'solid' },
      use: 'bg-success text-success-foreground',
    },
    {
      when: { color: 'warning', variant: 'solid' },
      use: 'bg-warning text-warning-foreground',
    },
    {
      when: { color: 'danger', variant: 'solid' },
      use: 'bg-danger text-danger-foreground',
    },
    {
      when: { color: 'neutral', variant: 'bound' },
      use: 'border-neutral',
    },
    {
      when: { color: 'brand', variant: 'bound' },
      use: 'border-brand',
    },
    {
      when: { color: 'success', variant: 'bound' },
      use: 'border-success',
    },
    {
      when: { color: 'warning', variant: 'bound' },
      use: 'border-warning',
    },
    {
      when: { color: 'danger', variant: 'bound' },
      use: 'border-danger',
    },
  ],
  defaults: {
    color: 'brand',
    size: 'medium',
    variant: 'solid',
    radius: 'medium',
    disabled: false,
    loading: false,
    full: false,
  },
})

export type SkButtonUcvProps = InferProps<typeof SkButtonUcv>
