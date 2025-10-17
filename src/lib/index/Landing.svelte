<script lang="ts">
  import SectionCard from '$lib/components/SectionCard.svelte'
  import puzzle from '$lib/assets/icons/puzzle-piece-light-full.svg'
  import gear from '$lib/assets/icons/gear-light-full.svg'
  import rocket from '$lib/assets/icons/rocket-launch-light-full.svg'
  const landingContent = landingPageCards


  import Container from '$lib/components/Container.svelte'
  import type { TriarcLandingPageText } from '$lib/components/TypeDefinitions'
  import { landingPageCards } from '$lib/content/landing-page'
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
    }
</style>