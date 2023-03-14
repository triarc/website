<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import Footer from '$lib/components/Footer.svelte'

  let contents: BlockContent[] = [
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
  <title>Custom Software - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  <Hero title="Custom Software" content="Was wir bieten und einbringen können">

  </Hero>

  {#each contents as content}
    <Block bind:content />
  {/each}


  <div class="flex justify-center px-6 py-12">
    <a
      href="https://www.swissmadesoftware.org/en/companies/triarc-laboratories-ltd./home.html"
      rel="noreferrer"
      target="_blank"
    >
      <img src="/logos/swiss-logo.png" width="273" height="46" alt="swissmadesoftware" />
    </a>
  </div>

  <Technology />


  <Footer></Footer>
</div>
