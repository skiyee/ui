// @unocss-include
/**
 * sk-tab 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkTabUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/tab
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkTabUcv = ucv({
  element: {
    root: 'flex flex-col items-center break-keep whitespace-nowrap sk-unit:gap-y-1',
    title: 'my-auto sk-unit:h-24 animate-fade-in animate-duration-300',
    indicator: 'inline-block flex animate-wobble animate-duration-300 sk-unit:h-3 after:(rounded-r-small bg-success content-empty sk-unit:w-8) before:(rounded-l-small bg-brand content-empty sk-unit:w-8)',
  },
  variants: {
    selected: {
      true: {
        title: 'text-brand text-body-large font-bold',
      },
      false: {
        title: 'text-label text-body-medium'
      },
    },
  },
  defaults: {
    selected: false
  },
})

export type SkTabUcvProps = InferProps<typeof SkTabUcv>
