<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Block from '$lib/components/Block.svelte'
  import serge from '$lib/assets/team/serge.jpg?format=webp;png&enhanced'

  import heroImage from '$lib/assets/hero/Projekte.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import Partners from '$lib/index/Partners.svelte'
  import NavJump from '$lib/components/NavJump.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'

  let content: BlockContent = {
    quote: {
      image: serge,
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
  image={heroImage}
  imageAlt="Triarc Reference Projects Header"
/>

<div class="bg-white">
  <References />
  <Block bind:content />
  <Customers />
  <Partners />
  <NavJump />
  <Footer />
</div>
