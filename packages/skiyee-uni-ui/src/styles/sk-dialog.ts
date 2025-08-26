// @unocss-include
/**
 * sk-dialog 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkDialogUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/dialog
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkDialogUcv = ucv({
  element: {
    root: 'box-border flex flex-col rounded-medium bg-subtle sk-unit:(p-16 w-250)',
    title: 'text-center font-bold text-primary text-title-medium',
    content: 'text-secondary text-body-medium sk-unit:(mt-8 max-h-210) overflow-y-auto',
    buttonContainer: 'flex items-center sk-unit:(mt-20 gap-x-12)',
    leftButton: 'w-full text-body-medium-lt bg-transparent',
    rightButton: 'w-full text-body-medium-lt',
  },
  variants: {
    // 可以根据需要添加变体
  },
  cases: [
    // 可以根据需要添加特殊情况
  ],
  defaults: {
    // 默认值
  },
})

export type SkDialogUcvProps = InferProps<typeof SkDialogUcv>
