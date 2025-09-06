<script setup lang="ts">
// 开发流程步骤
const developmentSteps = ref([
  {
    step: '01',
    title: '快速安装',
    description: '一行命令即可安装',
    code: 'npm install @skiyee/ui',
    icon: 'i-lucide:download',
    color: 'blue'
  },
  {
    step: '02', 
    title: '简单配置',
    description: '最小化配置即可使用',
    code: 'import { createApp } from "vue"\nimport SkiyeeUI from "@skiyee/ui"',
    icon: 'i-lucide:settings',
    color: 'green'
  },
  {
    step: '03',
    title: '开始使用',
    description: '直接在模板中使用组件',
    code: '<sk-button type="primary">Hello World</sk-button>',
    icon: 'i-lucide:code',
    color: 'purple'
  },
  {
    step: '04',
    title: '自定义主题',
    description: '轻松定制符合品牌的主题',
    code: 'const theme = {\n  primary: "#your-color"\n}',
    icon: 'i-lucide:palette',
    color: 'orange'
  }
])

// 开发者工具
const devTools = ref([
  {
    name: 'TypeScript 支持',
    description: '完整的类型定义，智能提示',
    icon: 'i-logos:typescript-icon',
    features: ['智能提示', '类型检查', '自动补全']
  },
  {
    name: 'Vite 插件',
    description: '专用的 Vite 插件，开发更高效',
    icon: 'i-logos:vitejs',
    features: ['热重载', '按需加载', '构建优化']
  },
  {
    name: 'DevTools',
    description: '浏览器开发者工具扩展',
    icon: 'i-lucide:wrench',
    features: ['组件检查', '主题调试', '性能分析']
  },
  {
    name: 'CLI 工具',
    description: '命令行工具，快速创建项目',
    icon: 'i-lucide:terminal',
    features: ['项目模板', '组件生成', '主题构建']
  }
])

const activeStep = ref(0)
const isVisible = ref(false)

// 自动切换步骤
let stepInterval: NodeJS.Timeout

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  stepInterval = setInterval(() => {
    activeStep.value = (activeStep.value + 1) % developmentSteps.value.length
  }, 3000)
})

onUnmounted(() => {
  if (stepInterval) {
    clearInterval(stepInterval)
  }
})
</script>

<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- 标题区域 -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 bg-nc-muted/50 rounded-full px-4 py-2 mb-6">
        <Icon name="i-lucide:code-2" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">DEVELOPER EXPERIENCE</span>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        极致的开发体验
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        从安装到部署，每一步都经过精心优化，让开发变得简单而高效
      </p>
    </div>

    <!-- 开发流程 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- 左侧：步骤列表 -->
      <div class="space-y-6">
        <div 
          v-for="(step, index) in developmentSteps" 
          :key="step.step"
          class="group relative cursor-pointer"
          :class="[
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          ]"
          :style="{ transitionDelay: `${index * 150}ms` }"
          @click="activeStep = index"
        >
          <!-- 连接线 -->
          <div 
            v-if="index < developmentSteps.length - 1"
            class="absolute left-6 top-16 w-0.5 h-12 bg-nc-border/30 transition-colors duration-300"
            :class="activeStep >= index ? 'bg-nc-primary/50' : ''"
          />
          
          <div class="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300"
               :class="activeStep === index ? 'bg-nc-card/50 border border-nc-primary/30' : 'hover:bg-nc-card/30'">
            <!-- 步骤编号 -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all duration-300"
                 :class="[
                   activeStep === index 
                     ? `bg-${step.color}-500 text-white` 
                     : `bg-${step.color}-500/10 text-${step.color}-500`
                 ]">
              {{ step.step }}
            </div>
            
            <!-- 内容 -->
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <Icon :name="step.icon" class="w-5 h-5" :class="`text-${step.color}-500`" />
                <h3 class="text-lg font-semibold text-nc-foreground">
                  {{ step.title }}
                </h3>
              </div>
              <p class="text-sm text-nc-foreground/70 mb-3">
                {{ step.description }}
              </p>
              
              <!-- 进度指示器 -->
              <div class="h-1 bg-nc-border/20 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r transition-all duration-1000 ease-out"
                  :class="`from-${step.color}-400 to-${step.color}-600`"
                  :style="{ width: activeStep === index ? '100%' : '0%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：代码展示 -->
      <div class="relative">
        <div class="sticky top-8">
          <div class="bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl overflow-hidden">
            <!-- 代码窗口头部 -->
            <div class="flex items-center gap-2 px-4 py-3 bg-nc-muted/30 border-b border-nc-border/30">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div class="flex-1 text-center">
                <span class="text-xs text-nc-foreground/60 font-mono">
                  {{ developmentSteps[activeStep].title }}
                </span>
              </div>
            </div>
            
            <!-- 代码内容 -->
            <div class="p-6">
              <pre class="text-sm text-nc-foreground/80 font-mono leading-relaxed overflow-x-auto">{{ developmentSteps[activeStep].code }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 开发者工具 -->
    <div class="bg-nc-card/30 backdrop-blur-sm border border-nc-border/50 rounded-3xl p-8">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-nc-foreground mb-2">
          开发者工具
        </h3>
        <p class="text-nc-foreground/70">
          完整的工具链支持，提升开发效率
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(tool, index) in devTools" 
          :key="tool.name"
          class="group bg-nc-card/50 border border-nc-border/50 rounded-2xl p-6 hover:border-nc-primary/30 transition-all duration-300"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
          :style="{ transitionDelay: `${(index + 4) * 100}ms` }"
        >
          <!-- 图标 -->
          <div class="w-12 h-12 mb-4 flex items-center justify-center">
            <Icon :name="tool.icon" class="w-10 h-10" />
          </div>
          
          <!-- 标题和描述 -->
          <h4 class="text-lg font-semibold text-nc-foreground mb-2">
            {{ tool.name }}
          </h4>
          <p class="text-sm text-nc-foreground/70 mb-4">
            {{ tool.description }}
          </p>
          
          <!-- 特性列表 -->
          <div class="space-y-2">
            <div 
              v-for="feature in tool.features" 
              :key="feature"
              class="flex items-center gap-2"
            >
              <div class="w-1.5 h-1.5 bg-nc-primary rounded-full"></div>
              <span class="text-xs text-nc-foreground/70">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 响应式优化 */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 90rem;
  }
}

/* 代码块样式 */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-opacity,
  .transition-transform {
    transition: none;
  }
}
</style>
