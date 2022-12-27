<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'

  let contents: BlockContent[] = [
    {
      title: 'Digitale Transformation. Eine ganzheitliche Aufgabe.',
      content:
        'Die Begleitung durch den ganzen Transformationprozess garantiert nachhaltigen Erfolg bei der Umsetzung der Digitalisierung. Die richtige Strategie, optimale Prozesse, sinnvolle Organisationsstrukturen und der Mindset der Mitarbeiter ebnen den Weg zum Erfolg der neuen Technologie.',
      image: { src: 'img/intro/building_websites.svg', alt: 'Software Development Team' },
      link: { href: '/service', text: 'Unsere Dienstleistung' },
    },
    {
      title: 'Change Management. Der Mensch steht im Mittelpunkt.',
      content:
        'Eine Veränderung ist erst dann erfolgreich, wenn sie sich nachhaltig im Unternehmen verankert. Dabei spielen die Mitarbeiter eine zentrale Rolle. Nur mit einer gemeinsamen Vision und der Erkennung der Notwendigkeit blicken die Mitarbeiter der Veränderung motiviert entgegen. Wir begleiten die Mitarbeiter durch die Transformation, nehmen ihr Ängste und Befürchtungen ernst, binden sie im Entwicklungsprozess mit ein und unterstützen sie bei der Einführung der neuen Technologie.',
      image: { src: 'img/intro/engineering_team.svg', alt: 'Beratung' },
      link: { href: '/service#consulting', text: 'Beratung' },
    },
    {
      title: 'Die Software muss zum Kunden passen. Nicht umgekehrt.',
      content:
        'Die Vorteile der Digitalisierung lassen sich nur dann voll ausschöpfen, wenn die Software-Lösung exakt Ihren Bedürfnissen entspricht. Basierend auf der Realität Ihres Alltags erarbeiten wir zusammen Anforderungen und Ideen, stets mit dem Nutzer im Fokus. Das Produkt testen wir eingehend und passen es solange an, bis es perfekt sitzt.',
      image: { src: 'img/custom-software/robotics.svg', alt: 'Custom Software' },
      link: { href: '/service#custom-software', text: 'Custom Software Entwicklung' },
    },
    {
      title: 'Knowhow und Erfahrung sind die Grundzutaten für erfolgreiche Softwareprojekte.',
      content:
        'Unsere Kundschaft ist breit gefächert. Unser Portfolio ist es auch: In den über zehn Jahren unseres Bestehens ist ein branchenübergreifendes fundiertes Knowhow entstanden, das in die Projekte der Zukunft einfliesst. In neue Fachgebiete arbeiten wir uns mit derselben Leidenschaft ein, rasch und kompetent.',
      image: { src: 'img/custom-software/hacker_mind.svg', alt: 'Digitales Know-How' },
      link: { href: '/reference', text: 'Unsere Referenzen' },
    },
    {
      title: 'Perfekt eingebunden in die (Software-)Familie.',
      content:
        'Erst mit der Integration in Ihr Software-Ökosystem entfaltet sich das volle Potenzial neuer Applikationen. Mit unseren Schnittstellenlösungen binden wir die Applikation nahtlos ein. Damit entfallen Medienbrüche und Prozesse greifen nahtlos ineinander. Dank Echtzeit-Integration können zahlreiche Anwender mehrerer Systeme parallel und Hand in Hand arbeiten. Gut zu wissen: Für die Zusammenarbeit mit Abacus, SAP und Dynamics bringen wir viel Erfahrung mit.',
      image: { src: 'img/custom-software/product_teardown.svg', alt: 'Projektportfolio' },
      link: { href: '/service#integration', text: 'Software Integration' },
    },
    {
      title: 'Schnell und flexibel durch agiles Projektmanagement',
      content:
        'Kaum ein anderer Prozess ist so sehr von Dynamik geprägt wie die Digitalisierung. In der agilen Softwareentwicklung arbeiten wir deshalb eng mit Ihnen zusammen und halten den Arbeitsprozess schlank. In regelmässigen Intervallen beurteilen wir gemeinsam den Zwischenstand unserer Arbeit. So sind Sie jederzeit auf dem neuesten Stand – und wir können schnell und flexibel auf neue Erkenntnisse und Anforderungen reagieren. Durch dieses iterative Vorgehen behalten Sie stets die Kontrolle.',
      image: { src: 'img/custom-software/scrum_board.svg', alt: 'Scrum Board' },
      link: { href: '/service#agil', text: 'Agile Software' },
    },
  ]
</script>

<svelte:head>
  <title>Methodik - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  {#each contents as content}
    <Block bind:content />
  {/each}

  <Technology />
</div>
