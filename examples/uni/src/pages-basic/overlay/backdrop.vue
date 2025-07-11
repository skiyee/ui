<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="p-4">
    <SkButton label="显示弹窗" @click="() => visible = true" />
    <SkOverlay v-model:visible="visible" :backdrop="false">
      <div class="text-center p-4 text-white bg-black/80 rounded-lg">
        <span class="block mb-3">这个弹窗没有背景层，需要手动关闭</span>
        <SkButton label="手动关闭" color="danger" size="small" @click="() => visible = false" />
      </div>
    </SkOverlay>
  </div>
</template>
