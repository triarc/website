<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Block from '$lib/components/Block.svelte'
  import serge from '../../../static/team/serge.jpg?width=500&format=webp;png&metadata'
  import heroImage from '/src/lib/assets/hero/Projekte.jpg?width=300;600;1000;2000&format=webp&metadata'
  import Partners from '$lib/index/Partners.svelte'
  import NavJump from '$lib/components/NavJump.svelte'

  let content: BlockContent = {
    quote: {
      images: serge,
      content: 'Gewinnen Sie durch maßgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!',
      person: 'Serge Müller',
      personTitle: 'CEO Triarc Laboratories',
      email: 'serge@triarc-labs.com',
      highlight: 'green',
      linkedin: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
    },
  }
</script>

<svelte:head>
  <title>Lösungen - triarc-labs</title>
</svelte:head>

<Hero
  title="Lösungen"
  content="Was haben wir vollbracht und woraus ist es entstanden"
  imageSrc="Projekte"
  imageAlt="Triarc Reference Projects Header"
  image={heroImage}
/>

<div class="bg-white">
  <References />
  <Block bind:content />
  <Customers />
  <Partners />
  <NavJump />
  <Footer />
</div>
