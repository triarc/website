// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { imagetools } from 'vite-imagetools'
var config = {
  plugins: [enhancedImages(), imagetools(), sveltekit()],
  ssr: {
    noExternal: Object.keys({}),
  },
}
var vite_config_default = config
export { vite_config_default as default }
