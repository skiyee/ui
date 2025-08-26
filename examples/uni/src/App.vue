<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 主题状态管理
const currentTheme = ref<'light' | 'dark' | ''>('')

// 应用主题到 DOM（带缓存避免重复操作）
function applyTheme(theme: 'light' | 'dark') {
  if (currentTheme.value === theme) {
    return
  } // 避免重复操作

  currentTheme.value = theme

  // 使用 requestAnimationFrame 优化 DOM 操作
  requestAnimationFrame(() => {
    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)
  })
}

onLaunch(() => {
  const appBaseInfo = uni.getAppBaseInfo()
  applyTheme(appBaseInfo.theme === 'dark' ? 'dark' : 'light')
})

/*
// postMessage 监听器
function handlePostMessage(event: MessageEvent) {
  // 验证消息来源（可选，根据需要调整）
  // if (event.origin !== 'http://localhost:3000') return

  if (event.data && event.data.type === 'THEME_CHANGE') {
    const { theme } = event.data
    if (theme === 'light' || theme === 'dark') {
      applyTheme(theme)
    }
  }
}

onMounted(() => {
  // 添加 postMessage 监听器
  window.addEventListener('message', handlePostMessage)

  // 初始化主题
  applyTheme(currentTheme.value)
})

onUnmounted(() => {
  // 清理监听器
  window.removeEventListener('message', handlePostMessage)
})
*/
</script>

<style>
page {
  background-color: rgb(var(--sk-ui-color-bg-surface));
  color: rgb(var(--sk-ui-color-text-primary));
}

page .dark {
  background-color: rgb(var(--sk-ui-color-bg-surface));
  color: rgb(var(--sk-ui-color-text-primary));
}

/* .dark, [data-theme=dark]{
  --sk-ui-color-text-description: 107 114 128 !important;
  --sk-ui-color-neutral: 169 174 184 !important;
} */
</style>
