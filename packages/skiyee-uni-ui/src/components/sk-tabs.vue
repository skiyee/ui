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
 *   <sk-tab label="标签1">
 *     <view>内容1</view>
 *   </sk-tab>
 *   <sk-tab label="标签2">
 *     <view>内容2</view>
 *   </sk-tab>
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
   * 指示器宽度（px）
   * @default 'auto' - 自动根据标签宽度计算
   */
  lineWidth?: number | 'auto';
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
   * 标签列表（放置 sk-tab 组件）
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
  lineWidth: 'auto',
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

// scroll-view 的 scroll-left 值
const scrollLeft = ref(0)

// 存储所有 tab-item 的信息
interface TabItemInfo {
  offsetLeft: number;
  width: number;
}

const tabItemsInfo = ref<TabItemInfo[]>([])

// 计算指示器宽度（使用 computed 提升性能）
const lineWidth = computed(() => {
  const currentTabInfo = tabItemsInfo.value[activeIndex.value]
  if (!currentTabInfo) {
    return '0px'
  }

  const width = props.lineWidth === 'auto'
    ? currentTabInfo.width
    : props.lineWidth

  return `${width}px`
})

// 计算指示器位置（使用 computed 提升性能，并实现居中对齐）
const lineTransform = computed(() => {
  const currentTabInfo = tabItemsInfo.value[activeIndex.value]
  if (!currentTabInfo) {
    return 'translateX(0px)'
  }

  // 计算指示器的实际宽度
  const actualLineWidth = props.lineWidth === 'auto'
    ? currentTabInfo.width
    : props.lineWidth

  // 计算居中偏移量：tab 中心位置 - 指示器宽度的一半
  const tabCenter = currentTabInfo.offsetLeft + currentTabInfo.width / 2
  const lineOffset = tabCenter - actualLineWidth / 2

  return `translateX(${lineOffset}px)`
})

// 存储所有 tab 的数据
interface TabData {
  uid: number;
  props: any;
}

const tabs = ref<TabData[]>([])

// 切换标签
function setActiveIndex(index: number) {
  const tab = tabs.value[index]
  if (props.disabled || tab?.props.disabled) {
    return
  }

  if (index === activeIndex.value) {
    return
  }

  activeIndex.value = index
  emits('change', index)
  emits('click', index)

  nextTick(() => {
    scrollToActiveTab()
  })
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

        scrollToActiveTab()
      }
    }).exec()
  })
}

// 注册标签
function registerTab(tab: TabData) {
  tabs.value.push(tab)
  nextTick(() => {
    updateTabItemsInfo()
  })
}

// 注销标签
function unregisterTab(uid: number) {
  const index = tabs.value.findIndex(tab => tab.uid === uid)
  if (index > -1) {
    tabs.value.splice(index, 1)
  }
  updateTabItemsInfo()
}

// 提供上下文给子组件
const tabsContext = readonly({
  props: reactive({
    activeIndex: toRef(() => activeIndex.value),
    disabled: toRef(() => props.disabled),
  }),
  setActiveIndex,
  registerTab,
  unregisterTab,
})

useProvide(SK_TABS_KEY)(tabsContext)

// 监听激活索引变化
watch(activeIndex, () => {
  nextTick(() => {
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
    <!-- 标签导航栏 -->
    <scroll-view
      class="sk-tabs-scroll-view" :class="[classes.scrollWrapper()]"
      :scroll-x="scrollable"
      :scroll-left="scrollLeft"
      :scroll-with-animation="animated"
      :show-scrollbar="false"
    >
      <view :class="classes.nav()">
        <!-- 渲染所有标签头部 -->
        <view
          v-for="(tab, idx) in tabs"
          :key="tab.uid"
          class="sk-tab-item"
          :class="classes.tab({
            active: activeIndex === idx,
            disabled: disabled || tab.props.disabled,
          })"
          @tap="() => setActiveIndex(idx)"
        >
          <view
            :class="classes.tabContent({
              active: activeIndex === idx,
              disabled: disabled || tab.props.disabled,
            })"
          >
            <!-- 默认显示标签文本 -->
            {{ tab.props.label }}
          </view>
        </view>

        <!-- 指示器 -->
        <view
          :class="classes.line()"
          :style="{
            width: lineWidth,
            transform: lineTransform,
          }"
        />
      </view>
    </scroll-view>

    <!-- 标签面板内容区域 -->
    <view :class="classes.panels()">
      <slot />
    </view>
  </view>
</template>
