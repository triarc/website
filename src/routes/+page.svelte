<script lang="ts">
  import { onMount } from 'svelte'
  import Landing from '$lib/index/Landing.svelte'

  let navMenuElement: HTMLElement | null

  function scrollToMenu() {
    if (document.scrollingElement && navMenuElement) {
      document.scrollingElement.scrollTo({
        behavior: 'smooth',
        top: navMenuElement.offsetTop,
      })
    }
  }

  onMount(() => {
    navMenuElement = document.getElementById('nav-menu')
  })
</script>

<svelte:head>
  <title>Custom Softwareentwicklung Schweiz</title>
</svelte:head>

<Landing></Landing>


