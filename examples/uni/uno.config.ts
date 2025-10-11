import { presetSkiyeeUI } from '@skiyee/ui-preset'
import { presetUni } from 'uni-unocss'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetSkiyeeUI(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
