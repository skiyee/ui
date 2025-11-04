// @unocss-include
/**
 * sk-swiper 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkSwiperUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/swiper
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkSwiperUcv = ucv({
  element: {
    root: 'relative w-full overflow-hidden',
    swiper: 'w-full h-full',
    indicator: 'absolute z-10 flex items-center justify-center pointer-events-none',
    dots: 'flex items-center gap-8',
    dot: 'w-8 h-8 rounded-full transition-all duration-300',
    fraction: 'px-12 py-4 rounded-full bg-black/50 text-white text-body-small',
    progress: 'h-3 rounded-full bg-white/30 overflow-hidden',
    progressBar: 'h-full bg-white transition-all duration-300',
  },
  variants: {
    radius: {
      none: {
        root: 'rounded-none',
      },
      small: {
        root: 'rounded-small',
      },
      medium: {
        root: 'rounded-medium',
      },
      large: {
        root: 'rounded-large',
      },
    },
    vertical: {
      true: {
        swiper: 'flex-col',
      },
      false: {
        swiper: 'flex-row',
      },
    },
    indicatorPosition: {
      bottom: {
        indicator: 'bottom-16 left-0 right-0 flex-row',
      },
      top: {
        indicator: 'top-16 left-0 right-0 flex-row',
      },
      left: {
        indicator: 'left-16 top-0 bottom-0 flex-col',
      },
      right: {
        indicator: 'right-16 top-0 bottom-0 flex-col',
      },
    },
    indicatorType: {
      dots: {},
      fraction: {},
      progress: {},
      none: {
        indicator: 'hidden',
      },
    },
    dotActive: {
      true: {
        dot: 'w-24 bg-brand',
      },
      false: {
        dot: 'bg-neutral/30',
      },
    },
  },
  defaults: {
    radius: 'medium',
    vertical: false,
    indicatorPosition: 'bottom',
    indicatorType: 'dots',
    dotActive: false,
  },
})

export type SkSwiperUcvProps = InferProps<typeof SkSwiperUcv>
