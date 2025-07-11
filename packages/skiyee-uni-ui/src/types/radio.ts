/**
 * Radio 单选框类型定义
 *
 * 定义单选框相关的类型接口。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

import type { SkRadioUcvProps } from '../styles/sk-radio'

export interface RadioGroupContext {
  props: {
    size?: SkRadioUcvProps['size'];
    color?: SkRadioUcvProps['color'];
    disabled?: boolean;
  };
  state: {
    selectValue?: string;
  };
  updateValue: (value: string) => void;
}
