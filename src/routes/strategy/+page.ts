import { fetchGhostPages } from '$lib/util/ghost-helpers'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  return {
    pages: await fetchGhostPages(fetch, 'hash-strategy'),
  }
}
