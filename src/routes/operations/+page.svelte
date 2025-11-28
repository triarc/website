<script lang="ts">
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { operationSectionContent } from '$lib/content/operations-section'

  const subsection = operationSectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="green-blue" sectionColor="green"></ThemedSection>
