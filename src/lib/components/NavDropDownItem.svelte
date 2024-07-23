<script lang="ts">
  export let title: string
  export let description: string
  export let path: string
  export let close: Function
  export let inline = false
</script>

<a
  href={path}
  on:click={close()}
  class="relative {inline
    ? 'inline-link'
    : 'lg:dialog-link inline-link'} block group hover:bg-blue-triarc rounded hover:bg-opacity-10"
>
  <div class="font-semibold text-gray-900 group-hover:text-blue-triarc">
    {title}
    <span class="absolute inset-0" />
  </div>
  <p class="text-gray-600">{description}</p>
</a>

<!-- svelte-ignore css-unused-selector -->
<style lang="postcss">
  /*noinspection CssUnusedSymbol*/
  .dialog-link {
    @apply px-6 py-4;
  }
  /* noinspection CssUnusedSymbol*/
  .inline-link {
    @apply -mx-4 px-4 py-2;
  }
</style>
