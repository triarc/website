<script lang="ts">
  export let title: string
</script>

<h2 class="text-2xl font-bold text-gray-600">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html title}
</h2>
