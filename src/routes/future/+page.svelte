<script lang="ts">
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import type { PageData } from '../../../.svelte-kit/types/src/routes/operations/$types'
  import { futureSectionContent } from '$lib/content/future-section'

  export let data: PageData

  const subsection = {
    ...futureSectionContent,
    projects: data.pages,
  }
  futureSectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-blue" sectionColor="blue"></ThemedSection>
