<script lang="ts">
import ProjectCard from '$lib/components/ProjectCard.svelte'
import Container from '$lib/components/Container.svelte'
import FooterNoContact from '$lib/components/FooterNoContact.svelte'
import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'

import { onMount, onDestroy } from 'svelte';
let scrollY = 0;
// Comments are the same but with interpolation, if the scroll animation feels bad can be experimented with
// let targetScrollY = 0;
// let animationFrame: number;
const NAVBAR_HEIGHT = 64;

function handleScroll() {
  scrollY = Math.max(0, window.scrollY - NAVBAR_HEIGHT);
  // targetScrollY = Math.max(0, window.scrollY - NAVBAR_HEIGHT);
}

// function animateScroll() {
//   scrollY += (targetScrollY - scrollY);
//   animationFrame = requestAnimationFrame(animateScroll);
// }

onMount(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    // If animation feels jagged
    // animateScroll();
  }
});

onDestroy(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
    // cancelAnimationFrame(animationFrame);
  }
});

</script>

<div class="relative h-full bg-gradient-to-tr from-green-triarc-blended to-red-triarc-blended bg-fixed">

  <Container>
    <ProjectStickyTitle></ProjectStickyTitle>
    <div id="projects" style="clip-path: inset({scrollY}px 0px 0px 0px);">
      <div class="text-lg text-white ml-14 pb-20">
        Mit klaren Entscheidungsgrund-lagen, verfügbaren Kapazitäten und einem ganzheitlichen Ansatz schaffen wir die Basis, damit Veränderungen zielgerichtet, effizient und nachhaltig wirken.
      </div>
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
      </div>
  </Container>
</div>
<FooterNoContact />
