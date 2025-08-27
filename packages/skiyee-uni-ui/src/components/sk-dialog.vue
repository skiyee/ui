<script lang="ts">
/**
 * sk-dialog 组件 - 用于显示重要消息提示或确认具有介入交互性质的对话框组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-dialog>
 *   Hello skiyee ui
 * </sk-dialog>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/feedback/dialog
 */

interface SkDialogProps {
  /**
   * 弹窗标题
   */
  title?: string;
  /**
   * 弹窗内容
   */
  content?: string;
  /**
   * 左按钮文本
   */
  leftBtnLabel?: string;
  /**
   * 右按钮文本
   */
  rightBtnLabel: string;
  /**
   * 可被外部关闭的
   * @description 是否能够通过点击 **背景层** 关闭弹窗
   * @default true
   */
  dismissable?: boolean;
}

interface SkDialogEmits {
  (e: 'clickLeftBtn'): void;
  (e: 'clickRightBtn'): void;
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import { SkDialogUcv } from '../styles'
import SkButton from './sk-button.vue'
import SkOverlay from './sk-overlay.vue'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkDialogProps>(), {
  dismissable: true,
})

const isShowDialogModel = defineModel<boolean>('visible', { default: false })

defineEmits<SkDialogEmits>()

const classes = computed(() => SkDialogUcv(props))
</script>

<template>
  <SkOverlay
    v-model:visible="isShowDialogModel"
    placement="center"
    :z-index="1100"
    :dismissable="dismissable"
  >
    <div :class="classes.root()">
      <span :class="classes.title()">{{ title }}</span>
      <span
        v-if="content"
        :class="classes.content()"
      >{{ content }}</span>
      <div :class="classes.buttonContainer()">
        <SkButton
          v-if="leftBtnLabel"
          :label="leftBtnLabel"
          variant="bound"
          color="neutral"
          :clax="classes.leftButton()"
          @click="$emit('clickLeftBtn')"
        />
        <SkButton
          v-if="rightBtnLabel"
          :label="rightBtnLabel"
          variant="solid"
          color="brand"
          :clax="classes.rightButton()"
          @click="$emit('clickRightBtn')"
        />
      </div>
    </div>
  </SkOverlay>
</template>
