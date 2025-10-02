import process from 'node:process'

export default defineNuxtConfig({
  extends: [
    ['github:skiyee/skdocs', { auth: process.env.GITHUB_TOKEN }],
  ],
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/PuHuiTiSans.woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      demo: 'bundle',
    },
  },
})
