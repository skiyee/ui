<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({
  username: '默认用户名',
})
</script>

<template>
  <div class="p-4 w-full">
    <SkForm :values="formData">
      <SkField name="username" label="用户名">
        <SkInput v-model="formData.username" placeholder="请输入用户名" />
      </SkField>
    </SkForm>
  </div>
</template>
