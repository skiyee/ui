export default defineAppConfig({
  seo: {
    title: 'skiyee/ui',
    description: '一个由原子化CSS驱动、符合直觉设计、高度定制化、面向AI时代的移动端 UI 库',
    keywords: [
      'Vue', 'Vue3', 'Uniapp', 'UnoCSS', 'skiyee', '原子化CSS',
      'Vue组件', 'Unocss组件库', '组件库', 'UI库', '移动端组件库',
    ],
    author: 'sKy(skiyee)',
    image: '/og-image.png',
    url: 'https://skiyee-ui.netlify.app',
    locale: 'zh-CN',
    type: 'website',
  },
  footer: {
    socialLinks: [
      { name: 'GitHub', icon: 'i-lucide:github', href: 'https://github.com/skiyee/ui' },
      { name: 'QQ', icon: 'i-lucide:twitter', href: 'https://github.com/skiyee' },
      { name: 'WechatGroup', icon: 'i-lucide:message-circle', href: 'https://github.com/skiyee' },
    ],
  },
})
