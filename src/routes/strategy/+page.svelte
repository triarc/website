<script lang="ts">
import ProjectCard from '$lib/components/ProjectCard.svelte'
import Container from '$lib/components/Container.svelte'
import FooterNoContact from '$lib/components/FooterNoContact.svelte'
import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
import ThemedSection from '$lib/index/ThemedSection.svelte'
import { onMount } from 'svelte';
import { strategySectionContent } from '$lib/content/strategy-section'


const subsection = strategySectionContent

let scrollY = 0;
let navbarHeight = 64;

function handleScroll() {
  scrollY = Math.max(0, window.scrollY - navbarHeight);
}

onMount(() => {
  handleScroll();
  const container = document.querySelector('.navbar') as HTMLElement;
  if (container) {
    navbarHeight = container.offsetHeight;
  }
});
</script>

<ThemedSection sectionContent={subsection}></ThemedSection>

<!--<svelte:window on:scroll={handleScroll} />-->
<!--<div class="relative h-full bg-gradient-to-tr from-green-triarc-blended to-red-triarc-blended bg-fixed">-->

<!--  <Container>-->
<!--    <ProjectStickyTitle></ProjectStickyTitle>-->
<!--    <div id="projects" style="clip-path: inset({scrollY}px 0px 0px 0px);">-->
<!--      <div class="text-lg text-white ml-14 pb-20">-->
<!--        Mit klaren Entscheidungsgrundlagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.-->
<!--      </div>-->
<!--    <ProjectCard></ProjectCard>-->
<!--    <ProjectCard></ProjectCard>-->
<!--      </div>-->
<!--  </Container>-->
<!--</div>-->
<!--<FooterNoContact />-->
