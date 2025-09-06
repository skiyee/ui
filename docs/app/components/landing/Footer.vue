<script setup lang="ts">
const config = useAppConfig()

const { logo, title, showTitle, showLogo } = config.header

// 链接分组
const linkGroups = ref([
  {
    title: '产品',
    links: [
      { name: '组件库', href: '/docs/components/basic/button' },
      { name: '设计系统', href: '/docs/design-system' },
      { name: '主题编辑器', href: '/theme-editor' },
      { name: '更新日志', href: '/changelog' }
    ]
  },
  {
    title: '开发者',
    links: [
      { name: '快速开始', href: '/docs/guide/introduction' },
      { name: 'API 文档', href: '/docs/api' },
      { name: '示例代码', href: '/examples' },
      { name: '最佳实践', href: '/docs/best-practices' }
    ]
  },
  {
    title: '社区',
    links: [
      { name: 'GitHub', href: 'https://github.com/skiyee/ui', external: true },
      { name: '讨论区', href: 'https://github.com/skiyee/ui/discussions', external: true },
      { name: '问题反馈', href: 'https://github.com/skiyee/ui/issues', external: true },
      { name: '贡献指南', href: 'https://github.com/skiyee/ui/blob/main/CONTRIBUTING.md', external: true }
    ]
  },
  {
    title: '支持',
    links: [
      { name: '常见问题', href: '/faq' },
      { name: '联系我们', href: '/contact' },
      { name: '商业支持', href: '/enterprise' },
      { name: '赞助项目', href: 'https://afdian.com/a/skiyee', external: true }
    ]
  }
])

// 社交媒体链接
const socialLinks = ref([
  { name: 'GitHub', icon: 'i-lucide:github', href: 'https://github.com/skiyee/ui' },
  { name: 'Twitter', icon: 'i-lucide:twitter', href: 'https://twitter.com/skiyee' },
  { name: 'Discord', icon: 'i-lucide:message-circle', href: 'https://discord.gg/skiyee' },
  { name: '微信群', icon: 'i-lucide:message-square', href: '/wechat' }
])

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-nc-card/30 backdrop-blur-sm border-t border-nc-border/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 my-12">
        <!-- 品牌信息 -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <NuxtLink v-if="logo.light && logo.dark" to="/" class="flex gap-3">
              <template v-if="showLogo">
                <NuxtImg :src="logo.light" class="size-10 dark:hidden text-nc-primary" />
                <NuxtImg :src="logo.dark" class="size-10 hidden dark:block" />
              </template>
              <span v-if="showTitle && title"
                class="hidden md:inline-block self-center text-xl font-bold drop-shadow-lg">
                {{ title }}
              </span>
            </NuxtLink>
          </div>

          <p class="text-nc-foreground/70 mb-6 leading-relaxed">
            一个由原子化CSS驱动、符合直觉设计、高度定制化、面向AI时代的移动端 UI 库
          </p>

          <!-- 社交媒体链接 -->
          <div class="flex gap-3">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-nc-muted/50 rounded-xl flex items-center justify-center hover:bg-nc-primary hover:text-white transition-all duration-300 group">
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- 链接分组 -->
        <div v-for="group in linkGroups" :key="group.title" class="lg:col-span-1">
          <h3 class="text-base font-semibold text-nc-foreground uppercase tracking-wider mb-4">
            {{ group.title }}
          </h3>
          <ul class="space-y-3">
            <li v-for="link in group.links" :key="link.name">
              <NuxtLink v-if="!link.external" :to="link.href"
                class="text-nc-foreground/70 hover:text-nc-primary transition-colors duration-200 text-sm">
                {{ link.name }}
              </NuxtLink>
              <a v-else :href="link.href" target="_blank" rel="noopener noreferrer"
                class="text-nc-foreground/70 hover:text-nc-primary transition-colors duration-200 text-sm flex items-center gap-1">
                {{ link.name }}
                <Icon name="i-lucide:external-link" class="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="border-t border-nc-border/30"></div>

      <div class="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- 版权信息 -->
        <div class="text-sm text-nc-foreground/60">
          © {{ currentYear }} skiyee/ui. All rights reserved.
        </div>

        <!-- 法律链接 -->
        <div class="flex gap-6 text-sm">
          <NuxtLink to="/privacy" class="text-nc-foreground/60 hover:text-nc-primary transition-colors duration-200">
            隐私政策
          </NuxtLink>
          <NuxtLink to="/terms" class="text-nc-foreground/60 hover:text-nc-primary transition-colors duration-200">
            使用条款
          </NuxtLink>
          <NuxtLink to="/license" class="text-nc-foreground/60 hover:text-nc-primary transition-colors duration-200">
            开源协议
          </NuxtLink>
        </div>

        <!-- 版本信息 -->
        <!-- <div class="flex items-center gap-2 text-sm text-nc-foreground/60">
            <Icon name="i-lucide:tag" class="w-4 h-4" />
            <span>v2.1.0</span>
          </div> -->
      </div>

      <!-- 底部装饰 -->
      <div class="mt-4 text-center">
        <div class="inline-flex items-center gap-2 text-xs text-nc-foreground/50">
          <Icon name="i-lucide:heart" class="w-3 h-3 text-red-500" />
          <span>Made with love by the skiyee team</span>
        </div>
      </div>
    </div>

    <!-- 背景装饰 -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-nc-primary/3 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
    </div>
  </footer>
</template>

<style scoped>
/* 响应式优化 */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 90rem;
  }
}

/* 悬停效果增强 */
.group:hover {
  transform: translateY(-1px);
}

/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {

  .transition-all,
  .transition-colors {
    transition: none;
  }
}
</style>
