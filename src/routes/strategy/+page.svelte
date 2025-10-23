<script lang="ts">
import ProjectCard from '$lib/components/ProjectCard.svelte'
import Container from '$lib/components/Container.svelte'
import FooterNoContact from '$lib/components/FooterNoContact.svelte'
import ProjectStickyTitle from '$lib/components/ProjectStickyTitle.svelte'
import ThemedSection from '$lib/index/ThemedSection.svelte'
import { onMount } from 'svelte';
import { strategySectionContent } from '$lib/content/strategy-section'

const subsection = strategySectionContent

</script>

<ThemedSection
  sectionContent={subsection}
  sectionGradientColor="red-green"
  sectionColor="red">
</ThemedSection>

