<script lang="ts">
/**
 * sk-tabs 组件 - 标签页组件
 *
 * @author sKy(skiyee)
 * @qq 319619193
 * @github https://github.com/skiyee
 *
 * @example
 * ```vue
 * <sk-tabs v-model="activeIndex">
 *   <sk-tab-item label="标签1" />
 *   <sk-tab-item label="标签2" />
 *   <sk-tab-item label="标签3" />
 * </sk-tabs>
 * ```
 *
 * @see 更多示例请参考文档: https://skiyee-ui.netlify.app/docs/components/navigation/tabs
 */

import type { SkTabsUcvProps } from '../styles'

export interface SkTabsProps {
  /**
   * 默认激活的标签索引（非受控模式）
   * @default 0
   */
  defaultValue?: number;
  /**
   * 是否可滚动
   * @default false
   */
  scrollable?: boolean;
  /**
   * 主题色
   * @default 'brand'
   */
  color?: string;
  /**
   * 激活态颜色
   */
  activeColor?: string;
  /**
   * 指示器宽度（rpx）
   * @default 'auto' - 自动根据标签宽度计算
   */
  lineWidth?: number | 'auto';
  /**
   * 指示器高度（rpx）
   * @default 4
   */
  lineHeight?: number;
  /**
   * 是否启用切换动画
   * @default true
   */
  animated?: boolean;
  /**
   * 是否禁用整个标签页
   * @default false
   */
  disabled?: boolean;
  /**
   * 用于拓展当前基础样式
   */
  clax?: SkTabsUcvProps['clax'];
}

export interface SkTabsEmits {
  /**
   * 切换标签时触发
   */
  (name: 'change', index: number): void;
  /**
   * 点击标签时触发
   */
  (name: 'click', index: number): void;
}

export interface SkTabsSlots {
  /**
   * 标签列表
   */
  default?: () => any;
}
</script>

<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onMounted, reactive, readonly, ref, toRef, watch } from 'vue'

import { useProvide } from '../composables'
import { SK_TABS_KEY } from '../constants'
import { SkTabsUcv } from '../styles'

defineOptions({
  inheritAttrs: false,
  options: {
    virtualHost: true,
  },
})

const props = withDefaults(defineProps<SkTabsProps>(), {
  defaultValue: 0,
  scrollable: false,
  color: 'brand',
  lineWidth: 'auto',
  lineHeight: 4,
  animated: true,
  disabled: false,
})

const modelValue = defineModel<number>({
  default: undefined,
})

const emits = defineEmits<SkTabsEmits>()

defineSlots<SkTabsSlots>()

const instance = getCurrentInstance()

const classes = computed(() => SkTabsUcv(props))

// 内部激活索引
const internalActiveIndex = ref(props.defaultValue)

// 计算当前激活索引（受控/非受控）
const activeIndex = computed({
  get: () => {
    return modelValue.value !== undefined ? modelValue.value : internalActiveIndex.value
  },
  set: (value: number) => {
    if (modelValue.value !== undefined) {
      modelValue.value = value
    }
    else {
      internalActiveIndex.value = value
    }
  },
})

// 指示器样式
const lineStyle = ref({
  width: '0px',
  transform: 'translateX(0px)',
})

// scroll-view 的 scroll-left 值
const scrollLeft = ref(0)

// 存储所有 tab-item 的信息
interface TabItemInfo {
  offsetLeft: number;
  width: number;
}

const tabItemsInfo = ref<TabItemInfo[]>([])

// 切换标签
function setActiveIndex(index: number) {
  if (props.disabled) {
    return
  }

  if (index === activeIndex.value) {
    return
  }

  activeIndex.value = index
  emits('change', index)
  emits('click', index)

  nextTick(() => {
    updateLinePosition()
    scrollToActiveTab()
  })
}

// 更新指示器位置
function updateLinePosition() {
  if (tabItemsInfo.value.length === 0) {
    return
  }

  const currentTabInfo = tabItemsInfo.value[activeIndex.value]
  if (!currentTabInfo) {
    return
  }

  const lineWidth = props.lineWidth === 'auto'
    ? currentTabInfo.width
    : props.lineWidth

  lineStyle.value = {
    width: `${lineWidth}rpx`,
    transform: `translateX(${currentTabInfo.offsetLeft}rpx)`,
  }
}

// 滚动到激活的标签
function scrollToActiveTab() {
  if (!props.scrollable) {
    return
  }

  const currentTabInfo = tabItemsInfo.value[activeIndex.value]
  if (!currentTabInfo) {
    return
  }

  // 获取容器宽度（假设视口宽度为 750rpx）
  const query = uni.createSelectorQuery().in(instance)
  query.select('.sk-tabs-scroll-view').boundingClientRect((rect: any) => {
    if (rect) {
      const containerWidth = rect.width
      const tabCenter = currentTabInfo.offsetLeft + currentTabInfo.width / 2
      const scrollPosition = tabCenter - containerWidth / 2

      scrollLeft.value = Math.max(0, scrollPosition)
    }
  }).exec()
}

// 更新标签项信息
function updateTabItemsInfo() {
  nextTick(() => {
    const query = uni.createSelectorQuery().in(instance)
    query.selectAll('.sk-tab-item').boundingClientRect((rects: any) => {
      if (Array.isArray(rects)) {
        let currentOffset = 0
        tabItemsInfo.value = rects.map((rect: any) => {
          const info = {
            offsetLeft: currentOffset,
            width: rect.width,
          }
          currentOffset += rect.width
          return info
        })

        updateLinePosition()
        scrollToActiveTab()
      }
    }).exec()
  })
}

// 注册标签项
function registerTabItem() {
  updateTabItemsInfo()
}

// 注销标签项
function unregisterTabItem() {
  updateTabItemsInfo()
}

// 提供上下文给子组件
const tabsContext = readonly({
  props: reactive({
    activeIndex: toRef(() => activeIndex.value),
    color: toRef(() => props.color),
    activeColor: toRef(() => props.activeColor),
    disabled: toRef(() => props.disabled),
  }),
  setActiveIndex,
  registerTabItem,
  unregisterTabItem,
})

const { internalChildren } = useProvide(SK_TABS_KEY)(tabsContext)

// 监听子组件变化
watch(
  () => internalChildren.length,
  () => {
    updateTabItemsInfo()
  },
  { immediate: true },
)

// 监听激活索引变化
watch(activeIndex, () => {
  nextTick(() => {
    updateLinePosition()
    scrollToActiveTab()
  })
})

onMounted(() => {
  nextTick(() => {
    updateTabItemsInfo()
  })
})
</script>

<template>
  <view :class="classes.root()">
    <scroll-view
      class="sk-tabs-scroll-view" :class="[classes.scrollView()]"
      :scroll-x="scrollable"
      :scroll-left="scrollLeft"
      :scroll-with-animation="animated"
      :show-scrollbar="false"
    >
      <view :class="classes.nav()">
        <slot />

        <!-- 指示器 -->
        <view
          :class="classes.line()"
          :style="{
            ...lineStyle,
            height: `${lineHeight}rpx`,
            backgroundColor: activeColor || color,
          }"
        />
      </view>
    </scroll-view>
  </view>
</template>
