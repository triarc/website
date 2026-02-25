import { error } from '@sveltejs/kit'
import { mapPage } from '$lib/util/ghost-helpers'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(
    `https://blog.triarc-labs.com/ghost/api/content/pages/slug/${params.slug}?key=93ed4aea5970c22ed269d4ec35&include=authors,tags`
  )

  if (!response.ok) {
    throw error(response.status, 'Fehler beim Laden der Ghost-Pages')
  }

  const data = await response.json()

  if (!data.pages || data.pages.length === 0) {
    throw error(404, 'Project not found')
  }

  const mappedPage = mapPage(data)

  return {
    project: mappedPage,
  }
}
