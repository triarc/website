import type { MissionBlock, TriarcLandingPageText } from '$lib/components/TypeDefinitions'
import puzzle from '$lib/assets/icons/puzzle-piece-light-full.svg'
import gear from '$lib/assets/icons/gear-light-full.svg'
import rocket from '$lib/assets/icons/rocket-launch-light-full.svg'
import serge from '$lib/assets/team/serge.jpg?w=768&format=webp;png&metadata&enhanced'
import marco from '$lib/assets/team/marco.jpg?w=768&format=webp;png&metadata&enhanced'
import elke from '$lib/assets/team/elke.jpg?w=768&format=webp;png&metadata&enhanced'
import iris from '$lib/assets/team/iris.jpg?w=768&format=webp;png&metadata&enhanced'
import bammbamm from '$lib/assets/team/bambam.jpg?w=768&format=webp;png&metadata&enhanced'

// ToDo: add links to section pages
export const landingPageCards: TriarcLandingPageText = {
  content: {
    prefix: 'Wir sind',
    title: 'triarc laboratories.',
    description:
      'Von der Vision bis zur Andwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen. Wir sind erfahrene, engagierte Spezialisten, die Sie persönlich und individuell begleiten.',
  },
  strategy: {
    prefix: 'Wir übersetzen',
    title: 'Strategie\nin die Praxis.',
    description:
      'Mit klaren Entscheidungsgrundlagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.',
    iconSource: puzzle,
    sectionLink: '/strategy',
  },
  operations: {
    prefix: 'Wir reduzieren',
    title: 'Operativen\nReibungsverlust.',
    description:
      'Automatisierte Abläufe, intuitive Bedienung und gezielter Wissenstransfer sorgen für reibungslose Zusammenarbeit, hochwertige Daten und eine starke operative Performance.',
    iconSource: gear,
    sectionLink: 'operations',
  },
  future: {
    prefix: 'Wir sichern',
    title: 'Zukünftige\nWettbewerbs\u00ADfähigkeit.',
    description:
      'Skalierbare Lösungen, agile Strukturen und gezielte Innovation stärken die Wettbewerbsfähigkeit und ermöglichen eine klare Positionierung mit einem einzigartigen USP.',
    iconSource: rocket,
    sectionLink: '/future',
  },
}

export const missionPageQuotes: MissionBlock[] = [
  {
    content: {
      quote: {
        image: serge,
        highlight: 'white',
        content:
          'Für Ihren Erfolg zögern wir nicht Herausforderndes zu meistern, Kompliziertes zu vereinfachen, Effizienz zu steigern und Schwerfälliges zu beschleunigen.',
        person: 'Serge Müller',
        personTitle: 'CEO / Partner',
        email: 'serge@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
      },
    },
    divider: {
      title: 'Software passend für Sie.',
      content:
        'So spezifisch Ihre Bedürfnisse und Anforderungen sind, sollten auch die digitalen Lösungen sein. Standardisierte Software erfüllt selten anspruchsvolle Kundenbedürfnisse und spezialisierte Leistungen.',
      color: 'green-blue',
      buttonLabel: 'Custom Software',
      linksTo: '/custom-software',
    },
  },
  {
    content: {
      quote: {
        image: marco,
        highlight: 'white',
        content:
          'Als Spezialisten konzipieren und entwickeln wir massgeschneiderte Software, ausschliesslich inhouse. Für uns steht es ausser Frage, dass die Lösung Ihren spezifischen Anforderungen entsprechen muss und nicht umgekehrt.',
        person: 'Marco Schmidlin',
        personTitle: 'CTO / Partner',
        email: 'marco@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/marco-schmidlin-1444ab2a/',
      },
    },
    divider: {
      title: 'Digitale Transformation ist menschlich.',
      content:
        'Technologie ist nur ein Teil der digitalen Transformation. Wir betrachten den Prozess ganzheitlich und verbinden die Technologie mit den Menschen, der Unternehmenskultur, den Prozessen und Strategie Ihrer Organisation.',
      color: 'blue-red',
      buttonLabel: 'Beratung',
      linksTo: '/consulting',
    },
  },
  {
    content: {
      quote: {
        image: iris,
        highlight: 'white',
        content:
          'Zusammen mit Ihnen stellen wir sicher, dass das Team die Veränderungen mitträgt und die neuen Prozesse gelebt werden.',
        person: 'Iris Zenegaglia',
        personTitle: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
        email: 'iris@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/iriszenegagliagloor/',
      },
    },
    divider: {
      title: 'Digitalisierung geht nur zusammen.',
      content:
        'Topform erreichen wir nur in enger Zusammenarbeit mit Ihnen. Im interdisziplinären Team erkennen wir die exakten Bedürfnisse und binden Ihre Erfahrungen und Anforderungen fortlaufend in den Prozess ein.',
      color: 'green-blue',
      buttonLabel: 'Referenzen',
      linksTo: '/references',
    },
  },
  {
    content: {
      quote: {
        image: elke,
        highlight: 'white',
        content:
          'Unsere Form der co-kreativen, agilen und ja, manchmal auch intensiven, direkten Zusammenarbeit ist ein grundlegender Erfolgsfaktor für digitale Resultate, die Sie weiterbringen.',
        person: 'Elke Engel',
        personTitle: 'Project Lead / Partner',
        email: 'elke@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/in/elke-engel-6761998/',
      },
    },
    divider: {
      title: 'Für uns ist es mehr als Arbeit.',
      content:
        'Unseren Anspruch, revolutionäre Lösungen zu entwickeln, erreichen wir nur mit der Leidenschaft, die uns ausmacht. Da können Schnittstellen, Synapsen und Diskussionen auch mal heisslaufen.',
      color: 'red-green',
      buttonLabel: 'InnovationLab',
      linksTo: 'innovation',
    },
  },
  {
    content: {
      quote: {
        image: bammbamm,
        highlight: 'white',
        content:
          'Denn wir lieben was wir tun, und dass wir das gemeinsam tun. So kommen Spass und Freude in der Zusammenarbeit mit triarc-labs garantiert nicht zu kurz.',
        person: 'Bamm Bamm',
        personTitle: 'Head of Happiness',
        email: 'bammbamm@triarc-labs.com',
        linkedin: 'https://www.linkedin.com/company/triarc-laboratories-ltd/',
      },
    },
  },
]
