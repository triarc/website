<script lang="ts">
  import '../app.postcss'

  import { beforeUpdate, onMount } from 'svelte'
  import logo from "../lib/assets/triarc-logo.svg"
  import NavDropDown from "$lib/components/NavDropDown.svelte";
  import NavDropDownItem from "$lib/components/NavDropDownItem.svelte";

  export let menuOpen = false

  export let mobileTitle = ''
  export let mobileSubTitle = ''

  export interface NavItemHeading {
    type: 'heading';
    title: string;
    items: NavItemLink[];
  }
  export interface NavItemLink {
    type: 'link';
    title: string;
    description: string;
    path: string;
  }
  export type NavItem = NavItemHeading | NavItemLink;

  export let data: { pathname: string }

  beforeUpdate(() => {
    const navItem = linkMetaInfo[data.pathname]
    if (navItem) {
      mobileTitle = navItem.title
      mobileSubTitle = navItem.description
    }
  })

  const navItems: NavItem[] = [
    {
      type: 'heading',
      title: 'together we succeed',
      items: [{
        type: 'link',
        title: 'Mission',
        path: '/mission',
        description: 'Was uns ausmacht',
      },  {
        type: 'link',
        title: 'Team',
        path: '/team',
        description: 'Wer wir sind',
      }]
    },
    {
      type: 'heading',
      title: 'Lösungen',
      items: [{
        type: 'link',
        title: 'Projekte',
        description: 'Erfahrungen und Referenzen',
        path: '/references',
      }, {
        type: 'link',
        title: 'Stories',
        description: 'Neustes von uns und unserem Umfeld',
        path: '/stories',
      }]
    },
    {
      type: 'heading',
      title: 'Dienstleistung',
      items: [
        {
          type: 'link',
          title: 'Beratung',
          description: 'Was wir können und anbieten',
          path: '/consulting',
        },
        {
          type: 'link',
          title: 'Custom Software',
          description: 'Massgeschneiterte Software',
          path: '/custom-software',
        },
        {
          type: 'link',
          title: 'Innovation Lab',
          description: 'Produktentwicklung',
          path: '/innovation',
        },
      ]
    },
    {
      type: 'heading',
      title: 'Kontakt',
      items: [{
        type: 'link',
        title: 'Kontaktinfos',
        description: 'Sprich mit uns über deine Anliegen',
        path: '/contact',
      }, {
        type: 'link',
        title: 'Jobs',
        description: 'Für begeisterte und motivierte',
        path: '/jobs',
      }]
    },
  ]

  const linkMetaInfo = navItems.reduce((map, item) => {
    if (item.type === 'heading') {
      for (const subItem of item.items) {
        map[subItem.path] = {title: subItem.title, description: subItem.description }
      }
    } else {
      map[item.path] = {title: item.title, description: item.description }
    }
    return map;
  }, {})

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

<div id="page" class="{data.pathname ===
  '/'
    ? 'landing'
    : 'content'} {menuOpen ? 'open' : 'closed'}">
  <nav
    class="navbar"
    id="nav-menu"
  >
    <div class="navbar-container">
      <a href="/" class="flex items-center px-12">
        <img src={logo} alt="triarc laboratories ltd" width="60" height="20" />
      </a>
      <ul class="nav-links">
        {#each navItems as navItem}
          <li
            class="my-4 last:mb-4 first:mt-4 py-2 px-4 {navItem.path == data.pathname
              ? 'rounded-md bg-gray-100 bg-opacity-10'
              : ''}"
          >
            {#if navItem.type==='link'}
              <a href={navItem.path} on:click={hideMenu}>
                <div class="font-semibold leading-6 text-gray-900 text-sm">{navItem.title}</div>
                <!--            <div class="font-light text-sm">{navItem.description}</div>-->
              </a>
            {:else}
              <NavDropDown title="{navItem.title}" inline={data.pathname === '/'} let:close>
                {#each navItem.items as subItem}
                  <NavDropDownItem title={subItem.title} description={subItem.description} close="{close}"
                                   path={subItem.path} inline={data.pathname === '/'}>></NavDropDownItem>
                {/each}
              </NavDropDown>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

  </nav>

  <div class="main-container w-full {data.pathname === '/' ? 'landing' : 'content'}">
    <div class="mobile-bar z-20 bg-black w-full py-2 px-4 flex items-center lg:hidden">
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
    <div class="page-content">
      <slot />
    </div>
  </div>
</div>

<style>
  #page {
      @apply bg-white flex flex-col;
  }

  #page.landing {
      @apply flex-col-reverse lg:flex-row;
  }
  #page.content {
      @apply flex flex-col;
  }

  #page .navbar {
      @apply text-[323F33] bg-white min-h-0 flex flex-shrink-0 z-20 shadow-2xl w-full relative flex-col lg:flex-row h-screen h-auto lg:h-16
      group-odd:xl:flex-row group-even:xl:flex-row-reverse transition-all;
  }

  #page.landing .navbar {
      @apply max-h-screen;
  }
  #page.landing .mobile-bar {
      @apply hidden;
  }

  #page .mobile-bar {
      @apply h-16;
  }


  #page.content.open .navbar {
      /*@apply max-h-[calc(100vh_-_64px)];*/
  }

  #page.content.closed .navbar {
      @apply max-h-0 overflow-hidden lg:max-h-max lg:overflow-visible;
  }
  #page.content.open .mobile-bar {
      @apply bottom-0;
  }
  #page.content.open .main-container {
      @apply h-16 overflow-hidden sticky bottom-0 z-20 lg:h-auto lg:relative;
  }
  #page.content.open .page-content {
      @apply max-h-0 lg:max-h-max;
  }
  #page.content.closed .mobile-bar {
      @apply sticky top-0;
  }

  .navbar-container {
      @apply max-w-screen-lg mx-auto flex w-full flex-col lg:flex-row min-h-0;
  }

  #page .main-container {
      @apply  transition-transform;
  }

  #page .navbar.open, #page.landing .navbar {
      @apply h-screen;
  }

  #page.content .navbar {
      @apply items-center flex items-center;
  }

  #page .navbar .nav-links {
      @apply flex flex-col lg:flex-row w-full;
  }

  #page.content .navbar .nav-links {
      @apply min-h-0 px-8;
  }

  @media (max-width: 1024px) {


      /*#page.closed .navbar {*/
      /*    transform: translateY(-100vh);*/
      /*}*/

      /*#page.closed .main-container {*/
      /*    transform: translateY(-100vh) translateY(64px);*/
      /*}*/
  }




  /*.content #nav-menu {*/
  /*    min-height: calc(100vh - 64px);*/
  /*    max-height: calc(100vh - 64px);*/
  /*}*/

  #page.landing .navbar {
      @apply px-0 py-8 items-stretch flex-col justify-center w-full lg:max-w-sm lg:fixed lg:top-0 overflow-x-hidden;
  }
  #page.landing .navbar-container {
      @apply flex-col;
  }

  #page.landing .navbar .nav-links {
      @apply flex-col flex-grow overflow-y-auto overflow-x-hidden min-h-0 px-8 py-8 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-red-triarc;
  }

  #page.landing .main-container {
      @apply lg:pl-96;
  }
  #nav-menu {
      transition: max-height 200ms;
  }
</style>
