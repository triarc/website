import type { PageLoad } from './$types'
import { getSizes, getSource, getSourceSet, mapPosts } from '../stories/utils'
import type { GhostPost } from '../stories/utils'

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

export const load: PageLoad = ({ params, url }) => {
  const tagSlug = url.searchParams.get('tag') ?? ''
  const postFilter = 'tag:news'

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

  // const postsStrukturen = fetch(
  //   `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&filter=tag:#Strukturen&key=93ed4aea5970c22ed269d4ec35&limit=10&order=published_at%20desc`
  // )

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

  // return Promise.all([ postsBeratung, postsVision, postsChangeManagement, postsStrukturen, postsCoaching]).then(
  //     async ([beratungResponse, visionResponse, changeManagementResponse, strukturenResponse, coachingResponse]) => {
  //
  //         const beratungData = await beratungResponse.json()
  //         const visionData = await visionResponse.json()
  //         const changeManagementData = await changeManagementResponse.json()
  //         const strukturenData = await strukturenResponse.json()
  //         const coachingData = await coachingResponse.json()
  //
  //         const beratung = mapPosts(beratungData)
  //         const vision = mapPosts(visionData)
  //         const changeManagement = mapPosts(changeManagementData)
  //         const strukturen = mapPosts(strukturenData)
  //         const coaching = mapPosts(coachingData)
  //
  //         const posts: ConsultingPosts = {
  //             beratung: beratung,
  //             vision: vision,
  //             changeManagement: changeManagement,
  //             strukturen: strukturen,
  //             coaching: coaching
  //         }
  //         return {
  //             posts
  //         };
  //     }
  // )
}
