<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'

  let contents: BlockContent[] = [
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
    {
      title: 'Software Entwicklung',
      content:
        'Der Bedarf an Software ist heutzutage nicht mehr wegzudenken. Selbst der Smoothie-Mixer hat inzwischen eine App, der Wecker eine Bluetooth Integration und der Kühlschrank einen Touchscreen.<br/><br/>' +
        'Die Digitalisierung führt zu vielen neuen Möglichkeiten und bringt auch neue Herausforderungen mit sich. ' +
        'Standardsoftware ist eine effiziente Lösung, führt jedoch oft nicht zum gewünschten Ergebnis. <br/><br/>' +
        'Unserer Softwareentwicklung öffnet neue Türen und kennt keine Grenzen.',
      image: { src: 'img/custom-software/pair_programming.svg', alt: 'Programmieren' },
    },
    {
      title: 'Unser Entwicklungsprozess',
      content:
        'Wir führen unsere Projekte erfolgreich seit einem Jahrzehnt agil. Diese Methode hat sich sowohl für uns, wie auch für den Kunden immer bewährt. Unser angiler Entwicklungsprozess besteht aus vier Schritten, welche sich pro Sprint wiederholen.',
      steps: [
        {
          title: 'Concept',
          content:
            'Zusammen erarbeiten wir Ziele sowie Anforderungen, welche erfüllt werden sollen. Gemeinsam erarbeitet durch Management, Mitarbeitern sowie unserer Projektleitung.',
        },
        {
          title: 'Planning',
          content:
            'Nach einer Aufarbeitung der Anforderungen und Einschätzung des Aufwands, werden Anforderungen zusammen mit dem Aufwand priorisiert, verschoben oder angepasst. Das Resultat ist ein Sprint mit Anforderungen von 100-180 Stunden Entwicklungsaufwand.',
        },
        {
          title: 'Entwicklung',
          content:
            'Die Entwicklung beginnt, es wird fleissig getestet und optimiert bis zum Review Meeting.',
        },
        {
          title: 'Review',
          content:
            'Die Entwicklung ist abgeschlossen und das Resultat kann vom Kunden getestet werden. Sobald abgenommen, gehts direkt in den produktiven Betrieb und die Anwender dürfen sich über die neusten Änderungen freuen.',
        },
      ],
    },
    {
      title: 'Wartung / Hosting',
      content:
        'Der Betrieb sowie die Wartung unserer Software ist uns ein wichtiges Anliegen. Wir betreiben unsere Software flexibel in unserem Cloud Angebot oder auf deinen vorhandenen Servern.' +
        '<br/><br/>' +
        'Regelmässige Wartung der Software sowie das Einspielen von sicherheitsrelevanten Patches ist für uns ein Routine-Job und läst uns Nachts besser schlafen.',
      image: { src: 'img/custom-software/maintenance.svg', alt: 'Wartung' },
    },
  ]
</script>

<svelte:head>
  <title>Unsere Dienstleistung - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  <Hero title="Unsere Dienstleistung" content="Was wir bieten und einbringen können">

  </Hero>

  {#each contents as content}
    <Block bind:content />
  {/each}
</div>
