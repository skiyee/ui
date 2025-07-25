<script lang="ts">
/**
 * sk-roller 组件 - 滚动选择器组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-roller v-model="selectedValue" :options="options" />
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/basic/roller
 */

import type { SkRollerUcvProps } from '../styles'

export interface SkRollerOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface SkRollerProps {
  /**
   * 选项列表
   */
  options: SkRollerOption[];
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkRollerUcvProps['clax'];
}

export interface SkRollerEmits {
  (name: 'change', value: unknown, option: SkRollerOption): void;
}

export interface SkRollerSlots {
  option?: (props: { option: SkRollerOption; selected: boolean }) => any;
}
</script>

<script setup lang="ts">
import type { AnimationFrameId, VelocityRecord } from '../utils'

import { computed, nextTick, onMounted, ref, watch } from 'vue'

import { useParent } from '../composables'
import { SK_ROLLER_GROUP_KEY } from '../constants'
import { SkRollerUcv } from '../styles'
import { calculateInertiaDistance, clamp, skCancelAnimationFrame, skRequestAnimationFrame } from '../utils'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkRollerProps>(), {
  disabled: false,
})

const modelValue = defineModel<any>()

const emits = defineEmits<SkRollerEmits>()

defineSlots<SkRollerSlots>()

const { parent } = useParent(SK_ROLLER_GROUP_KEY)

enum AnimationScene {
  NONE = 'none',
  CLICK = 'click',
  AUTO_ALIGN = 'auto',
  INERTIA = 'inertia',
  BOUNDARY = 'boundary',
  SNAP = 'snap',
}

const classes = computed(() => SkRollerUcv({
  ...props,
}))

const itemHeight = computed(() => parent?.props.itemHeight || 44)
const visibleItemCount = computed(() => parent?.props.visibleItemCount || 4)

const currentOffset = ref(0)
const baseOffset = computed(() => (visibleItemCount.value - 1) / 2 * itemHeight.value)

const touchState = {
  startY: 0,
  startOffset: 0,
  isDragging: false,
  lastY: 0,
  lastTime: 0,
  velocity: 0,
  velocityHistory: [] as VelocityRecord[],
}

const isTransitioning = ref(false)

let transitionTimeoutId: NodeJS.Timeout | null = null
let animationTimeoutId: AnimationFrameId | null = null

const itemCount = computed(() => props.options.length)
const maxOffset = computed(() => (itemCount.value - 1) * itemHeight.value)
const minOffset = 0

const selectedIndex = computed(() => {
  const index = props.options.findIndex(option => option.value === modelValue.value)
  return index >= 0 ? index : 0
})

function calculateAnimationDuration(scene: AnimationScene, distance: number): number {
  const absDistance = Math.abs(distance)

  switch (scene) {
    case AnimationScene.CLICK:
      return Math.min(300, Math.max(200, absDistance * 0.5))

    case AnimationScene.AUTO_ALIGN:
      return Math.min(350, Math.max(250, absDistance * 0.3))

    case AnimationScene.INERTIA:
      return 400

    case AnimationScene.BOUNDARY:
      return 300

    case AnimationScene.SNAP:
      return Math.min(250, Math.max(150, absDistance * 0.4))

    default:
      return 300
  }
}

function updateSelectedValue(index: number) {
  const option = props.options[index]
  if (
    option
    && !option.disabled
    && option.value !== modelValue.value
  ) {
    modelValue.value = option.value
    emits('change', option.value, option)
  }
}

function calculateTargetInfo(roughOffset: number) {
  const clampedOffset = clamp(roughOffset, minOffset, maxOffset.value)

  const clampedIndex = Math.round(clampedOffset / itemHeight.value)

  const index = clamp(clampedIndex, 0, itemCount.value - 1)
  const offset = index * itemHeight.value

  return {
    index,
    offset,
  }
}

function scrollToTarget(
  roughOffset: number,
  animationScene: AnimationScene = AnimationScene.NONE,
  callback?: (options: { offset: number; index: number; duration: number }) => void,
) {
  const { offset, index } = calculateTargetInfo(roughOffset)

  if (animationScene === AnimationScene.NONE) {
    currentOffset.value = offset

    callback?.({
      offset,
      index,
      duration: 0,
    })

    return
  }

  const scrollDistance = offset - currentOffset.value

  const duration = calculateAnimationDuration(
    animationScene,
    scrollDistance,
  )

  isTransitioning.value = true

  nextTick(() => {
    currentOffset.value = offset

    transitionTimeoutId = setTimeout(() => {
      isTransitioning.value = false

      transitionTimeoutId = null
    }, duration)
  })

  callback?.({
    offset,
    index,
    duration,
  })
}

