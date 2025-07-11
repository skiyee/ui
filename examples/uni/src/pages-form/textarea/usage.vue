<script setup lang="ts">
import { ref } from 'vue'

// 声明全局 uni 对象
declare const uni: any

// 响应式数据
const basicValue = ref('')
const autoHeightValue = ref('')
const countValue = ref('')
const disabledValue = ref('这是禁用状态的文本域')
const readonlyValue = ref('这是只读状态的文本域')
const errorValue = ref('这是错误状态的文本域')

// 配置选项
const selectedSize = ref('medium')
const selectedColor = ref('primary')
const isDisabled = ref(false)
const isReadonly = ref(false)
const showClearable = ref(true)
const showCount = ref(true)
const autoHeight = ref(false)

// 选项配置
const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' }
]

const colorOptions = [
  { label: '主要', value: 'primary' },
  { label: '成功', value: 'success' },
  { label: '警告', value: 'warning' },
  { label: '危险', value: 'danger' },
  { label: '中性', value: 'neutral' }
]

// 事件处理
function handleInput(event: { value: string }) {
  console.log('输入变化:', event.value)
}

function handleFocus(event: { value: string }) {
  console.log('获得焦点:', event.value)
}

function handleBlur(event: { value: string }) {
  console.log('失去焦点:', event.value)
}

function handleClear() {
  console.log('清空输入')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- 页面标题 -->
    <div class="text-center mb-6">
      <h1 class="text-xl font-bold text-gray-800 mb-2">Textarea 文本域组件</h1>
      <p class="text-sm text-gray-600">多行文本输入组件</p>
    </div>

    <!-- 基础用法 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">基础用法</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">基础文本域</label>
          <SkTextarea
            v-model="basicValue"
            placeholder="请输入多行文本内容..."
            @input="handleInput"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ basicValue }}</p>
        </div>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">不同尺寸</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">小尺寸</label>
          <SkTextarea v-model="basicValue" size="small" placeholder="小尺寸文本域" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">中尺寸（默认）</label>
          <SkTextarea v-model="basicValue" size="medium" placeholder="中尺寸文本域" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">大尺寸</label>
          <SkTextarea v-model="basicValue" size="large" placeholder="大尺寸文本域" />
        </div>
      </div>
    </div>

    <!-- 不同颜色 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">不同颜色</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">主要色</label>
          <SkTextarea v-model="basicValue" color="primary" placeholder="主要色文本域" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">成功色</label>
          <SkTextarea v-model="basicValue" color="success" placeholder="成功色文本域" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">警告色</label>
          <SkTextarea v-model="basicValue" color="warning" placeholder="警告色文本域" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">危险色</label>
          <SkTextarea v-model="basicValue" color="danger" placeholder="危险色文本域" />
        </div>
      </div>
    </div>

    <!-- 特殊状态 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">特殊状态</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">禁用状态</label>
          <SkTextarea v-model="disabledValue" disabled placeholder="禁用状态" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">只读状态</label>
          <SkTextarea v-model="readonlyValue" readonly placeholder="只读状态" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">错误状态</label>
          <SkTextarea 
            v-model="errorValue" 
            error 
            error-message="输入内容有误，请重新输入"
            placeholder="错误状态" 
          />
        </div>
      </div>
    </div>

    <!-- 功能特性 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">功能特性</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">字数统计</label>
          <SkTextarea 
            v-model="countValue" 
            show-count 
            :maxlength="200"
            placeholder="支持字数统计，最多200字符"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">自适应高度</label>
          <SkTextarea 
            v-model="autoHeightValue" 
            auto-height
            :min-rows="2"
            :max-rows="6"
            placeholder="自适应高度，最少2行，最多6行"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">可清空</label>
          <SkTextarea 
            v-model="basicValue" 
            clearable
            placeholder="支持一键清空内容"
            @clear="handleClear"
          />
        </div>
      </div>
    </div>

    <!-- 交互式测试 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">交互式测试</h3>

      <!-- 文本域展示 -->
      <div class="flex justify-center mb-6">
        <div class="w-full max-w-sm">
          <SkTextarea
            v-model="basicValue"
            :size="selectedSize as any"
            :color="selectedColor as any"
            :disabled="isDisabled"
            :readonly="isReadonly"
            :clearable="showClearable"
            :show-count="showCount"
            :auto-height="autoHeight"
            placeholder="交互式测试文本域"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @clear="handleClear"
          />
        </div>
      </div>

      <!-- 控制面板 -->
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">尺寸</label>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="option in sizeOptions"
                :key="option.value"
                :class="[
                  'px-3 py-1 text-xs rounded border',
                  selectedSize === option.value
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300'
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
                :class="[
                  'px-3 py-1 text-xs rounded border',
                  selectedColor === option.value
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-700 border-gray-300'
                ]"
                @click="selectedColor = option.value"
              >
                {{ option.label }}
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <SkSwitch v-model="isDisabled" label="禁用状态" />
          <SkSwitch v-model="isReadonly" label="只读状态" />
          <SkSwitch v-model="showClearable" label="显示清空按钮" />
          <SkSwitch v-model="showCount" label="显示字数统计" />
          <SkSwitch v-model="autoHeight" label="自适应高度" />
        </div>
      </div>

      <!-- 当前状态显示 -->
      <div class="bg-gray-50 p-3 rounded mt-4">
        <p class="text-sm font-medium">当前值: {{ basicValue || '(空)' }}</p>
        <p class="text-sm text-gray-600">字符数: {{ (basicValue || '').length }}</p>
      </div>
    </div>

    <!-- 返回按钮 -->
    <div class="text-center mt-6">
      <SkButton variant="bound" @click="uni.navigateBack()">
        返回首页
      </SkButton>
    </div>
  </div>
</template>
