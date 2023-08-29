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
    }
  ]
}

export const imageRegex = /^https:\/\/(?<domain>.+)\/content\/images\/(?<path>.+)$/
export function getSizeUrl(match: any, size: string): string {
  return `https://${match.groups.domain}/content/images/size/w${size}/${match.groups.path} ${size}w`
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

export function getSizes(url: string): string {
  return '(max-width: 1000px) 400px, 800px'
}
