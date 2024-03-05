<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  // import heroImage from '../assets/hero/triarc-meetingroom-2000.jpg?width=300;600;1000;2000&format=webp&metadata'

  export let title: string
  export let content: string
  export let imageSrc: string
  export let imageAlt: string
  export let image

  const srcset = image.map((i) => `${i.src} ${i.width}w`).join(', ')
</script>

<div class="relative bg-blue-triarc">
  <div class="absolute inset-0">
    <img
      class="h-full w-full object-cover"
      sizes="(max-width: 1000px) 400px, 800px"
      {srcset}
      src="{imageSrc}.webp"
      alt={imageAlt}
    />
    <div class="absolute inset-0 bg-green-triarc mix-blend-multiply" aria-hidden="true" />
  </div>
  <Container>
    <div class="py-24 sm:py-32">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
      <p class="mt-6 max-w-3xl text-xl text-white">{content}</p>
    </div>
  </Container>
</div>
