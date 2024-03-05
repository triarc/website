import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
export const load: PageLoad = ({ params }) => {
  return fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts/slug/${params.slug}?key=93ed4aea5970c22ed269d4ec35`
  )
    .then(async (response) => {
      const data = await response.json()
      return data.posts[0]
    })
    .catch(() => {
      throw error(404, 'Not found')
    })
}
