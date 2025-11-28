<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let title: string
  export let description: string
  export let path: string
  export let isCurrentPath: boolean = false
  export let close: () => void

  const dispatch = createEventDispatcher()

  // Experimental to wait for page to be loaded before hiding the Nav Menu
  function handleClick(event: MouseEvent) {
    if (isCurrentPath) {
      event.preventDefault()
      close()
      return
    }
    dispatch('closeAfterNavigate')
  }
</script>

<a
  href={path}
  on:click={handleClick}
  class="{isCurrentPath
    ? ''
    : ''} relative md:dialog-link inline-link block group md:hover:bg-blue-triarc rounded md:hover:bg-opacity-10"
>
  <div class="{isCurrentPath ? 'text-blue-triarc' : 'text-gray-900'} font-semibold md:group-hover:text-blue-triarc">
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
