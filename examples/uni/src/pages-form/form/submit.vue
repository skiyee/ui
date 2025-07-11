<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, '姓名不能为空'),
})

type IFormData = z.infer<typeof formSchema>

const formData = ref<Partial<IFormData>>({
  name: '',
})

const formRef = ref()
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
  uni.showToast({
    title: '表单已重置',
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
      @reset="handleReset"
    >
      <SkField name="name" label="姓名" required>
        <SkInput v-model="formData.name" placeholder="请输入您的姓名" />
      </SkField>

      <template #footer>
        <div class="flex gap-2 mt-4">
          <SkButton color="brand" :disabled="isSubmitting" @click="formRef?.submit()">
            <SkSpinner v-if="isSubmitting" color="current" />{{ isSubmitting ? '提交中...' : '提交' }}
          </SkButton>
          <SkButton variant="bound" :disabled="isSubmitting" @click="formRef?.reset()">
            重置
          </SkButton>
        </div>
      </template>
    </SkForm>

    <div v-if="submitResult" class="mt-4 p-3 bg-gray-100 rounded">
      <pre class="text-sm">{{ submitResult }}</pre>
    </div>
  </div>
</template>
