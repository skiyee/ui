import process from 'node:process'

export default defineNuxtConfig({
  extends: [
    ['github:skiyee/skdocs', { auth: process.env.GITHUB_TOKEN }],
  ],
  runtimeConfig: {
    public: {
      demo: 'http://localhost:5173/#/',
    },
  },
})
