import presetSkiyeeUI from '@skiyee/ui-preset'
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetSkiyeeUI(),
  ],
})
