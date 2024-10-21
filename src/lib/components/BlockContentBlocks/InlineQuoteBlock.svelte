<script lang="ts">
  import type { InlineQuote } from '$lib/components/TypeDefinitions'

  export let quote: InlineQuote
</script>

<blockquote
  class="bg-transparent border-l-4 border-l-gray-500 mx-8 p-4 rounded-xl my-6 text-gray-500"
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html quote}
</blockquote>