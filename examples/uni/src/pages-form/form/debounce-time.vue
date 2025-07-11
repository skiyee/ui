<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(3, '用户名至少3个字符').max(20, '用户名最多20个字符'),
})

const formData = ref<Partial<z.infer<typeof formSchema>>>({
  username: '',
})

const debounceTime = ref('300')
</script>

<template>
  <div class="p-4 w-full">
    <SkForm :schema="formSchema" :values="formData" :debounce-time="+debounceTime">
      <SkField name="username" label="用户名" required>
        <SkInput v-model="formData.username" placeholder="请输入用户名" />
      </SkField>
      <SkField label="防抖延迟">
        <SkRadioGroup v-model="debounceTime" direction="horizontal">
          <SkRadio value="300" label="默认" />
          <SkRadio value="1000" label="一秒" />
          <SkRadio value="5000" label="五秒" />
        </SkRadioGroup>
      </SkField>
    </SkForm>
  </div>
</template>
