<script lang="ts">
  import SectionCard from '$lib/components/SectionCard.svelte'
  import puzzle from '$lib/assets/icons/puzzle-piece-light-full.svg'
  import gear from '$lib/assets/icons/gear-light-full.svg'
  import rocket from '$lib/assets/icons/rocket-launch-light-full.svg'


  // ToDo: add links to section pages
  export let landingContent: TriarcLandingPageText = {
    content: {
      prefix: 'Wir sind',
      title: 'triarc laboratories.',
      description: 'Von der Vision bis zur Andwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen. Wir sind erfahrene, engagierte Spezialisten, die Sie persönlich und individuell begleiten.'

    },
    strategy: {
      prefix: 'Wir übersetzen',
      title: 'Strategie\nin die Praxis.',
      description: 'Mit klaren Entscheidungsgrundlagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.',
      iconSource: puzzle,
      sectionLink: 'tbd'
    },
    operations: {
      prefix: 'Wir reduzieren',
      title: 'Operativen\nReibungsverlust.',
      description: 'Automatisierte Abläufe, intuitive Bedienung und gezielter Wissenstransfer sorgen für reibungslose Zusammenarbeit, hochwertige Daten und eine starke operative Performance.',
      iconSource: gear,
      sectionLink: 'tbd'
    },
    future: {
      prefix: 'Wir sichern',
      title: 'Zukünftige\nWettbewerbs\u00ADfähigkeit.',
      description: 'Skalierbare Lösungen, agile Strukturen und gezielte Innovation stärken die Wettbewerbsfähigkeit und ermöglichen eine klare Positionierung mit einem einzigartigen USP.',
      iconSource: rocket,
      sectionLink: 'tbd'
    }
  }


  import Container from '$lib/components/Container.svelte'
  import type { TriarcLandingPageText } from '$lib/components/TypeDefinitions'
</script>
<div class="h-[calc(100vh-4rem)] triarc-gradient text-white">
  <Container>
    <div class="pt-24 flex flex-col">
      <span class="text-lg pb-4">
        {landingContent.content.prefix}
      </span>
      <span class="text-7xl pb-12">
         {landingContent.content.title}
      </span>
      <span class="text-lg pb-20">
         {landingContent.content.description}
      </span>
    </div>
    <div class="grid grid-cols-3 gap-8 justify-between -mr-16 -ml-16">
      <SectionCard color="red"
                   content={landingContent.strategy}>
      </SectionCard>
      <SectionCard color="green"
                   content={landingContent.operations}>
      </SectionCard>
      <SectionCard color="blue"
                   content={landingContent.future}>
      </SectionCard>
    </div>
  </Container>
</div>

<style>
    .triarc-gradient {
        @apply bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended
        /*background: linear-gradient(*/
        /*45deg,*/
        /*#004778,*/
        /*#005a2d 50%,*/
        /*#780a1c 100%*/
        /*);*/
    }
</style>