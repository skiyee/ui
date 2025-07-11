<script setup lang="ts">
import { ref } from 'vue'

const loadingSwitch = ref(true)
const loadingOnSwitch = ref(false)
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkSwitch v-model="loadingSwitch" readonly>
      <template #thumbIcon="{ selected }">
        <SkSpinner v-if="selected" size="small" />
      </template>
      仅可见的加载状态
    </SkSwitch>
    <SkSwitch v-model="loadingOnSwitch">
      <template #thumbIcon="{ selected }">
        <SkSpinner v-if="selected" size="small" />
      </template>
      {{ loadingOnSwitch ? '加载中...' : '点击开始加载' }}
    </SkSwitch>
  </div>
</template>
