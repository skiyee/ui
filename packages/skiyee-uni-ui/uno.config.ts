import presetSkiyeeUI from '@skiyee/ui-preset'
import { presetUni } from 'uni-unocss'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetSkiyeeUI(),
  ],
})
