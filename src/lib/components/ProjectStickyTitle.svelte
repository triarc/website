<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'

  export let scrolled = false
  export let iconSrc: string
  export let title: string
  export let iconColor: 'red' | 'green' | 'blue'
</script>

<div
  class="
  {scrolled ? 'scrolled' : ''}
  md:sticky md:top-16 flex z-10 flex-col md:flex-row gap-y-2 gap-x-4 md:items-center bg-transparent py-8"
>
  <Icon class="lg:hidden inline" size="medium" color={iconColor} src={iconSrc} />
  <Icon class="hidden lg:inline" size="large" color={iconColor} src={iconSrc} />
  <span id="sticky-title" class="project-title text-5xl text-white font-bold text-balance">{title}</span>
</div>

<style>
  .project-title {
    @apply inline-block origin-left transition-transform ease-in-out duration-300;
    /*transform-origin: left center;*/
    /*transition: transform 330ms cubic-bezier(0.2, 0.9, 0.3, 1);*/
  }

  .scrolled .project-title {
    @apply md:scale-75;
  }
  .scrolled {
    @apply text-3xl;
  }
</style>
