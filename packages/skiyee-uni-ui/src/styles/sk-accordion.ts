// @unocss-include
/**
 * sk-accordion 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkAccordionUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/accordion
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkAccordionUcv = ucv({
  element: 'w-full',
  variants: {
    border: {
      true: 'border-(~ solid base) rounded-medium overflow-hidden',
      false: '',
    },
    iconPosition: {
      left: '',
      right: '',
    },
  },
  defaults: {
    border: true,
    iconPosition: 'right',
  },
})

export type SkAccordionUcvProps = InferProps<typeof SkAccordionUcv>
