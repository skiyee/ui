<script setup lang="ts">
const isVisible = ref(false)

// 监听滚动事件
const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="isVisible"
        class="fixed bottom-16 right-8 z-50 w-12 h-12 bg-nc-primary text-nc-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="回到顶部"
        @click="scrollToTop"
      >
        <Icon name="i-lucide:arrow-up" class="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .group-hover\:animate-bounce {
    transition: none;
    animation: none;
  }
}
</style>
