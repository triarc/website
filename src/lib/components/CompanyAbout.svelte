<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { ourBenefits } from '$lib/content/benefits'
  import { ourApplicationProcess } from '$lib/content/application-process'

  let contents: BlockContent[] = [ourBenefits, ourApplicationProcess]
</script>

{#each contents as content}
  <Block bind:content />
{/each}
