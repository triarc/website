<script lang="ts">
  import SectionCard from '$lib/components/SectionCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import { landingPageCards } from '$lib/content/landing-page'

  const landingContent = landingPageCards
</script>

<div class="lg:h-[calc(100vh-4rem)] triarc-gradient text-white">
  <Container class="pb-16 lg:pb-0">
    <div class="pt-10 lg:pt-24 flex flex-col">
      <span class="text-lg pb-4">
        {landingContent.content.prefix}
      </span>
      <!-- ToDo better way to breask words or maybe alt text for mobile -->
      <span class="text-7xl pb-12 break-words">
        {landingContent.content.title}
      </span>
      <span class="text-lg pb-20">
        {landingContent.content.description}
      </span>
    </div>
    <div class="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-8 lg:-mr-16 lg:-ml-16">
      <SectionCard color="red" content={landingContent.strategy}></SectionCard>
      <SectionCard color="green" content={landingContent.operations}></SectionCard>
      <SectionCard color="blue" content={landingContent.future}></SectionCard>
    </div>
  </Container>
</div>

<style>
  .triarc-gradient {
    @apply bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended;
  }
</style>
