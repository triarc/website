<script lang="ts">
  export let content: string
</script>

<p class="mt-2 text-base leading-6 text-gray-600">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html content}
</p>