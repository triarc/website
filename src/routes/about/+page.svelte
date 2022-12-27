<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Manifest from '$lib/index/Manifest.svelte'
  import TeamMembers from '$lib/index/TeamMembers.svelte'

  let contents: BlockContent[] = [
    {
      title: 'Ihre Manufaktur für digitale Innovation.',
      content:
        'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
      image: { src: 'img/intro/content_team.svg', alt: 'Software Development Team' },
      link: { href: '#team', text: 'Digital Evolutionaries' },
    },
    {
      title: 'Wir bauen Brücken zwischen Mitarbeiter, Prozesse und Technologien.',
      content:
        'Wir betrachten die digitale Transformation als ganzheitliche Aufgabe. Mit einem menschenorientierten Ansatz begleiten wir durch die Transformation. Dabei optimieren wir Prozesse, erarbeiten die richtige Vision und Strategie, definieren Strukturen und begleiten die Mitarbeiter durch die Veränderungen.',
      image: { src: 'img/intro/lost_online.svg', alt: 'Beratung' },
      link: { href: '/service#consulting', text: 'Beratung' },
    },
    {
      title: 'Wir machen mehr aus dem, was heute ist:<br/>Das, was morgen sein wird.',
      content:
        'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.  \n',
      image: { src: 'img/intro/mobile_wireframe.svg', alt: 'Custom Software Entwicklung' },
      link: { href: '/service#custom-software', text: 'Custom Softwareentwicklung' },
    },
    {
      title: 'Wir tun gut daran, nicht mit der Zeit zu gehen.<br/>Sondern ihr voraus.',
      content:
        'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.',
      image: { src: 'img/intro/science.svg', alt: 'Softwareentwicklungstechnologie' },
      link: { href: '/method#technology', text: 'Custom Softwareentwicklung' },
    },
    {
      title: 'Wir können nicht alles,<br/>aber gewisse Dinge besser.<br/>Das sagen nicht wir, sondern unsere Kunden.',
      content:
        'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.',
      image: { src: 'img/intro/awards.svg', alt: 'Kunde ist König' },
      link: { href: '/reference', text: 'Kundenportfolio' },
    },
  ]
</script>

<svelte:head>
  <title>Über uns - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  {#each contents as content}
    <Block bind:content />
  {/each}

  <Manifest />
  <TeamMembers />

  <div class="bg-white flex justify-center px-6 py-12">
    <a
      href="https://www.swissmadesoftware.org/en/companies/triarc-laboratories-ltd./home.html"
      rel="noreferrer"
      target="_blank"
    >
      <img src="/logos/swiss-logo.png" alt="swissmadesoftware" />
    </a>
  </div>
</div>
