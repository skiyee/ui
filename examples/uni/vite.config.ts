import { fileURLToPath, URL } from 'node:url'

import Uni from '@dcloudio/vite-plugin-uni'
import SkResolver from '@skiyee/ui-resolver'
import Components from '@uni-helper/vite-plugin-uni-components'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniRoot from '@uni-ku/root'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default async () => {
  return defineConfig({
    base: './',
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        // '@skiyee/uni-ui': fileURLToPath(new URL('../../packages/skiyee-uni-ui/src', import.meta.url)),
      },
    },
    plugins: [
      UniPages({
        dts: 'types/pages.d.ts',
        subPackages: [
          'src/pages-basic',
          'src/pages-form',
          'src/pages-feedback',
          'src/pages-navigation',
        ],
      }),
      Components({
        dts: 'types/components.d.ts',
        resolvers: [SkResolver()],
      }),
      UniRoot(),
      UnoCSS({
        configFile: './uno.config.ts',
      }),
      // @ts-expect-error missing types
      Uni.default(),
    ],
  })
}
