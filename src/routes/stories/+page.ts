import type { PageLoad } from './$types'

import { mapPosts } from './utils'

export const load: PageLoad = ({ params, url }) => {
  const tagSlug = url.searchParams.get('tag') ?? ''
  const postFilter = tagSlug ? `%2Btag:${tagSlug}` : ''
  console.log(postFilter)

    //filter=visibility:public wird benötigt im interne tags (#xxx) nicht anzuzeigen)
  const tags = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/tags/?include=count.posts&filter=visibility:public&key=93ed4aea5970c22ed269d4ec35`
  )
  const postsFeatured = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&filter=featured:true${postFilter}&key=93ed4aea5970c22ed269d4ec35&limit=4&order=published_at%20desc`
  )
  const postsNonFeatured = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&filter=featured:false${postFilter}&key=93ed4aea5970c22ed269d4ec35&limit=21&order=published_at%20desc`
  )

  return Promise.all([tags, postsFeatured, postsNonFeatured]).then(
    async ([tagResponse, featuredResponse, nonFeaturedResponse]) => {
      const tagData = await tagResponse.json()
      const featuredData = await featuredResponse.json()
      const nonFeaturedData = await nonFeaturedResponse.json()
      console.log(featuredData)
      const featuredPosts = mapPosts(featuredData)
      const nonFeaturedPosts = mapPosts(nonFeaturedData)
      const posts = featuredPosts.concat(nonFeaturedPosts)

      return {
        posts,
        selectedTag: tagSlug,
        tags: tagData.tags
          //.filter((t: any) => t.count.posts > 0)
          .map((tag: any) => ({
            name: tag.name,
            slug: tag.slug,
            count: tag.count,
          })),
      }
    }
  )
}
