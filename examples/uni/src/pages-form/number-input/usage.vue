<script setup lang="ts">
import { ref } from 'vue'

// 声明全局 uni 对象
declare const uni: any

// 响应式数据
const basicValue = ref(0)
const rangeValue = ref(5)
const stepValue = ref(1)
const precisionValue = ref(3.14)
const disabledValue = ref(10)
const readonlyValue = ref(20)
const withoutInputValue = ref(0)
const longPressValue = ref(0)
const formatterValue = ref(1000)

// 配置选项
const selectedSize = ref('medium')
const selectedColor = ref('primary')
const minValue = ref(0)
const maxValue = ref(100)
const stepSize = ref(1)
const precisionDigits = ref(2)
const isDisabled = ref(false)
const isReadonly = ref(false)
const isWithoutInput = ref(false)
const enableLongPress = ref(true)

// 尺寸选项
const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' }
]

// 颜色选项
const colorOptions = [
  { label: '主要', value: 'primary' },
  { label: '成功', value: 'success' },
  { label: '警告', value: 'warning' },
  { label: '危险', value: 'danger' },
  { label: '中性', value: 'neutral' }
]

// 格式化函数
function currencyFormatter(value: number): string {
  return `¥${value.toLocaleString()}`
}

// 解析函数
function currencyParser(value: string): number {
  return Number(value.replace(/¥|,/g, ''))
}

// 事件处理
function handleChange(value: number) {
  console.log('数值变化:', value)
}

function handleFocus(event: { value: number }) {
  console.log('获得焦点:', event.value)
}

function handleBlur(event: { value: number }) {
  console.log('失去焦点:', event.value)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- 页面标题 -->
    <div class="text-center mb-6">
      <h1 class="text-xl font-bold text-gray-800 mb-2">NumberInput 数字输入框</h1>
      <p class="text-sm text-gray-600">专业的数字输入组件，支持增减按钮</p>
    </div>

    <!-- 基础用法 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">基础用法</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">基础数字输入</label>
          <SkNumberInput
            v-model="basicValue"
            placeholder="请输入数字"
            @change="handleChange"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ basicValue }}</p>
        </div>
      </div>
    </div>

    <!-- 范围限制 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">范围限制</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">限制范围 (0-10)</label>
          <SkNumberInput
            v-model="rangeValue"
            :min="0"
            :max="10"
            placeholder="0-10之间"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ rangeValue }}</p>
        </div>
      </div>
    </div>

    <!-- 步长设置 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">步长设置</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">步长为 0.5</label>
          <SkNumberInput
            v-model="stepValue"
            :step="0.5"
            :precision="1"
            placeholder="步长0.5"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ stepValue }}</p>
        </div>
      </div>
    </div>

    <!-- 精度控制 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">精度控制</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">保留2位小数</label>
          <SkNumberInput
            v-model="precisionValue"
            :precision="2"
            :step="0.01"
            placeholder="精确到小数点后2位"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ precisionValue }}</p>
        </div>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">禁用状态</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">禁用输入</label>
          <SkNumberInput
            v-model="disabledValue"
            disabled
            placeholder="禁用状态"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ disabledValue }}</p>
        </div>
      </div>
    </div>

    <!-- 只读状态 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">只读状态</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">只读输入</label>
          <SkNumberInput
            v-model="readonlyValue"
            readonly
            placeholder="只读状态"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ readonlyValue }}</p>
        </div>
      </div>
    </div>

    <!-- 隐藏输入框 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">隐藏输入框</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">仅显示按钮</label>
          <SkNumberInput
            v-model="withoutInputValue"
            without-input
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ withoutInputValue }}</p>
        </div>
      </div>
    </div>

    <!-- 长按功能 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">长按功能</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">支持长按连续调整</label>
          <SkNumberInput
            v-model="longPressValue"
            long-press
            placeholder="长按按钮试试"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ longPressValue }}</p>
        </div>
      </div>
    </div>

    <!-- 格式化显示 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">格式化显示</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">货币格式</label>
          <SkNumberInput
            v-model="formatterValue"
            :formatter="currencyFormatter"
            :parser="currencyParser"
            placeholder="货币格式"
          />
          <p class="text-xs text-gray-500 mt-1">当前值: {{ formatterValue }}</p>
        </div>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">不同尺寸</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">小尺寸</label>
          <SkNumberInput v-model="basicValue" size="small" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">中尺寸</label>
          <SkNumberInput v-model="basicValue" size="medium" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">大尺寸</label>
          <SkNumberInput v-model="basicValue" size="large" />
        </div>
      </div>
    </div>

    <!-- 不同颜色 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">不同颜色</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">主要色</label>
          <SkNumberInput v-model="basicValue" color="primary" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">成功色</label>
          <SkNumberInput v-model="basicValue" color="success" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">警告色</label>
          <SkNumberInput v-model="basicValue" color="warning" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">危险色</label>
          <SkNumberInput v-model="basicValue" color="danger" />
        </div>
      </div>
    </div>

    <!-- 交互式测试 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">交互式测试</h3>

      <!-- 组件展示 -->
      <div class="flex justify-center mb-6">
        <SkNumberInput
          v-model="basicValue"
          :min="minValue"
          :max="maxValue"
          :step="stepSize"
          :precision="precisionDigits"
          :disabled="isDisabled"
          :readonly="isReadonly"
          :without-input="isWithoutInput"
          :long-press="enableLongPress"
          :size="selectedSize"
          :color="selectedColor"
          placeholder="交互式测试"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </div>

      <!-- 控制面板 -->
      <div class="space-y-4">
        <!-- 数值配置 -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">最小值</label>
            <input v-model.number="minValue" type="number" class="w-full px-3 py-2 border rounded text-sm">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">最大值</label>
            <input v-model.number="maxValue" type="number" class="w-full px-3 py-2 border rounded text-sm">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">步长</label>
            <input v-model.number="stepSize" type="number" step="0.1" class="w-full px-3 py-2 border rounded text-sm">
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">精度</label>
            <input v-model.number="precisionDigits" type="number" min="0" max="10" class="w-full px-3 py-2 border rounded text-sm">
          </div>
        </div>

        <!-- 开关控制 -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">禁用</span>
            <SkSwitch v-model="isDisabled" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">只读</span>
            <SkSwitch v-model="isReadonly" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">隐藏输入框</span>
            <SkSwitch v-model="isWithoutInput" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">长按功能</span>
            <SkSwitch v-model="enableLongPress" size="small" />
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

        <!-- 当前值显示 -->
        <div class="bg-gray-50 p-3 rounded">
          <p class="text-sm font-medium">当前值: {{ basicValue }}</p>
        </div>
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
