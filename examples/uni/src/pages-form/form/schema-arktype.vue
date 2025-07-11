<script setup lang="ts">
import { type } from 'arktype'
import { ref } from 'vue'

const formSchema = type({
  username: type('3<=string<=20').configure({
    message: () => `用户名字符必须在 3~20 个之间`,
  }),
})

const formData = ref({
  username: '',
})
</script>

<template>
  <div class="p-4 w-full">
    <SkForm :schema="formSchema" :values="formData">
      <SkField name="username" label="用户名" required>
        <SkInput v-model="formData.username" placeholder="请输入用户名" />
      </SkField>
    </SkForm>
  </div>
</template>
