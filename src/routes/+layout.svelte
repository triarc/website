<script lang="ts">
  import '../app.postcss'

  import { beforeUpdate, onMount } from 'svelte'
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
      path: '/services',
    },
    {
      title: 'Unser Produkt',
      description: 'Was bei uns entsteht',
      path: '/products',
    },
    {
      title: 'Unsere Referenzen',
      description: 'Erfahrungen und Vollbrachtes.',
      path: '/references',
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
      video.setAttribute('muted', '')
      video.playsInline = true;
      video.onloadeddata = () => {
        video.muted = true
        video.play()
      }
      video.play()
    }
  })
</script>

<div id="page" class="flex flex-col lg:flex-row {data.pathname ===
  '/'
    ? 'landing'
    : 'content'} {menuOpen ? 'open' : 'closed'}">
  <nav
    class="text-white bg-black flex flex-shrink-0 items-center flex-col justify-center w-full lg:max-w-sm lg:fixed lg:top-0"
    id="nav-menu"
  >
    <div class="w-full h-full justify-center py-16 min-h-0 flex flex-col">
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
    <!--    <div class="w-full flex justify-center flex-col px-12">-->
    <!--      <img src={triarclabs} alt="triarc laboratories ltd" width="167" height="33" class="my-3" />-->
    <!--    </div>-->
  </nav>

  <div class="main-container lg:pl-96 w-full {data.pathname === '/' ? 'landing' : 'content'}">
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
</div>

<style>
  .landing {
      @apply flex-col-reverse;
  }
  .landing .navbar {
      @apply hidden;
  }
  .content.open #nav-menu {
      transform: translateY(0%);
  }
  .landing #nav-menu {
      max-height: 100vh;
      min-height: 100vh;
  }
  .content #nav-menu {
      min-height: calc(100vh - 64px);
      max-height: calc(100vh - 64px);
  }
  #nav-menu {
      transition: max-height 200ms;
  }
  .content.closed #nav-menu {
      max-height: 0;
      min-height: 0;
  }
  @media (min-width: 1024px) {

      .landing.closed #nav-menu, .content.closed #nav-menu {
          max-height: 100vh;
          height: 100vh
      }
  }
</style>
