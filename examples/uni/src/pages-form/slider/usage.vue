<script setup lang="ts">
import { ref } from 'vue'

// 声明全局 uni 对象
declare const uni: any

// 响应式数据
const basicValue = ref(30)
const rangeValue = ref([20, 60])
const stepValue = ref(25)
const disabledValue = ref(50)

// 配置选项
const selectedSize = ref('medium')
const selectedColor = ref('brand')
const minValue = ref(0)
const maxValue = ref(100)
const stepSize = ref(1)
const isDisabled = ref(false)
const isRange = ref(false)
const showTooltip = ref(true)
const showMarks = ref(false)

// 选项配置
const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' },
]

const colorOptions = [
  { label: '主要', value: 'brand' },
  { label: '成功', value: 'success' },
  { label: '警告', value: 'warning' },
  { label: '危险', value: 'danger' },
  { label: '中性', value: 'neutral' },
]

// 标记点配置
const marks = {
  0: '0°C',
  25: '25°C',
  50: '50°C',
  75: '75°C',
  100: '100°C',
}

// 事件处理
function handleChange(value: number | number[]) {
  console.log('滑块值变化:', value)
}

function handleInput(value: number | number[]) {
  console.log('滑块输入:', value)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- 页面标题 -->
    <div class="text-center mb-6">
      <h1 class="text-xl font-bold text-gray-800 mb-2">
        Slider 滑块组件
      </h1>
      <p class="text-sm text-gray-600">
        用于数值选择的滑块组件
      </p>
    </div>

    <!-- 基础用法 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        基础用法
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">基础滑块</label>
          <SkSlider
            v-model="basicValue"
            @change="handleChange"
            @input="handleInput"
          />
          <p class="text-xs text-gray-500 mt-1">
            当前值: {{ basicValue }}
          </p>
        </div>
      </div>
    </div>

    <!-- 范围选择 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        范围选择
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">范围滑块</label>
          <SkSlider
            v-model="rangeValue"
            range
          />
          <p class="text-xs text-gray-500 mt-1">
            当前范围: {{ rangeValue[0] }} - {{ rangeValue[1] }}
          </p>
        </div>
      </div>
    </div>

    <!-- 步长设置 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        步长设置
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">步长为 5</label>
          <SkSlider
            v-model="stepValue"
            :step="5"
          />
          <p class="text-xs text-gray-500 mt-1">
            当前值: {{ stepValue }}
          </p>
        </div>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        不同尺寸
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">小尺寸</label>
          <SkSlider v-model="basicValue" size="small" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">中尺寸</label>
          <SkSlider v-model="basicValue" size="medium" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">大尺寸</label>
          <SkSlider v-model="basicValue" size="large" />
        </div>
      </div>
    </div>

    <!-- 不同颜色 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        不同颜色
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">主要色</label>
          <SkSlider v-model="basicValue" color="brand" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">成功色</label>
          <SkSlider v-model="basicValue" color="success" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">警告色</label>
          <SkSlider v-model="basicValue" color="warning" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">危险色</label>
          <SkSlider v-model="basicValue" color="danger" />
        </div>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        禁用状态
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">禁用滑块</label>
          <SkSlider v-model="disabledValue" disabled />
          <p class="text-xs text-gray-500 mt-1">
            当前值: {{ disabledValue }}
          </p>
        </div>
      </div>
    </div>

    <!-- 带标记的滑块 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        带标记的滑块
      </h3>
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">温度选择</label>
          <SkSlider
            v-model="basicValue"
            :marks="marks"
            :step="25"
          />
          <p class="text-xs text-gray-500 mt-1">
            当前温度: {{ basicValue }}°C
          </p>
        </div>
      </div>
    </div>

    <!-- 垂直滑块 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        垂直滑块
      </h3>
      <div class="flex justify-center py-8">
        <div class="h-48">
          <SkSlider
            v-model="basicValue"
            vertical
          />
        </div>
      </div>
      <p class="text-xs text-gray-500 text-center">
        当前值: {{ basicValue }}
      </p>
    </div>

    <!-- 交互式测试 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">
        交互式测试
      </h3>

      <!-- 滑块展示 -->
      <div class="mb-6">
        <SkSlider
          v-model="basicValue"
          :min="minValue"
          :max="maxValue"
          :step="stepSize"
          :size="selectedSize as any"
          :color="selectedColor as any"
          :disabled="isDisabled"
          :range="isRange"
          :show-tooltip="showTooltip"
          :marks="showMarks ? marks : undefined"
          @change="handleChange"
          @input="handleInput"
        />
        <p class="text-xs text-gray-500 mt-2">
          当前值: {{ isRange ? `${rangeValue[0]} - ${rangeValue[1]}` : basicValue }}
        </p>
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
            <input v-model.number="stepSize" type="number" min="1" class="w-full px-3 py-2 border rounded text-sm">
          </div>
        </div>

        <!-- 开关控制 -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">禁用状态</span>
            <SkSwitch v-model="isDisabled" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">范围选择</span>
            <SkSwitch v-model="isRange" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">显示提示</span>
            <SkSwitch v-model="showTooltip" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">显示标记</span>
            <SkSwitch v-model="showMarks" size="small" />
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

    <!-- 返回按钮 -->
    <div class="text-center mt-6">
      <SkButton variant="bound" @click="uni.navigateBack()">
        返回首页
      </SkButton>
    </div>
  </div>
</template>
