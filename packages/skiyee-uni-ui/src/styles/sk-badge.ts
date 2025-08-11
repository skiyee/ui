// @unocss-include
/**
 * sk-badge 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkBadgeUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/data-display/badge
 */

import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkBadgeUcv = ucv({
  element: {
    root: 'relative inline-flex',
    badge: 'box-border absolute border-(2 solid) flex-center whitespace-nowrap font-medium rounded-full transition-all leading-none',
  },
  variants: {
    size: {
      small: {
        badge: 'text-sup-medium',
      },
      medium: {
        badge: 'text-sup-large-lt',
      },
      large: {
        badge: 'text-sup-large',
      },
    },
    color: {
      brand: {
        badge: 'bg-brand text-brand-foreground',
      },
      success: {
        badge: 'bg-success text-success-foreground',
      },
      warning: {
        badge: 'bg-warning text-warning-foreground',
      },
      danger: {
        badge: 'bg-danger text-danger-foreground',
      },
      neutral: {
        badge: 'bg-neutral text-neutral-foreground',
      },
    },
    placement: {
      'top-right': {
        badge: 'top-0 right-0 transform -translate-y-1/3',
      },
      'top-left': {
        badge: 'top-0 left-0 transform -translate-y-1/3',
      },
      'bottom-right': {
        badge: 'bottom-0 right-0 transform translate-y-1/3',
      },
      'bottom-left': {
        badge: 'bottom-0 left-0 transform translate-y-1/3',
      },
    },
    shape: {
      circle: {
        badge: 'sk-unit:size-1.6em',
      },
      rectangle: {
        badge: 'sk-unit:(px-4 h-1.6em)',
      },
      dot: {
        badge: 'sk-unit:size-0.9em',
      },
    },
    standalone: {
      true: {
        root: '',
        badge: 'relative top-auto right-auto bottom-auto left-auto transform-none',
      },
      false: {},
    },
    boundless: {
      true: {
        badge: 'border-transparent',
      },
      false: {
        badge: 'border-subtle',
      },
    },
    hidden: {
      true: {
        badge: 'opacity-0 scale-0',
      },
      false: {
        badge: 'opacity-100 scale-100',
      },
    },
  },
  cases: [
    {
      when: { shape: ['circle', 'dot'], placement: ['top-right', 'bottom-right'] },
      use: {
        badge: 'translate-x-1/3',
      },
    },
    {
      when: { shape: ['circle', 'dot'], placement: ['top-left', 'bottom-left'] },
      use: {
        badge: '-translate-x-1/3',
      },
    },
    {
      when: { shape: 'rectangle', placement: ['top-right', 'bottom-right'] },
      use: {
        badge: 'translate-x-1/2',
      },
    },
    {
      when: { shape: 'rectangle', placement: ['top-left', 'bottom-left'] },
      use: {
        badge: '-translate-x-1/2',
      },
    },
  ],
  defaults: {
    size: 'medium',
    color: 'danger',
    placement: 'top-right',
    shape: 'rectangle',
    boundless: false,
    standalone: false,
    hidden: false,
  },
})

export type SkBadgeUcvProps = InferProps<typeof SkBadgeUcv>
