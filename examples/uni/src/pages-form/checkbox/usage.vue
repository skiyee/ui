<script setup lang="ts">
import { ref, computed } from 'vue'

// 声明全局 uni 对象
declare const uni: any

// 响应式数据
const basicChecked = ref(false)
const checkedItems = ref(['option1', 'option3'])
const indeterminateChecked = ref(false)
const disabledChecked = ref(true)

// 配置选项
const selectedSize = ref('medium')
const selectedColor = ref('primary')
const isDisabled = ref(false)
const isIndeterminate = ref(false)

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

// 选项数据
const options = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
  { value: 'option4', label: '选项四' }
]

// 事件处理
function handleChange(checked: boolean) {
  console.log('复选框状态变化:', checked)
}

// 全选/取消全选
function toggleAll() {
  if (checkedItems.value.length === options.length) {
    checkedItems.value = []
  } else {
    checkedItems.value = options.map(opt => opt.value)
  }
}

// 计算全选状态
const isAllChecked = computed(() => checkedItems.value.length === options.length)
const isIndeterminateState = computed(() =>
  checkedItems.value.length > 0 && checkedItems.value.length < options.length
)
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- 页面标题 -->
    <div class="text-center mb-6">
      <h1 class="text-xl font-bold text-gray-800 mb-2">Checkbox 复选框组件</h1>
      <p class="text-sm text-gray-600">用于多选的复选框组件</p>
    </div>

    <!-- 基础用法 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">基础用法</h3>
      <div class="space-y-4">
        <div>
          <SkCheckbox
            v-model="basicChecked"
            label="基础复选框"
            @change="handleChange"
          />
          <p class="text-xs text-gray-500 mt-1">状态: {{ basicChecked ? '已选中' : '未选中' }}</p>
        </div>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">不同尺寸</h3>
      <div class="space-y-4">
        <div>
          <SkCheckbox v-model="basicChecked" size="small" label="小尺寸复选框" />
        </div>
        <div>
          <SkCheckbox v-model="basicChecked" size="medium" label="中尺寸复选框" />
        </div>
        <div>
          <SkCheckbox v-model="basicChecked" size="large" label="大尺寸复选框" />
        </div>
      </div>
    </div>

    <!-- 不同颜色 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">不同颜色</h3>
      <div class="space-y-4">
        <div>
          <SkCheckbox v-model="basicChecked" color="primary" label="主要色复选框" />
        </div>
        <div>
          <SkCheckbox v-model="basicChecked" color="success" label="成功色复选框" />
        </div>
        <div>
          <SkCheckbox v-model="basicChecked" color="warning" label="警告色复选框" />
        </div>
        <div>
          <SkCheckbox v-model="basicChecked" color="danger" label="危险色复选框" />
        </div>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">禁用状态</h3>
      <div class="space-y-4">
        <div>
          <SkCheckbox v-model="basicChecked" disabled label="禁用未选中" />
        </div>
        <div>
          <SkCheckbox v-model="disabledChecked" disabled label="禁用已选中" />
        </div>
      </div>
    </div>

    <!-- 半选状态 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">半选状态</h3>
      <div class="space-y-4">
        <div>
          <SkCheckbox
            v-model="indeterminateChecked"
            :indeterminate="true"
            label="半选状态复选框"
          />
        </div>
      </div>
    </div>

    <!-- 自定义内容 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">自定义内容</h3>
      <div class="space-y-4">
        <div>
          <SkCheckbox v-model="basicChecked">
            <span class="font-bold text-blue-600">自定义标签内容</span>
          </SkCheckbox>
        </div>
        <div>
          <SkCheckbox v-model="basicChecked">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>带图标的标签</span>
            </div>
          </SkCheckbox>
        </div>
      </div>
    </div>

    <!-- 多选列表 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">多选列表</h3>

      <!-- 全选控制 -->
      <div class="mb-4 pb-2 border-b">
        <SkCheckbox
          :model-value="isAllChecked"
          :indeterminate="isIndeterminateState"
          @change="toggleAll"
        >
          全选 ({{ checkedItems.length }}/{{ options.length }})
        </SkCheckbox>
      </div>

      <!-- 选项列表 -->
      <div class="space-y-2">
        <div v-for="option in options" :key="option.value">
          <SkCheckbox
            v-model="checkedItems"
            :value="option.value"
            :label="option.label"
          />
        </div>
      </div>

      <p class="text-xs text-gray-500 mt-2">
        已选择: {{ checkedItems.join(', ') || '无' }}
      </p>
    </div>

    <!-- 交互式测试 -->
    <div class="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <h3 class="text-lg font-semibold mb-3">交互式测试</h3>

      <!-- 复选框展示 -->
      <div class="flex justify-center mb-6">
        <SkCheckbox
          v-model="basicChecked"
          :size="selectedSize as any"
          :color="selectedColor as any"
          :disabled="isDisabled"
          :indeterminate="isIndeterminate"
          label="测试复选框"
          @change="handleChange"
        />
      </div>

      <!-- 控制面板 -->
      <div class="space-y-4">
        <!-- 开关控制 -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">禁用状态</span>
            <SkSwitch v-model="isDisabled" size="small" />
          </div>
          <div class="flex flex-col items-center gap-2">
            <span class="text-sm">半选状态</span>
            <SkSwitch v-model="isIndeterminate" size="small" />
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

        <!-- 当前状态显示 -->
        <div class="bg-gray-50 p-3 rounded">
          <p class="text-sm font-medium">当前状态: {{ basicChecked ? '已选中' : '未选中' }}</p>
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
