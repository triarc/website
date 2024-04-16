<script lang="ts">
  import MediaQuery from '$lib/components/MediaQuery.svelte'

  export let title: string
  export let open = false
  export let inline = false

  let dropdown

  function toggle() {
    open = !open
    if (open) {
      registerEscape()
    } else {
      unregisterEscape()
    }
  }

  function close() {
    open = false
  }

  function registerEscape() {
    document.addEventListener('keydown', escapeListener, { capture: true })
    document.addEventListener('mouseup', blurListener, { capture: true })
  }

  function unregisterEscape() {
    document.removeEventListener('keydown', escapeListener)
    document.removeEventListener('mouseup', blurListener)
  }

  function escapeListener(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      if (open) {
        open = false
        evt.stopPropagation()
      }
    }
  }

  function blurListener(evt: MouseEvent) {
    if (dropdown && evt.target && evt.target instanceof HTMLElement && dropdown.contains(evt.target)) {
      return
    }
    if (this.open) {
      open = false
      evt.stopPropagation()
    }
  }
</script>

<div class="relative" bind:this={dropdown}>
  <button
    type="button"
    class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 {inline
      ? 'cursor-default rounded bg-black mb-1 text-white px-4 -mx-4'
      : 'cursor-pointer rounded bg-black lg:bg-transparent text-white lg:text-gray-800 px-4 -mx-4 mb-1 lg:rounded-none lg:px-0 lg:-mx-0 lg:mb-0'}"
    aria-expanded="false"
    on:click={toggle}
  >
    <span>{title}</span>
    {#if !inline}
      <svg class="h-5 w-5 hidden lg:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    {/if}
  </button>

  <MediaQuery query="(max-width: 1024px)" let:matches>
    {#if open || inline || matches}
      <div class="{inline || matches ? 'inline' : 'dialog'} {open ? 'open' : 'closed'}">
        <div class="container" on:click={open ? close() : {}}>
          <slot />
        </div>
      </div>
    {/if}
  </MediaQuery>
</div>

<style>
  .inline {
    @apply flex flex-col;
  }

  .dialog {
    @apply absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4;
  }

  .dialog.open {
    @apply transition ease-out duration-200 opacity-100 translate-y-0 z-30;
  }
  .dialog.closed {
    @apply transition ease-in duration-150 opacity-0 translate-y-1;
  }
  .dialog .container {
    @apply w-screen max-w-sm flex-auto bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 px-4 rounded;
  }
</style>
