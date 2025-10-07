<script setup lang="ts">

</script>

<template>
  <section class="relative h-screen -mt-14 w-full flex items-center">
    <AmLiquidBg class="absolute inset-0 -z-10" />

    <div class="flex flex-col mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <NuxtLink
        to="https://github.com/skiyee/ui" target="_blank"
        class="bg-nc-background/80 hidden lg:inline-flex items-center rounded-lg mx-auto px-3 py-2 text-sm font-medium"
      >
        <span>🎉</span>
        <BaseSeparator class="mx-2 h-4!" orientation="vertical" />
        <AmSparklesText text="正式发布初版" />
        <Icon name="lucide:arrow-right" class="ml-1 size-4" />
      </NuxtLink>

      <div class="text-center my-16">
        <h1 class="text-nc-foreground text-4xl md:text-[4rem] font-semibold leading-tight tracking-tighter">
          随心创造差异化
        </h1>

        <p class="mt-4 text-nc-foreground/70 text-sm md:text-lg text-center text-pretty">
          一个由原子化CSS驱动、符合直觉设计、高度定制化、面向AI时代的移动端 UI 库，助力开发者打造独特且差异化的移动端应用程序
        </p>

        <section class="flex w-full items-center justify-center sm:gap-5 gap-3 mt-10">
          <!-- 快速上手按钮 -->
          <NuxtLink to="/docs/guide/installation">
            <AmShimmerButton shimmer-size="2px" background="var(--primary)">
              <span class="whitespace-pre-wrap text-center text-sm text-white">快速上手</span>
            </AmShimmerButton>
          </NuxtLink>

          <!-- 组件列表按钮 -->
          <NuxtLink to="/docs/components/basic/button">
            <AmInteractiveHoverButton text="组件列表" class="text-sm text-nc-foreground" />
          </NuxtLink>
        </section>
      </div>
    </div>
  </section>
</template>
