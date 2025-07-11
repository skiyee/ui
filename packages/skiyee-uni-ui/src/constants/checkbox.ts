/**
 * Checkbox 复选框常量
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 */

import type { InjectionKey } from 'vue'

import type { SkCheckboxUcvProps } from '../styles'

export const SK_CHECKBOX_GROUP_KEY: InjectionKey<{
  props: {
    // 当前选中的值数组
    modelValue?: string[];
    size?: SkCheckboxUcvProps['size'];
    color?: SkCheckboxUcvProps['color'];
    disabled?: boolean;
  };
  isChecked: (value: string) => boolean;
  updateValue: (value: string, checked: boolean) => void;
}> = Symbol('sk-radio-group')
