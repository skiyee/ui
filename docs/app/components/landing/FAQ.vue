<script setup lang="ts">
// FAQ 数据
const faqs = ref([
  {
    question: 'skiyee/ui 与其他 UI 库有什么区别？',
    answer: 'skiyee/ui 专注于移动端场景，基于原子化 CSS 设计，提供了传统 UI 库的便利性和 Headless UI 的灵活性的完美平衡。我们特别优化了移动端的交互体验，并提供了 AI 友好的架构设计。',
    category: 'general'
  },
  {
    question: '是否支持 TypeScript？',
    answer: '完全支持！skiyee/ui 使用 TypeScript 编写，提供完整的类型定义。你可以享受到智能提示、类型检查和自动补全等开发体验。',
    category: 'technical'
  },
  {
    question: '如何自定义主题？',
    answer: 'skiyee/ui 提供了强大的主题系统。你可以通过配置文件定义颜色、字体、间距等设计 token，也可以使用 CSS 变量进行运行时主题切换。我们还提供了在线主题编辑器。',
    category: 'customization'
  },
  {
    question: '支持哪些框架？',
    answer: '目前主要支持 Vue 3，我们正在开发 React 和 Angular 版本。同时提供了 Nuxt、Vite 等构建工具的专用插件。',
    category: 'technical'
  },
  {
    question: '组件库的体积如何？',
    answer: 'skiyee/ui 采用按需加载设计，只有使用的组件才会被打包。核心运行时小于 10KB gzipped，单个组件平均 2-5KB。',
    category: 'performance'
  },
  {
    question: '是否有设计系统支持？',
    answer: '是的！我们提供了完整的设计系统，包括 Figma 设计文件、设计 token、组件规范等。设计师和开发者可以无缝协作。',
    category: 'design'
  },
  {
    question: '如何贡献代码？',
    answer: '我们欢迎任何形式的贡献！你可以提交 Issue、Pull Request，或者参与讨论。请查看我们的贡献指南了解详细流程。',
    category: 'community'
  },
  {
    question: '有商业支持吗？',
    answer: 'skiyee/ui 是开源项目，免费使用。我们也提供商业技术支持、定制开发、培训等服务。如有需要请联系我们。',
    category: 'business'
  }
])

// FAQ 分类
const categories = ref([
  { key: 'all', label: '全部', icon: 'i-lucide:list' },
  { key: 'general', label: '常规', icon: 'i-lucide:help-circle' },
  { key: 'technical', label: '技术', icon: 'i-lucide:code' },
  { key: 'customization', label: '定制', icon: 'i-lucide:palette' },
  { key: 'performance', label: '性能', icon: 'i-lucide:zap' },
  { key: 'design', label: '设计', icon: 'i-lucide:paintbrush' },
  { key: 'community', label: '社区', icon: 'i-lucide:users' },
  { key: 'business', label: '商业', icon: 'i-lucide:briefcase' }
])

const activeCategory = ref('all')
const openFAQ = ref<number | null>(null)
const isVisible = ref(false)

// 过滤 FAQ
const filteredFAQs = computed(() => {
  if (activeCategory.value === 'all') {
    return faqs.value
  }
  return faqs.value.filter(faq => faq.category === activeCategory.value)
})

// 切换 FAQ
const toggleFAQ = (index: number) => {
  openFAQ.value = openFAQ.value === index ? null : index
}

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
        <Icon name="i-lucide:help-circle" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">FAQ</span>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        常见问题
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        快速找到你关心的问题答案，如果没有找到，欢迎联系我们
      </p>
    </div>

    <!-- 分类筛选 -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button 
        v-for="category in categories" 
        :key="category.key"
        class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
        :class="[
          activeCategory === category.key 
            ? 'bg-nc-primary text-nc-primary-foreground' 
            : 'bg-nc-card/50 text-nc-foreground/70 hover:bg-nc-card border border-nc-border/50 hover:border-nc-primary/30'
        ]"
        @click="activeCategory = category.key"
      >
        <Icon :name="category.icon" class="w-4 h-4" />
        {{ category.label }}
      </button>
    </div>

    <!-- FAQ 列表 -->
    <div class="max-w-4xl mx-auto">
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in filteredFAQs" 
          :key="index"
          class="group bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl overflow-hidden hover:border-nc-primary/30 transition-all duration-300"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          ]"
          :style="{ transitionDelay: `${index * 50}ms` }"
        >
          <!-- 问题 -->
          <button 
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-nc-muted/20 transition-colors duration-200"
            @click="toggleFAQ(index)"
          >
            <h3 class="text-lg font-semibold text-nc-foreground pr-4">
              {{ faq.question }}
            </h3>
            <Icon 
              name="i-lucide:chevron-down" 
              class="w-5 h-5 text-nc-foreground/60 transition-transform duration-300 flex-shrink-0"
              :class="openFAQ === index ? 'rotate-180' : ''"
            />
          </button>
          
          <!-- 答案 -->
          <div 
            class="overflow-hidden transition-all duration-300"
            :class="openFAQ === index ? 'max-h-96' : 'max-h-0'"
          >
            <div class="px-6 pb-4 border-t border-nc-border/30">
              <p class="text-nc-foreground/80 leading-relaxed pt-4">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="mt-16 text-center">
      <div class="inline-flex flex-col sm:flex-row items-center gap-4 bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6">
        <div class="text-center sm:text-left">
          <h3 class="text-xl font-bold text-nc-foreground mb-1">
            没有找到答案？
          </h3>
          <p class="text-sm text-nc-foreground/70">
            我们很乐意为你解答任何问题
          </p>
        </div>
        
        <div class="flex gap-3">
          <NuxtLink to="https://github.com/skiyee/ui/discussions" target="_blank">
            <button class="px-6 py-3 bg-nc-primary text-nc-primary-foreground rounded-xl font-medium hover:bg-nc-primary/90 transition-colors flex items-center gap-2">
              <Icon name="i-lucide:message-circle" class="w-4 h-4" />
              社区讨论
            </button>
          </NuxtLink>
          
          <NuxtLink to="https://github.com/skiyee/ui/issues" target="_blank">
            <button class="px-6 py-3 border border-nc-border rounded-xl font-medium hover:border-nc-primary/30 transition-colors flex items-center gap-2">
              <Icon name="i-lucide:github" class="w-4 h-4" />
              提交问题
            </button>
          </NuxtLink>
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

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-opacity,
  .transition-transform,
  .transition-colors {
    transition: none;
  }
}
</style>
