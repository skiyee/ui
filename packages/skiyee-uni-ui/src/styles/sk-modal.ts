// @unocss-include
/**
 * sk-modal 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkModalUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/modal
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkModalUcv = ucv({
  element: {
    overlay: 'fixed inset-0 bg-overlay/50',
    modal: 'fixed flex',
    content: 'relative w-max break-all',
  },
  variants: {
    position: {
      center: {
        modal: 'position-center',
      },
      top: {
        modal: 'top-0 position-x-center',
      },
      bottom: {
        modal: 'bottom-0 position-x-center',
      },
      left: {
        modal: 'left-0 position-y-center',
      },
      right: {
        modal: 'right-0 position-y-center',
      },
    },
    // 动画状态管理
    state: {
      hidden: {
        overlay: 'opacity-0 pointer-events-none',
        modal: 'opacity-0 pointer-events-none',
      },
      entering: {
        overlay: 'opacity-0 transition-opacity duration-300',
        modal: 'opacity-0 transition-opacity duration-300',
        content: 'transition-[opacity,transform] duration-300',
      },
      visible: {
        overlay: 'opacity-100 transition-opacity duration-300',
        modal: 'opacity-100 transition-opacity duration-300',
        content: 'transition-[opacity,transform] duration-300',
      },
      leaving: {
        overlay: 'opacity-0 transition-opacity duration-300',
        modal: 'opacity-0 transition-opacity duration-300',
        content: 'transition-[opacity,transform] duration-300',
      },
    },
    // 动画类型（仅定义初始/结束状态，不包含 transition）
    animation: {
      'fade': {},
      'scale': {},
      'slide': {},
      'slide-up': {},
      'slide-down': {},
      'slide-left': {},
      'slide-right': {},
    },
  },
  cases: [
    // 进入动画的初始状态
    {
      when: { state: 'entering', animation: 'fade' },
      use: {
        content: 'opacity-0 scale-95',
      },
    },
    {
      when: { state: 'entering', animation: 'scale' },
      use: {
        content: 'opacity-0 scale-50',
      },
    },
    {
      when: { state: 'entering', animation: 'slide' },
      use: {
        content: 'opacity-0 translate-y-4',
      },
    },
    {
      when: { state: 'entering', animation: 'slide-up' },
      use: {
        content: 'opacity-0 translate-y-full',
      },
    },
    {
      when: { state: 'entering', animation: 'slide-down' },
      use: {
        content: 'opacity-0 -translate-y-full',
      },
    },
    {
      when: { state: 'entering', animation: 'slide-left' },
      use: {
        content: 'opacity-0 translate-x-full',
      },
    },
    {
      when: { state: 'entering', animation: 'slide-right' },
      use: {
        content: 'opacity-0 -translate-x-full',
      },
    },
    // 显示状态的最终样式
    {
      when: { state: 'visible', animation: 'fade' },
      use: {
        content: 'opacity-100 scale-100',
      },
    },
    {
      when: { state: 'visible', animation: 'scale' },
      use: {
        content: 'opacity-100 scale-100',
      },
    },
    {
      when: { state: 'visible', animation: 'slide' },
      use: {
        content: 'opacity-100 translate-y-0',
      },
    },
    {
      when: { state: 'visible', animation: 'slide-up' },
      use: {
        content: 'opacity-100 translate-y-0',
      },
    },
    {
      when: { state: 'visible', animation: 'slide-down' },
      use: {
        content: 'opacity-100 translate-y-0',
      },
    },
    {
      when: { state: 'visible', animation: 'slide-left' },
      use: {
        content: 'opacity-100 translate-x-0',
      },
    },
    {
      when: { state: 'visible', animation: 'slide-right' },
      use: {
        content: 'opacity-100 translate-x-0',
      },
    },
    // 离开动画的最终状态
    {
      when: { state: 'leaving', animation: 'fade' },
      use: {
        content: 'opacity-0 scale-95',
      },
    },
    {
      when: { state: 'leaving', animation: 'scale' },
      use: {
        content: 'opacity-0 scale-50',
      },
    },
    {
      when: { state: 'leaving', animation: 'slide' },
      use: {
        content: 'opacity-0 translate-y-4',
      },
    },
    {
      when: { state: 'leaving', animation: 'slide-up' },
      use: {
        content: 'opacity-0 translate-y-full',
      },
    },
    {
      when: { state: 'leaving', animation: 'slide-down' },
      use: {
        content: 'opacity-0 -translate-y-full',
      },
    },
    {
      when: { state: 'leaving', animation: 'slide-left' },
      use: {
        content: 'opacity-0 translate-x-full',
      },
    },
    {
      when: { state: 'leaving', animation: 'slide-right' },
      use: {
        content: 'opacity-0 -translate-x-full',
      },
    },
  ],
  defaults: {
    position: 'center',
    animation: 'fade',
    state: 'hidden',
  },
})

export type SkModalUcvProps = InferProps<typeof SkModalUcv>
