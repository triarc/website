import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import type { GhostPost } from './utils'
import { getSizes, getSource, getSourceSet } from './utils'

export const load: PageLoad = ({ params, url }) => {
  const tagSlug = url.searchParams.get('tag') ?? ''
  const postFilter = tagSlug ? `&filter=tag:${tagSlug}` : ''
  const tags = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/tags/?include=count.posts&key=93ed4aea5970c22ed269d4ec35`
  )
  const posts = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors${postFilter}&key=93ed4aea5970c22ed269d4ec35&limit=25`
  )

  return Promise.all([tags, posts]).then(async ([tagResponse, postResponse]) => {
    const tagData = await tagResponse.json()
    const postData = await postResponse.json()
    const posts = postData.posts
      .filter((post: GhostPost) => !!post.feature_image)
      .map((post: GhostPost) => {
        const publishDate = new Date(post.published_at)
        return {
          slug: post.slug,
          title: post.title,
          content: post.excerpt.length === 500 ? post.excerpt + '...' : post.excerpt,
          image: {
            srcset: getSourceSet(post.feature_image),
            sizes: getSizes(post.feature_image),
            src: getSource(post.feature_image),
            alt: post.feature_image_alt ?? 'post feature image',
          },
          link: { href: post.url, text: 'Weiter lesen', target: '_blank' },
          featured: post.featured,
          published_at: publishDate,
          footer: `${publishDate.getDate().toString().padStart(2, '0')}.${(publishDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${publishDate.getFullYear()}`,
        }
      })

    posts.sort((first: { featured: any; published_at: number }, second: { featured: any; published_at: number }) => {
      if (first.featured && !second.featured) {
        return -1
      } else if (second.featured && !first.featured) {
        return 1
      } else {
        return second.published_at - first.published_at
      }
    })

    return {
      posts,
      selectedTag: tagSlug,
      tags: tagData.tags
        .filter((t: any) => t.count.posts > 0)
        .map((tag: any) => ({
          name: tag.name,
          slug: tag.slug,
          count: tag.count,
        })),
    }
  })
}
