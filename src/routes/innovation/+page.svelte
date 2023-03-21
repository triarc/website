<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Footer from '$lib/components/Footer.svelte'

  let contents: BlockContent[] = [
    {
      title: 'mLink',
      content:
        'μLink ist eine Kommunikationsschnittstelle mit dem Fokus, Informationen schnell auffindbar und schnell\n' +
        '              lesbar zu machen. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass\n' +
        '              Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind. Mit μLink lassen\n' +
        '              sich unbegrenzt Umsysteme in ein Software Ökosystem integrieren.',

      image: { src: 'img/mlink/tree.svg', alt: 'mlink logo' },
      link: { href: '/mlink', text: 'Mehr dazu', target: '_blank' }
    },
    {
      quote: {
        image: '/team/pascal.jpg',
        content: 'Innovationen sind der Schlüssel zu Wachstum und Erfolg in der Software-Branche.',
        person: 'Pascal Bertschi',
        personTitle: 'CCO / Partner',
        email: 'pascal@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/pascal-bertschi-9b00b480/',
      },
    },
    {
      title: 'Slothi',
      content:
        'Slothi soll deine Terminprobleme lösen. Eine smarte Lösung, welche dir den passenden Termin für alle\n' +
        '              Teilnehmer findet. \n\nDamit du möglichst einfach einen Termin planen kannst, wählst du den Zeitraum in welchem der Termin\n' +
        '              stattfinden soll. Die erforderliche Zeitdauer und die Teilnehmer welche daran teilnehmen sollen. Ab da\n' +
        '              übernimmt Slothi für dich und prüft die Verfügbarkeiten aller Teilnehmer. Du erhälst eine Auswahl an\n' +
        '              möglichen Terminvorschlägen und kannst einen fixen Termin einplanen.',

      image: { src: 'img/lab/slothi.svg', width: 200, alt: 'slothi' },
      link: { href: 'https://slothi.ch', text: 'Mehr dazu', target: '_blank' }
    },
    {
      title: 'Fair Pizza',
      content:
        'Fair Pizza bietet Restaurants eine einfache und günstige Alternative Angebot selbständig Online zu\n' +
        '              verkaufen. Die Whitelabel Lösung bietet eine Vielzahl von Konfigurationsmöglichkeiten inklusive einem\n' +
        '              Pizzabuilder. Mit Stripe lassen sich die Zahlungen bequem online abwickeln.',

      image: { src: 'img/lab/fairpizza-icon-512.png', width: 120, alt: 'slothi' },
      link: { href: 'https://fairpizza.ch', text: 'Mehr dazu', target: '_blank' }
    },
  ]
</script>

<Hero title="Innovation Lab" content="Was haben wir vollbracht und woraus ist es entstanden">

</Hero>

<div class="bg-white min-h-screen">

  {#each contents as content}
    <Block bind:content />
  {/each}

  <Footer></Footer>
</div>
