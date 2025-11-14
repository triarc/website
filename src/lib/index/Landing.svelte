<script lang="ts">
  import SectionCard from '$lib/components/SectionCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import { landingPageCards } from '$lib/content/landing-page'
  import triarcLogo from '$lib/assets/triarc-labs-white.svg'

  const landingContent = landingPageCards
</script>

<div class="triarc-gradient text-white pb-40">
  <Container class="">
    <div class="pt-10 lg:pt-24 flex flex-col">
      <span class="text-lg">
        {landingContent.content.prefix}
      </span>
      <!-- ToDo better way to break words or maybe alt text for mobile -->
      <span class="py-6">
        <!-- ToDo: Richtiger Schriftzug -->
        <img class="h-16" src={triarcLogo} alt="triarc laboratories ltd" height="72" />
        <!--{landingContent.content.title}-->
      </span>
      <span class="text-lg pb-20">
        {landingContent.content.description}
      </span>
    </div>
    <div class="grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-8 lg:-mr-16 lg:-ml-16">
      <div class="w-full flex md:justify-end">
        <SectionCard color="red" content={landingContent.strategy}></SectionCard>
      </div>
      <div class="w-full flex md:justify-start">
        <SectionCard color="green" content={landingContent.operations}></SectionCard>
      </div>
      <div class="w-full md:col-span-2 xl:col-span-1 flex justify-center">
        <SectionCard color="blue" content={landingContent.future} />
      </div>
      <!--      <SectionCard color="blue" content={landingContent.future}></SectionCard>-->
    </div>
  </Container>
</div>

<style>
  .triarc-gradient {
    @apply bg-gradient-to-tr from-blue-triarc-blended via-green-triarc-blended to-red-triarc-blended;
  }
</style>
