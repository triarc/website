<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte'
  import type { PageData } from './$types'
  export let data: PageData
  export let contactString: string = data.title
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import { goto, afterNavigate } from '$app/navigation'
  import { base } from '$app/paths'
  import { page } from '$app/stores'

  let previousPage: string = base

  $: schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    publisher: {
      '@type': 'Organization',
      name: 'triarc laboratories Ltd.',
      url: 'https://www.triarc-labs.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.triarc-labs.com/_app/immutable/assets/triarc-labs-black.DWW4zUTq.svg',
      },
    },
    author: {
      '@type': 'Person',
      name: data.primary_author.name ?? '',
    },
    headline: data.title,
    url: $page.url.href,
    datePublished: data.published_at ?? '',
    dateModified: data.updated_at ?? '',
    image: {
      '@type': 'ImageObject',
      url: data.feature_image,
    },
    description: data.meta_description ?? data.excerpt,
    mainEntityOfPage: $page.url.href,
  }

  afterNavigate(({ from }) => {
    previousPage = from?.url.pathname || previousPage
  })

  export function nav_back() {
    // if (window.history.length > 1) {
    //   window.history.back()
    // } else {
    //   window.location.href = '/stories'
    // }
    goto(previousPage)
  }
</script>

<svelte:head>
  <title>{data.title} - triarc-labs</title>
  <meta property="title" content={data.meta_title ?? data.title} />
  <meta property="og:title" content={data.meta_title ?? data.title} />
  <meta name="description" content={data.meta_description ?? data.excerpt ?? ''} />
  <meta property="og:description" content={data.meta_description ?? data.excerpt ?? ''} />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<div class="bg-white min-h-screen pt-16 md:pt-24 w-full">
  <Container>
    <div class="prose max-w-none lg:prose-xl prose-img:rounded-xl prose-a:text-blue-triarc">
      <div class="flex space-x-2 items-center bg-white mb-2">
        <button on:click={() => nav_back()} class="flex items-center text-blue-triarc fill-blue-triarc cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 448 512"
            ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
              d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z"
            /></svg
          >
        </button>
        <div>{data.title}</div>
      </div>
      <img
        src={data.feature_image}
        alt={data.feature_image_alt}
        class="object-cover rounded-md overflow-hidden shadow-inner mb-6 mt-0 mx-auto object-center group-hover:opacity-75"
      />
      <h1 class="text-4xl mb-3 font-bold">{data.title}</h1>
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is from trusted source -->
      <div>{@html data.html}</div>
    </div>
  </Container>
</div>
<ContactForm {contactString} />
<FooterNoContact />
