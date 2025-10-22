// @unocss-include
/**
 * sk-steps 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkStepsUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/info/steps
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkStepsUcv = ucv({
  element: 'flex w-full',
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaults: {
    direction: 'horizontal',
  },
})

export type SkStepsUcvProps = InferProps<typeof SkStepsUcv>
