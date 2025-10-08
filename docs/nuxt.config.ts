import process from 'node:process'

export default defineNuxtConfig({
  extends: [
    ['github:skiyee/skdocs#v3.0.3', { auth: process.env.GITHUB_TOKEN }],
  ],
  runtimeConfig: {
    public: {
      demo: 'bundle',
    },
  },
})
