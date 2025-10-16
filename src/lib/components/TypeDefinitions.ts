import type { Picture } from 'imagetools-core'

export interface BlockContent {
  title?: string
  content?: string
  formReference?: string
  footer?: string
  link?: LinkContent
  image?: ImageContent
  bulletPoints?: string[]
  cards?: Card[]
  steps?: Step[]
  items?: Item[]
  posts?: MappedPost[]
  jobDetails?: JobDetails
  quote?: Quote
  testimonial?: Testimonial
  blockquote?: InlineQuote
  video?: VideoContent
  collapsible?: boolean
  collapsed?: boolean
}

export interface MappedPost {
  slug: string
  title: string
  content: string
  image: {
    srcset: string
    sizes: string
    src: string
    alt: string
  }
  link: {
    href: string
    text: string
    target: string
  }
  featured: boolean
  published_at: Date
  footer: string
}

export interface Quote {
  content: string
  person: string
  // string is needed for svgs
  image: Picture | string
  imageCss?: string
  personTitle: string
  linkedin?: string
  email?: string
  highlight?: 'green' | 'blue' | 'red'
}

export interface Testimonial {
  logo: string
  quote: { source: string; content: string }
}

export interface InlineQuote {
  source: string
  content: string
}

export interface ImageContent {
  src: string
  alt: string
  height?: number
  width?: number
}

export interface Step {
  title: string
  content: string
}

export interface Item {
  title: string
  content: string
}

export interface Card {
  title: string
  content: string
}

export interface LinkContent {
  href: string
  text: string
  target?: string
}

export interface JobDetails {
  currentlyHiring: boolean
  jobName: string
  jobPensum: string
}

export interface VideoContent {
  embedded: boolean
  videoTitle?: string
  videoId: string
  poster: string
  sources: { src: string; type: string }[]
}

export interface JobPosting {
  content: string
  claim: string
  img: string
  open: boolean
  responsibilities: string
  skills: Array<string>
  experienceRequirements: string
}

export interface DetailedJobListing {
  slug: string
  BasicJobInfo: BlockContent
  ExtendedJobInfo?: BlockContent
}

export interface MetaInfo {
  title: string
  description: string
}

export interface Tag {
  name: string
  slug: string
  count: TagCount
}

export interface TagCount {
  posts: number
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

export interface TriarcSectionDefinition {
  prefix: string
  title: string
  description: string
  iconSource: string
  sectionLink: string
}

export interface TriarcLandingPageText {
  content: Omit<TriarcSectionDefinition, 'iconSource' | 'sectionLink'>
  strategy: TriarcSectionDefinition
  operations: TriarcSectionDefinition
  future: TriarcSectionDefinition
}
