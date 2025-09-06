<script setup lang="ts">
// 贡献方式
const contributionWays = ref([
  {
    title: '提出功能需求',
    description: '分享你的想法和改进建议',
    icon: 'i-lucide:lightbulb',
    iconClass: 'text-orange-500',
    iconBgClass: 'bg-orange-500/10',
    bgClass: 'from-orange-500/20 to-orange-600/10',
    btnClass: 'text-orange-500 hover:text-orange-600',
    action: '提交 Feature Request'
  },
  {
    title: '反馈使用问题',
    description: '帮助我们发现和修复问题',
    icon: 'i-lucide:bug',
    iconClass: 'text-red-500',
    iconBgClass: 'bg-red-500/10',
    bgClass: 'from-red-500/20 to-red-600/10',
    btnClass: 'text-red-500 hover:text-red-600',
    action: '报告 Bug'
  },
  {
    title: '分享优秀案例',
    description: '展示基于 skiyee/ui 的实践',
    icon: 'i-lucide:share',
    iconClass: 'text-blue-500',
    iconBgClass: 'bg-blue-500/10',
    bgClass: 'from-blue-500/20 to-blue-600/10',
    btnClass: 'text-blue-500 hover:text-blue-600',
    action: '分享案例'
  },
  {
    title: '贡献代码',
    description: '直接参与项目开发',
    icon: 'i-lucide:code',
    iconClass: 'text-green-500',
    iconBgClass: 'bg-green-500/10',
    bgClass: 'from-green-500/20 to-green-600/10',
    btnClass: 'text-green-500 hover:text-green-600',
    action: '提交 PR'
  },
  {
    title: '完善文档',
    description: '帮助改进文档和示例',
    icon: 'i-lucide:book',
    iconClass: 'text-purple-500',
    iconBgClass: 'bg-purple-500/10',
    bgClass: 'from-purple-500/20 to-purple-600/10',
    btnClass: 'text-purple-500 hover:text-purple-600',
    action: '编辑文档'
  },
  {
    title: '社区支持',
    description: '在社区中帮助其他开发者',
    icon: 'i-lucide:users',
    iconClass: 'text-sky-500',
    iconBgClass: 'bg-nc-muted/50',
    bgClass: 'from-sky-500/20 to-sky-600/10',
    btnClass: 'text-sky-500 hover:text-sky-600',
    action: '参与讨论'
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
        <Icon name="i-lucide:heart" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">CONTRIBUTION</span>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        共建开源生态
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        每一个项目的发展离不开社区的参与和支持。我们诚挚地邀请每一位开发者共同参与到项目的演进中来
      </p>
    </div>

    <!-- 贡献方式网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <div v-for="(way, index) in contributionWays" :key="way.title"
        class="group relative bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 hover:border-nc-primary/30 transition-all duration-300"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]" :style="{ transitionDelay: `${index * 100}ms` }">
        <!-- 背景渐变 -->
        <div
          class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
          :class="way.bgClass" />

        <div class="relative z-10">
          <!-- 图标 -->
          <div class="size-14 mb-4 rounded-xl flex items-center justify-center bg-nc-muted/50">
            <Icon :name="way.icon" class="text-lg" :class="way.iconClass" />
          </div>

          <!-- 标题和描述 -->
          <h3 class="text-lg font-semibold text-nc-foreground mb-2">
            {{ way.title }}
          </h3>
          <p class="text-sm text-nc-foreground/70 mb-4 leading-relaxed">
            {{ way.description }}
          </p>

          <!-- 行动按钮 -->
          <button class="text-sm font-medium transition-colors duration-200"
            :class="way.btnClass">
            {{ way.action }} →
          </button>
        </div>
      </div>
    </div>

    <!-- 行动号召 -->
    <div class="text-center">
      <div class="w-full relative inline-block">
        <!-- 背景光晕 -->
        <!-- <div class="absolute inset-0 bg-gradient-to-r from-nc-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-50" /> -->
        <div
          class="relative bg-nc-card/80 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-8 hover:border-nc-primary/50 transition-all duration-500">
          <!-- 装饰性元素 -->
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="size-4 bg-gradient-to-r from-nc-primary to-purple-500 rounded-full animate-pulse" />
          </div>

          <div class="flex flex-col md:flex-row items-center gap-6">
            <!-- 文字区域 -->
            <div class="text-center md:text-left flex-1">
              <h3 class="text-2xl md:text-3xl font-bold text-nc-foreground mb-2">
                想参与贡献吗？
              </h3>
              <p class="text-nc-foreground/70 mb-4">
                加入我们的开源社区，与全球开发者一起构建更好的 UI 生态
              </p>

              <!-- 统计数据 -->
              <div class="flex justify-center md:justify-start gap-6 text-sm">
                <div class="text-center">
                  <div class="text-lg font-bold text-nc-primary">156</div>
                  <div class="text-nc-foreground/60">贡献者</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-green-500">1.2K</div>
                  <div class="text-nc-foreground/60">Stars</div>
                </div>
                <div class="text-center">
                  <div class="text-lg font-bold text-purple-500">89</div>
                  <div class="text-nc-foreground/60">PR</div>
                </div>
              </div>
            </div>

            <!-- 按钮区域 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="https://github.com/skiyee/ui" target="_blank">
                <AmShimmerButton shimmer-size="2px" background="var(--primary)" class="px-8 py-4">
                  <span class="text-base font-semibold text-white flex items-center gap-2">
                    <Icon name="i-lucide:github" class="w-5 h-5" />
                    参与贡献
                  </span>
                </AmShimmerButton>
              </NuxtLink>

              <NuxtLink to="https://github.com/skiyee/ui/blob/main/CONTRIBUTING.md" target="_blank">
                <button
                  class="px-8 py-4 bg-nc-card/50 border border-nc-border/50 rounded-2xl text-nc-foreground hover:border-nc-primary/30 transition-all duration-300">
                  <span class="text-base font-medium flex items-center gap-2">
                    <Icon name="i-lucide:book-open" class="w-5 h-5" />
                    贡献指南
                  </span>
                </button>
              </NuxtLink>
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
</style>
