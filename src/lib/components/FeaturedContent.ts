import type { MappedPost } from '../../routes/consulting/+page'

export interface FeaturedContent {
  quote?: {
    content: string
    person: string
    images: any
    imageCss?: string
    personTitle: string
    linkedin: string
    email: string
    highlight?: 'green' | 'blue'
    contactButton: string
    customLogos?: string[]
  }
  categories: [
    {
      title: string
      content?: string
      quote?: { source: string; content: string }
      steps?: { title: string; content: string }
      posts?: MappedPost[]
      testimonial?: Testimonial,
      highlight?: 'green' | 'blue'
    }
  ],
  testimonials?: Testimonial[]
}

export interface Testimonial {
  logo: string
  quote: { source: string; sourceSubtitle: string, content: string }
}
