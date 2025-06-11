<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import { ourBenefits } from '$lib/content/benefits'
  import { ourApplicationProcess } from '$lib/content/application-process'

  let contents: BlockContent[] = $state([ourBenefits, ourApplicationProcess])
</script>

{#each contents as content, i}
  <Block bind:content={contents[i]} />
{/each}
