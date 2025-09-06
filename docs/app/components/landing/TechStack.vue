<script setup lang="ts">
// 技术栈数据
const techStack = ref([
  {
    name: 'Vue 3',
    description: '现代化的渐进式框架',
    icon: 'i-logos:vue',
    category: 'framework',
    color: 'from-green-400 to-green-600'
  },
  {
    name: 'TypeScript',
    description: '类型安全的JavaScript',
    icon: 'i-logos:typescript-icon',
    category: 'language',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'UnoCSS',
    description: '即时原子化CSS引擎',
    icon: 'i-logos:unocss',
    category: 'styling',
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Vite',
    description: '极速的构建工具',
    icon: 'i-logos:vitejs',
    category: 'build',
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Nuxt',
    description: '全栈Vue框架',
    icon: 'i-logos:nuxt-icon',
    category: 'framework',
    color: 'from-green-400 to-teal-600'
  },
  {
    name: 'Vitest',
    description: '现代化测试框架',
    icon: 'i-logos:vitest',
    category: 'testing',
    color: 'from-yellow-400 to-orange-600'
  }
])

// 特性亮点
const highlights = ref([
  {
    title: '零配置',
    description: '开箱即用，无需复杂配置',
    icon: 'i-lucide:zap',
    metric: '0 Config'
  },
  {
    title: '轻量级',
    description: '极小的包体积，极快的加载速度',
    icon: 'i-lucide:feather',
    metric: '<50KB'
  },
  {
    title: '高性能',
    description: '优化的渲染性能和运行时',
    icon: 'i-lucide:gauge',
    metric: '99+ Score'
  },
  {
    title: '现代化',
    description: '基于最新的Web标准构建',
    icon: 'i-lucide:sparkles',
    metric: 'ES2022+'
  }
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- 标题区域 -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 bg-nc-muted/50 rounded-full px-4 py-2 mb-6">
        <Icon name="i-lucide:cpu" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">TECH STACK</span>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        现代化技术栈
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        基于业界最佳实践，选用经过验证的现代化技术构建
      </p>
    </div>

    <!-- 技术栈网格 -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
      <div
        v-for="(tech, index) in techStack"
        :key="tech.name"
        class="group relative bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 text-center hover:border-nc-primary/30 transition-all duration-500"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <!-- 背景渐变 -->
        <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" 
             :class="tech.color" />
        
        <div class="relative z-10">
          <!-- 图标 -->
          <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
            <Icon :name="tech.icon" class="w-10 h-10" />
          </div>
          
          <!-- 名称 -->
          <h3 class="text-lg font-semibold text-nc-foreground mb-2">
            {{ tech.name }}
          </h3>
          
          <!-- 描述 -->
          <p class="text-xs text-nc-foreground/60 leading-relaxed">
            {{ tech.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 特性亮点 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="(highlight, index) in highlights" 
        :key="highlight.title"
        class="group relative bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 hover:border-nc-primary/30 transition-all duration-300"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
        :style="{ transitionDelay: `${(index + 6) * 100}ms` }"
      >
        <!-- 背景效果 -->
        <div class="absolute inset-0 bg-gradient-to-br from-nc-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div class="relative z-10">
          <!-- 图标和指标 -->
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 bg-nc-primary/10 rounded-xl flex items-center justify-center">
              <Icon :name="highlight.icon" class="w-5 h-5 text-nc-primary" />
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-nc-primary">{{ highlight.metric }}</div>
            </div>
          </div>
          
          <!-- 标题和描述 -->
          <h3 class="text-lg font-semibold text-nc-foreground mb-2">
            {{ highlight.title }}
          </h3>
          <p class="text-sm text-nc-foreground/70 leading-relaxed">
            {{ highlight.description }}
          </p>
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

/* 悬停效果 */
.group:hover .group-hover\:bg-opacity-10 {
  opacity: 0.1;
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
