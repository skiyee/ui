/**
 * Swiper 轮播组件类型定义
 *
 * 定义轮播组件相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

/**
 * 指示器类型
 */
export type SwiperIndicatorType = 'dots' | 'fraction' | 'progress' | 'none'

/**
 * 轮播方向
 */
export type SwiperDirection = 'horizontal' | 'vertical'

/**
 * 指示器位置
 */
export type SwiperIndicatorPosition = 'top' | 'bottom' | 'left' | 'right'

/**
 * 圆角类型
 */
export type SwiperRadius = 'none' | 'small' | 'medium' | 'large'

/**
 * Swiper 组件属性
 */
export interface SwiperProps {
  /** 当前索引（v-model） */
  modelValue?: number;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 自动切换间隔时间（毫秒） */
  interval?: number;
  /** 切换动画时长（毫秒） */
  duration?: number;
  /** 是否循环轮播 */
  circular?: boolean;
  /** 是否垂直方向 */
  vertical?: boolean;
  /** 指示器类型 */
  indicatorType?: SwiperIndicatorType;
  /** 指示器位置 */
  indicatorPosition?: SwiperIndicatorPosition;
  /** 指示器颜色（未激活） */
  indicatorColor?: string;
  /** 指示器颜色（激活） */
  indicatorActiveColor?: string;
  /** 轮播高度 */
  height?: string | number;
  /** 圆角 */
  radius?: SwiperRadius;
}

/**
 * Swiper 组件事件
 */
export interface SwiperEmits {
  /** 更新当前索引 */
  (e: 'update:modelValue', index: number): void;
  /** 索引改变事件 */
  (e: 'change', index: number): void;
  /** 过渡中事件 */
  (e: 'transition', detail: { dx: number; dy: number }): void;
  /** 动画结束事件 */
  (e: 'animationfinish', index: number): void;
}

/**
 * SwiperItem 组件属性
 */
export interface SwiperItemProps {
  /** 唯一标识 */
  itemId?: string;
}
