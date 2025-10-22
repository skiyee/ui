/**
 * Common 通用类型定义
 *
 * 定义组件库中通用的基础类型。
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @see 更多文档: https://skiyee-ui.netlify.app/docs/
 */

/**
 * 可接受的模型值类型
 * 用于表单组件的 v-model 绑定
 */
export type AcceptableModelValue = string | number | null

/**
 * 图片模式类型
 * 对应 uni-app image 组件的 mode 属性
 */
export type ImageMode =
  | 'scaleToFill' // 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
  | 'aspectFit' // 保持纵横比缩放图片，使图片的长边能完全显示出来
  | 'aspectFill' // 保持纵横比缩放图片，只保证图片的短边能完全显示出来
  | 'widthFix' // 宽度不变，高度自动变化，保持原图宽高比不变
  | 'heightFix' // 高度不变，宽度自动变化，保持原图宽高比不变
  | 'top' // 不缩放图片，只显示图片的顶部区域
  | 'bottom' // 不缩放图片，只显示图片的底部区域
  | 'center' // 不缩放图片，只显示图片的中间区域
  | 'left' // 不缩放图片，只显示图片的左边区域
  | 'right' // 不缩放图片，只显示图片的右边区域
  | 'top left' // 不缩放图片，只显示图片的左上边区域
  | 'top right' // 不缩放图片，只显示图片的右上边区域
  | 'bottom left' // 不缩放图片，只显示图片的左下边区域
  | 'bottom right' // 不缩放图片，只显示图片的右下边区域

/**
 * 圆角大小类型
 */
export type RadiusSize = 'small' | 'medium' | 'large' | 'full' | number | string
