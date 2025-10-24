<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import { Gear, Puzzle, Rocket } from '$lib/content/icons.js'
  import TeamWerk from '$lib/assets/img/strategy/TeamWerkExample.png?w=768&format=webp;png&metadata&enhanced'
  import TeamWerkFloating from '$lib/assets/img/TeamWerk_DetailImage.png?w=768&format=webp;png&metadata&enhanced'
  import type { GradientColor, TriarcProjectDetailContent } from '$lib/components/TypeDefinitions'
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'

  export let projectGradientColor: GradientColor = 'red-green'

  let project: TriarcProjectDetailContent = {
    image: TeamWerk,
    highlightImage: TeamWerkFloating,
    title: 'TeamWerk',
    description:
      'Modulare Work Management Plattform, die Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System für effiziente Abläufe und transparente Zusammenarbeit vereint.',
    situation:
      'Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.',
    challenges:
      'Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.',
    solution:
      'Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.',
    icons: [
      { iconSource: Puzzle, iconColor: 'red' },
      { iconSource: Gear, iconColor: 'green' },
      { iconSource: Rocket, iconColor: 'blue' },
    ],
  }
</script>

<div class="relative h-full {`gradient-${projectGradientColor}`} ">
  <Container>
    <div class="flex flex-col lg:flex-row gap-y-2 gap-x-4 bg-transparent py-8 mt-12 lg:mt-32 mb-36">
      <div class="grid grid-cols-3 max-w-fit gap-2 lg:grid-cols-2 h-full flex-grow-0 lg:flex-shrink-0 lg:mt-1 pr-4">
        {#each project.icons as icon}
          <Icon size="large" color={icon.iconColor} src={icon.iconSource} />
        {/each}
      </div>
      <div class="flex flex-col w-full">
        <div class="max-w-prose text-5xl text-white font-bold text-balance pb-4">{project.title}</div>
        <div class="max-w-prose text-lg text-white pb-4">
          {project.description}
        </div>
      </div>
    </div>
  </Container>
</div>
<div>
  <Container>
    <!--      <div class="-mt-32">-->
    <!--        <EnhancedImage-->
    <!--          alt=''-->
    <!--          image={project.highlightImage}-->
    <!--          imgClass="object-contain" />-->
    <!--      </div>-->
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div class="-mt-32 lg:w-full lg:order-last mb-20 lg:mb-0">
        <EnhancedImage alt="" image={project.highlightImage} imgClass="object-contain lg:w-full" />
      </div>
      <div class="flex flex-col gap-y-2 lg:col-span-2 lg:pt-20 max-w-prose">
        <div class="text-lg font-bold">Ausgangslage</div>
        <div class="text-sm">
          {project.situation}
        </div>
        <div class="text-lg font-bold">Herausforderungen</div>
        <div class="text-sm">
          {project.challenges}
        </div>
        <div class="text-lg font-bold">Lösungen und Mehrwerte</div>
        <div class="text-sm">
          {project.solution}
        </div>
      </div>
    </div>
    <div class="w-full flex overflow-hidden justify-center">
      <EnhancedImage alt="" image={project.image} imgClass="object-contain" />
    </div>
  </Container>
</div>
<FooterNoContact />

<style>
  .gradient-green-blue {
    @apply bg-gradient-to-tr from-green-triarc-blended  to-blue-triarc-blended;
  }

  .gradient-blue-red {
    @apply bg-gradient-to-tr from-blue-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-green {
    @apply bg-gradient-to-tr from-red-triarc-blended to-green-triarc-blended;
  }

  .gradient-green-red {
    @apply bg-gradient-to-tr from-green-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-blue {
    @apply bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended;
  }
</style>
