import type { PageLoad } from '../../../.svelte-kit/types/src/routes/stories/$types'

export const load: PageLoad = ({ url: url }) => {
  return {
    contact: url.searchParams.get('to') ?? '',
  }
}
