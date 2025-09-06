<script setup lang="ts">
const {
  announcement,
  title,
  description,
} = defineProps<{
  announcement?: {
    to?: string;
    target?: string;
    icon?: string;
    title: string;
  };
  title: string;
  description: string;
}>()

// 定义actions插槽
defineSlots<{
  actions?: () => any;
}>()

const points = useState(() => Array.from({ length: 16 }).fill(0).map(() => [Math.random(), Math.random()]))

const poly = computed(() => points.value.map(([x, y]) => `${x! * 100}% ${y! * 100}%`).join(', '))

function jumpVal(val: number) {
  return Math.random() > 0.5 ? val + (Math.random() - 0.5) / 2 : Math.random()
}

let timeout: NodeJS.Timeout
function jumpPoints() {
  for (let i = 0; i < points.value.length; i++) {
    points.value[i] = [jumpVal(points.value[i]![0]!), jumpVal(points.value[i]![1]!)]
  }
  timeout = setTimeout(jumpPoints, 2000 + Math.random() * 1000)
}

onMounted(() => {
  jumpPoints()
  onUnmounted(() => clearTimeout(timeout))
})

const people = [
  {
    id: 1,
    name: "skiyee",
    designation: "切图仔、CRUD糕手、UI融合怪",
    image: "https://www.github.com/skiyee.png",
  }
]
</script>

<template>
  <section class="relative h-dvh -mt-14 w-full flex items-center">
    <div class="bg absolute inset-0 -z-10 transform-gpu blur-3xl overflow-hidden" aria-hidden="true">
      <div class="aspect-[1.7] h-full w-full bg-gradient-to-r from-nc-primary to-white/10 lg:opacity-30 xs:opacity-50"
        :style="{
          'clip-path': `polygon(${poly})`,
        }" />
    </div>

    <div class="flex flex-col mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <NuxtLink v-if="announcement" :to="announcement.to" :target="announcement.target"
        class="bg-nc-background/80 hidden lg:inline-flex items-center rounded-lg mx-auto px-3 py-2 text-sm font-medium">
        <template v-if="announcement.icon">
          <span
            v-if="/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(announcement.icon)">
            {{ announcement.icon }}
          </span>
          <Icon v-else :name="announcement.icon" :size="16" />
          <BaseSeparator class="mx-2 h-4!" orientation="vertical" />
        </template>
        <AmSparklesText :text="announcement.title" />
        <Icon name="lucide:arrow-right" class="ml-1 size-4" />
      </NuxtLink>

      <div class="text-center my-16">
        <h1 class="text-nc-foreground text-4xl md:text-[4rem] font-semibold leading-tight tracking-tighter">
          {{ title }}
        </h1>

        <p class="mt-4 text-nc-foreground/70 text-sm md:text-lg text-center text-pretty">
          {{ description }}
        </p>

        <section class="flex w-full items-center justify-center sm:gap-5 gap-3 mt-10">
          <slot name="actions" mdc-unwrap="p" />
        </section>
      </div>

      <div class="flex w-full flex-row justify-center">
        <AmAnimatedTooltip :items="people" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg>div {
  clip-path: circle(75%);
  transition: clip-path 3s;
}

.light .bg>div {
  opacity: 1 !important;
}
</style>