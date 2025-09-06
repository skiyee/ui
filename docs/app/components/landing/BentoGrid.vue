<script setup lang="ts">
// 数据统计
const stats = ref([
  {
    value: '50+',
    label: 'Components',
    description: '精心设计的组件',
    colorClass: 'text-blue-500',
    bgClass: 'from-blue-500/10 to-blue-600/5',
  },
  {
    value: '99%',
    label: 'TypeScript',
    description: '类型安全保障',
    colorClass: 'text-purple-500',
    bgClass: 'from-purple-500/10 to-purple-600/5',
  },
  {
    value: '0',
    label: 'Dependencies',
    description: '零外部依赖',
    colorClass: 'text-green-500',
    bgClass: 'from-green-500/10 to-green-600/5',
  },
  {
    value: '100%',
    label: 'Customizable',
    description: '完全可定制',
    colorClass: 'text-orange-500',
    bgClass: 'from-orange-500/10 to-orange-600/5',
  },
])

// 特性数据
const features = ref([
  {
    title: '原子化CSS驱动',
    subtitle: 'Atomic CSS Powered',
    description: '基于 UnoCSS 构建，提供无限的样式可能性',
    icon: 'i-lucide:atom',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconBgClass: 'from-blue-500/20 to-blue-600/10',
    iconColorClass: 'text-blue-500',
    progressClass: 'from-blue-400 to-blue-600',
    dotClass: 'bg-blue-500',
  },
  {
    title: '符合直觉设计',
    subtitle: 'Intuitive Design',
    description: '遵循人机交互原理，降低学习成本',
    icon: 'i-lucide:brain',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconBgClass: 'from-purple-500/20 to-purple-600/10',
    iconColorClass: 'text-purple-500',
    progressClass: 'from-purple-400 to-purple-600',
    dotClass: 'bg-purple-500',
  },
  {
    title: '高度定制化',
    subtitle: 'Highly Customizable',
    description: '灵活的主题系统，满足个性化需求',
    icon: 'i-lucide:palette',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconBgClass: 'from-orange-500/20 to-orange-600/10',
    iconColorClass: 'text-orange-500',
    progressClass: 'from-orange-400 to-orange-600',
    dotClass: 'bg-orange-500',
  },
  {
    title: '面向AI时代',
    subtitle: 'AI-First Era',
    description: 'AI友好的架构设计，完美适配代码生成',
    icon: 'i-lucide:bot',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconBgClass: 'from-green-500/20 to-green-600/10',
    iconColorClass: 'text-green-500',
    progressClass: 'from-green-400 to-green-600',
    dotClass: 'bg-green-500',
  },
])

// 性能数据
const performanceData = ref([
  { label: '构建速度', value: 85, colorClass: 'text-blue-500', gradientClass: 'from-blue-400 to-blue-600' },
  { label: '包体积', value: 92, colorClass: 'text-green-500', gradientClass: 'from-green-400 to-green-600' },
  { label: '运行性能', value: 88, colorClass: 'text-purple-500', gradientClass: 'from-purple-400 to-purple-600' },
  { label: '开发体验', value: 95, colorClass: 'text-orange-500', gradientClass: 'from-orange-400 to-orange-600' },
])

// 动画控制
const isVisible = ref(false)
const animatedStats = ref(stats.value.map(() => ({ current: 0, target: 0 })))

// 数字动画
const animateNumber = (target: string, index: number) => {
  const numericValue = Number.parseInt(target.replace(/\D/g, '')) || 0
  animatedStats.value[index].target = numericValue

  const duration = 2000
  const steps = 60
  const increment = numericValue / steps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= numericValue) {
      current = numericValue
      clearInterval(timer)
    }
    animatedStats.value[index].current = Math.floor(current)
  }, duration / steps)
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
    // 启动数字动画
    stats.value.forEach((stat, index) => {
      setTimeout(() => {
        animateNumber(stat.value, index)
      }, index * 200)
    })
  }, 100)
})
</script>

