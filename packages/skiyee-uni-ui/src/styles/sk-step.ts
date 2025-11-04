// @unocss-include
/**
 * sk-step 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkStepUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/info/steps
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkStepUcv = ucv({
  element: {
    root: 'relative flex flex-1',
    container: 'flex items-start',
    iconWrapper: 'relative flex-center flex-shrink-0 border-(~ solid) rounded-full transition-all duration-250',
    icon: 'transition-all duration-250',
    content: 'flex flex-col flex-1 sk-unit:ml-12',
    title: 'text-primary transition-colors duration-250',
    description: 'text-secondary sk-unit:mt-4 transition-colors duration-250',
    line: 'absolute bg-border transition-all duration-250',
  },
  variants: {
    direction: {
      horizontal: {
        root: 'flex-col',
        container: 'flex-col items-center',
        content: 'sk-variant:mt-12 sk-variant:ml-0 items-center text-center',
        line: 'sk-variant:left-1/2 sk-variant:translate-x-1/2 sk-variant:top-0 sk-variant:h-full sk-variant:w-2',
      },
      vertical: {
        root: 'flex-row',
        line: 'sk-variant:top-1/2 sk-variant:-translate-y-1/2 sk-variant:left-0 sk-variant:w-full sk-variant:h-2',
      },
    },
    size: {
      small: {
        iconWrapper: 'sk-variant:size-24',
        icon: 'sk-variant:size-12',
        title: 'text-body-small',
        description: 'text-caption',
      },
      medium: {
        iconWrapper: 'sk-variant:size-32',
        icon: 'sk-variant:size-16',
        title: 'text-body-medium',
        description: 'text-body-small',
      },
      large: {
        iconWrapper: 'sk-variant:size-40',
        icon: 'sk-variant:size-20',
        title: 'text-body-large',
        description: 'text-body-medium',
      },
    },
    status: {
      wait: {
        iconWrapper: 'sk-variant:border-border bg-background',
        icon: 'sk-variant:text-tertiary',
        title: 'sk-variant:text-tertiary',
        description: 'sk-variant:text-tertiary',
        line: 'sk-variant:bg-border',
      },
      process: {
        iconWrapper: 'sk-variant:border-brand bg-brand',
        icon: 'sk-variant:text-brand-foreground',
        title: 'sk-variant:text-brand',
        description: 'sk-variant:text-secondary',
        line: 'sk-variant:bg-border',
      },
      finish: {
        iconWrapper: 'sk-variant:border-success bg-success',
        icon: 'sk-variant:text-success-foreground',
        title: 'sk-variant:text-success',
        description: 'sk-variant:text-secondary',
        line: 'sk-variant:bg-success',
      },
      error: {
        iconWrapper: 'sk-variant:border-danger bg-danger',
        icon: 'sk-variant:text-danger-foreground',
        title: 'sk-variant:text-danger',
        description: 'sk-variant:text-secondary',
        line: 'sk-variant:bg-danger',
      },
    },
    clickable: {
      true: {
        container: 'cursor-pointer',
      },
      false: {},
    },
    disabled: {
      true: {
        root: 'opacity-60 pointer-events-none',
      },
      false: {},
    },
    isLast: {
      true: {
        line: 'sk-variant:hidden',
      },
      false: {},
    },
  },
  defaults: {
    direction: 'horizontal',
    size: 'medium',
    status: 'wait',
    clickable: false,
    disabled: false,
    isLast: false,
  },
})

export type SkStepUcvProps = InferProps<typeof SkStepUcv>
