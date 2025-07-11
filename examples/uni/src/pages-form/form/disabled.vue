<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  username: '张三',
})

const isDisabled = ref(true)

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
}
</script>

<template>
  <div class="p-4 w-full">
    <SkForm :disabled="isDisabled">
      <SkField name="username" label="用户名">
        <SkInput v-model="formData.username" placeholder="请输入用户名" />
      </SkField>
    </SkForm>

    <div class="mt-4">
      <SkButton size="small" @click="toggleDisabled">
        {{ isDisabled ? '启用表单' : '禁用表单' }}
      </SkButton>
    </div>
  </div>
</template>
