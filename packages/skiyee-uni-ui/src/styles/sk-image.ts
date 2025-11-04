// @unocss-include
/**
 * sk-image 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkImageUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/image
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkImageUcv = ucv({
  element: 'sk-image:(relative inline-block overflow-hidden bg-neutral-100)',
  variants: {
    radius: {
      none: '',
      small: 'rounded-small',
      medium: 'rounded-medium',
      large: 'rounded-large',
      full: 'rounded-full',
    },
  },
  defaults: {
    radius: 'none',
  },
})

export type SkImageUcvProps = InferProps<typeof SkImageUcv>
