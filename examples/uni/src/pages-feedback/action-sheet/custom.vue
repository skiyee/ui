<script setup lang="ts">
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)

const options = [
  { name: '选项一', value: 1 },
  { name: '选项二', value: 2 },
  { name: '选项三', value: 3 },
]

function handleSelect(option: any) {
  uni.showToast({
    title: `选择了：${option.name}`,
    icon: 'none',
  })
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4">
    <SkButton @click="visible1 = true">
      无圆角
    </SkButton>

    <SkButton @click="visible2 = true">
      紧凑间距
    </SkButton>

    <SkButton @click="visible3 = true">
      自定义层级
    </SkButton>
  </div>

  <SkActionSheet
    v-model:visible="visible1"
    :options="options"
    :round="false"
    @select="handleSelect"
  />

  <SkActionSheet
    v-model:visible="visible2"
    :options="options"
    spacing="compact"
    title="紧凑间距示例"
    @select="handleSelect"
  />

  <SkActionSheet
    v-model:visible="visible3"
    :options="options"
    :z-index="2000"
    title="自定义 z-index"
    description="层级设置为 2000"
    @select="handleSelect"
  />
</template>
