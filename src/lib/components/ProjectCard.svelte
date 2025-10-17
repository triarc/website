<script lang="ts">
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import Button from '$lib/components/Button.svelte'
  import teamwerk from '$lib/assets/img/strategy/TeamWerkExample.png?w=768&format=webp;png&metadata&enhanced'
  import type { Picture } from 'imagetools-core'
  import type { TriarcSectionDefinition } from '$lib/components/TypeDefinitions'
  interface Content {
    image: Picture;
    content: TriarcSectionDefinition;
  }
  export let content: Content = {
    content: {
      prefix: 'Wir übersetzen',
      title: 'Strategie\nin die Praxis.',
      description:
        'Mit klaren Entscheidungsgrundlagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.',
      sectionLink: 'tbd',
    },
    image: teamwerk
  }
</script>

<div class="project-card grid grid-cols-2 bg-white place-items-center items-center rounded-3xl h-[476px] mb-16">
  <div class="p-10 w-full hyphens-auto">
      <div class="text-lg w-full max-w-full mb-2">
        TeamWerk
      </div>
    <div class="text-3xl font-bold w-full max-w-full mb-2 whitespace-pre-line">
      Modulare Work Management Plattform.
    </div>
    <div lang="de" class="text-xs max-w-prose whitespace-normal hyphens-auto mb-4">
      Um die Zusammenarbeit in Projekten und zwischen Teams optimal zu unterstützen, braucht es eine digitale Lösung, die flexibel mitwächst. Eine modulare Work Management Plattform bietet genau das: Sie vereint Arbeitsaufträge, Projektkoordination, Protokollierung, interne Kommunikation und ein zentrales Wiki in einem System – für effiziente Abläufe und transparente Zusammenarbeit.    </div>
    <Button buttonSize="Small" buttonColorScheme="Tertiary" label="Mehr dazu"></Button>
  </div>
  <div class="project-card-image w-full overflow-hidden">
    <EnhancedImage
      alt=''
      image={content.image}
      imgClass="object-contain"
    />
  </div>
</div>

<style lang="postcss">
    :global(.project-card:nth-child(even) > .project-card-image) {
        order: -1;
    }
</style>