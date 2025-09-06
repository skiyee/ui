<script setup lang="ts">
interface Props {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.1,
  rootMargin: '50px',
  once: true
})

const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
const hasLoaded = ref(false)

onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          hasLoaded.value = true
          
          if (props.once) {
            observer.unobserve(entry.target)
          }
        } else if (!props.once) {
          isVisible.value = false
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin
    }
  )

  observer.observe(sectionRef.value)

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <section 
    ref="sectionRef"
    class="transition-opacity duration-700"
    :class="hasLoaded ? 'opacity-100' : 'opacity-0'"
  >
    <slot v-if="isVisible || hasLoaded" :is-visible="isVisible" />
    <div v-else class="h-96 flex items-center justify-center">
      <div class="w-8 h-8 border-2 border-nc-primary border-t-transparent rounded-full animate-spin" />
    </div>
  </section>
</template>

<style scoped>
/* 减少动画模式支持 */
@media (prefers-reduced-motion: reduce) {
  .transition-opacity,
  .animate-spin {
    transition: none;
    animation: none;
  }
}
</style>
