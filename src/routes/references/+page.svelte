<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Block from '$lib/components/Block.svelte'
  import dave from '../../../static/team/dave.jpg?width=500&format=webp;png&metadata'
  import heroImage from '/src/lib/assets/hero/Projekte.jpg?width=300;600;1000;2000&format=webp&metadata'
  import Partners from '$lib/index/Partners.svelte'
  import NavJump from '$lib/components/NavJump.svelte'

  let content: BlockContent = {
    quote: {
      images: dave,
      content: 'Gewinnen Sie durch maßgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!',
      person: 'Dave Haug',
      personTitle: 'Business Development',
      email: 'dave@triarc-labs.com',
      highlight: 'green',
      linkedin: 'https://www.linkedin.com/in/dave-haug-442064a5/',
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
