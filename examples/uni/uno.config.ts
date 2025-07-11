import { presetSkiyeeUI } from '@skiyee/ui-preset'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUni({
      attributify: {
        prefixedOnly: true,
      },
    }),
    presetSkiyeeUI(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
