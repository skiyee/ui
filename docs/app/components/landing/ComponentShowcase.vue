<script setup lang="ts">
// 组件分类
const componentCategories = ref([
  {
    name: '基础组件',
    description: 'Basic Components',
    icon: 'i-lucide:square',
    count: 12,
    color: 'blue',
    components: ['Button', 'Input', 'Card', 'Badge'],
  },
  {
    name: '表单组件',
    description: 'Form Components',
    icon: 'i-lucide:edit',
    count: 8,
    color: 'green',
    components: ['Form', 'Select', 'Checkbox', 'Radio'],
  },
  {
    name: '反馈组件',
    description: 'Feedback Components',
    icon: 'i-lucide:message-circle',
    count: 6,
    color: 'orange',
    components: ['Toast', 'Modal', 'Alert', 'Loading'],
  },
  {
    name: '导航组件',
    description: 'Navigation Components',
    icon: 'i-lucide:navigation',
    count: 5,
    color: 'purple',
    components: ['Menu', 'Tabs', 'Breadcrumb', 'Pagination'],
  },
])

// 特色功能
const features = ref([
  {
    title: '主题定制',
    description: '支持深度主题定制，满足品牌需求',
    icon: 'i-lucide:palette',
    demo: 'theme',
  },
  {
    title: '响应式设计',
    description: '完美适配各种屏幕尺寸',
    icon: 'i-lucide:smartphone',
    demo: 'responsive',
  },
  {
    title: '无障碍支持',
    description: '遵循WCAG标准，支持键盘导航',
    icon: 'i-lucide:accessibility',
    demo: 'a11y',
  },
  {
    title: '国际化',
    description: '内置多语言支持',
    icon: 'i-lucide:globe',
    demo: 'i18n',
  },
])

const activeCategory = ref(0)
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
        <Icon name="i-lucide:layers" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">COMPONENTS</span>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        丰富的组件库
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        50+ 精心设计的组件，覆盖移动端开发的各种场景
      </p>
    </div>

    <!-- 组件分类 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div
        v-for="(category, index) in componentCategories"
        :key="category.name"
        class="group relative bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 cursor-pointer hover:border-nc-primary/30 transition-all duration-300"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          activeCategory === index ? 'border-nc-primary/50 bg-nc-primary/5' : '',
        ]"
        :style="{ transitionDelay: `${index * 100}ms` }"
        @click="activeCategory = index"
      >
        <!-- 背景效果 -->
        <div
          class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
          :class="`from-${category.color}-500/20 to-${category.color}-600/10`"
        />

        <div class="relative z-10">
          <!-- 图标和数量 -->
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center"
              :class="`bg-${category.color}-500/10`"
            >
              <Icon :name="category.icon" class="w-6 h-6" :class="`text-${category.color}-500`" />
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold" :class="`text-${category.color}-500`">
                {{ category.count }}
              </div>
              <div class="text-xs text-nc-foreground/60">
                组件
              </div>
            </div>
          </div>

          <!-- 标题和描述 -->
          <h3 class="text-lg font-semibold text-nc-foreground mb-1">
            {{ category.name }}
          </h3>
          <p class="text-xs text-nc-foreground/60 mb-3 font-mono">
            {{ category.description }}
          </p>

          <!-- 组件列表 -->
          <div class="flex flex-wrap gap-1">
            <span
              v-for="component in category.components"
              :key="component"
              class="text-xs px-2 py-1 rounded-md bg-nc-muted/50 text-nc-foreground/70"
            >
              {{ component }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 特色功能展示 -->
    <div class="bg-nc-card/30 backdrop-blur-sm border border-nc-border/50 rounded-3xl p-8 mb-16">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-nc-foreground mb-2">
          特色功能
        </h3>
        <p class="text-nc-foreground/70">
          不仅仅是组件，更是完整的解决方案
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group text-center p-6 rounded-2xl hover:bg-nc-card/50 transition-all duration-300"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          :style="{ transitionDelay: `${(index + 4) * 100}ms` }"
        >
          <!-- 图标 -->
          <div class="w-16 h-16 mx-auto mb-4 bg-nc-primary/10 rounded-2xl flex items-center justify-center transition-colors duration-300">
            <Icon :name="feature.icon" class="w-8 h-8 text-nc-primary" />
          </div>

          <!-- 标题和描述 -->
          <h4 class="text-lg font-semibold text-nc-foreground mb-2">
            {{ feature.title }}
          </h4>
          <p class="text-sm text-nc-foreground/70 leading-relaxed">
            {{ feature.description }}
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
</style>
