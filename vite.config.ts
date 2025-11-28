import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vite'

const BUILD_TIME = new Date().toISOString()

const config: UserConfig = {
  plugins: [enhancedImages(), imagetools(), sveltekit()],
  ssr: {
    noExternal: Object.keys({}),
  },
  define: {
    __BUILD_TIME__: JSON.stringify(BUILD_TIME),
  },
}

export default defineConfig(config)
