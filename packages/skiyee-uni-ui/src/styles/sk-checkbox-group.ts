// @unocss-include
/**
 * sk-checkbox-group 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkCheckboxGroupUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/form/checkbox-group
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkCheckboxGroupUcv = ucv({
  element: 'flex flex-wrap',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    size: {
      small: 'sk-unit:gap-8',
      medium: 'sk-unit:gap-12',
      large: 'sk-unit:gap-16',
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

export type SkCheckboxGroupUcvProps = InferProps<typeof SkCheckboxGroupUcv>
