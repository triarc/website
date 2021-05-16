<script lang="ts">
  import Navbar from '../lib/index/Navbar.svelte'
  import Intro from '../lib/index/Intro.svelte'
  import CustomSoftwareDevelopment from '../lib/index/CustomSoftwareDevelopment.svelte'
  import Stories from '../lib/index/Stories.svelte'
  import Mlink from '../lib/index/Mlink.svelte'
  import Customers from '../lib/index/Customers.svelte'
  import Manifest from '../lib/index/Manifest.svelte'
  import Technology from '../lib/index/Technology.svelte'
  import TeamMembers from '../lib/index/TeamMembers.svelte'
  import Job from '../lib/index/Job.svelte'
  import LiveChat from '../lib/index/LiveChat.svelte'
  import Footer from '../lib/components/Footer.svelte'
  import { onMount } from 'svelte'

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
        'background-image: url(https://triarc-labs.com/icons/header.svg)',
        'background-position: left center',
        'color: #fff',
        'padding: 10px 20px 10px 180px',
        'line-height: 80px',
        'background-repeat: no-repeat',
        'height : 100px',
      ].join(';')
    )
  })
</script>

<svelte:head>
  <title>triarc-labs</title>
</svelte:head>

<Navbar />

<div class="relative hero-img">
  <picture>
    <source
      type="image/webp"
      srcset="img/hero/triarc-hero-480.webp 480w, img/hero/triarc-hero-800.webp 800w, img/hero/triarc-hero-1024.webp 1024w, img/hero/triarc-hero-1200.webp 1200w, img/hero/triarc-hero-1600.webp 1600w, img/hero/triarc-hero-2000.webp 2000w, img/hero/triarc-hero-4000.webp 4000w"
    />
    <img
      class="hero-img w-screen fixed top-0 z-0 object-cover"
      srcset="img/hero/triarc-hero-480.jpg 480w, img/hero/triarc-hero-800.jpg 800w, img/hero/triarc-hero-1024.jpg 1024w, img/hero/triarc-hero-1200.jpg 1200w, img/hero/triarc-hero-1600.jpg 1600w, img/hero/triarc-hero-2000.jpg 2000w, img/hero/triarc-hero-4000.jpg 4000w"
      src="img/hero/triarc-hero-2000.jpg"
    />
  </picture>
</div>

<div class="absolute hero-img-padding w-screen">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 relative absolute top-8 z-10">
    <a
      href="#intro"
      class="block bg-white rounded-full text-gray-600 h-14 w-14 p-4 shadow cursor-pointer"
      id="arrow-down"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="arrow-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
          class=""
        />
      </svg>
    </a>
  </div>

  <Intro />

  <div class="section" id="services">
    <CustomSoftwareDevelopment />
  </div>
  <div class="section bg-white" id="projects">
    <Stories />
  </div>
  <div id="product">
    <Mlink />
  </div>
  <div class="section" id="customers">
    <Customers />
  </div>
  <Technology />
  <div class="section" id="aboutUs">
    <Manifest />
    <TeamMembers />
    <Job />
  </div>
  <LiveChat />
  <Footer />
</div>

<style style lang="postcss">
  #arrow-down {
    animation-delay: 1500ms;
    animation-duration: 100ms;
    animation-name: fadein;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
</style>
