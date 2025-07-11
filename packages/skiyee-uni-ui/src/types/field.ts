/**
 * Field 字段类型定义
 *
 * 定义字段相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { SkFieldUcvProps } from '../styles/sk-field'

/**
 * 字段上下文接口
 * 用于提供字段相关的操作和状态
 */
export interface FieldContext {
  props: {
    name?: string;
    size?: SkFieldUcvProps['size'];
    disabled?: boolean;
  };
  handleChange: (value: unknown) => void;
  handleBlur: (value: unknown) => void;
  handleFocus: (value: unknown) => void;
}
