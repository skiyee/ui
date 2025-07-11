<script setup lang="ts">
import { ref } from 'vue'

const disabledOff = ref(false)
const disabledOn = ref(true)
</script>

<template>
  <div class="p-4 flex flex-col gap-3">
    <SkSwitch v-model="disabledOff" disabled>
      禁用关闭状态
    </SkSwitch>
    <SkSwitch v-model="disabledOn" disabled>
      禁用开启状态
    </SkSwitch>
  </div>
</template>
