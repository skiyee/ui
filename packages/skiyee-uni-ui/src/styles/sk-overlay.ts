// @unocss-include
/**
 * sk-overlay 由 @skiyee/ucv 生成的样式组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```ts
 * const classes = SkOverlayUcv(props)
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/overlay
 */
import type { InferProps } from '@skiyee/ucv'

import { ucv } from '@skiyee/ucv'

export const SkOverlayUcv = ucv({
  element: {
    backdrop: 'fixed inset-0 bg-backdrop/50',
    overlay: 'fixed',
    content: 'relative w-max break-all',
  },
  variants: {
    placement: {
      center: {
        overlay: 'position-center',
      },
      top: {
        overlay: 'top-0 position-x-center',
      },
      bottom: {
        overlay: 'bottom-0 position-x-center',
      },
      left: {
        overlay: 'left-0 position-y-center',
      },
      right: {
        overlay: 'right-0 position-y-center',
      },
    },
    // 动画状态管理
    state: {
      hidden: {
        backdrop: 'opacity-0 pointer-events-none',
        overlay: 'opacity-0 pointer-events-none',
      },
      entering: {
        backdrop: 'opacity-0 transition-opacity duration-300',
        overlay: 'opacity-0 transition-opacity duration-300',
        content: 'transition-[opacity,transform] duration-300',
      },
      visible: {
        backdrop: 'opacity-100 transition-opacity duration-300',
        overlay: 'opacity-100 transition-opacity duration-300',
        content: 'transition-[opacity,transform] duration-300',
      },
      leaving: {
        backdrop: 'opacity-0 transition-opacity duration-300',
        overlay: 'opacity-0 transition-opacity duration-300',
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
    placement: 'center',
    animation: 'fade',
    state: 'hidden',
  },
})

export type SkOverlayUcvProps = InferProps<typeof SkOverlayUcv>
