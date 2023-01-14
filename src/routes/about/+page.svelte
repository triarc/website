<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Manifest from '$lib/index/Manifest.svelte'
  import TeamMembers from '$lib/index/TeamMembers.svelte'
  import Hero from '$lib/components/Hero.svelte'

  let contents: BlockContent[] = [
    {
      title: 'Für Ihren Fortschritt.',
      content:
        'Wir sind getrieben das nächste, höhere, bessere Level zu erreichen – für uns, vor allem aber für unsere Kunden, für Sie.\n' +
        '\n' +
        'Wir ruhen nicht Herausforderndes zu meistern, Kompliziertes zu vereinfachen, Effizienz zu steigern oder Schwerfälliges zu vereinfachen damit Sie ihr nächstes Level erreichen.\n',
      image: { src: 'img/intro/in_progress.svg', height: 271, alt: 'Fortschritt' },
      link: { href: '/services#consulting', text: 'Unsere Beratung' },
    },
    {
      title: 'Software passend für Sie.',
      content:
        'So spezifisch Ihre Bedürfnisse und Anforderungen sind, sollten auch die technologischen Lösungen sein. Standardisierte Software erfüllt selten anspruchsvolle Kunden- oder Endnutzerbedürfnisse.\n' +
        '\n' +
        'Als Spezialisten konzipieren und entwickeln wir ausschliesslich inhouse. Weil es für uns ausser Frage steht, dass die Lösung Ihren Anforderunge entsprechen muss und nicht umgekehrt.',
      image: { src: 'img/custom-software/product_teardown.svg', alt: 'Projektportfolio' },
      link: { href: '/services#software', text: 'Unsere Entwicklung' },
    },
    {
      title: 'Digitalisierung geht nur zusammen.',
      content: 'Topform erreichen wir nur in enger Zusammenarbeit mit Ihnen. Dann erkennen wir die genauen Bedürfnisse und können Ihre Erfahrungen und Anforderungen fortlaufend in den Prozess einbinden.\n' +
        '\n' +
        'Unsere Form der co-kreativen, agilen, iterativen und ja, manchmal auch aufreibenden, direkten Zusammenarbeit ist ein grundlegender Erfolgsfaktor für digitale Resultate die Sie weiterbringen.',
      image: { src: 'img/intro/shared_goals.svg', height: 271, alt: 'Gemeinsame Ziele' },
      link: { href: '/references', text: 'Unsere Referenzen' },
    },
    // {
    //   title: 'Ihre Manufaktur für digitale Innovation.',
    //   content:
    //     'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
    //   image: { src: 'img/intro/content_team.svg', height: 201, alt: 'Software Development Team' },
    //   link: { href: '#team', text: 'Digital Evolutionaries' },
    // },
    {
      title: 'Wir bauen Brücken zwischen Mitarbeiter, Prozesse und Technologien.',
      content:
        'Wir betrachten die digitale Transformation als ganzheitliche Aufgabe. Mit einem menschenorientierten Ansatz begleiten wir durch die Transformation. Dabei optimieren wir Prozesse, erarbeiten die richtige Vision und Strategie, definieren Strukturen und begleiten die Mitarbeiter durch die Veränderungen.',
      image: { src: 'img/intro/lost_online.svg', height: 271, alt: 'Beratung' },
      link: { href: '/products', text: 'Unsere Produkte' },
    },
    {
      title: 'Wir machen mehr aus dem, was heute ist:<br/>Das, was morgen sein wird.',
      content:
        'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.  \n',
      image: { src: 'img/intro/mobile_wireframe.svg', height: 181, alt: 'Custom Software Entwicklung' },
      link: { href: '/services#agil', text: 'Agile Entwicklung' },
    },
    {
      title: 'Wir tun gut daran, nicht mit der Zeit zu gehen.<br/>Sondern ihr voraus.',
      content:
        'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.',
      image: { src: 'img/intro/science.svg', height: 255, alt: 'Softwareentwicklungstechnologie' },
      link: { href: '/method#technology', text: 'Unser Techstack' },
    },
    {
      title: 'Wir können nicht alles,<br/>aber gewisse Dinge besser.<br/>Das sagen nicht wir, sondern unsere Kunden.',
      content:
        'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.',
      image: { src: 'img/intro/awards.svg', height: 248, alt: 'Kunde ist König' },
      link: { href: '/news?tag=success-story', text: 'Success stories' },
    },
  ]
</script>

<svelte:head>
  <title>Über uns - triarc-labs</title>
</svelte:head>


<Hero title="Über uns"
      content="Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können. Wir sind Ihre Manufaktur für digitale Innovation.">
</Hero>

<div class="bg-white">
  {#each contents as content}
    <Block bind:content />
  {/each}

  <Manifest />
  <TeamMembers />

  <div class="bg-white flex justify-center px-6 py-12">
    <a
      href="https://www.swissmadesoftware.org/en/companies/triarc-laboratories-ltd./home.html"
      rel="noreferrer"
      target="_blank"
    >
      <img src="/logos/swiss-logo.png" width="273" height="46" alt="swissmadesoftware" />
    </a>
  </div>
</div>
