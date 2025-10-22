<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([
  { id: 1, text: '标签 1', type: 'default' as const },
  { id: 2, text: '标签 2', type: 'primary' as const },
  { id: 3, text: '标签 3', type: 'success' as const },
  { id: 4, text: '标签 4', type: 'warning' as const },
  { id: 5, text: '标签 5', type: 'error' as const },
])

function handleClose(id: number) {
  tags.value = tags.value.filter(tag => tag.id !== id)
}
</script>

<template>
  <view class="flex flex-wrap gap-16">
    <SkTag
      v-for="tag in tags"
      :key="tag.id"
      :type="tag.type"
      closable
      @close="handleClose(tag.id)"
    >
      {{ tag.text }}
    </SkTag>
  </view>
</template>
