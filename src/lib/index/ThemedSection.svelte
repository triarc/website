<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
  import type { TriarcSubsectionDefinition } from '$lib/components/TypeDefinitions'
  import { onMount} from 'svelte';
  import { isMobile } from '$lib/stores/layoutStore';

  export let sectionContent: TriarcSubsectionDefinition

  let scrollY = 0;
  let navbarHeight = 64;

  function handleScroll() {
    if (!$isMobile) {
      scrollY = Math.max(0, window.scrollY - navbarHeight);
    }
  }

  onMount(() => {
    if (!$isMobile) {
      handleScroll();
      const container = document.querySelector('.navbar') as HTMLElement;
      if (container) {
        navbarHeight = container.offsetHeight;
      }
    }
  });
</script>

<svelte:window on:scroll={handleScroll} />
<div class="relative h-full bg-gradient-to-tr from-green-triarc-blended to-red-triarc-blended bg-fixed">
  <Container>
    <ProjectStickyTitle
      title={sectionContent.main.title}
      iconSrc={sectionContent.main.iconSource}
    ></ProjectStickyTitle>
    <div id="projects" style="clip-path: inset({scrollY}px 0px 0px 0px);">
      <div class="text-lg text-white lg:ml-[3.75rem] pb-20">
        {sectionContent.main.description}
      </div>
      {#each sectionContent.projects as project }
        <ProjectCard card={project}  />
      {/each}
    </div>
  </Container>
</div>
<FooterNoContact />