<template>
  <section class="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-nc-primary/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </div>

    <!-- 标题区域 -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-nc-foreground mb-4">
        为什么选择
        <span class="bg-gradient-to-r from-nc-primary to-purple-600 bg-clip-text text-transparent">
          skiyee/ui
        </span>
      </h2>
      <p class="text-lg md:text-xl text-nc-foreground/70 max-w-2xl mx-auto">
        传统便利性与原子化灵活性的完美平衡
      </p>
    </div>

    <!-- Bento Grid 布局 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <!-- 统计数据卡片 -->
      <div
        v-for="(stat, index) in stats"
        :key="stat.label"
        class="group relative bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 hover:border-nc-primary/30 transition-all duration-500 hover:scale-105 overflow-hidden transition-delay-100ms"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <!-- 背景渐变 -->
        <div :class="`absolute inset-0 bg-gradient-to-br ${stat.bgClass} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`" />

        <!-- 装饰性线条 -->
        <div class="absolute top-0 right-0 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" class="w-full h-full">
            <defs>
              <linearGradient :id="`grad-${index}`" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop v-if="index === 0" offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
                <stop v-else-if="index === 1" offset="0%" stop-color="#a855f7" stop-opacity="0.3" />
                <stop v-else-if="index === 2" offset="0%" stop-color="#22c55e" stop-opacity="0.3" />
                <stop v-else offset="0%" stop-color="#f97316" stop-opacity="0.3" />

                <stop v-if="index === 0" offset="100%" stop-color="#2563eb" stop-opacity="0.1" />
                <stop v-else-if="index === 1" offset="100%" stop-color="#9333ea" stop-opacity="0.1" />
                <stop v-else-if="index === 2" offset="100%" stop-color="#16a34a" stop-opacity="0.1" />
                <stop v-else offset="100%" stop-color="#ea580c" stop-opacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" :fill="`url(#grad-${index})`" />
          </svg>
        </div>

        <div class="relative z-10">
          <!-- 超大数字显示 -->
          <div class="flex items-baseline gap-1 mb-3">
            <span class="text-5xl md:text-6xl font-black leading-none" :class="stat.colorClass">
              {{ stat.value.includes('%') ? animatedStats[index]?.current : stat.value.replace(/\d+/, animatedStats[index]?.current.toString() || '') }}
            </span>
            <span v-if="stat.value.includes('%')" class="text-3xl font-bold" :class="stat.colorClass">%</span>
            <span v-if="stat.value.includes('+')" class="text-3xl font-bold" :class="stat.colorClass">+</span>
          </div>

          <!-- 标签和描述 -->
          <div class="space-y-1">
            <div class="text-sm font-bold text-nc-foreground/90 uppercase tracking-wider">
              {{ stat.label }}
            </div>
            <div class="text-xs text-nc-foreground/60 leading-relaxed">
              {{ stat.description }}
            </div>
          </div>

          <!-- 进度指示器 -->
          <div class="mt-4 h-1 bg-nc-border/30 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r transition-all duration-1000 ease-out"
              :class="stat.bgClass"
              :style="{ width: isVisible ? '100%' : '0%', transitionDelay: `${index * 200 + 500}ms` }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 特性展示区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 左侧大卡片 - 性能展示 -->
      <div
        class="lg:row-span-2 bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-3xl p-8 relative overflow-hidden group hover:border-nc-primary/30 transition-all duration-500"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- 动态背景 -->
        <div class="absolute inset-0 bg-gradient-to-br from-nc-primary/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <!-- 装饰性网格 -->
        <div class="absolute inset-0 opacity-5">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div class="relative z-10 h-full flex flex-col">
          <!-- 标题区域 -->
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-nc-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="i-lucide:zap" class="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 class="text-3xl font-black text-nc-foreground">
                性能表现
              </h3>
              <p class="text-sm text-nc-foreground/60 font-mono">
                Performance Metrics
              </p>
            </div>
          </div>

          <!-- 超大数字展示 -->
          <div class="mb-8">
            <div class="text-8xl md:text-9xl font-black bg-gradient-to-r from-nc-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-none">
              95
            </div>
            <div class="text-lg font-bold text-nc-foreground/80 mt-2">
              综合评分 <span class="text-sm font-mono text-nc-foreground/60">Overall Score</span>
            </div>
          </div>

          <!-- 性能指标 -->
          <div class="space-y-6 flex-1">
            <div
              v-for="(metric, index) in performanceData"
              :key="metric.label"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-nc-foreground/90">{{ metric.label }}</span>
                <span class="text-sm font-bold" :class="metric.colorClass">{{ metric.value }}%</span>
              </div>

              <!-- 进度条 -->
              <div class="h-2 bg-nc-border/20 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r transition-all duration-1000 ease-out"
                  :class="metric.gradientClass"
                  :style="{
                    width: isVisible ? `${metric.value}%` : '0%',
                    transitionDelay: `${index * 150 + 800}ms`,
                  }"
                />
              </div>
            </div>
          </div>

          <!-- 底部特性列表 -->
          <div class="space-y-3 mt-6 pt-6 border-t border-nc-border/20">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span class="text-sm text-nc-foreground/80">开箱即用的便捷性</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.5s" />
              <span class="text-sm text-nc-foreground/80">强大的定制化能力</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style="animation-delay: 1s" />
              <span class="text-sm text-nc-foreground/80">显著提升开发速度</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧特性卡片 -->
      <div class="space-y-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 relative overflow-hidden group hover:border-nc-primary/30 transition-all duration-500 hover:scale-105"
          :class="[
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
            `transition-delay-[${(index + 4) * 100}ms]`,
          ]"
        >
          <!-- 动态背景渐变 -->
          <div :class="`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`" />

          <!-- 装饰性图形 -->
          <div class="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <svg viewBox="0 0 64 64" class="w-full h-full">
              <defs>
                <linearGradient :id="`feature-grad-${index}`" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop v-if="index === 0" offset="0%" stop-color="#60a5fa" stop-opacity="0.6" />
                  <stop v-else-if="index === 1" offset="0%" stop-color="#c084fc" stop-opacity="0.6" />
                  <stop v-else-if="index === 2" offset="0%" stop-color="#fb923c" stop-opacity="0.6" />
                  <stop v-else offset="0%" stop-color="#4ade80" stop-opacity="0.6" />

                  <stop v-if="index === 0" offset="100%" stop-color="#2563eb" stop-opacity="0.2" />
                  <stop v-else-if="index === 1" offset="100%" stop-color="#9333ea" stop-opacity="0.2" />
                  <stop v-else-if="index === 2" offset="100%" stop-color="#ea580c" stop-opacity="0.2" />
                  <stop v-else offset="100%" stop-color="#16a34a" stop-opacity="0.2" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="28" :fill="`url(#feature-grad-${index})`" />
              <circle cx="32" cy="32" r="20" fill="none" :stroke="`url(#feature-grad-${index})`" stroke-width="2" opacity="0.5" />
              <circle cx="32" cy="32" r="12" fill="none" :stroke="`url(#feature-grad-${index})`" stroke-width="1" opacity="0.3" />
            </svg>
          </div>

          <div class="relative z-10">
            <!-- 图标和标题区域 -->
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-14 h-14 bg-gradient-to-br rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                :class="feature.iconBgClass"
              >
                <Icon :name="feature.icon" class="w-7 h-7" :class="feature.iconColorClass" />
              </div>

              <div class="flex-1 min-w-0">
                <h4 class="text-xl font-bold text-nc-foreground mb-1 group-hover:text-nc-primary transition-colors duration-300">
                  {{ feature.title }}
                </h4>
                <p class="text-xs text-nc-foreground/50 font-mono uppercase tracking-wider">
                  {{ feature.subtitle }}
                </p>
              </div>
            </div>

            <!-- 描述文本 -->
            <p class="text-sm text-nc-foreground/70 leading-relaxed mb-4">
              {{ feature.description }}
            </p>

            <!-- 进度指示器 -->
            <div class="flex items-center gap-2">
              <div class="flex-1 h-1 bg-nc-border/20 rounded-full overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r transition-all duration-1000 ease-out"
                  :class="feature.progressClass"
                  :style="{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${(index + 4) * 200 + 600}ms`,
                  }"
                />
              </div>
              <div
                class="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :class="feature.dotClass"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部行动号召 -->
    <div class="text-center mt-20">
      <div
        class="relative inline-block"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 1000ms"
      >
        <!-- 背景光晕效果 -->
        <div class="absolute inset-0 bg-gradient-to-r from-nc-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl scale-110 opacity-50" />

        <div class="relative bg-nc-card/80 backdrop-blur-sm border border-nc-border/50 rounded-3xl p-8 hover:border-nc-primary/50 transition-all duration-500 group">
          <!-- 装饰性元素 -->
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="w-4 h-4 bg-gradient-to-r from-nc-primary to-purple-500 rounded-full animate-pulse" />
          </div>

          <div class="flex flex-col md:flex-row items-center gap-6">
            <!-- 文字区域 -->
            <div class="text-center md:text-left">
              <h3 class="text-3xl md:text-4xl font-black text-nc-foreground mb-2">
                准备开始了吗？
              </h3>
              <p class="text-sm text-nc-foreground/60 font-mono uppercase tracking-wider">
                Ready to Get Started?
              </p>
              <p class="text-nc-foreground/70 mt-2 max-w-md">
                加入我们，体验下一代移动端 UI 开发的魅力
              </p>
            </div>

            <!-- 按钮区域 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/docs/guide/introduction">
                <AmShimmerButton
                  shimmer-size="2px"
                  background="var(--nc-primary)"
                  class="px-8 py-4 group-hover:scale-105 transition-transform duration-300"
                >
                  <span class="text-base font-semibold text-white flex items-center gap-2">
                    <Icon name="i-lucide:rocket" class="w-5 h-5" />
                    立即开始
                  </span>
                </AmShimmerButton>
              </NuxtLink>

              <NuxtLink to="/docs/components/basic/button">
                <button class="px-8 py-4 bg-nc-card/50 border border-nc-border/50 rounded-2xl text-nc-foreground hover:border-nc-primary/30 transition-all duration-300 group-hover:scale-105">
                  <span class="text-base font-medium flex items-center gap-2">
                    <Icon name="i-lucide:layers" class="w-5 h-5" />
                    查看组件
                  </span>
                </button>
              </NuxtLink>
            </div>
          </div>

          <!-- 底部统计 -->
          <div class="flex justify-center gap-8 mt-6 pt-6 border-t border-nc-border/20">
            <div class="text-center">
              <div class="text-2xl font-bold text-nc-primary">
                50+
              </div>
              <div class="text-xs text-nc-foreground/60">
                组件
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-500">
                100%
              </div>
              <div class="text-xs text-nc-foreground/60">
                定制化
              </div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-500">
                0
              </div>
              <div class="text-xs text-nc-foreground/60">
                依赖
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 自定义动画延迟 */
.transition-delay-\[0ms\] { transition-delay: 0ms; }
.transition-delay-\[100ms\] { transition-delay: 100ms; }
.transition-delay-\[200ms\] { transition-delay: 200ms; }
.transition-delay-\[300ms\] { transition-delay: 300ms; }
.transition-delay-\[400ms\] { transition-delay: 400ms; }
.transition-delay-\[500ms\] { transition-delay: 500ms; }
.transition-delay-\[600ms\] { transition-delay: 600ms; }
.transition-delay-\[700ms\] { transition-delay: 700ms; }
.transition-delay-\[800ms\] { transition-delay: 800ms; }

/* 脉冲动画增强 */
@keyframes enhanced-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-pulse {
  animation: enhanced-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 渐变文字效果 */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* 毛玻璃效果增强 */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* 响应式优化 */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 90rem;
  }

  /* 超大屏幕下的字体调整 */
  .text-8xl {
    font-size: 8rem;
  }

  .text-9xl {
    font-size: 10rem;
  }
}

@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 120rem;
  }
}

/* 移动端优化 */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }

  .text-6xl {
    font-size: 3rem;
  }

  .text-8xl {
    font-size: 4rem;
  }

  .text-9xl {
    font-size: 5rem;
  }
}

/* 高对比度模式支持 */
@media (prefers-contrast: high) {
  .bg-nc-card\/50 {
    background-color: var(--nc-card);
  }

  .border-nc-border\/50 {
    border-color: var(--nc-border);
  }
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-opacity,
  .transition-transform,
  .transition-colors {
    transition: none;
  }

  .animate-pulse {
    animation: none;
  }
}

/* 深色模式优化 */
.dark .bg-gradient-to-br {
  opacity: 0.8;
}

.dark .backdrop-blur-sm {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
