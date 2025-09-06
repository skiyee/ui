<script setup lang="ts">
// 社区统计数据
const stats = ref([
  {
    value: '1.2K',
    label: 'GitHub Stars',
    description: '开发者的认可',
    icon: 'i-lucide:star',
    color: 'yellow',
    trend: '+12%'
  },
  {
    value: '156',
    label: 'Contributors',
    description: '活跃的贡献者',
    icon: 'i-lucide:users',
    color: 'blue',
    trend: '+8%'
  },
  {
    value: '2.8K',
    label: 'Downloads',
    description: '每周下载量',
    icon: 'i-lucide:download',
    color: 'green',
    trend: '+25%'
  },
  {
    value: '98%',
    label: 'Satisfaction',
    description: '用户满意度',
    icon: 'i-lucide:heart',
    color: 'red',
    trend: '+2%'
  }
])

// 社区活动
const activities = ref([
  {
    type: 'release',
    title: '发布 v2.1.0',
    description: '新增 5 个组件，修复 12 个问题',
    time: '2 小时前',
    icon: 'i-lucide:package',
    color: 'blue'
  },
  {
    type: 'pr',
    title: '合并 PR #234',
    description: '优化 Button 组件的无障碍支持',
    time: '5 小时前',
    icon: 'i-lucide:git-merge',
    color: 'green'
  },
  {
    type: 'issue',
    title: '修复 Issue #189',
    description: '解决 Form 组件在 Safari 的兼容性问题',
    time: '1 天前',
    icon: 'i-lucide:bug',
    color: 'orange'
  },
  {
    type: 'discussion',
    title: '社区讨论',
    description: '关于新组件 DatePicker 的设计方案',
    time: '2 天前',
    icon: 'i-lucide:message-circle',
    color: 'purple'
  }
])

// 贡献者头像（模拟数据）
const contributors = ref([
  { name: 'skiyee', avatar: 'https://github.com/skiyee.png' },
  { name: 'contributor1', avatar: 'https://github.com/github.png' },
  { name: 'contributor2', avatar: 'https://github.com/github.png' },
  { name: 'contributor3', avatar: 'https://github.com/github.png' },
  { name: 'contributor4', avatar: 'https://github.com/github.png' }
])

const isVisible = ref(false)
const animatedStats = ref(stats.value.map(() => ({ current: 0 })))

// 数字动画
const animateNumber = (target: string, index: number) => {
  const numericValue = parseFloat(target.replace(/[^\d.]/g, '')) || 0
  
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
    if (animatedStats.value[index]) {
      animatedStats.value[index].current = current
    }
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
  <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- 标题区域 -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 bg-nc-muted/50 rounded-full px-4 py-2 mb-6">
        <Icon name="i-lucide:trending-up" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">COMMUNITY</span>
      </div>
      
      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        活跃的开源社区
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        与全球开发者一起构建更好的移动端 UI 生态
      </p>
    </div>

    <!-- 统计数据 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div 
        v-for="(stat, index) in stats" 
        :key="stat.label"
        class="group relative bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6 text-center hover:border-nc-primary/30 transition-all duration-300"
        :class="[
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <!-- 背景渐变 -->
        <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
             :class="`from-${stat.color}-500/20 to-${stat.color}-600/10`" />
        
        <div class="relative z-10">
          <!-- 图标 -->
          <div class="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
               :class="`bg-${stat.color}-500/10`">
            <Icon :name="stat.icon" class="w-6 h-6" :class="`text-${stat.color}-500`" />
          </div>
          
          <!-- 数值和趋势 -->
          <div class="mb-3">
            <div class="text-3xl font-bold text-nc-foreground mb-1">
              {{ stat.value.includes('.')
                ? (animatedStats[index]?.current || 0).toFixed(1) + stat.value.replace(/[\d.]/g, '')
                : Math.floor(animatedStats[index]?.current || 0) + stat.value.replace(/\d/g, '') }}
            </div>
            <div class="flex items-center justify-center gap-1">
              <Icon name="i-lucide:trending-up" class="w-3 h-3 text-green-500" />
              <span class="text-xs text-green-500 font-medium">{{ stat.trend }}</span>
            </div>
          </div>
          
          <!-- 标签和描述 -->
          <h3 class="text-sm font-semibold text-nc-foreground mb-1">
            {{ stat.label }}
          </h3>
          <p class="text-xs text-nc-foreground/60">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 社区活动和贡献者 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 最近活动 -->
      <div class="bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-6">
          <Icon name="i-lucide:activity" class="w-5 h-5 text-nc-primary" />
          <h3 class="text-lg font-semibold text-nc-foreground">最近活动</h3>
          <div class="ml-auto">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div 
            v-for="(activity, index) in activities" 
            :key="activity.title"
            class="flex items-start gap-3 p-3 rounded-xl hover:bg-nc-muted/30 transition-colors duration-200"
            :class="[
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            ]"
            :style="{ transitionDelay: `${(index + 4) * 100}ms` }"
          >
            <!-- 图标 -->
            <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                 :class="`bg-${activity.color}-500/10`">
              <Icon :name="activity.icon" class="w-4 h-4" :class="`text-${activity.color}-500`" />
            </div>
            
            <!-- 内容 -->
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-medium text-nc-foreground mb-1">
                {{ activity.title }}
              </h4>
              <p class="text-xs text-nc-foreground/70 mb-1">
                {{ activity.description }}
              </p>
              <span class="text-xs text-nc-foreground/50">
                {{ activity.time }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 贡献者 -->
      <div class="bg-nc-card/50 backdrop-blur-sm border border-nc-border/50 rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-6">
          <Icon name="i-lucide:users" class="w-5 h-5 text-nc-primary" />
          <h3 class="text-lg font-semibold text-nc-foreground">核心贡献者</h3>
        </div>
        
        <!-- 贡献者头像 -->
        <div class="flex items-center gap-3 mb-6">
          <div 
            v-for="(contributor, index) in contributors" 
            :key="contributor.name"
            class="relative group"
            :class="[
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            ]"
            :style="{ transitionDelay: `${(index + 8) * 100}ms` }"
          >
            <img 
              :src="contributor.avatar" 
              :alt="contributor.name"
              class="w-12 h-12 rounded-full border-2 border-nc-border group-hover:border-nc-primary transition-colors duration-200"
            />
            <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-nc-background"></div>
          </div>
          <div class="text-nc-foreground/50">
            <span class="text-sm">+{{ stats[1]?.value || '156' }} 更多</span>
          </div>
        </div>
        
        <!-- 贡献统计 -->
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-nc-foreground/70">本月提交</span>
            <span class="text-sm font-medium text-nc-foreground">127</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-nc-foreground/70">活跃贡献者</span>
            <span class="text-sm font-medium text-nc-foreground">23</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-nc-foreground/70">代码审查</span>
            <span class="text-sm font-medium text-nc-foreground">45</span>
          </div>
        </div>
        
        <!-- 加入按钮 -->
        <div class="mt-6 pt-6 border-t border-nc-border/30">
          <NuxtLink to="https://github.com/skiyee/ui" target="_blank">
            <button class="w-full py-3 bg-nc-primary text-nc-primary-foreground rounded-xl font-medium hover:bg-nc-primary/90 transition-colors flex items-center justify-center gap-2">
              <Icon name="i-lucide:github" class="w-4 h-4" />
              加入我们
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

/* 悬停效果 */
.group:hover .group-hover\:bg-opacity-10 {
  opacity: 0.1;
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-opacity,
  .transition-transform,
  .animate-pulse {
    transition: none;
    animation: none;
  }


}
</style>
