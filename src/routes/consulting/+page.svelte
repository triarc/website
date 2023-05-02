<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'

  let contents: BlockContent[] = [
    // {
    //   title: 'Wir bauen Brücken zwischen Mitarbeiter, Prozesse und Technologien.',
    //   content:
    //     'Wir betrachten die digitale Transformation als ganzheitliche Aufgabe. Mit einem menschenorientierten Ansatz begleiten wir durch die Transformation. Dabei optimieren wir Prozesse, erarbeiten die richtige Vision und Strategie, definieren Strukturen und begleiten die Mitarbeiter durch die Veränderungen.',
    //   image: { src: 'img/intro/lost_online.svg', height: 271, alt: 'Beratung' },
    //   link: { href: '/products', text: 'Unsere Produkte' },
    // },
    {
      title: 'Beratung',
      content:
        '\n<br/><br/>' +
        'Unser Digitalisierungsberatungsteam stellt sicher, dass die Digitalisierung für ein Unternehmen zum Erfolg wird. <br/><br/>Dafür ist nicht nur eine hochwertige Software relevant, sondern vorallem, dass sie genutzt wird und ihren Zweck erfüllt. Dies wird erreicht, wenn die Prozesse, Strukturen, Organisationskultur und Mitarbeiter sich mit dem technischen Fortschritt weiterentwickeln. <br/><br/>Wir unterstützen unsere Kunden bei der Analyse und Identifizierung von Chancen, Erstellung einer Transformations-Roadmap und der Umsetzung der definierten Massnahmen.  \n' +
        '\n<br/><br/>',

      image: { src: 'img/intro/lost_online.svg', alt: 'Beratung' },
    },
    {
      title: 'Visions-und Strategieentwicklung',
      content:
        'Für eine Transformation braucht es ein konkretes Zielbild. Wir entwickeln zusammen mit unseren Kunden eine Vision und Strategie ihrer Digitalisierung. Daraus entstehen Massnahmen für die konkrete Umsetzung und schlussendlich Erreichung des Zielbildes. So wird die massgeschneiderte Software für das ganze Unternehmen zum vollen Erfolg! ',
      image: { src: 'img/intro/strategy.svg', alt: 'Beratung' },
      link: { href: '/custom-software', text: 'Custom Software' },
    },
    {
      title: 'Change Management. Der Mensch steht im Mittelpunkt.',
      content:
        'Eine Veränderung ist erst dann erfolgreich, wenn sie sich nachhaltig im Unternehmen verankert. Dabei spielen die Mitarbeiter eine zentrale Rolle. Nur mit einer gemeinsamen Vision und der Erkennung der Notwendigkeit blicken die Mitarbeiter der Veränderung motiviert entgegen. <br/><br/>Wir begleiten die Mitarbeiter durch die Transformation, nehmen ihr Ängste und Befürchtungen ernst, binden sie im Entwicklungsprozess mit ein und unterstützen sie bei der Einführung der neuen Technologie.',
      image: { src: 'img/intro/team.svg', alt: 'Beratung' },
      link: { href: '/contact', text: 'Kontaktiere uns' },
    },

    {
      title: 'Strukturen und Prozesse',
      content:
        'Ein verbundenes IT-Ökosystem, das passende Organisationsmodell und die richtigen Qualifikationen ebnen den Weg der Digitalisierung. Wir analysieren status quo und zeigen Chancen auf.<br/><br/>Bevor wir neue Technologien und Software einführen analysieren und optimieren wir die betroffenen Geschäftsprozesse und passen sie an das neue digitale Arbeitsmodell an.<br/><br/> Interessiert? Dann kontaktiere uns für ein unverbindliches Erstgespräch.',
      image: { src: 'img/intro/process.svg', alt: 'Beratung' },
      link: { href: '/contact', text: 'Kontakt für mehr' },
    },

    {
      title: 'Führungs-, Team- und Mitarbeiter Coaching',
      content:
        'Die digitale Transformation birgt unzählige und vielschichtige Herausforderungen und Stolpersteine. Wir begleiten und befähigen Führungskräfte, Mitarbeiter und Teams auf dem Weg durch den Wandel. <br/><br/>Wir arbeiten mit einem systemisch-lösungsorientierten Beratungsansatz und verfolgen das Ziel der Selbstbefähigung. Je nach Bedarf agieren wir auch als Sparring-Partner.',
      image: { src: 'img/intro/coaching.svg', alt: 'Beratung' },
      link: { href: '/contact', text: 'Coaching Kontakt' },
    },

    {
      quote: {
        image: '/team/iris.jpg',
        content:
          'Der Mensch digitalisiert für die Menschen - ich stelle den User in den Mittelpunkt damit der Wandel von allen getragen und gelebt wird. Nur dann ist die Digitalisierung nachhaltig. ',
        person: 'Iris Zenegaglia',
        personTitle: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
        email: 'iris@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/iriszenegagliagloor/',
      },
    },
    {
      title: 'Beratungsinhalte',
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
  <Hero title="Beratung" content="Wir bauen Brücken zwischen Mitarbeiter, Prozesse und Technologien" />

  {#each contents as content}
    <Block bind:content />
  {/each}

  <Footer />
</div>
