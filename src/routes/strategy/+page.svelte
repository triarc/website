<script lang="ts">
  import ThemedSection from '$lib/index/ThemedSection.svelte'
  import { strategySectionContent } from '$lib/content/strategy-section'

  const subsection = strategySectionContent
</script>

<ThemedSection sectionContent={subsection} sectionGradientColor="red-green" sectionColor="red"></ThemedSection>
