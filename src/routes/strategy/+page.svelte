<script lang="ts">
  import type { PageData } from './$types'
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { strategySectionContent } from '$lib/content/strategy-section'

  export let data: PageData
  const subsection = {
    ...strategySectionContent,
    projects: data.pages,
  }
  strategySectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-green" sectionColor="red"></ThemedSection>
