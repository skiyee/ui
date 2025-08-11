// @unocss-include
/**
 * sk-radio-group 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkRadioGroupUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/radio-group
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkRadioGroupUcv = ucv({
  element: 'flex flex-wrap',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    size: {
      small: 'sk-unit:gap-10',
      medium: 'sk-unit:gap-14',
      large: 'sk-unit:gap-18',
    },
    disabled: {
      true: 'opacity-60 pointer-events-none',
      false: '',
    },
  },
  defaults: {
    orientation: 'vertical',
    size: 'medium',
    disabled: false,
  },
})

export type SkRadioGroupUcvProps = InferProps<typeof SkRadioGroupUcv>
