<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Block from '$lib/components/Block.svelte'
  import dave from '../../../static/team/dave.jpg?width=500&format=webp;png&metadata'

  let contents: BlockContent[] = [
    {
      quote: {
        images: dave,
        content: 'Gewinnen Sie durch maßgeschneiderte Software einen entscheidenden Wettbewerbsvorteil!',
        person: 'Dave Haug',
        personTitle: 'Business Development',
        email: 'dave@triarc-labs.com',
        highlight: 'green',
        linkedin: 'https://www.linkedin.com/in/dave-haug-442064a5/',
      },
    },
    {
      title: 'μLink Datahub',
      content:
        'μLink ist eine Kommunikationsschnittstelle mit dem Fokus, Informationen schnell auffindbar und schnell lesbar zu machen. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind. Mit μLink lassen sich unbegrenzt Umsysteme in ein Software Ökosystem integrieren.',
      image: { src: 'img/mlink/tree.svg', alt: 'mlink logo' },
      link: { href: '/mlink', text: 'Mehr dazu', target: '_blank' },
    },
    {
      title: 'M3Express',
      content:
        'Die digitale Verbindung von der Baustelle bis zum Lieferanten. Erlaube deinen Kunden bequem Mulde, Kies oder Transport über die M3Express-App zu bestellen. Behalte als Lieferant jederzeit den Überblick und optimiere die Kommunikation zwischen Fahrer, Kunde und dir.',

      image: { src: 'img/lab/m3express-icon.svg', width: 200, alt: 'm3express' },
      link: { href: 'https://m3express.ch', text: 'Mehr dazu', target: '_blank' },
    },
  ]
</script>

<svelte:head>
  <title>Lösungen - triarc-labs</title>
</svelte:head>

<Hero title="Lösungen" content="Was haben wir vollbracht und woraus ist es entstanden" />

<div class="bg-white">
  <References />
  {#each contents as content}
    <Block bind:content />
  {/each}
  <Customers />
  <Footer />
</div>
