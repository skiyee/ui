<script setup lang="ts">
const items = [
  {
    image: '/avatar/skiyee.png',
    title: 'sKy',
    subtitle: '切图仔',
    handle: '@skiyee',
    borderColor: '#265e49',
    gradient: 'linear-gradient(145deg, #265e49, #000)',
    url: 'https://github.com/skiyee',
  },
]
</script>

<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- 标题区域 -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 bg-nc-muted/50 rounded-full px-4 py-2 mb-6">
        <Icon name="i-lucide:users" class="w-4 h-4 text-nc-primary" />
        <span class="text-sm font-medium text-nc-foreground/80">TEAM</span>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold text-nc-foreground mb-4">
        团队成员
      </h2>
      <p class="text-lg text-nc-foreground/70 max-w-2xl mx-auto">
        我们团队是来自全球各地拥有不同背景和技能的优秀开发者组合而成。我们鼓励对此感兴趣的人才加入我们
      </p>
    </div>

    <!-- 人员列表 -->
    <AmChromaGrid
      :items="items"
      :radius="300"
      :damping="0.45"
      :fade-out="0.6"
      ease="power3.out"
    />
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
