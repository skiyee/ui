// @unocss-include
/**
 * sk-accordion-item 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkAccordionItemUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/accordion
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkAccordionItemUcv = ucv({
  element: {
    root: 'w-full',
    header: 'flex items-center justify-between sk-unit:(px-16 py-12) cursor-pointer select-none bg-subtle transition-colors duration-200',
    title: 'flex-1 text-primary text-body-medium font-medium',
    icon: 'sk-unit:size-20 text-secondary transition-transform duration-200',
    content: 'overflow-hidden transition-all duration-300 ease-in-out',
    contentInner: 'sk-unit:(px-16 py-12) text-secondary text-body-medium',
  },
  variants: {
    active: {
      true: {
        header: 'sk-variant:bg-muted',
        icon: 'sk-variant:rotate-180',
      },
      false: {
        content: 'sk-variant:max-h-0',
      },
    },
    disabled: {
      true: {
        header: 'sk-variant:(opacity-60 cursor-not-allowed pointer-events-none)',
      },
      false: {},
    },
    border: {
      true: {
        root: 'sk-variant:border-b-(~ solid base) last:border-b-0',
      },
      false: {
        root: 'sk-variant:sk-unit:mb-8 last:mb-0',
        header: 'sk-variant:rounded-medium',
      },
    },
    iconPosition: {
      left: {
        header: 'sk-variant:flex-row-reverse',
        title: 'sk-variant:sk-unit:ml-12',
      },
      right: {
        title: 'sk-variant:sk-unit:mr-12',
      },
    },
  },
  defaults: {
    active: false,
    disabled: false,
    border: true,
    iconPosition: 'right',
  },
})

export type SkAccordionItemUcvProps = InferProps<typeof SkAccordionItemUcv>
