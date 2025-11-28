import { readable } from 'svelte/store'

const MOBILE_BREAKPOINT = 768

export const isMobile = readable<boolean>(false, (set) => {
  if (typeof window === 'undefined') return
  const update = () => set(window.innerWidth < MOBILE_BREAKPOINT)
  update()
  window.addEventListener('resize', update, { passive: true })
  return () => window.removeEventListener('resize', update)
})
