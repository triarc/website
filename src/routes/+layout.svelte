<script lang="ts">
  import '../app.postcss'

  import { beforeUpdate, onMount } from 'svelte'
  import logo from '../lib/assets/triarc-logo.svg'
  import triarclabs from '../lib/assets/triarc-labs.svg'

  export let menuOpen = false

  export let mobileTitle = ''
  export let mobileSubTitle = ''

  export let data: { pathname: string }

  beforeUpdate(() => {
    const navItem = navItems.find((i) => i.path === data.pathname)
    if (navItem) {
      mobileTitle = navItem.title
      mobileSubTitle = navItem.description
    }
  })

  const navItems = [
    {
      title: 'Über uns',
      description: 'Wer sind wir und was ist uns wichtig',
      path: '/about',
    },
    {
      title: 'Unsere Methodik',
      description: 'Die Herangehensweise unserer Projekte',
      path: '/method',
    },
    {
      title: 'Unsere Dienstleistung',
      description: 'Was wir können und anbieten',
      path: '/service',
    },
    {
      title: 'Unser Produkt',
      description: 'Was wir können und anbieten',
      path: '/mlink',
    },
    {
      title: 'Unsere Referenzen',
      description: 'Erfahrungen und Vollbrachtes.',
      path: '/reference',
    },
    {
      title: 'Aktuelles',
      description: 'Neustes von uns und unserem Umfeld',
      path: '/news',
    },
    {
      title: 'Unsere Jobs',
      description: 'Für begeisterte, kreaktive und motivierte',
      path: '/jobs',
    },
    {
      title: 'Kontakt',
      description: 'Sprich mit uns über deine Anliegen',
      path: '/contact',
    },
  ]

  function toggle() {
    menuOpen = !menuOpen
  }
  function hideMenu() {
    menuOpen = false
  }

  function scrollToMenu() {
    document.getElementById('page').scrollTo({
      behavior: 'smooth',
      top: document.getElementById('nav-menu').offsetTop,
    })
  }

  onMount(() => {
    const messages = {
      en: "%c We're hiring! Checkout https://triarc-labs.com/jobs",
      de: '%c Wir suchen dich! https://triarc-labs.com/jobs',
      'de-DE': '%c Wir suchen dich! https://triarc-labs.com/jobs',
      'de-CH': '%c Mir suched dich! https://triarc-labs.com/job s',
    }
    const message = messages[navigator.language] || messages['en']
    console.log(
      message,
      [
        'background-image: url(https://triarc-labs.com/icons/triarc-logo.svg)',
        'background-position: left center',
        'color: #fff',
        'padding: 10px 20px 10px 180px',
        'line-height: 80px',
        'background-repeat: no-repeat',
        'height : 100px',
      ].join(';')
    )

    const video = document.getElementById('intro-video') as HTMLVideoElement
    if (video) {
      video.onloadeddata = () => {
        video.muted = true
        video.play()
      }
      video.muted = true
      video.play()
    }
  })
</script>

<div
  class="flex flex-col lg:flex-row fixed max-h-screen overflow-y-auto lg:overflow-hidden w-screen lg:w-auto z-30 top-0 left-0 min-h-screen transition-transform z-10 bg-black page {data.pathname ===
  '/'
    ? 'landing'
    : 'content'} {menuOpen ? 'open' : ''}"
  id="page"
>
  <div
    class="bg-gray-100 relative bg-opacity-20 flex flex-col flex items-center min-h-screen lg:aspect-[9/19] justify-center intro"
  >
    <img src={logo} alt="triarc laboratories ltd" class="absolute top-1/2 z-20" width="167" height="101" />
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-10" />
    <video
      autoplay
      muted
      loop
      class="object-cover absolute left-0 right-0 top-0 bottom-0 h-screen w-screen"
      id="intro-video"
    >
      <source src="https://storage.googleapis.com/triarc-website/drone-intro.mp4" type="video/mp4" />
      <source src="https://storage.googleapis.com/triarc-website/drone-intro.webm" type="video/webm" />
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
  <nav
    class="text-white bg-black flex items-center min-h-screen flex-col justify-center w-full lg:max-w-sm"
    id="nav-menu"
  >
    <div class="w-full py-16 min-h-0 flex flex-col">
      <h2 class="font-bold border-b-2 border-white mx-12">Inhaltsverzeichnis</h2>
      <ul class="overflow-y-auto min-h-0 px-8 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-red-triarc">
        {#each navItems as navItem}
          <li
            class="my-4 last:mb-4 first:mt-4 py-2 px-4 {navItem.path == data.pathname
              ? 'rounded-md bg-gray-100 bg-opacity-10'
              : ''}"
          >
            <a href={navItem.path} on:click={hideMenu}>
              <div class="font-bold">{navItem.title}</div>
              <div class="font-light text-sm">{navItem.description}</div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="w-full flex justify-center flex-col items-center">
      <img src={triarclabs} alt="triarc laboratories ltd" width="167" height="33" class="my-3" />
    </div>
  </nav>
</div>

<div class="lg:pl-96 main-container {data.pathname === '/' ? 'landing' : 'content'}">
  <div class="navbar h-16 sticky top-0 z-20 bg-black w-full py-2 px-4 flex items-center lg:hidden">
    <button class="py-2 px-2 rounded-md" on:click={toggle} aria-label="Navigation Menu">
      <svg width="32px" height="25px" viewBox="0 0 29 25" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-width="2">
          <line x1="0.5" y1="0.5" x2="31.5" y2="0.5" id="Line" stroke="#DC002E" />
          <line x1="0.5" y1="11.5" x2="31.5" y2="11.5" id="Line" stroke="#009534" />
          <line x1="0.5" y1="22.5" x2="31.5" y2="22.5" id="Line" stroke="#007BC0" />
        </g>
      </svg>
    </button>
    <div class="text-white ml-3 flex-grow min-w-0">
      <div class="font-bold truncate">{mobileTitle}</div>
      <div class="font-light text-sm truncate">{mobileSubTitle}</div>
    </div>
  </div>
  <slot />
</div>

<style>
  .page.content .intro {
    display: none;
  }
  .page.content {
    transform: translateX(-100%);
  }
  .page.content.open {
    transform: translateX(-100%) translateX(100vw);
  }
  .main-container.content {
  }
  .main-container.landing .navbar {
    @apply -translate-y-full;
  }
  @media (min-width: 1024px) {
    .page.content,
    .page.content.open {
      transform: translateX(-100%) translateX(24rem);
    }
  }
</style>
