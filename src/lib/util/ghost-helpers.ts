import { Puzzle, Gear, Rocket } from '$lib/content/icons'
import type { TriarcColor, TriarcProjectContent, TriarcProjectDetailContent } from '$lib/components/TypeDefinitions'
import { error, type LoadEvent } from '@sveltejs/kit'

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

export interface GhostPage {
  id: string
  title: string
  html: string
  feature_image: string
  feature_image_alt: string | null
  excerpt: string
  published_at: string
  url: string
  slug: string
  twitter_image: string | null
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

export function mapPages(pageData: { pages: GhostPage[] }): TriarcProjectContent[] {
  return pageData.pages
    .filter((page: GhostPage) => !!page.feature_image)
    .map((page: GhostPage) => {
      return {
        content: {
          prefix: 'placeholder',
          sectionLink: 'projects/' + page.slug,
          title: page.title,
          description: page.excerpt.length === 500 ? page.excerpt + '...' : page.excerpt,
        },
        image: {
          srcset: getSourceSet(page.feature_image),
          sizes: getSizes(),
          src: getSource(page.feature_image),
          alt: page.feature_image_alt ?? 'page feature image',
        },
      }
    })
}

export function mapPage(pageData: { pages: GhostPage[] }): TriarcProjectDetailContent {
  const page = pageData.pages[0]
  console.log('Mapping page:', page)

  return {
    title: page.title,
    description: page.excerpt,
    image: {
      srcset: getSourceSet(page.feature_image),
      sizes: getSizes(),
      src: getSource(page.feature_image),
      alt: page.feature_image_alt ?? 'page feature image',
    },
    secondaryImage: page.twitter_image
      ? {
          srcset: getSourceSet(page.twitter_image),
          sizes: getSizes(),
          src: getSource(page.twitter_image),
          alt: page.title,
        }
      : undefined,
    htmlContent: page.html,
    icons: getIconsFromTags(page.tags),
  }
}

const tagToIconMap: Record<string, { iconSource: string; iconColor: TriarcColor }> = {
  'hash-strategy': { iconSource: Puzzle, iconColor: 'red' },
  'hash-operations': { iconSource: Gear, iconColor: 'green' },
  'hash-innovation': { iconSource: Rocket, iconColor: 'blue' },
}

export function getIconsFromTags(tags: { slug: string }[] = []) {
  return tags.map((tag) => tagToIconMap[tag.slug]).filter(Boolean) // Remove tags that don't have a mapped icon
}

export async function fetchGhostPages(fetch: LoadEvent['fetch'], tag: string) {
  const response = await fetch(
    `https://blog.triarc-labs.com/ghost/api/content/pages?include=tags,authors&filter=tag:${tag}&key=93ed4aea5970c22ed269d4ec35&order=published_at%20desc`
  )

  if (!response.ok) {
    throw error(response.status, 'Fehler beim Laden der Ghost-Pages')
  }

  const data = await response.json()
  console.log('Fetched Ghost Pages:', data)

  if (!data.pages || data.pages.length === 0) {
    throw error(404, 'Project not found')
  }

  const mappedPages = mapPages(data)

  if (mappedPages.length === 0) {
    throw error(404, 'Not found')
  }

  return mappedPages
}
