/**
 * Accordion 手风琴常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { SkAccordionItemUcvProps, SkAccordionUcvProps } from '../styles'

/**
 * Accordion 父组件注入键
 */
export const SK_ACCORDION_KEY: InjectionKey<{
  props: {
    modelValue?: string | number | (string | number)[];
    accordion?: boolean;
    border?: boolean;
    iconPosition?: SkAccordionUcvProps['iconPosition'];
    expandIcon?: string;
    collapseIcon?: string;
    disabled?: boolean;
  };
  /**
   * 判断某个面板是否处于展开状态
   */
  isActive: (name: string | number) => boolean;
  /**
   * 切换面板的展开状态
   */
  toggle: (name: string | number) => void;
}> = Symbol('sk-accordion')
