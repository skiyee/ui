<script setup lang="ts">
import type { SkSwitchProps } from '@skiyee/uni-ui/components/sk-switch.vue'

import { ref } from 'vue'

// 响应式数据
const state = ref(false)

// 配置选项
const selectedSize = ref<SkSwitchProps['size']>('medium')
const selectedColor = ref<SkSwitchProps['color']>('brand')
const isDisabled = ref(false)
const isReadonly = ref(false)
const showLabel = ref(true)

// 选项配置
const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' },
] as const

const colorOptions = [
  { label: '品牌', value: 'brand' },
  { label: '成功', value: 'success' },
  { label: '警告', value: 'warning' },
  { label: '危险', value: 'danger' },
  { label: '中性', value: 'neutral' },
] as const

// 事件处理
function handleChange(value: boolean) {
  uni.showToast({
    icon: 'none',
    position: 'top',
    title: `开关状态: ${value ? '开启' : '关闭'}`,
  })
}
</script>

<template>
  <!-- 交互式测试 -->
  <div class="bg-surface rounded-lg p-4 mb-4 shadow-sm">
    <h3 class="text-lg font-semibold mb-3">
      交互式测试
    </h3>

    <!-- 开关展示 -->
    <div class="flex justify-center mb-6">
      <div class="flex items-center gap-4">
        <SkSwitch
          v-model="state"
          :size="selectedSize"
          :color="selectedColor"
          :readonly="isReadonly"
          :disabled="isDisabled"
          @change="handleChange"
        >
          <template v-if="showLabel">
            {{ state ? '开启' : '关闭' }}
          </template>
        </SkSwitch>
      </div>
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
          <span class="text-sm">仅可见</span>
          <SkSwitch v-model="isReadonly" size="small" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">展示标签</span>
          <SkSwitch v-model="showLabel" size="small" />
        </div>
      </div>

      <!-- 样式选择 -->
      <div class="grid grid-cols-1 gap-4">
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
      </div>
    </div>
  </div>
</template>
