<script lang="ts">
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { operationSectionContent } from '$lib/content/operations-section.ts'

  const subsection = operationSectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="green-blue" sectionColor="green"></ThemedSection>
