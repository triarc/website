<script lang="ts">
  function scrollToMenu() {
    document.scrollingElement.scrollTo({
      behavior: 'smooth',
      top: document.getElementById('nav-menu').offsetTop,
    })
  }
</script>

<svelte:head>
  <title>Custom Softwareentwicklung Schweiz</title>
</svelte:head>

<div
  class="bg-gray-100 relative bg-opacity-20 flex flex-col flex items-center min-h-screen w-full flex-grow justify-center intro"
>
  <!--  <img src={logo} alt="triarc laboratories ltd" class="absolute top-8 left-8 right-8 z-20" width="242" height="42" />-->
  <!--  <div class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-10" />-->
  <video
    autoplay
    muted
    loop
    playsInline
    class="object-cover absolute left-0 right-0 top-0 bottom-0 h-screen w-screen"
    id="intro-video"
  >
    <source src="https://storage.googleapis.com/triarc-website/triarc-intro-1080-v2.mp4" type="video/mp4" />
    <source src="https://storage.googleapis.com/triarc-website/triarc-intro-1080-v2.webm" type="video/webm" />
  </video>
  <button
    aria-label="Zur Navigation scrollen"
    class="animate-bounce z-40 lg:hidden absolute bottom-6 right-6 bg-white p-2 w-10 h-10 ring-1 ring-red-triarc/5 shadow-lg rounded-full flex items-center justify-center"
    on:click={scrollToMenu}
  >
    <svg
      class="w-6 h-6 text-red-triarc"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>
</div>
