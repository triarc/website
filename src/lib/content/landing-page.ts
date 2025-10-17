import type { TriarcLandingPageText } from '$lib/components/TypeDefinitions'
import puzzle from '$lib/assets/icons/puzzle-piece-light-full.svg'
import gear from '$lib/assets/icons/gear-light-full.svg'
import rocket from '$lib/assets/icons/rocket-launch-light-full.svg'

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
    sectionLink: 'tbd',
  },
  operations: {
    prefix: 'Wir reduzieren',
    title: 'Operativen\nReibungsverlust.',
    description:
      'Automatisierte Abläufe, intuitive Bedienung und gezielter Wissenstransfer sorgen für reibungslose Zusammenarbeit, hochwertige Daten und eine starke operative Performance.',
    iconSource: gear,
    sectionLink: 'tbd',
  },
  future: {
    prefix: 'Wir sichern',
    title: 'Zukünftige\nWettbewerbs\u00ADfähigkeit.',
    description:
      'Skalierbare Lösungen, agile Strukturen und gezielte Innovation stärken die Wettbewerbsfähigkeit und ermöglichen eine klare Positionierung mit einem einzigartigen USP.',
    iconSource: rocket,
    sectionLink: 'tbd',
  },
}
