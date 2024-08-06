export interface GhostPost {
  id: string
  title: string
  html: string
  feature_image: string
  feature_image_alt: string | null
  excerpt: string
  featured: boolean
  published_at: string
  url: string
  slug: string
  primary_author: {
    name: string
  }
  tags: [
    {
      id: string
      slug: string
      name: string
    },
  ]
}

export const imageRegex = /^https:\/\/(?<domain>.+)\/content\/images\/(?<path>.+)$/
export function getSizeUrl(match: RegExpMatchArray, size: string): string {
  return `https://${match.groups?.domain}/content/images/size/w${size}/${match.groups?.path} ${size}w`
}
export function getSourceSet(url: string): string {
  if (!url) {
    return ''
  }
  const match = url.match(imageRegex)
  if (!match || !match.groups) {
    return url
  }
  return `${getSizeUrl(match, '300')}, ${getSizeUrl(match, '600')}, ${getSizeUrl(match, '1000')}, ${getSizeUrl(
    match,
    '2000'
  )}`
}

export function getSource(url: string): string {
  if (!url) {
    return ''
  }
  const match = url.match(imageRegex)
  if (!match || !match.groups) {
    return url
  }
  return `https://${match.groups.domain}/content/images/size/w600/${match.groups.path}`
}

export function getSizes(): string {
  return '(max-width: 1000px) 400px, 800px'
}

export function mapPosts(postData: { posts: GhostPost[] }) {
  return postData.posts
    .filter((post: GhostPost) => !!post.feature_image)
    .map((post: GhostPost) => {
      const publishDate = new Date(post.published_at)
      return {
        slug: post.slug,
        title: post.title,
        content: post.excerpt.length === 500 ? post.excerpt + '...' : post.excerpt,
        image: {
          srcset: getSourceSet(post.feature_image),
          sizes: getSizes(),
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
}
