import { DOMParser as XmldomParser } from '@xmldom/xmldom'
import type { RequestHandler } from '@sveltejs/kit'

declare const __BUILD_TIME__: string
const LAST_MODIFIED = typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : new Date().toISOString()

const SITE_URL = 'https://www.triarc-labs.com'
const GHOST_SITEMAP = 'https://blog.triarc-labs.com/sitemap-posts.xml'
const BASE_DIR = '/src/routes'
const STORIES_DIR = 'stories'
const PAGE_SLUG = '/+page.svelte'
const DYNAMIC_ROUTE_REGEX: RegExp = /\[[^\]]+\]/

const SITEMAP_NS = 'http://www.sitemaps.org/schemas/sitemap/0.9'
const NEWS_NS = 'http://www.google.com/schemas/sitemap-news/0.9'
const XHTML_NS = 'http://www.w3.org/1999/xhtml'
const IMAGE_NS = 'http://www.google.com/schemas/sitemap-image/1.1'
const VIDEO_NS = 'http://www.google.com/schemas/sitemap-video/1.1'

const pages = import.meta.glob('/src/routes/**/+page.svelte', { eager: true })
const stories = await fetchGhostLocs()

type ParsedUrl = {
  loc: string
  lastmod?: string
  images?: string
}
type ParsedImage = { loc: string; caption?: string }

// Build slugs from file paths, exclude the sitemap itself just in case
// Only takes routes with an existing +page/svelte
const pageDirectories = [
  ...new Set(
    Object.keys(pages)
      .filter((p) => !p.startsWith('/src/routes/sitemap.xml')) // avoid including the sitemap route
      .map((file) => {
        let path = file.startsWith(BASE_DIR) ? file.slice(BASE_DIR.length) : file
        if (path.endsWith(PAGE_SLUG)) {
          path = path.slice(0, -PAGE_SLUG.length)
        }
        return path
      })
      .filter((p) => !DYNAMIC_ROUTE_REGEX.test(p))
  ),
]

export const GET: RequestHandler = async () => {
  const body = sitemap(pageDirectories, stories)
  const response = new Response(body)
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600')
  response.headers.set('Content-Type', 'application/xml')
  return response
}

async function fetchGhostLocs(): Promise<ParsedUrl[]> {
  try {
    const res = await fetch(GHOST_SITEMAP)
    if (!res.ok) return []
    const xml = await res.text()
    return parseUrls(xml)
  } catch {
    return []
  }
}

const sitemap = (pages: string[], stories: ParsedUrl[]) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="${SITEMAP_NS}"
    xmlns:news="${NEWS_NS}"
    xmlns:xhtml="${XHTML_NS}"
    xmlns:image="${IMAGE_NS}"
    xmlns:video="${VIDEO_NS}"
  >
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <priority>1</priority>
  </url>
  `
    )
    .join('')}
  ${stories
    .map(
      (story) => `
  <url>
    <loc>${SITE_URL}/${STORIES_DIR}/${story.loc}</loc>
    <lastmod>${story.lastmod}</lastmod>
    <priority>0.5</priority>
    ${story.images ? story.images : ''}
  </url>
  `
    )
    .join('')}
</urlset>
`

function parseUrls(xml: string): ParsedUrl[] {
  const parser = new XmldomParser()
  const doc = parser.parseFromString(xml, 'application/xml')
  const parsererror = doc.getElementsByTagName('parsererror')
  if (parsererror.length > 0) {
    console.log('parser error', parsererror)
    return []
  }

  const urlNodes = Array.from(doc.getElementsByTagNameNS(SITEMAP_NS, 'url'))
  return urlNodes.map((node) => {
    const loc = node.getElementsByTagNameNS(SITEMAP_NS, 'loc')[0]
    const lastmod = node.getElementsByTagNameNS(SITEMAP_NS, 'lastmod')[0]
    const images = node.getElementsByTagNameNS(IMAGE_NS, 'image')
    const xmlStringImages = imageXml(images)
    return {
      loc: loc.textContent ? slugFromLoc(loc.textContent) : '',
      lastmod: lastmod.textContent?.trim(),
      images: xmlStringImages,
    }
  })
}

function imageXml(images: HTMLCollectionOf<Element>): string {
  if (!images || images.length === 0) {
    return ''
  }

  const parsedImages: ParsedImage[] = Array.from(images)
    .map((node): ParsedImage | null => {
      // const getNs = (ns: string, tag: string) =>
      //   (node.getElementsByTagNameNS ? node.getElementsByTagNameNS(IMAGE_NS, tag)[0] : null) ||
      //   (node.getElementsByTagName ? node.getElementsByTagName(tag)[0] : null) ||
      //   undefined
      const imgLocEl = node.getElementsByTagNameNS(IMAGE_NS, 'loc')[0]
      const imgCaptionEl = node.getElementsByTagNameNS(IMAGE_NS, 'caption')[0]
      const locText = imgLocEl?.textContent?.trim()
      if (!locText) {
        return null
      }
      return {
        loc: locText,
        caption: imgCaptionEl?.textContent?.trim(),
      }
    })
    .filter((img): img is ParsedImage => img !== null)

  const map = new Map<string, ParsedImage>()
  for (const img of parsedImages) {
    map.set(img.loc, img)
  }

  return Array.from(map.values())
    .map((img: ParsedImage) => {
      const loc = `<image:loc>${escapeXml(img.loc)}</image:loc>`
      const caption = img.caption ? `<image:caption>${escapeXml(img.caption)}</image:caption>` : ''
      return `<image:image>${loc}${caption}</image:image>`
    })
    .join('')
}

// Extracts page slug from full path
function slugFromLoc(loc: string): string {
  if (!loc) return ''

  let path = loc.trim()
  const url = new URL(path)
  path = url.pathname

  const parts = path.split('/').filter(Boolean)
  let slug = parts[parts.length - 1]
  if (slug.endsWith('/')) {
    slug = slug.slice(0, -1)
  }
  return slug
}

function escapeXml(xmlString: string): string {
  return xmlString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
