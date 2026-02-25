<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { operationSectionContent } from '$lib/content/operations-section'

  export let data: PageData

  const subsection = {
    ...operationSectionContent,
    projects: data.pages,
  }
  operationSectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="green-blue" sectionColor="green"></ThemedSection>
