<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let enabled = false
  const dispatch = createEventDispatcher()
  function toggle() {
    enabled = !enabled
    dispatch('switch', enabled)
  }
</script>

<div class="flex justify-center items-center">
  <button
    type="button"
    on:click={toggle}
    class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer
    transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-triarc-blue"
    class:bg-blue-triarc={enabled}
    class:bg-gray-300={!enabled}
    aria-pressed="false"
    aria-labelledby="annual-billing-label"
  >
    <span class="sr-only">Nerd mode</span>
    <span
      aria-hidden="true"
      class:translate-x-5={enabled}
      class:translate-x-0={!enabled}
      class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
    />
  </button>
  <span class="ml-3" id="annual-billing-label">
    <span class="text-sm font-medium" class:text-blue-triarc={enabled} class:text-gray-500={!enabled}>Nerd mode</span>
  </span>
</div>
