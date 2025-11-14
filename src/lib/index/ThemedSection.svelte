<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
  import type { GradientColor, TriarcColor, TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
  import { onMount, tick } from 'svelte'

  export let sectionContent: TriarcSubsectionDefinition
  export let sectionColor: TriarcColor
  export let sectionGradientColor: GradientColor

  let scrollY = 0
  let elementScrolled = false
  let navbarHeight = 64

  function handleScroll() {
    scrollY = Math.max(0, window.scrollY)
    elementScrolled = scrollY > 16
  }

  onMount(async () => {
    await tick()
    const container = document.querySelector('.navbar') as HTMLElement
    if (container) {
      navbarHeight = container.offsetHeight
    }
    handleScroll()
  })
</script>

<svelte:window on:scroll={handleScroll} />
<div class="relative h-full {`gradient-${sectionGradientColor}`} bg-fixed">
  <Container>
    <ProjectStickyTitle
      title={sectionContent.main.title}
      iconSrc={sectionContent.main.iconSource}
      iconColor={sectionColor}
      scrolled={elementScrolled}
    ></ProjectStickyTitle>
    <div id="projects" class="md:[clip-path:inset(var(--scroll-y)_0_0_0)]" style="--scroll-y: {scrollY}px;">
      <div class="text-lg text-white md:ml-[3.75rem] pb-20">
        {sectionContent.main.description}
      </div>
      {#each sectionContent.projects as project}
        <ProjectCard card={project} />
      {/each}
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
