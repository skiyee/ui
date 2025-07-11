<script setup lang="ts">
import { ref } from 'vue'

const state = ref(true)
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkSwitch v-model="state" size="small">
      小尺寸开关
    </SkSwitch>
    <SkSwitch v-model="state" size="medium">
      中等尺寸开关
    </SkSwitch>
    <SkSwitch v-model="state" size="large">
      大尺寸开关
    </SkSwitch>
  </div>
</template>
