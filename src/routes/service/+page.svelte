<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type {BlockContent} from '$lib/components/Block.svelte'

  let contents: BlockContent[] = [
    {
      title: 'Beratung',
      content:
        'Die Digitalisierung und der technische Fortschritt schreiten in grossen Schritten voran. Es ist Zeit für Unternehmen traditionelle Modelle zu überdenken und die Chancen der Digitalisierung zu nutzen - und nicht nur auf der technischen Ebene. \n' +
        '\n' +
        'Unsere Digitale Transformationsberatung unterstützt Kunden bei der Analyse und Identifizierung von Chancen innerhalb des digitalen Wandels und bei der Erarbeitung von konkreten Handlungsfelder um die Ziele der Digitalisierung zu erreichen. \n' +
        '\n' +
        'Der technische Aspekt, die Prozesse, die Strukturen, die Unternehmenskultur und der Mensch gehen Hand in Hand.',
      steps: [{
        title: 'Strategie & Vision',
        content: 'Strategie & Vision: Zusammen erarbeite wir eine Vision und Ziele, wohin die Reise der digitalen Transformation gehen soll, getragen vom Management und geteilt mit den Mitarbeitern.'
      }, {
        title: 'Strukturen',
        content: 'Ein verbundenes IT-Ökosystem, das passende Organisationsmodell und die richtigen Qualifikationen ebnen den Weg der Digitalisierung. Wir analysieren status quo und zeigen Chancen auf.'
      }, {
        title: 'Prozesse',
        content: 'Bevor wir neue Technologien und Software einführen analysieren und optimieren wir die betroffenen Geschäftsprozesse und passen sie an das neue digitale Arbeitsmodell an.'
      }, {
        title: 'Mitarbeiter',
        content: 'Der Mensch steht im Mittelpunkt der Digitalisierung. Schlussendlich sollen die neuen Prozesse und Applikationen gelebt und angewendet werden. Doch oft fühlen sich die Mitarbeiter durch die angestrebte Veränderung verunsichert. Wir begleiten die MItarbeiter durch die Transformation.'
      }],
    },
    {
      title: 'Software Entwicklung',
      content:
        'Egal ob Webseite, App oder',
      image: {src: 'img/intro/lost_online.svg', alt: 'Beratung'},
      link: {href: '/service#consulting', text: 'Beratung'}
    },
  ]
</script>

<svelte:head>
  <title>Unsere Dienstleistung - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  {#each contents as content}
    <Block bind:content />
  {/each}
</div>
