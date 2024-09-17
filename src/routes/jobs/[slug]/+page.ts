import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { DetailedJobListings } from '$lib/content/job-listings'

export const load: PageLoad = ({ params }) => {
  const jobListing = DetailedJobListings.find((listing) => listing.slug === params.slug)

  if (jobListing) {
    return {
      jobListing,
    }
  }
  error(404, 'Not found')
}
