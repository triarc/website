<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Block from '$lib/components/Block.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import pascal from '$lib/assets/team/pascal.jpg?w=768&format=webp;png&metadata&enhanced'
  import mlinkLogo from '$lib/assets/img/mlink/tree.svg'
  import m3expressIcon from '$lib/assets/img/lab/m3express-icon.svg'
  import zimmerpflanzenIcon from '$lib/assets/img/lab/zimmerpflanzen-icon.svg'
  import fairpizzaIcon from '$lib/assets/img/lab/fairpizza-icon-512.png'
  import aiPoc from '$lib/assets/img/thumbnail/ai-poc-poster.png'
  import slothiIcon from '$lib/assets/img/lab/slothi.svg'
  import heroImage from '$lib/assets/hero/InnovationLab.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent } from '$lib/components/TypeDefinitions'

  let contents: BlockContent[] = [
    {
      quote: {
        image: pascal,
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
      title: 'Voice Reporting',
      content:
        'Das AI-unterstützte Voice Reporting lässt Menschen mit Arbeitsgeräten sprechen. Das Rapportieren von Zeit, Aufwänden, Leistungen, Materialien, usw. kann vor Ort, sei es auf der Baustelle, im Sportzentrum, in der Produktionshalle, bei Kunden, usw. durch Spracheingabe erfasst werden. Ein AI-Assistenz stellt sicher, dass alle benötigten Informationen abgefragt werden, um den Rapport abzuschliessen. Danach übermittelt das Voice Reporting Tool die Spracheingaben mittels Text an die Schnittstelle ins ERP und/oder in die Reporting-Applikation, je nach Bedürfnis. Der Verwendungszweck des Voice Reporting Tool kann individuell vom Kunden definiert und entsprechend angepasst werden.',
      smallVideo: {
        videoTitle: 'AI Proof of Concept',
        videoId: 'ai',
        poster: aiPoc,
        sources: [
          {
            src: 'https://storage.googleapis.com/triarc-website/ai-poc-1080p_h264.webm',
            type: 'video/webm',
          },
          {
            src: 'https://storage.googleapis.com/triarc-website/ai-poc-1080p.mp4',
            type: 'video/mp4',
          },
        ],
      },
    },
    {
      title: 'μLink Data-hub',
      content:
        'μLink ist eine Kommunikationsschnittstelle mit dem Fokus, Informationen schnell auffindbar und schnell lesbar zu machen. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind. Mit μLink lassen sich unbegrenzt Umsysteme in ein Software Ökosystem integrieren.',
      image: { src: mlinkLogo, alt: 'mlink logo' },
      link: { href: '/mlink', text: 'Mehr dazu', target: '_blank' },
    },
    {
      title: 'Zimmerpflanzen.de',
      content:
        'Ein Online-Shop für Zimmerpflanzen und Zubehör. Durch eine direkte Anbindung an die Schnittstellen der Züchter, ist die Zimmerpflanze in kürzester Zeit beim Kunden.',

      image: { src: zimmerpflanzenIcon, width: 200, alt: 'zimmerpflanzen.de' },
      link: { href: 'https://zimmerpflanzen.de', text: 'Mehr dazu', target: '_blank' },
    },
    {
      title: 'M3Express',
      content:
        'Die digitale Verbindung von der Baustelle bis zum Lieferanten. Erlaube deinen Kunden bequem Mulde, Kies oder Transport über die M3Express-App zu bestellen. Behalte als Lieferant jederzeit den Überblick und optimiere die Kommunikation zwischen Fahrer, Kunde und dir.',

      image: { src: m3expressIcon, width: 200, alt: 'm3express' },
      link: { href: 'https://m3express.ch', text: 'Mehr dazu', target: '_blank' },
    },
    {
      title: 'Fair Pizza',
      content:
        'Fair Pizza bietet Restaurants eine einfache und günstige Alternative Angebot selbständig Online zu\n' +
        '              verkaufen. Die Whitelabel Lösung bietet eine Vielzahl von Konfigurationsmöglichkeiten inklusive einem\n' +
        '              Pizzabuilder. Mit Stripe lassen sich die Zahlungen bequem online abwickeln.',

      image: { src: fairpizzaIcon, width: 220, alt: 'slothi' },
      link: { href: 'https://fairpizza.ch', text: 'Mehr dazu', target: '_blank' },
    },
    {
      title: 'Slothi',
      content:
        'Slothi soll deine Terminprobleme lösen. Eine smarte Lösung, welche dir den passenden Termin für alle\n' +
        '              Teilnehmer findet. \n\nDamit du möglichst einfach einen Termin planen kannst, wählst du den Zeitraum in welchem der Termin\n' +
        '              stattfinden soll. Die erforderliche Zeitdauer und die Teilnehmer welche daran teilnehmen sollen. Ab da\n' +
        '              übernimmt Slothi für dich und prüft die Verfügbarkeiten aller Teilnehmer. Du erhältst eine Auswahl an\n' +
        '              möglichen Terminvorschlägen und kannst einen fixen Termin einplanen.',

      image: { src: slothiIcon, width: 200, alt: 'slothi' },
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
  image={heroImage}
  imageAlt="Triarc InnovationLab Header"
/>

<div class="bg-white min-h-screen">
  {#each contents as content}
    <Block bind:content />
  {/each}

  <Footer />
</div>
