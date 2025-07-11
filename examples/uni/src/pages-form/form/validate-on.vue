<script setup lang="ts">
import type { SkFormProps } from '@skiyee/uni-ui/components/sk-form.vue'

import { reactive, ref } from 'vue'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(3, '用户名至少3个字符').max(20, '用户名最多20个字符'),
})

type IFormData = z.output<typeof formSchema>

const formData = reactive<Partial<IFormData>>({
  username: '',
})

const validateOn = ref<SkFormProps<typeof formSchema>['validateOn']>(['change', 'blur'])
</script>

<template>
  <div class="p-4 w-full">
    <SkForm
      :schema="formSchema"
      :values="formData"
      :validate-on="validateOn"
    >
      <SkField name="username" label="用户名" required>
        <SkInput v-model="formData.username" placeholder="请输入用户名" />
      </SkField>
      <SkField label="校验时机">
        <SkCheckboxGroup v-model="validateOn" direction="horizontal">
          <SkCheckbox value="change" label="更改时" />
          <SkCheckbox value="focus" label="获得焦点时" />
          <SkCheckbox value="blur" label="失去焦点时" />
        </SkCheckboxGroup>
      </SkField>
    </SkForm>
  </div>
</template>
