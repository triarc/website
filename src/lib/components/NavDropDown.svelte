<script lang="ts">
  export let title: string
  export let open = false
  export let isCurrentCategory = false

  let dropdown: HTMLElement

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
    if (
      dropdown &&
      evt.target &&
      (evt.target instanceof HTMLElement || evt.target instanceof SVGElement) &&
      dropdown.contains(evt.target)
    ) {
      return
    }
    if (open) {
      open = false
      evt.stopPropagation()
    }
  }
</script>

<div class="relative min-w-0" bind:this={dropdown}>
  <button
    type="button"
    class="{isCurrentCategory ? 'md:text-triarc-blue' : 'md:text-gray-800'}
    pointer-events-none md:pointer-events-auto inline-flex items-center gap-x-1 text-sm font-semibold leading-6 cursor-pointer rounded bg-black md:bg-transparent text-white md:text-gray-800 px-4 -mx-4 mb-1 md:rounded-none md:px-0 md:-mx-0 md:mb-0"
    aria-expanded={open}
    on:click={toggle}
  >
    <span class="flex-1 min-w-0 truncate">{title}</span>
    <svg class="h-5 w-5 flex-shrink-0 hidden md:block" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <div class="md:hidden {open ? 'open' : 'closed'}">
    <div on:click={close} class="container" role="none">
      <slot />
    </div>
  </div>
  {#if open}
    <div class="dialog {open ? 'open' : 'closed'}">
      <div on:click={close} class="container" role="none">
        <slot />
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  /* noinspection CssUnusedSymbol*/
  .dialog {
    @apply absolute left-1/2 z-10 mt-5 w-screen max-w-max -translate-x-1/2 px-4;
  }

  /* noinspection CssUnusedSymbol*/
  .dialog.open {
    @apply transition ease-out duration-200 opacity-100 translate-y-0 z-30;
  }

  /* noinspection CssUnusedSymbol*/
  .dialog.closed {
    @apply transition ease-in duration-150 opacity-0 translate-y-1 md:pointer-events-none;
  }

  /* noinspection CssUnusedSymbol*/
  .dialog .container {
    @apply w-screen max-w-sm flex-auto bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 px-4 rounded;
  }
</style>
