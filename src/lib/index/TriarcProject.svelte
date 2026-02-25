<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import Icon from '$lib/components/Icon.svelte'
  import type { GradientColor, TriarcProjectDetailContent } from '$lib/components/TypeDefinitions'

  export let projectGradientColor: GradientColor = 'red-green'
  export let project: TriarcProjectDetailContent
</script>

<div class="relative h-full {`gradient-${projectGradientColor}`} ">
  <Container>
    <div class="flex flex-col lg:flex-row gap-y-2 gap-x-4 bg-transparent py-8 mt-12 lg:mt-32 mb-36">
      <div
        class="w-[112px] icon-grid grid grid-cols-3 max-w-fit gap-2 lg:grid-cols-2 h-full flex-grow-0 lg:flex-shrink-0 lg:mt-1 pr-4"
      >
        {#each project.icons as icon}
          <Icon size="large" color={icon.iconColor} src={icon.iconSource} class="category-icon" />
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
    <!--    <div class="grid grid-cols-1 lg:grid-cols-3 pb-8">-->
    <!--      <div class="-mt-32 lg:w-full lg:order-last mb-20 lg:mb-0">-->
    <!--        <EnhancedImage alt="" image={project.highlightImage} imgClass="object-contain lg:w-full" />-->
    <!--      </div>-->
    <!--      <div class="flex flex-col gap-y-2 lg:col-span-2 lg:pt-20 max-w-prose">-->
    <!--        <div class="text-lg font-bold pb-1">Ausgangslage</div>-->
    <!--        <div class="text-base pb-8">-->
    <!--          {project.situation}-->
    <!--        </div>-->
    <!--        <div class="text-lg font-bold pb-1">Herausforderungen</div>-->
    <!--        <div class="text-base pb-8">-->
    <!--          {project.challenges}-->
    <!--        </div>-->
    <!--        <div class="text-lg font-bold pb-1">Lösungen und Mehrwerte</div>-->
    <!--        <div class="text-base pb-8">-->
    <!--          {project.solution}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--{#if project.secondaryImage}-->
    <!--  <div class="grid grid-cols-1 lg:grid-cols-3 pb-8">-->
    <!--    <div class="-mt-32 lg:w-full lg:order-last mb-20 lg:mb-0">-->
    <!--      <img-->
    <!--        src={project.secondaryImage.src}-->
    <!--        srcset={project.secondaryImage.srcset}-->
    <!--        sizes="auto"-->
    <!--        alt={project.secondaryImage.alt}-->
    <!--        class="object-contain lg:w-full rounded-xl"-->
    <!--      />-->
    <!--    </div>-->
    <!--    <div class="flex flex-col gap-y-2 lg:col-span-2 lg:pt-20 max-w-prose">-->
    <!--      <div class="prose-custom max-w-none">-->
    <!--        {@html project.htmlContent}-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </div>-->
    <!--{:else}-->
    <!-- Fallback if no secondary image is defined -->
    <div class="prose-custom max-w-none lg:pt-12 pb-20">
      {@html project.htmlContent}
    </div>
    <!--{/if}-->
    <!--<div class="w-full flex justify-center">-->
    <!--  <img-->
    <!--    src={project.image.src}-->
    <!--    srcset={project.image.srcset}-->
    <!--    sizes="auto"-->
    <!--    loading="lazy"-->
    <!--    alt={project.image.alt}-->
    <!--    class="object-contain"-->
    <!--  />-->
    <!--</div>-->
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

  .icon-grid > :global(.category-icon:nth-child(odd):nth-child(n + 3)) {
    grid-column-start: 2;
  }

  .icon-grid > :global(.category-icon:nth-child(even):nth-child(n + 4)) {
    grid-column-start: 1;
  }
</style>
