import type { Picture } from 'imagetools-core'

export interface BlockContent {
  title?: string
  content?: string
  formReference?: string
  footer?: string
  link?: { href: string; text: string; target?: string }
  image?: { src: string; alt: string; height?: number; width?: number }
  bulletPoints?: string[]
  cards?: { title: string; content: string }[]
  steps?: { title: string; content: string }[]
  items?: { title: string; content: string }[]
  smallVideo?: VideoContent
  jobDetails?: { currentlyHiring: boolean; jobName: string; jobPensum: string }
  quote?: Quote
  video?: VideoContent
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

export interface JobDetails {
  currentlyHiring: boolean
  jobName: string
  jobPensum: string
}

export interface VideoContent {
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
