<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import elke from '$lib/assets/team/elke.jpg?width=500&format=webp;png&metadata&enhanced'
  import Footer from '$lib/components/Footer.svelte'
  import heroImage from '$lib/assets/hero/CustomSoftware.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent } from '$lib/components/TypeDefinitions'

  let contents: BlockContent[] = [
    {
      quote: {
        image: elke,
        content:
          'Die Software muss zum Kunden passen. Nicht umgekehrt. Die Vorteile der Digitalisierung lassen sich nur dann voll ausschöpfen, wenn die Software-Lösung exakt den Bedürfnissen entspricht.',
        person: 'Elke Engel',
        personTitle: 'CFO / Partner',
        email: 'elke@triarc-labs.com',
        highlight: 'blue',
        linkedin: 'https://www.linkedin.com/in/elke-engel-6761998/',
      },
    },
    {
      title: 'Lösungen entwickeln',
      content:
        'Dank unserer jahrelangen Erfahrung und Knowhow sind wir in der Lage, einzigartige Lösungen zu entwickeln, die den Kunden helfen, ihre Ziele effizient und kosteneffektiv zu erreichen. Wir verstehen, dass jedes Unternehmen einzigartig ist und dass es keine "One-Size-Fits-All"-Lösungen gibt.<br/><br/>' +
        'Unser Ziel ist es, unseren Kunden die besten und innovativsten Lösungen zu bieten, die ihnen dabei helfen, ihr Geschäft zu verbessern und ihre Wettbewerbsfähigkeit zu erhöhen.',
    },
    {
      title: 'Unser agiler Entwicklungsprozess',
      content:
        'Wir führen unsere Projekte erfolgreich seit einem Jahrzehnt agil. Diese Methode hat sich sowohl für uns, wie auch für den Kunden immer bewährt. Unser agiler Entwicklungsprozess besteht aus vier Schritten, welche sich pro Sprint wiederholen.',
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
          content: 'Die Entwicklung beginnt, es wird fleissig getestet und optimiert bis zum Review Meeting.',
        },
        {
          title: 'Review',
          content:
            'Die Entwicklung ist abgeschlossen und das Resultat kann vom Kunden getestet werden. Sobald abgenommen, gehts direkt in den produktiven Betrieb und die Anwender dürfen sich über die neusten Änderungen freuen.',
        },
      ],
    },
    // {
    //   title: 'Knowhow und Erfahrung sind die Grundzutaten für erfolgreiche Softwareprojekte.',
    //   content:
    //     'Unsere Kundschaft ist breit gefächert. Unser Portfolio ist es auch: In den über zehn Jahren unseres Bestehens ist ein branchenübergreifendes fundiertes Knowhow entstanden, das in die Projekte der Zukunft einfliesst. In neue Fachgebiete arbeiten wir uns mit derselben Leidenschaft ein, rasch und kompetent.',
    //   image: { src: 'img/custom-software/hacker_mind.svg', alt: 'Digitales Know-How' },
    //   link: { href: '/references', text: 'Unsere Referenzen' },
    // },
    // {
    //   title: 'Software Entwicklung',
    //   content:
    //     'Der Bedarf an Software ist heutzutage nicht mehr wegzudenken. Selbst der Smoothie-Mixer hat inzwischen eine App, der Wecker eine Bluetooth Integration und der Kühlschrank einen Touchscreen.<br/><br/>' +
    //     'Die Digitalisierung führt zu vielen neuen Möglichkeiten und bringt auch neue Herausforderungen mit sich. ' +
    //     'Standardsoftware ist eine effiziente Lösung, führt jedoch oft nicht zum gewünschten Ergebnis. <br/><br/>' +
    //     'Unserer Softwareentwicklung öffnet neue Türen und kennt keine Grenzen.',
    //   image: { src: 'img/custom-software/pair_programming.svg', alt: 'Programmieren' },
    // },
    {
      title: 'Vorteile der agilen Entwicklung',
      steps: [
        {
          title: 'Flexibilität',
          content:
            'Während sich das Projekt entwickelt, entwickeln sich auch die Bedürfnisse und Anforderungen. Die agile Softwareentwicklung ermöglicht es, flexibel auf Hindernisse und neue Anforderungen im Entwicklungsprozess zu reagieren. Änderungswünsche können nach jedem Zyklus berücksichtigt werden.',
        },
        {
          title: 'Qualität durch Lerneffekte',
          content:
            'Mit jedem Entwicklungszyklus erzielt man Lerneffekte, die dazu beitragen, die Qualität der Software kontinuierlich zu verbessern. Im Vergleich zur klassischen Softwareentwicklung wird auf diese Weise eine Software entwickelt, die genau den Bedarf des Kunden deckt und ihren Zweck erfüllt.',
        },
        {
          title: 'Effizienzsteigerung',
          content:
            'Durch die schrittweise Entwicklung und kontinuierlichem Testen werden Fehler und Fehlentwicklungen früh entdeckt und können sofort eliminiert werden.',
        },
        {
          title: 'Geringeres Risiko',
          content:
            'In der klassischen Softwareentwicklung werden Schwachstellen oder falsch definierte Anforderungen erst am Ende sichtbar. Die agile Arbeitsweise beugt diesen Risiken vor, indem mögliche Schwachstellen während des Entwicklungsprozesses aufgedeckt werden und Anforderungen flexibel angepasst werden können.',
        },
        {
          title: 'Transparente Kommunikation',
          content:
            'Die Teams sind untereinander und mit dem Kunden im ständigen Austausch. Der Kunde ist jederzeit auf dem aktuellen Stand und in die Entwicklung involviert. Mögliche Änderungen oder Hindernisse können direkt kommuniziert werden. Dadurch wird eine enge Zusammenarbeit gefördert, welche sich wiederum positiv auf die Qualität der Software auswirkt.',
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
    }
  ]
</script>

<svelte:head>
  <title>Custom Software - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  <Hero
    title="Custom Software"
    content="Als Custom Software Firma sind wir der ideale Partner für Unternehmen, die nach individuellen Softwarelösungen suchen. Wir arbeiten eng mit unseren Kunden zusammen und entwickeln massgeschneiderte Lösungen, die genau auf ihre Bedürfnisse zugeschnitten sind."
    imageSrc={heroImage}
    imageAlt="Triarc Custom Software Header"
  />

  {#each contents as content}
    <Block bind:content />
  {/each}

  <Footer />
</div>
