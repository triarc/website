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
  }
  categories: [
    {
      title: string
      content?: string
      quote?: string
      steps?: { title: string; content: string }
      posts?: MappedPost[]
    }
  ]
}
