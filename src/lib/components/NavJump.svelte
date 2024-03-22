<script lang="ts">
  import { onMount } from 'svelte'

  let button: HTMLElement | null
  function scrollToMenu() {
    document.scrollingElement.scrollTo({
      behavior: 'smooth',
      top: document.getElementById('nav-menu').offsetTop,
    })
  }



  onMount(() => {
    button = document.getElementById('nav-jump-button')

    window.addEventListener('scroll', function() {
      console.log(button);
      if (button) {
        if (window.scrollY > 400) {
          button.style.display = 'flex';
        } else {
          button.style.display = 'none';
        }
      }
    });
  })
</script>

<button
  aria-label="Zur Navigation scrollen"
  id="nav-jump-button"
  class="z-40 sticky hidden mr-6 ml-auto bottom-6 bg-white p-2 w-10 h-10 ring-1 ring-red-triarc/5 shadow-lg rounded-full items-center justify-center"
  on:click={scrollToMenu}
>
  <svg
    class="w-6 h-6 text-blue-triarc"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="m5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
</button>