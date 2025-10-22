// @unocss-include
/**
 * sk-action-sheet 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkActionSheetUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/action-sheet
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkActionSheetUcv = ucv({
  element: {
    root: 'box-border flex flex-col bg-surface w-full',
    header: 'flex flex-col items-center text-center border-b border-divider',
    title: 'font-medium text-primary text-body-large',
    description: 'text-secondary text-body-small sk-unit:mt-4',
    optionList: 'flex flex-col',
    option: 'flex items-center justify-center cursor-pointer transition-colors duration-200 active:bg-hover border-b border-divider',
    optionContent: 'flex flex-col items-center justify-center flex-1',
    optionIcon: 'text-primary',
    optionName: 'text-primary text-body-medium',
    optionDescription: 'text-secondary text-body-small sk-unit:mt-2',
    cancel: 'flex items-center justify-center cursor-pointer transition-colors duration-200 active:bg-hover bg-surface',
    cancelText: 'font-medium text-primary text-body-medium',
    safeArea: 'w-full',
  },
  variants: {
    round: {
      true: {
        root: 'rounded-t-large',
      },
      false: {
        root: 'rounded-none',
      },
    },
    spacing: {
      compact: {
        header: 'sk-unit:(px-16 py-12)',
        option: 'sk-unit:(px-16 py-12)',
        cancel: 'sk-unit:(px-16 py-12)',
      },
      normal: {
        header: 'sk-unit:(px-16 py-16)',
        option: 'sk-unit:(px-16 py-16)',
        cancel: 'sk-unit:(px-16 py-16)',
      },
    },
    optionVariant: {
      default: {
        optionName: 'text-primary',
      },
      destructive: {
        optionName: 'text-danger',
      },
    },
    disabled: {
      true: {
        option: 'opacity-50 cursor-not-allowed active:bg-transparent',
      },
    },
    hasIcon: {
      true: {
        option: 'sk-unit:gap-12',
      },
    },
    hasDescription: {
      true: {
        optionContent: 'items-start',
      },
    },
    hasCancel: {
      true: {
        root: 'sk-unit:pb-0',
      },
      false: {
        root: '',
      },
    },
    safeAreaInsetBottom: {
      true: {
        safeArea: 'pb-safe',
      },
      false: {
        safeArea: 'sk-unit:pb-0',
      },
    },
  },
  cases: [
    // 圆角与取消按钮间距
    {
      when: { round: true, hasCancel: true },
      use: {
        cancel: 'sk-unit:mt-8',
      },
    },
    // 最后一个选项去除底部边框
    {
      when: { hasCancel: false },
      use: {
        option: 'last:border-b-0',
      },
    },
  ],
  defaults: {
    round: true,
    spacing: 'normal',
    optionVariant: 'default',
    disabled: false,
    hasIcon: false,
    hasDescription: false,
    hasCancel: true,
    safeAreaInsetBottom: true,
  },
})

export type SkActionSheetUcvProps = InferProps<typeof SkActionSheetUcv>
