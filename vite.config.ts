import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { imagetools } from 'vite-imagetools'

const config: UserConfig = {
  plugins: [enhancedImages(), imagetools(), sveltekit()],
  ssr: {
    noExternal: Object.keys({}),
  },
}

export default config
