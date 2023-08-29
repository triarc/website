<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import { getSizes, getSource, getSourceSet } from './utils'
  import type { GhostPost } from './utils'
  import { onMount } from 'svelte'

  export let data: PageData

  let posts: any[] = []

  let pageNumber = 2 //
  let scrollbarYPos
  let reachedEnd = false
  let loading = false
  let pageBodyHeight = 0



  onMount(() => {
    const observer = new ResizeObserver(() => {
      pageBodyHeight = document.body.scrollHeight
      console.log('size changed')
    })
    observer.observe(document.body);
    posts = [...data.posts]
  })
  async function scrollCheck() {
    if (reachedEnd || loading) {
      return
    }
    if (scrollbarYPos / pageBodyHeight >= 0.6) {
      try {
        loading = true
        console.log(scrollbarYPos)
        console.log(pageBodyHeight)
        pageBodyHeight = document.body.scrollHeight
        const additionalData = await loadMoreStories()
        console.log(additionalData)
        posts.push(...additionalData.posts)
        posts = posts;  //looks stupid, is necessary to trigger reactivity
        reachedEnd = additionalData.posts.length === 0
        pageNumber++
        console.log(posts)
      } catch (error) {
        console.error('scrollFunctionError', error)
      } finally {
        loading = false
      }
    }
  }

  async function loadMoreStories() {
    const tagSlug = $page.url.searchParams.get('tag') ?? ''
    const postFilter = tagSlug ? `&filter=tag:${tagSlug}` : ''
    const tags = fetch(
      `https://blog.triarc-labs.com/ghost/api/content/tags/?include=count.posts&key=93ed4aea5970c22ed269d4ec35`
    )
    const posts = fetch(
      `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors${postFilter}&key=93ed4aea5970c22ed269d4ec35&limit=25&page=${pageNumber}`
    )

    return Promise.all([tags, posts]).then(async ([tagResponse, postResponse]) => {
      const tagData = await tagResponse.json()
      const postData = await postResponse.json()
      const posts = postData.posts
        .filter((post: GhostPost) => !!post.feature_image)
        .map((post: GhostPost) => {
          const publishDate = new Date(post.published_at)
          return {
            slug: post.slug,
            title: post.title,
            content: post.excerpt.length === 500 ? post.excerpt + '...' : post.excerpt,
            image: {
              srcset: getSourceSet(post.feature_image),
              sizes: getSizes(post.feature_image),
              src: getSource(post.feature_image),
              alt: post.feature_image_alt ?? 'post feature image',
            },
            link: { href: post.url, text: 'Weiter lesen', target: '_blank' },
            featured: post.featured,
            published_at: publishDate,
            footer: `${publishDate.getDate().toString().padStart(2, '0')}.${(publishDate.getMonth() + 1)
              .toString()
              .padStart(2, '0')}.${publishDate.getFullYear()}`,
          }
        })

      posts.sort((first: { featured: any; published_at: number }, second: { featured: any; published_at: number }) => {
        if (first.featured && !second.featured) {
          return -1
        } else if (second.featured && !first.featured) {
          return 1
        } else {
          return second.published_at - first.published_at
        }
      })

      return {
        posts,
        selectedTag: tagSlug,
        tags: tagData.tags
          .filter((t: any) => t.count.posts > 0 )
          .map((tag: any) => ({
            name: tag.name,
            slug: tag.slug,
            count: tag.count,
          })),
      }
    })
  }
</script>

<svelte:window bind:scrollY={scrollbarYPos} on:scroll={scrollCheck} />


<svelte:head>
  <title>Stories - triarc-labs</title>
</svelte:head>

<Hero title="Stories" content="Erfahre mehr über uns, lese was uns beschäftigt und wir gerade tun!" />

<div class="bg-gray-100 min-h-[calc(100vh_-_432px)] flex-grow flex flex-col">
<!--  <div class="bg-white">-->
<!--    <Container>-->
<!--      <div class="flex items-center flex-wrap my-6 gap-3">-->
<!--        <a href="/stories" target="_self" class="bg-gray-200 rounded-md h-10 flex {data.selectedTag === '' ? 'active' : ''} ">-->
<!--          <div class="px-4 py-2 ">Alle</div>-->
<!--        </a>-->
<!--        {#each data.tags as tag}-->
<!--          {#if tag.name !== "LinkedIn"}-->
<!--          <a-->
<!--            href="/stories?tag={tag.slug}" target="_self"-->
<!--            class="bg-gray-200 h-10 rounded-md flex {data.selectedTag === tag.slug ? 'active' : ''}"-->
<!--          >-->
<!--            <div class="badge">{tag.count.posts}</div>-->
<!--            <div class="px-4 py-2">{tag.name}</div>-->
<!--          </a>-->
<!--          {/if}-->
<!--        {/each}-->
<!--        <a-->
<!--          class="text-gray-700 decoration-red-triarc justify-end flex space-x-2 underline flex-grow xl:text-right"-->
<!--          href="https://www.linkedin.com/company/triarc-laboratories-ltd/mycompany/"-->
<!--        >-->
<!--          <span>Folge uns auf</span>-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 448 512"-->
<!--            >&lt;!&ndash;! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. &ndash;&gt;<path-->
<!--              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"-->
<!--            /></svg-->
<!--          >-->
<!--        </a>-->
<!--      </div>-->
<!--    </Container>-->
<!--  </div>-->
  <hr />

  <div class="flex-grow">
    <Container>
      <div class="md:columns-3 columns-1 mt-6 gap-12 pb-24">
        {#each posts as post}
          <a
            href="/stories/{post.slug}"
            class="{post.featured
              ? 'md:col-span-3'
              : 'md:col-span-2'} block break-inside-avoid	 col-span-1 mb-12 shadow flex flex-col group rounded-md"
          >
            <div class="relative rounded-md shadow">
              <img
                src={post.image.src}
                srcset={post.image.srcset}
                sizes={post.image.sizes}
                loading="lazy"
                alt={post.image.alt}
                class="object-cover rounded-md rounded-b-none overflow-hidden block h-auto max-w-auto w-full object-center group-hover:opacity-75"
              />
              <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
            </div>
            <div class="px-4 py-3 bg-white rounded-md">
              <h3 class="font-bold text-xl">{post.title}</h3>
              <p class="line-clamp-3 mb-1 text-gray-500">{post.content}</p>
              <p class="text-sm text-gray-500">{post.footer}</p>
            </div>
          </a>
        {/each}
      </div>
    </Container>
  </div>

  <Footer />
</div>

<style>
  .badge {
    @apply bg-gray-300 rounded-md px-4 py-2;
  }
  .active {
    @apply bg-blue-triarc text-white;
  }
  .active .badge {
    @apply bg-white bg-opacity-20;
  }
</style>
