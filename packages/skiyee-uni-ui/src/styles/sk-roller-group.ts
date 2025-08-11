// @unocss-include
/**
 * sk-roller-group 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkRollerGroupUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/roller
 */
import type { InferProps } from '@skiyee/ucv'
import { ucv } from '@skiyee/ucv'

export const SkRollerGroupUcv = ucv({
  element: {
    root: 'relative w-full overflow-hidden',
    mask: 'absolute top-0 left-0 size-full z-1 translate-z-0 flex flex-col pointer-events-none backface-hidden',
    gradient: 'h-full from-surface to-surface/75',
    indicator: 'flex-none bg-accent/20',
    rollers: 'flex flex-row h-full overflow-hidden',
  },
  variants: {},
})

export type SkRollerGroupUcvProps = InferProps<typeof SkRollerGroupUcv>
