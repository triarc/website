<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { onMount } from 'svelte';
  import { futureSectionContent } from '$lib/content/future-section.ts'

  const subsection = futureSectionContent

</script>

<ThemedSection
  sectionContent={subsection}
  sectionGradientColor="red-blue"
  sectionColor="blue">
</ThemedSection>