<script setup lang="ts">
import type { SkFormExposes } from '@skiyee/uni-ui/components/sk-form.vue'

import { ref } from 'vue'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, '姓名不能为空'),
})

type IFormData = z.infer<typeof formSchema>

const formData = ref<Partial<IFormData>>({
  name: '',
})

const formRef = ref<SkFormExposes<typeof formSchema>>()
const isSubmitting = ref(false)
const submitResult = ref('')

async function handleSubmit(data: IFormData) {
  isSubmitting.value = true
  submitResult.value = ''

  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 2000))

    submitResult.value = `提交成功！数据: ${JSON.stringify(data, null, 2)}`

    uni.showToast({
      title: '提交成功',
      icon: 'success',
    })
  }
  catch {
    submitResult.value = '提交失败，请重试'
    uni.showToast({
      title: '提交失败',
      icon: 'error',
    })
  }
  finally {
    isSubmitting.value = false
  }
}

function handleReset() {
  submitResult.value = ''
  formData.value = {
    name: '',
  }

  formRef.value?.resetValidation()

  uni.showToast({
    title: '表单校验状态已重置',
    icon: 'none',
  })
}
</script>

<template>
  <div class="p-4 w-full">
    <SkForm
      ref="formRef"
      :schema="formSchema"
      :values="formData"
      @submit="handleSubmit"
    >
      <SkField name="name" label="姓名" required>
        <SkInput v-model="formData.name" placeholder="请输入您的姓名" />
      </SkField>

      <div class="flex gap-2 mt-4">
        <SkButton type="submit" color="brand" :disabled="isSubmitting">
          <SkSpinner v-if="isSubmitting" color="current" />{{ isSubmitting ? '提交中...' : '提交' }}
        </SkButton>
        <SkButton variant="bound" :disabled="isSubmitting" @click="handleReset">
          重置提交与校验
        </SkButton>
      </div>
    </SkForm>

    <div v-if="submitResult" class="mt-4 p-3 bg-muted rounded">
      <pre class="text-sm">{{ submitResult }}</pre>
    </div>
  </div>
</template>
