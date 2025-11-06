/**
 * Tabs 标签页类型定义
 *
 * 定义标签页相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { ComponentInternalInstance } from 'vue'

/**
 * Tabs 上下文类型
 */
export interface TabsContext {
  props: {
    /**
     * 当前激活的标签索引
     */
    activeIndex: number;
    /**
     * 主题色
     */
    color?: string;
    /**
     * 激活态颜色
     */
    activeColor?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
  };
  /**
   * 切换标签
   */
  setActiveIndex: (index: number) => void;
  /**
   * 注册标签项实例
   */
  registerTabItem: (instance: ComponentInternalInstance) => void;
  /**
   * 注销标签项实例
   */
  unregisterTabItem: (instance: ComponentInternalInstance) => void;
}
