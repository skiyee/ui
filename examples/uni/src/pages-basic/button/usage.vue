<script setup lang="ts">
import type { SkButtonProps } from '@skiyee/uni-ui/components/sk-button.vue'

import SkSwitch from '@skiyee/uni-ui/components/sk-switch.vue'
import { ref } from 'vue'

// 选项配置
const colorOptions = [
  { label: '品牌', value: 'brand' },
  { label: '成功', value: 'success' },
  { label: '警告', value: 'warning' },
  { label: '危险', value: 'danger' },
  { label: '中性', value: 'neutral' },
] as const

const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' },
] as const

const iconOptions = [
  { label: '无图标', value: '' },
  { label: '搜索', value: 'i-lucide:search' },
  { label: '添加', value: 'i-lucide:add' },
  { label: '删除', value: 'i-lucide:trash-can' },
  { label: '编辑', value: 'i-lucide:edit' },
  { label: '下载', value: 'i-lucide:download' },
] as const

const iconPositionOptions = [
  { label: '左侧', value: 'left' },
  { label: '右侧', value: 'right' },
] as const

const variantOptions = [
  { label: '实心', value: 'solid' },
  { label: '边框', value: 'bound' },
  { label: '文字', value: 'text' },
] as const

const shapeOptions = [
  { label: '方形', value: 'square' },
  { label: '圆形', value: 'circle' },
] as const

// 响应式数据
const selectedColor = ref<SkButtonProps['color']>('brand')
const selectedSize = ref<SkButtonProps['size']>('medium')
const selectedVariant = ref<SkButtonProps['variant']>('solid')
const selectedShape = ref<SkButtonProps['shape']>('square')
const isDisabled = ref(false)
const isLoading = ref(false)
const isFull = ref(false)
const selectedIcon = ref('')
const selectedIconPosition = ref<'left' | 'right'>('left')

// 事件处理
function handleClick() {
  uni.showToast({
    icon: 'none',
    title: '😊👋',
  })
}
</script>

<template>
  <!-- 交互式测试 -->
  <div class="bg-surface rounded-lg m-4 p-4 shadow-sm">
    <h3 class="text-lg font-semibold mb-3">
      交互式测试
    </h3>

    <!-- 按钮展示 -->
    <div class="flex justify-center mb-6">
      <SkButton
        :color="selectedColor"
        :size="selectedSize"
        :variant="selectedVariant"
        :shape="selectedShape"
        :disabled="isDisabled"
        :loading="isLoading"
        :full="isFull"
        @click="handleClick"
      >
        <template
          v-if="selectedIcon && selectedIconPosition === 'left'"
          #leading
        >
          <SkIcon :name="selectedIcon" />
        </template>
        测试按钮
        <template
          v-if="selectedIcon && selectedIconPosition === 'right'"
          #trailing
        >
          <SkIcon :name="selectedIcon" size="16px" />
        </template>
      </SkButton>
    </div>

    <!-- 控制面板 -->
    <div class="space-y-4">
      <!-- 开关控制 -->
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">禁用状态</span>
          <SkSwitch v-model="isDisabled" size="small" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">加载状态</span>
          <SkSwitch v-model="isLoading" size="small" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">全宽显示</span>
          <SkSwitch v-model="isFull" size="small" />
        </div>
      </div>

      <!-- 样式选择 -->
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label class="block text-sm font-medium mb-2">颜色</label>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="option in colorOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                selectedColor === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="selectedColor = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">尺寸</label>
          <div class="flex gap-2">
            <button
              v-for="option in sizeOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                selectedSize === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="selectedSize = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">变体</label>
          <div class="flex gap-2">
            <button
              v-for="option in variantOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                selectedVariant === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="selectedVariant = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">形状</label>
          <div class="flex gap-2">
            <button
              v-for="option in shapeOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                selectedShape === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="selectedShape = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">图标</label>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="option in iconOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                selectedIcon === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="selectedIcon = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div v-if="selectedIcon">
          <label class="block text-sm font-medium mb-2">图标位置</label>
          <div class="flex gap-2">
            <button
              v-for="option in iconPositionOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                selectedIconPosition === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="selectedIconPosition = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
