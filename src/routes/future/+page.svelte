<script lang="ts">
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { futureSectionContent } from '$lib/content/future-section.ts'

  const subsection = futureSectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-blue" sectionColor="blue"></ThemedSection>
