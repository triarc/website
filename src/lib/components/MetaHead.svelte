<script lang="ts">
  import type { TriarcPageMetadata } from '$lib/components/TypeDefinitions'
  import { page } from '$app/stores'

  export let pageMetadata: TriarcPageMetadata
</script>

<svelte:head>
  <title>{pageMetadata.title}</title>

  <meta property="title" content={pageMetadata.metaTitle ?? pageMetadata.title} />
  <meta name="description" content={pageMetadata.description} />

  <meta property="og:url" content={$page.url.href} />
  <meta property="og:site_name" content="triarc laboratories Ltd." />
  <meta property="og:title" content={pageMetadata.metaTitle ?? pageMetadata.title} />
  <meta property="og:description" content={pageMetadata.description} />
</svelte:head>
