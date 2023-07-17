<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import pascal from '../../../static/team/pascal.jpg?width=500&format=webp;png&metadata'

  let contents: BlockContent[] = [
    {
      quote: {
        images: pascal,
        content:
          'Wir investieren gezielt in Innovation, um sicherzustellen, dass wir unseren Kunden Zugang zu den neuesten und besten Technologien bieten können. In unserer Kernkompetenz als technologischer Partner beteiligen wir uns an Startups und bringen Produkte zur Marktreife.',
        person: 'Pascal Bertschi',
        personTitle: 'CCO / Partner',
        email: 'pascal@triarc-labs.com',
        highlight: 'green',
        linkedin: 'https://www.linkedin.com/in/pascal-bertschi-9b00b480/',
      },
    },
    {
      title: 'Fair Pizza',
      content:
        'Fair Pizza bietet Restaurants eine einfache und günstige Alternative Angebot selbständig Online zu\n' +
        '              verkaufen. Die Whitelabel Lösung bietet eine Vielzahl von Konfigurationsmöglichkeiten inklusive einem\n' +
        '              Pizzabuilder. Mit Stripe lassen sich die Zahlungen bequem online abwickeln.',

      image: { src: 'img/lab/fairpizza-icon-512.png', width: 220, alt: 'slothi' },
      link: { href: 'https://fairpizza.ch', text: 'Mehr dazu', target: '_blank' },
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
      link: { href: 'https://slothi.ch', text: 'Mehr dazu', target: '_blank' },
    },
  ]
</script>

<svelte:head>
  <title>Innovation Lab - triarc-labs</title>
</svelte:head>

<Hero
  title="Innovation Lab"
  content="Innovationen sind der Schlüssel zu Wachstum und Erfolg. In unserem Lab fördern wir innovative und wettbewerbsfähige Businessideen, erstellen Machbarkeitsanalysen und entwickeln MVPs (Minimal Viable Products). "
/>

<div class="bg-white min-h-screen">
  {#each contents as content}
    <Block bind:content />
  {/each}

  <Footer />
</div>
