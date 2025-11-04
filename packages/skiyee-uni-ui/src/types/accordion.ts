/**
 * Accordion 手风琴类型定义
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { SkAccordionItemUcvProps, SkAccordionUcvProps } from '../styles'

/**
 * Accordion 父组件属性
 */
export interface SkAccordionProps {
  /**
   * 当前展开的面板
   * - 手风琴模式：string | number
   * - 多选模式：(string | number)[]
   */
  modelValue?: string | number | (string | number)[];
  /**
   * 是否开启手风琴模式（每次只能展开一个）
   * @default false
   */
  accordion?: boolean;
  /**
   * 是否显示边框
   * @default true
   */
  border?: boolean;
  /**
   * 图标位置
   * @default 'right'
   */
  iconPosition?: SkAccordionUcvProps['iconPosition'];
  /**
   * 展开时的图标
   * @default 'i-lucide:chevron-up'
   */
  expandIcon?: string;
  /**
   * 收起时的图标
   * @default 'i-lucide:chevron-down'
   */
  collapseIcon?: string;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkAccordionUcvProps['clax'];
}

/**
 * Accordion 父组件事件
 */
export interface SkAccordionEmits {
  /**
   * 当展开的面板改变时触发
   * @param value 当前展开的面板
   */
  (name: 'update:modelValue', value: string | number | (string | number)[]): void;
  /**
   * 当展开的面板改变时触发
   * @param value 当前展开的面板
   */
  (name: 'change', value: string | number | (string | number)[]): void;
}

/**
 * Accordion 父组件插槽
 */
export interface SkAccordionSlots {
  /**
   * AccordionItem 列表
   */
  default?: () => any;
}

/**
 * AccordionItem 子组件属性
 */
export interface SkAccordionItemProps {
  /**
   * 唯一标识符
   */
  name?: string | number;
  /**
   * 标题
   */
  title?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 自定义图标
   */
  icon?: string;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkAccordionItemUcvProps['clax'];
}

/**
 * AccordionItem 子组件事件
 */
export interface SkAccordionItemEmits {
  /**
   * 点击标题时触发
   */
  (name: 'click'): void;
}

/**
 * AccordionItem 子组件插槽
 */
export interface SkAccordionItemSlots {
  /**
   * 内容区域
   */
  default?: () => any;
  /**
   * 标题区域
   */
  title?: () => any;
  /**
   * 图标区域
   */
  icon?: () => any;
}
