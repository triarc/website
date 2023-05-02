<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Block from '$lib/components/Block.svelte'

  let content: BlockContent =
    {
      quote: {
        image: '/team/dave.jpg',
        content: 'Gewinnen Sie durch maßgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!',
        person: 'Dave Haug',
        personTitle: 'Business Development',
        email: 'dave@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/dave-haug-442064a5/',
      },
    }
</script>

<svelte:head>
  <title>Lösungen - triarc-labs</title>
</svelte:head>

<Hero title="Lösungen" content="Was haben wir vollbracht und woraus ist es entstanden">

</Hero>

<div class="bg-white">
  <References />
  <Block bind:content />
  <Customers />
  <Footer></Footer>
</div>
