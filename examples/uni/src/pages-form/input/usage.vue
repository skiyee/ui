<script setup lang="ts">
import type { SkInputProps } from '@skiyee/uni-ui/components/sk-input.vue'

import { computed, ref, watch } from 'vue'

// 响应式数据
const basicValue = ref('')

// 配置选项
const selectedSize = ref<SkInputProps['size']>('medium')
const inputType = ref<SkInputProps['type']>('text')
const isDisabled = ref(false)
const isReadonly = ref(false)
const isPassword = ref(false)
const showClearable = ref(false)
const maxLength = ref<number>(140)
const leadingOption = ref<string>('')
const trailingOption = ref<string>('')

// 选项配置
const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' },
] as const

const typeOptions = [
  { label: '文本', value: 'text' },
  { label: '数字', value: 'number' },
  { label: '电话', value: 'tel' },
] as const

const maxLengthOptions = [
  { label: '10字符', value: 10 },
  { label: '20字符', value: 20 },
  { label: '50字符', value: 50 },
  { label: '140字符', value: 140 },
] as const

const leadingOptions = [
  { label: '无', value: '' },
  { label: '搜索图标', value: 'i-lucide:search' },
  { label: '用户图标', value: 'i-lucide:user' },
  { label: '文本', value: '前缀' },
] as const

const trailingOptions = [
  { label: '无', value: '' },
  { label: '信息图标', value: 'i-lucide:information' },
  { label: '检查图标', value: 'i-lucide:checkmark' },
  { label: '文本', value: '后缀' },
] as const

// 事件处理
function handleFocus(event: any) {
  console.log('获得焦点:', event)
}

function handleBlur(event: any) {
  console.log('失去焦点:', event)
}

function handleClear() {
  console.log('清空输入')
}

function handleConfirm(event: any) {
  console.log('确认输入:', event)
}

function handleLeading() {
  console.log('点击前缀元素')
}

function handleTrailing() {
  console.log('点击后缀元素')
}

// 计算当前字符数
const currentLength = computed(() => String(basicValue.value || '').length)

watch(maxLength, (newVal) => {
  if (newVal < currentLength.value) {
    basicValue.value = basicValue.value.slice(0, newVal)
  }
})
</script>

<template>
  <div class="bg-surface rounded-lg m-4 p-4 shadow-sm">
    <h3 class="text-lg font-semibold mb-3">
      交互式测试
    </h3>
    <!-- 输入框展示 -->
    <div class="flex justify-center mb-6">
      <div class="w-full max-w-sm">
        <SkInput
          v-model="basicValue"
          :type="inputType"
          :size="selectedSize"
          :disabled="isDisabled"
          :readonly="isReadonly"
          :password="isPassword"
          :clearable="showClearable"
          :maxlength="maxLength"
          :leading="leadingOption || undefined"
          :trailing="trailingOption || undefined"
          placeholder="交互式测试输入框"
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @confirm="handleConfirm"
          @leading="handleLeading"
          @trailing="handleTrailing"
        />
      </div>
    </div>

    <!-- 字符计数显示 -->
    <div class="text-center mb-4">
      <span class="text-sm text-gray-500">
        当前字符数: {{ currentLength }} / {{ maxLength }}
      </span>
    </div>

    <!-- 控制面板 -->
    <div class="flex flex-col gap-4">
      <!-- 开关控制 -->
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">禁用状态</span>
          <SkSwitch v-model="isDisabled" size="small" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">只读状态</span>
          <SkSwitch v-model="isReadonly" size="small" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">密码类型</span>
          <SkSwitch v-model="isPassword" size="small" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="text-sm">显示清空</span>
          <SkSwitch v-model="showClearable" size="small" />
        </div>
      </div>

      <!-- 样式选择 -->
      <div class="grid grid-cols-1 gap-4">
        <div>
          <label class="block text-sm font-medium mb-2">输入类型</label>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="option in typeOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                inputType === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="inputType = option.value"
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
          <label class="block text-sm font-medium mb-2">字符长度限制</label>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="option in maxLengthOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                maxLength === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="maxLength = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">前缀元素</label>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="option in leadingOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                leadingOption === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="leadingOption = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">后缀元素</label>
          <div class="flex gap-2 flex-wrap">
            <button
              v-for="option in trailingOptions"
              :key="option.value"
              class="px-3 py-1 text-xs rounded border" :class="[
                trailingOption === option.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300',
              ]"
              @click="trailingOption = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
