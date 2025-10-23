import type { TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
import teamwerk from '$lib/assets/img/strategy/TeamWerkExample.png?w=768&format=webp;png&metadata&enhanced'
import gear from '$lib/assets/icons/gear-light-full.svg'

export const operationSectionContent: TriarcSubsectionDefinition = {
  main: {
    title: 'Wir reduzieren operativen Reibungsverlust.',
    description:
      'Automatisierte Abläufe, intuitive Bedienung und gezielter Wissenstransfer sorgen für reibungslose Zusammenarbeit, hochwertige Daten und eine starke operative Performance.',
    iconSource: gear,
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
