// @unocss-include
/**
 * sk-tag 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkTagUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/data-display/tag
 */

import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkTagUcv = ucv({
  element: {
    root: 'inline-flex items-center justify-center font-medium transition-all leading-none whitespace-nowrap',
    content: 'flex items-center gap-x-4',
    icon: 'shrink-0',
    closeIcon: 'shrink-0 cursor-pointer transition-opacity hover:opacity-70',
  },
  variants: {
    type: {
      default: {
        root: 'sk-variant:text-neutral',
      },
      primary: {
        root: 'sk-variant:text-brand',
      },
      success: {
        root: 'sk-variant:text-success',
      },
      warning: {
        root: 'sk-variant:text-warning',
      },
      error: {
        root: 'sk-variant:text-danger',
      },
    },
    variant: {
      solid: {
        root: '',
      },
      outline: {
        root: 'bg-transparent border border-solid',
      },
      light: {
        root: '',
      },
    },
    size: {
      small: {
        root: 'sk-unit:(px-16 h-44 gap-6) text-body-small',
        icon: 'sk-unit:size-20',
        closeIcon: 'sk-unit:size-20',
      },
      medium: {
        root: 'sk-unit:(px-20 h-56 gap-8) text-body-medium-lt',
        icon: 'sk-unit:size-24',
        closeIcon: 'sk-unit:size-24',
      },
      large: {
        root: 'sk-unit:(px-24 h-68 gap-8) text-body-medium',
        icon: 'sk-unit:size-28',
        closeIcon: 'sk-unit:size-28',
      },
    },
    radius: {
      none: {
        root: 'rounded-none',
      },
      small: {
        root: 'rounded-small',
      },
      medium: {
        root: 'rounded-medium',
      },
      large: {
        root: 'rounded-large',
      },
      full: {
        root: 'rounded-full',
      },
    },
  },
  cases: [
    // Solid variant cases
    {
      when: { type: 'default', variant: 'solid' },
      use: {
        root: 'bg-neutral text-neutral-foreground',
      },
    },
    {
      when: { type: 'primary', variant: 'solid' },
      use: {
        root: 'bg-brand text-brand-foreground',
      },
    },
    {
      when: { type: 'success', variant: 'solid' },
      use: {
        root: 'bg-success text-success-foreground',
      },
    },
    {
      when: { type: 'warning', variant: 'solid' },
      use: {
        root: 'bg-warning text-warning-foreground',
      },
    },
    {
      when: { type: 'error', variant: 'solid' },
      use: {
        root: 'bg-danger text-danger-foreground',
      },
    },
    // Outline variant cases
    {
      when: { type: 'default', variant: 'outline' },
      use: {
        root: 'border-neutral text-neutral',
      },
    },
    {
      when: { type: 'primary', variant: 'outline' },
      use: {
        root: 'border-brand text-brand',
      },
    },
    {
      when: { type: 'success', variant: 'outline' },
      use: {
        root: 'border-success text-success',
      },
    },
    {
      when: { type: 'warning', variant: 'outline' },
      use: {
        root: 'border-warning text-warning',
      },
    },
    {
      when: { type: 'error', variant: 'outline' },
      use: {
        root: 'border-danger text-danger',
      },
    },
    // Light variant cases
    {
      when: { type: 'default', variant: 'light' },
      use: {
        root: 'bg-neutral/10 text-neutral',
      },
    },
    {
      when: { type: 'primary', variant: 'light' },
      use: {
        root: 'bg-brand/10 text-brand',
      },
    },
    {
      when: { type: 'success', variant: 'light' },
      use: {
        root: 'bg-success/10 text-success',
      },
    },
    {
      when: { type: 'warning', variant: 'light' },
      use: {
        root: 'bg-warning/10 text-warning',
      },
    },
    {
      when: { type: 'error', variant: 'light' },
      use: {
        root: 'bg-danger/10 text-danger',
      },
    },
  ],
  defaults: {
    type: 'default',
    variant: 'solid',
    size: 'medium',
    radius: 'small',
  },
})

export type SkTagUcvProps = InferProps<typeof SkTagUcv>
