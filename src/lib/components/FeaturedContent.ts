import type { MappedPost } from '../../routes/consulting/+page'

export interface FeaturedContent {
  quote?: {
    content: string
    person: string
    image: unknown
    imageCss?: string
    personTitle: string
    linkedin: string
    email: string
    highlight: 'green' | 'blue'
    contactButton: string
    customLogos?: string[]
  }
  categories: [
    {
      title: string
      link?: string
      content?: string
      quote?: { source: string; content: string }
      steps?: { title: string; content: string }[]
      posts?: MappedPost[]
    },
  ]
  testimonials: Testimonial[]
}

export interface Testimonial {
  logo: string
  quote: { source: string; content: string }
}
