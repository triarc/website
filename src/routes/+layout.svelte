<script lang="ts">
  import '../app.postcss'
  import PageTransition from '$lib/components/PageTransition.svelte'
  import logo from '../lib/assets/triarc-logo.svg'
  import triarclabs from '../lib/assets/triarc-labs.svg'

  export let menuOpen = true;

  /** @type {import('./$types').LayoutData} */
  export let data


  const navItems = [{
    title: 'Über uns',
    description: 'Wer sind wir und was ist uns wichtig',
    path: '/about',
  }, {
    title: 'Unsere Methodik',
    description: 'Die Herangehensweise unserer Projekte',
    path: '/method',
  }, {
    title: 'Unsere Dienstleistung',
    description: 'Was wir können und anbieten',
    path: '/service',
  }, {
    title: 'Unser Produkt',
    description: 'Was wir können und anbieten',
    path: '/mlink',
  }, {
    title: 'Unsere Referenzen',
    description: 'Erfahrungen und Vollbrachtes.',
    path: '/reference',
  }, {
    title: 'Aktuelles',
    description: 'Neustes von uns und unserem Umfeld',
    path: '/news',
  }, {
    title: 'Unsere Jobs',
    description: 'Für begeisterte, kreaktive und motivierte',
    path: '/jobs',
  }, {
    title: 'Kontakt',
    description: 'Sprich mit uns über deine Anliegen',
    path: '/contact',
  }]


  function toggle() {
    menuOpen = !menuOpen
    console.log(menuOpen)
  }
  function hideMenu() {
    menuOpen = false;
  }
</script>


<div class="flex flex-col md:flex-row fixed max-h-screen overflow-y-auto md:overflow-hidden w-screen md:w-auto z-30 top-0 left-0 min-h-screen transition-transform z-10 bg-black page {data.pathname === '/' ? 'landing' : 'content' } {menuOpen ? 'open' : ''}">
  <div
    class="bg-gray-100 bg-opacity-10 flex flex-col flex items-center min-h-screen md:aspect-[9/19] justify-center intro">
    <img src={logo} alt="triarc laboratories ltd" width="167" height="101" />
  </div>
  <nav class="text-white flex items-center min-h-screen min-h-0 flex-col justify-center w-full max-w-sm">
    <div class="w-full py-16 min-h-0 flex flex-col">
      <h2 class="font-bold border-b-2 border-white mx-12">Inhaltsverzeichnis</h2>
      <ul class="overflow-y-auto min-h-0 px-12 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-red-triarc">
        {#each navItems as navItem}
          <li class="my-6 last:mb-4 first:mt-4">
            <a href="{navItem.path}" on:click={hideMenu}>
              <div class="font-bold">{navItem.title}</div>
              <div class="font-light text-sm">{navItem.description}</div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="bg-black w-full flex justify-center">
      <img src="{triarclabs}" alt="triarc laboratories ltd" width="167" height="33" class="my-3" />
    </div>
  </nav>
</div>

<div class="md:pl-96">
  <div class="h-16 sticky top-0 z-20 bg-black w-full py-2 px-4 flex items-center md:hidden">
    <button class="py-2 px-2 rounded-md" on:click={toggle}>
      <svg width="32px" height="25px" viewBox="0 0 29 25" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="2">
          <line x1="0.5" y1="0.5" x2="31.5" y2="0.5" id="Line" stroke="#DC002E"></line>
          <line x1="0.5" y1="11.5" x2="31.5" y2="11.5" id="Line" stroke="#009534"></line>
          <line x1="0.5" y1="22.5" x2="31.5" y2="22.5" id="Line" stroke="#007BC0"></line>
        </g>
      </svg>
    </button>
  </div>
  <PageTransition pathname={data.pathname}>
    <slot />
  </PageTransition>
</div>

<style>
  .page {

  }
  .page.landing {

  }
  .page.content .intro {
      display: none;
  }
  .page.content {
      transform: translateX(-100%)
  }
  .page.content.open {
      transform: translateX(-100%) translateX(100vw)
  }
  @media (min-width: 768px) {
      .page.content, .page.content.open {
          transform: translateX(-100%) translateX(354px)
      }
  }
</style>
