<script lang="ts">
  export let title: string
  export let description: string
  export let path: string
  export let isCurrentPath: boolean = false
  export let close: () => void
</script>

<a
  href={path}
  on:click={(event) => {
    if (isCurrentPath) {
      event.preventDefault()
      close()
    }
    close()
  }}
  on:click={() => {
    if (!isCurrentPath) close()
  }}
  class="{isCurrentPath
    ? 'disabled'
    : ''} relative lg:dialog-link inline-link block group hover:bg-blue-triarc rounded hover:bg-opacity-10"
>
  <div class="font-semibold text-gray-900 group-hover:text-blue-triarc">
    {title}
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

  .disabled {
    @apply border-l-4 border-blue-triarc;
  }
</style>
