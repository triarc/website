<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import serge from '$lib/assets/team/serge.jpg?w=768&format=webp;png&metadata&enhanced'
  import marco from '$lib/assets/team/marco.jpg?w=768&format=webp;png&metadata&enhanced'
  import elke from '$lib/assets/team/elke.jpg?w=768&format=webp;png&metadata&enhanced'
  import iris from '$lib/assets/team/iris.jpg?w=768&format=webp;png&metadata&enhanced'
  import bammbamm from '$lib/assets/team/bambam.jpg?w=768&format=webp;png&metadata&enhanced'
  import heroImage from '$lib/assets/hero/Mission.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent } from '$lib/components/TypeDefinitions'

  import teardown from '$lib/assets/img/custom-software/product_teardown.svg'
  import goals from '$lib/assets/img/intro/shared_goals.svg'

  let contents: BlockContent[] = [
    {
      quote: {
        image: serge,
        content:
          'Für Ihren Erfolg zögern wir nicht Herausforderndes zu meistern, Kompliziertes zu vereinfachen, Effizienz zu steigern und Schwerfälliges zu beschleunigen.',
        person: 'Serge Müller',
        personTitle: 'CEO / Partner',
        email: 'serge@triarc-labs.com',
        highlight: 'green',
        linkedin: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
      },
    },
    {
      title: 'Software passend für Sie.',
      content:
        'So spezifisch Ihre Bedürfnisse und Anforderungen sind, sollten auch die digitalen Lösungen sein. Standardisierte Software erfüllt selten anspruchsvolle Kundenbedürfnisse und spezialisierte Leistungen.',
      image: { src: teardown, height: 281, alt: 'Projektportfolio' },
      link: { href: '/custom-software', text: 'Custom Software' },
    },
    {
      quote: {
        image: marco,
        content:
          'Als Spezialisten konzipieren und entwickeln wir massgeschneiderte Software, ausschliesslich inhouse. Für uns steht es ausser Frage, dass die Lösung Ihren spezifischen Anforderungen entsprechen muss und nicht umgekehrt.',
        person: 'Marco Schmidlin',
        personTitle: 'CTO / Partner',
        email: 'marco@triarc-labs.com',
        highlight: 'blue',
        linkedin: 'https://www.linkedin.com/in/marco-schmidlin-1444ab2a/',
      },
    },

    {
      title: 'Digitale Transformation ist menschlich ',
      content:
        'Technologie ist nur ein Teil der digitalen Transformation. Wir betrachten den Prozess ganzheitlich und verbinden die Technologie mit den Menschen, der Unternehmenskultur, den Prozessen und Strategie Ihrer Organisation.',
      image: { src: goals, height: 271, alt: 'Gemeinsame Ziele' },
      link: { href: '/consulting', text: 'Beratung' },
    },

    {
      quote: {
        image: iris,
        content:
          'Zusammen mit Ihnen stellen wir sicher, dass das Team die Veränderungen mitträgt und die neuen Prozesse gelebt werden. ',
        person: 'Iris Zenegaglia',
        personTitle: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
        email: 'iris@triarc-labs.com',
        highlight: 'green',
        linkedin: 'https://www.linkedin.com/in/iriszenegagliagloor/',
      },
    },
    {
      title: 'Digitalisierung geht nur zusammen.',
      content:
        'Topform erreichen wir nur in enger Zusammenarbeit mit Ihnen. Im interdisziplinären Team erkennen wir die exakten Bedürfnisse und binden Ihre Erfahrungen und Anforderungen fortlaufend in den Prozess ein.',
      link: { href: '/references', text: 'Referenzen' },
    },
    {
      quote: {
        image: elke,
        person: 'Elke Engel',
        personTitle: 'Project Lead / Partner',
        email: 'elke@triarc-labs.com',
        highlight: 'blue',
        linkedin: 'https://www.linkedin.com/in/elke-engel-6761998/',
        content:
          'Unsere Form der co-kreativen, agilen und ja, manchmal auch intensiven, direkten Zusammenarbeit ist ein grundlegender Erfolgsfaktor für digitale Resultate, die Sie weiterbringen. ',
      },
    },
    {
      title: 'Für uns ist es mehr als Arbeit',
      content:
        'Unseren Anspruch, revolutionäre Lösungen zu entwickeln, erreichen wir nur mit der Leidenschaft, die uns ausmacht. Da können Schnittstellen, Synapsen und Diskussionen auch mal heisslaufen.',
      //image: { src: 'img/intro/shared_goals.svg', height: 271, alt: 'Gemeinsame Ziele' },
      link: { href: '/innovation', text: 'Innovation Lab' },
    },
    {
      quote: {
        image: bammbamm,
        person: 'Bamm Bamm',
        personTitle: 'Head of Happiness',
        email: 'bammbamm@triarc-labs.com',
        highlight: 'red',
        linkedin: 'https://www.linkedin.com/company/triarc-laboratories-ltd/',
        content:
          'Denn wir lieben was wir tun, und dass wir das gemeinsam tun. So kommen Spass und Freude in der Zusammenarbeit mit triarc-labs garantiert nicht zu kurz.',
      },
    },

    // {
    //   title: 'Ihre Manufaktur für digitale Innovation.',
    //   content:
    //     'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
    //   image: { src: 'img/intro/content_team.svg', height: 201, alt: 'Software Development Team' },
    //   link: { href: '#team', text: 'Digital Evolutionaries' },
    // },

    // {
    //   title: 'Wir machen mehr aus dem, was heute ist:<br/>Das, was morgen sein wird.',
    //   content:
    //     'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.  \n',
    //   image: { src: 'img/intro/mobile_wireframe.svg', height: 181, alt: 'Custom Software Entwicklung' },
    //   link: { href: '/services#agil', text: 'Agile Entwicklung' },
    // },
    // {
    //   title: 'Wir tun gut daran, nicht mit der Zeit zu gehen.<br/>Sondern ihr voraus.',
    //   content:
    //     'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.',
    //   image: { src: 'img/intro/science.svg', height: 255, alt: 'Softwareentwicklungstechnologie' },
    //   link: { href: '/method#technology', text: 'Unser Techstack' },
    // },
    // {
    //   title: 'Wir können nicht alles,<br/>aber gewisse Dinge besser.<br/>Das sagen nicht wir, sondern unsere Kunden.',
    //   content:
    //     'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.',
    //   image: { src: 'img/intro/awards.svg', height: 248, alt: 'Kunde ist König' },
    //   link: { href: '/news?tag=success-story', text: 'Success stories' },
    // },
    // {
    //   title: 'Digitale Transformation. Eine ganzheitliche Aufgabe.',
    //   content:
    //     'Die Begleitung durch den ganzen Transformationprozess garantiert nachhaltigen Erfolg bei der Umsetzung der Digitalisierung. Die richtige Strategie, optimale Prozesse, sinnvolle Organisationsstrukturen und der Mindset der Mitarbeiter ebnen den Weg zum Erfolg der neuen Technologie.',
    //   image: { src: 'img/intro/building_websites.svg', alt: 'Software Development Team' },
    //   link: { href: '/services', text: 'Unsere Dienstleistung' },
    // },

    // {
    //   title: 'Perfekt eingebunden in die (Software-)Familie.',
    //   content:
    //     'Erst mit der Integration in Ihr Software-Ökosystem entfaltet sich das volle Potenzial neuer Applikationen. Mit unseren Schnittstellenlösungen binden wir die Applikation nahtlos ein. Damit entfallen Medienbrüche und Prozesse greifen nahtlos ineinander. Dank Echtzeit-Integration können zahlreiche Anwender mehrerer Systeme parallel und Hand in Hand arbeiten. Gut zu wissen: Für die Zusammenarbeit mit Abacus, SAP und Dynamics bringen wir viel Erfahrung mit.',
    //   image: { src: 'img/custom-software/product_teardown.svg', alt: 'Projektportfolio' },
    //   link: { href: '/services#integration', text: 'Software Integration' },
    // },
    // {
    //   title: 'Schnell und flexibel durch agiles Projektmanagement',
    //   content:
    //     'Kaum ein anderer Prozess ist so sehr von Dynamik geprägt wie die Digitalisierung. In der agilen Softwareentwicklung arbeiten wir deshalb eng mit Ihnen zusammen und halten den Arbeitsprozess schlank. In regelmässigen Intervallen beurteilen wir gemeinsam den Zwischenstand unserer Arbeit. So sind Sie jederzeit auf dem neuesten Stand – und wir können schnell und flexibel auf neue Erkenntnisse und Anforderungen reagieren. Durch dieses iterative Vorgehen behalten Sie stets die Kontrolle.',
    //   image: { src: 'img/custom-software/scrum_board.svg', alt: 'Scrum Board' },
    //   link: { href: '/services#agil', text: 'Agile Software' },
    // },
  ]
</script>

<svelte:head>
  <title>together we succeed - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  <Hero
    title="together we succeed"
    content="Für Ihren Fortschritt. Wir sind fokussiert das nächste, höhere Level zu erreichen - vor allem für unsere Kunden, für Sie."
    image={heroImage}
    imageAlt="Triarc Mission Header"
  />

  {#each contents as content}
    <Block bind:content />
  {/each}

  <!--  <Manifest />-->
  <!--  <TeamMembers />-->

  <Footer />
</div>
