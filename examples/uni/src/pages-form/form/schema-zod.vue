<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(3, '用户名至少3个字符').max(20, '用户名最多20个字符'),
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
