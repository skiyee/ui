import presetSkiyeeUI from '@skiyee/ui-preset'
import { defineConfig } from 'unocss'
import { presetApplet } from 'unocss-applet'

export default defineConfig({
  presets: [
    presetApplet() as any,
    presetSkiyeeUI({
      platform: 'mp',
    }),
  ],
})
