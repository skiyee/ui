// @unocss-include
/**
 * sk-roller 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkRollerUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/roller
 */
import type { InferProps } from '@skiyee/ucv'
import { ucv } from '@skiyee/ucv'

export const SkRollerUcv = ucv({
  element: {
    root: 'relative flex-1 h-full overflow-hidden touch-pan-y',
    scrollWrapper: 'flex flex-col items-center will-change-transform transform-gpu backface-hidden transition-property-transform ease-out',
    option: 'w-full flex-center text-body-medium select-none',
    optionText: 'text-center truncate',
  },
  variants: {
    transitioning: {
      true: {
        scrollWrapper: 'duration-400',
      },
      false: {},
    },
    selected: {
      true: {
        option: 'text-brand font-bold',
      },
      false: {}
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed',
      },
      false: {
        root: 'cursor-grab'
      }
    },
  },
  defaults: {
    disabled: false,
    selected: false,
  },
})

export type SkRollerUcvProps = InferProps<typeof SkRollerUcv>
