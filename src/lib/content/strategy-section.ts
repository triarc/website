import type { TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
import teamwerk from '$lib/assets/img/strategy/TeamWerkExample.png?w=768&format=webp;png&metadata&enhanced'
import puzzle from '$lib/assets/icons/puzzle-piece-light-full.svg'

export const strategySectionContent: TriarcSubsectionDefinition = {
  main: {
    title: 'Wir übersetzen Strategie in die Praxis.',
    description:
      'Mit klaren Entscheidungsgrund-lagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.',
    iconSource: puzzle,
  },
  projects: [
    {
      image: teamwerk,
      content: {
        prefix: 'TeamWerk',
        title: 'Modulare Work Management Plattform.',
        description:
          'Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.',
        sectionLink: 'tbd',
      },
    },
    {
      image: teamwerk,
      content: {
        prefix: 'TeamWerk',
        title: 'Modulare Work Management Plattform.',
        description:
          'Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.',
        sectionLink: 'tbd',
      },
    },
    {
      image: teamwerk,
      content: {
        prefix: 'TeamWerk',
        title: 'Modulare Work Management Plattform.',
        description:
          'Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.',
        sectionLink: 'tbd',
      },
    },
  ],
}
