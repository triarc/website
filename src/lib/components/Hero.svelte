<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import type { Picture } from 'imagetools-core'
  export let title: string
  export let content: string | undefined
  export let image: Picture
  export let imageAlt: string
</script>

<div class="relative bg-blue-triarc">
  <div class="absolute inset-0">
    <enhanced:img
      class="h-full w-full object-cover"
      sizes="(max-width: 1000px) 400px, 800px"
      src={image}
      alt={imageAlt}
    />
    <div class="absolute inset-0 bg-green-triarc mix-blend-multiply" aria-hidden="true" />
  </div>
  <Container>
    <div class="py-24 sm:py-32">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{@html title}</h1>

      {#if content}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
        <p class="mt-6 max-w-3xl text-xl text-white">{@html content}</p>
      {/if}
    </div>
  </Container>
</div>
