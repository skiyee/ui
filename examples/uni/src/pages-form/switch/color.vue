<script setup lang="ts">
import { ref } from 'vue'

const state = ref(true)
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkSwitch v-model="state" color="brand">
      品牌色开关
    </SkSwitch>
    <SkSwitch v-model="state" color="success">
      成功色开关
    </SkSwitch>
    <SkSwitch v-model="state" color="warning">
      警告色开关
    </SkSwitch>
    <SkSwitch v-model="state" color="danger">
      危险色开关
    </SkSwitch>
    <SkSwitch v-model="state" color="neutral">
      中性色开关
    </SkSwitch>
  </div>
</template>
