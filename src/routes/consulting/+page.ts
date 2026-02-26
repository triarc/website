import type { PageLoad } from './$types'
import { mapPosts } from '$lib/util/ghost-helpers'

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

export interface ConsultingPosts {
  consulting?: MappedPost[]
  potential?: MappedPost[]
  vision?: MappedPost[]
  changeManagement?: MappedPost[]
  strukturen?: MappedPost[]
  coaching?: MappedPost[]
}

export const load: PageLoad = () => {
  const postsBeratung = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&key=93ed4aea5970c22ed269d4ec35&limit=3&order=published_at%20desc&filter=tag:getting-started&filter=tag:hash-consulting`
  )

  const postsPotential = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&filter=tag:hash-potential-workshop&key=93ed4aea5970c22ed269d4ec35&limit=3&order=published_at%20desc`
  )

  const postsVision = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&key=93ed4aea5970c22ed269d4ec35&limit=3&order=published_at%20desc&filter=tag:hash-vision-workshop`
  )

  const postsChangeManagement = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&key=93ed4aea5970c22ed269d4ec35&limit=3&order=published_at%20desc&filter=tag:hash-change-management`
  )

  const postsCoaching = fetch(
    `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&key=93ed4aea5970c22ed269d4ec35&limit=3&order=published_at%20desc&filter=tag:hash-coaching`
  )

  return Promise.all([postsBeratung, postsPotential, postsVision, postsChangeManagement, postsCoaching]).then(
    async ([postResponse, potentialResponse, visionResponse, changeManagementResponse, coachingResponse]) => {
      const consultingData = await postResponse.json()
      const potentialData = await potentialResponse.json()
      const visionData = await visionResponse.json()
      const changeManagementData = await changeManagementResponse.json()
      const coachingData = await coachingResponse.json()

      const consulting = mapPosts(consultingData)
      const potential = mapPosts(potentialData)
      const vision = mapPosts(visionData)
      const changeManagement = mapPosts(changeManagementData)
      const coaching = mapPosts(coachingData)

      const posts: ConsultingPosts = {
        consulting: consulting,
        potential: potential,
        vision: vision,
        changeManagement: changeManagement,
        coaching: coaching,
      }
      return {
        posts,
      }
    }
  )
}
