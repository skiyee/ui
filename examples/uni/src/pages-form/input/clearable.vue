<script setup lang="ts">
import { ref } from 'vue'

const basicValue = ref()
const iconValue = ref()
const readonlyValue = ref('这是只读状态的值')
const isReadonly = ref(true)
</script>

<template>
  <div class="flex flex-col p-4 gap-3 w-full">
    <!-- 普通写法 -->
    <SkInput
      v-model="basicValue"
      placeholder="输入内容后可清空"
    >
      <template v-if="basicValue && String(basicValue).length" #trailing="{ clax }">
        <div
          class="text-secondary hover:text-primary transition-colors cursor-pointer"
          :class="clax"
          @click="basicValue = ''"
        >
          <SkIcon name="i-lucide:close" clax="sk-unit:size-18" />
        </div>
      </template>
    </SkInput>

    <!-- 进阶写法 -->
    <SkInput
      v-model="iconValue"
      placeholder="进阶版内容可清空"
      :clax="{
        trailing: 'text-secondary hover:text-primary transition-colors cursor-pointer',
      }"
    >
      <template v-if="iconValue && String(iconValue).length" #trailing="{ clax }">
        <div :class="clax" @click="iconValue = ''">
          <SkIcon name="i-lucide:close" clax="sk-unit:size-18" />
        </div>
      </template>
    </SkInput>

    <SkInput
      v-model="readonlyValue"
      placeholder="只读状态不显示清空按钮"
      :readonly="isReadonly"
      :clax="{
        trailing: 'text-secondary hover:text-primary transition-colors cursor-pointer',
      }"
    >
      <template
        v-if="!isReadonly && String(readonlyValue).length"
        #trailing="{ clax }"
      >
        <div :class="clax" @click="readonlyValue = ''">
          <SkIcon name="i-lucide:close" clax="sk-unit:size-18" />
        </div>
      </template>
    </SkInput>
  </div>
</template>
