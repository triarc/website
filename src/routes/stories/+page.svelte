<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import { getSizes, getSource, getSourceSet } from './utils'
  import type { GhostPost } from './utils'
  import { onMount } from 'svelte'
  import heroImage from '$lib/assets/hero/Stories.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { MappedPost } from '../consulting/+page'
  import { MasonryInfiniteGrid } from '@egjs/svelte-infinitegrid'

  export let data: PageData
  let pageNumber = 2 //
  let reachedEnd = false
  let loading = false
  let filter!: HTMLDialogElement
  let items: MappedPost[] = []

  onMount(() => {
    filter = document.getElementById('filter') as HTMLDialogElement
    items = [...data.posts]
  })

  async function loadMoreStories() {
    const tagSlug = $page.url.searchParams.get('tag') ?? ''
    const postFilter = tagSlug ? `%2Btag:${tagSlug}` : ''
    const postResponse = await fetch(
      `https://blog.triarc-labs.com/ghost/api/content/posts?include=tags,authors&filter=featured:false${postFilter}&key=93ed4aea5970c22ed269d4ec35&limit=25&page=${pageNumber}&order=published_at%20desc`
    )

    const postData = await postResponse.json()
    const newPosts = postData.posts
      //.filter((post: GhostPost) => !!post.feature_image)
      .map((post: GhostPost) => {
        const publishDate = new Date(post.published_at)
        return {
          slug: post.slug,
          title: post.title,
          content: post.excerpt.length === 500 ? post.excerpt + '...' : post.excerpt,
          image: {
            srcset: getSourceSet(post.feature_image),
            sizes: getSizes(),
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
    if (newPosts == 0) {
      reachedEnd = true
    }
    return [...items, ...newPosts]
  }
</script>

<svelte:head>
  <title>Stories - triarc-labs</title>
</svelte:head>

<Hero
  title="Stories"
  content="Erfahre mehr über uns, lese was uns beschäftigt und wir gerade tun!"
  image={heroImage}
  imageAlt="Triarc Stories Header"
/>

<div class="bg-gray-50 min-h-[calc(100vh_-_432px)] flex-grow flex flex-col">
  <dialog id="filter" class="modal rounded-md w-full bg-gray-100 shadow-xl">
    <div class="modal-box p-4">
      <div class="flex mb-6 flex-col gap-3">
        <p class="font-bold text-gray-700">Posts auswählen</p>
        <a
          href="/stories"
          target="_self"
          class="bg-white rounded-md border border-gray-300 h-10 flex {data.selectedTag === '' ? 'active' : ''} "
        >
          <div class="badge">{data.totalPosts}</div>
          <div class="px-4 py-2">Alle</div>
        </a>
        {#each data.tags as tag}
          <a
            href="/stories?tag={tag.slug}"
            target="_self"
            class="bg-white border border-gray-300 h-10 rounded-md flex {data.selectedTag === tag.slug ? 'active' : ''}"
          >
            <div class="badge">{tag.count.posts}</div>
            <div class="px-4 py-2">{tag.name}</div>
          </a>
        {/each}
      </div>
      <div class="modal-action">
        <form class="flex" method="dialog">
          <button class="btn bg-white rounded-md h-10 border-gray-300 border flex-grow px-4 py-2">Abbrechen</button>
        </form>
      </div>
    </div>
  </dialog>

  <div
    class="filter-bar bg-[#E5E7EB] shadow border-t border-b border-gray-200 sticky md:relative top-16 md:top-0 will-change-transform z-50"
  >
    <Container>
      <div class="flex items-start md:flex-row my-6 gap-3">
        <button
          class="btn flex flex-grow bg-white items-center rounded-md h-10 shadow md:hidden px-0 py-2 {data.selectedTag ===
          ''
            ? ''
            : 'active'}"
          on:click={() => filter.showModal()}
        >
          <span class="badge flex-shrink">Filter</span>
          {#if data.selectedTag.startsWith('beratung')}
            <span class="flex-grow inline-flex justify-center items-center px-4 py-2">Beratung</span>
          {:else if data.selectedTag.startsWith('custom')}
            <span class="flex-grow inline-flex justify-center items-center px-4 py-2">Custom Software</span>
          {:else if data.selectedTag.startsWith('triarc')}
            <span class="flex-grow inline-flex justify-center items-center px-4 py-2">Triarc</span>
          {:else}
            <span class="flex-grow inline-flex justify-center px-4 py-2">Alle</span>
          {/if}
        </button>
        <a
          href="/stories"
          target="_self"
          class="bg-white rounded-md h-10 hidden md:flex {data.selectedTag === '' ? 'active' : ''} "
        >
          <div class="badge">{data.totalPosts}</div>
          <div class="px-4 py-2">Alle</div>
        </a>
        {#each data.tags as tag}
          <a
            href="/stories?tag={tag.slug}"
            target="_self"
            class="bg-white h-10 rounded-md md:flex hidden {data.selectedTag === tag.slug ? 'active' : ''}"
          >
            <div class="badge">{tag.count.posts}</div>
            <div class="px-4 py-2 rounded-md">{tag.name}</div>
          </a>
        {/each}
      </div>
    </Container>
  </div>
  <hr />

  <div class="flex-grow">
    <div class="px-8 lg:px-16 py-4">
      <MasonryInfiniteGrid
        gap={40}
        align="center"
        {items}
        on:requestAppend={() => {
          if (reachedEnd || loading) {
            return
          }
          loading = true
          loadMoreStories().then((newItems) => {
            items = newItems
          })
          pageNumber++
          loading = false
        }}
        let:visibleItems
      >
        {#each visibleItems as item}
          <div class="item max-w-full md:max-w-md">
            <a href="/stories/{item.data.slug}" class=" break-inside-avoid shadow flex flex-col group rounded-md">
              {#if item.data.image.src !== ''}
                <div class="relative rounded-md shadow">
                  <img
                    src={item.data.image.src}
                    srcset={item.data.image.srcset}
                    sizes={item.data.image.sizes}
                    loading="lazy"
                    alt={item.data.image.alt}
                    data-width={item.data.image.width}
                    data-height={item.data.image.height}
                    class="object-cover rounded-md rounded-b-none overflow-hidden block h-auto max-w-auto w-full object-center group-hover:opacity-75"
                  />
                  <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
                </div>
              {/if}
              <div class="px-4 py-3 bg-white rounded-md">
                <h3 class="font-bold text-xl">{item.data.title}</h3>
                <p class="line-clamp-3 mb-1 text-gray-500">{item.data.content}</p>
                <p class="text-sm text-gray-500">{item.data.footer}</p>
              </div>
            </a>
          </div>
        {/each}
      </MasonryInfiniteGrid>
    </div>
  </div>

  <hr />

  <div class="bg-white py-6">
    <Container>
      <a
        class="text-gray-700 decoration-red-triarc justify-center flex space-x-2 underline flex-grow xl:text-right"
        href="https://www.linkedin.com/company/triarc-laboratories-ltd/mycompany/"
      >
        <span>Folge uns auf</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 448 512"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          /></svg
        >
      </a>
    </Container>
  </div>

  <Footer />
</div>

<style lang="postcss">
  .badge {
    @apply bg-white border-r-2 border-gray-100 rounded rounded-r-none  px-4 py-2;
  }
  /*noinspection CssUnusedSymbol*/
  .active {
    @apply bg-white;
  }
  .active .badge {
    @apply bg-blue-triarc text-white z-10;
  }
  .item {
    transition: all ease 0.2s;
  }
</style>