function handleTouchStart(event: TouchEvent) {
  if (props.disabled) {
    return
  }

  const touch = event.touches[0]
  if (!touch) {
    return
  }

  if (isTransitioning.value) {
    isTransitioning.value = false
  }

  if (transitionTimeoutId) {
    clearTimeout(transitionTimeoutId)
    transitionTimeoutId = null
  }

  if (animationTimeoutId) {
    skCancelAnimationFrame(animationTimeoutId)
    animationTimeoutId = null
  }

  const now = Date.now()
  touchState.startY = touch.clientY
  touchState.startOffset = currentOffset.value
  touchState.isDragging = true

  touchState.lastY = touch.clientY
  touchState.lastTime = now
  touchState.velocity = 0
  touchState.velocityHistory = []
}

function handleTouchMove(event: TouchEvent) {
  if (props.disabled || !touchState.isDragging) {
    return
  }

  const touch = event.touches[0]
  if (!touch) {
    return
  }

  const now = Date.now()
  const timeDelta = now - touchState.lastTime

  if (timeDelta > 5) {
    const yDelta = touch.clientY - touchState.lastY
    touchState.velocity = yDelta / timeDelta

    touchState.velocityHistory.push({
      velocity: touchState.velocity,
      time: now,
    })

    if (touchState.velocityHistory.length > 10) {
      touchState.velocityHistory.shift()
    }

    touchState.lastY = touch.clientY
    touchState.lastTime = now
  }

  const deltaY = touch.clientY - touchState.startY
  const newOffset = touchState.startOffset - deltaY

  let clampedOffset = newOffset
  if (newOffset < minOffset) {
    const overscroll = minOffset - newOffset
    clampedOffset = minOffset - overscroll * 0.3
  }
  else if (newOffset > maxOffset.value) {
    const overscroll = newOffset - maxOffset.value
    clampedOffset = maxOffset.value + overscroll * 0.3
  }

  currentOffset.value = clampedOffset
}

const animationCallback = ({ index }: { index: number }) => {
  animationTimeoutId = skRequestAnimationFrame(() => {
    updateSelectedValue(index)

    animationTimeoutId = null
  })
}

function handleTouchEnd() {
  if (props.disabled || !touchState.isDragging) {
    return
  }

  touchState.isDragging = false

  if (currentOffset.value < minOffset || currentOffset.value > maxOffset.value) {
    scrollToTarget(
      currentOffset.value,
      AnimationScene.BOUNDARY,
      animationCallback,
    )
    return
  }

  const inertiaDistance = calculateInertiaDistance(touchState)
  if (Math.abs(inertiaDistance) > 0) {
    scrollToTarget(
      currentOffset.value + inertiaDistance,
      AnimationScene.INERTIA,
      animationCallback,
    )
  }
  else {
    scrollToTarget(
      currentOffset.value,
      AnimationScene.SNAP,
      animationCallback,
    )
  }
}

function handleOptionClick(option: SkRollerOption, index: number) {
  if (props.disabled || option.disabled || touchState.isDragging) {
    return
  }

  scrollToTarget(
    index * itemHeight.value,
    AnimationScene.CLICK,
    animationCallback,
  )
}

watch(selectedIndex, (newIndex) => {
  nextTick(() => {
    scrollToTarget(newIndex * itemHeight.value)
  })
})

onMounted(() => {
  nextTick(() => {
    scrollToTarget(selectedIndex.value * itemHeight.value)
  })
})
</script>

<template>
  <div
    :class="classes.root()"
    @touchstart="handleTouchStart"
    @touchmove.stop.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchEnd"
  >
    <div
      :class="classes.scrollWrapper({ transitioning: isTransitioning })"
      :style="{ transform: `translate3d(0, ${-currentOffset + baseOffset}px, 0)` }"
    >
      <div
        v-for="(option, index) in props.options"
        :key="option.value"
        :class="classes.option({
          selected: index === selectedIndex,
          disabled: option.disabled || props.disabled,
        })"
        :style="{ height: `${itemHeight}px` }"
        @click="handleOptionClick(option, index)"
      >
        <slot name="option" :option="option" :selected="index === selectedIndex">
          <span :class="classes.optionText()">
            {{ option.label }}
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>
