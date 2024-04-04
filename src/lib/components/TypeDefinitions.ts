import type { GhostPost } from '../../routes/stories/utils'

export interface BlockContent {
  slides?: GhostPost[]
  title?: string
  content?: string
  footer?: string
  link?: { href: string; text: string; target?: string }
  image?: { src: string; alt: string; height?: number; width?: number }
  bulletPoints?: string[]
  cards?: { title: string; content: string }[]
  steps?: { title: string; content: string }[]
  items?: { title: string; content: string }[]
  quote?: {
    content: string
    person: string
    image: string
    imageCss?: string
    personTitle: string
    linkedin?: string
    email?: string
    highlight?: 'green' | 'blue' | 'red'
  }
  video?: {
    poster: string
    sources: [
      {
        src: string
        type: string
      },
      {
        src: string
        type: string
      },
    ]
  }
}

export interface JobPosting {
  content: string
  claim: string
  img: string
  open: boolean
  responsibilities: string
  skills: Array<string>
  experienceRequirements: String
}

export interface MetaInfo {
  title: string
  description: string
}

export interface NavItemHeading {
  type: 'heading'
  title: string
  items: NavItemLink[]
}
export interface NavItemLink {
  type: 'link'
  title: string
  description: string
  path: string
}
export type NavItem = NavItemHeading | NavItemLink
