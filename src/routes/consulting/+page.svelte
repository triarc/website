<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'

  let contents: BlockContent[] = [
    {
      title: 'Wir bauen Brücken zwischen Mitarbeiter, Prozesse und Technologien.',
      content:
        'Wir betrachten die digitale Transformation als ganzheitliche Aufgabe. Mit einem menschenorientierten Ansatz begleiten wir durch die Transformation. Dabei optimieren wir Prozesse, erarbeiten die richtige Vision und Strategie, definieren Strukturen und begleiten die Mitarbeiter durch die Veränderungen.',
      image: { src: 'img/intro/lost_online.svg', height: 271, alt: 'Beratung' },
      link: { href: '/products', text: 'Unsere Produkte' },
    },
    {
      title: 'Change Management. Der Mensch steht im Mittelpunkt.',
      content:
        'Eine Veränderung ist erst dann erfolgreich, wenn sie sich nachhaltig im Unternehmen verankert. Dabei spielen die Mitarbeiter eine zentrale Rolle. Nur mit einer gemeinsamen Vision und der Erkennung der Notwendigkeit blicken die Mitarbeiter der Veränderung motiviert entgegen. Wir begleiten die Mitarbeiter durch die Transformation, nehmen ihr Ängste und Befürchtungen ernst, binden sie im Entwicklungsprozess mit ein und unterstützen sie bei der Einführung der neuen Technologie.',
      image: { src: 'img/intro/engineering_team.svg', alt: 'Beratung' },
      link: { href: '/services#consulting', text: 'Beratung' },
    },
    {
      title: 'Beratung',
      content:
        'Die Digitalisierung und der technische Fortschritt schreiten in grossen Schritten voran. Es ist Zeit für Unternehmen traditionelle Modelle zu überdenken und die Chancen der Digitalisierung zu nutzen - und nicht nur auf der technischen Ebene. \n' +
        '\n<br/><br/>' +
        'Unsere Digitale Transformationsberatung unterstützt Kunden bei der Analyse und Identifizierung von Chancen innerhalb des digitalen Wandels und bei der Erarbeitung von konkreten Handlungsfelder um die Ziele der Digitalisierung zu erreichen. \n' +
        '\n<br/><br/>' +
        'Der technische Aspekt, die Prozesse, die Strukturen, die Unternehmenskultur und der Mensch gehen Hand in Hand.',

      image: { src: 'img/intro/lost_online.svg', alt: 'Beratung' },
    },
    {
      title: 'Unser Beratungsprozess',
      steps: [
        {
          title: 'Strategie & Vision',
          content:
            'Zusammen erarbeite wir eine Vision und Ziele, wohin die Reise der digitalen Transformation gehen soll, getragen vom Management und geteilt mit den Mitarbeitern.',
        },
        {
          title: 'Strukturen',
          content:
            'Ein verbundenes IT-Ökosystem, das passende Organisationsmodell und die richtigen Qualifikationen ebnen den Weg der Digitalisierung. Wir analysieren status quo und zeigen Chancen auf.',
        },
        {
          title: 'Prozesse',
          content:
            'Bevor wir neue Technologien und Software einführen analysieren und optimieren wir die betroffenen Geschäftsprozesse und passen sie an das neue digitale Arbeitsmodell an.',
        },
        {
          title: 'Mitarbeiter',
          content:
            'Der Mensch steht im Mittelpunkt der Digitalisierung. Schlussendlich sollen die neuen Prozesse und Applikationen gelebt und angewendet werden. Doch oft fühlen sich die Mitarbeiter durch die angestrebte Veränderung verunsichert. Wir begleiten die Mitarbeiter durch die Transformation.',
        },
      ],
    },
  ]
</script>

<svelte:head>
  <title>Beratung - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  <Hero title="Beratung" content="Was wir bieten und einbringen können">

  </Hero>

  {#each contents as content}
    <Block bind:content />
  {/each}

  <Footer></Footer>
</div>
