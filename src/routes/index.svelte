<script lang="ts">
  import Navbar from '../lib/Navbar.svelte'
  import Hero from '../lib/Hero.svelte'
  import Services from '../lib/Services.svelte'
  import Projects from '../lib/Projects.svelte'
  import Product from '../lib/Product.svelte'
  import Customers from '../lib/Customers.svelte'
  import Values from '../lib/Values.svelte'
  import Technology from '../lib/Technology.svelte'
  import AboutUs from '../lib/AboutUs.svelte'
  import Job from '../lib/Job.svelte'
  import LiveChat from '../lib/LiveChat.svelte'
  import Footer from '../lib/Footer.svelte'
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
        'background-image: url(https://dev.triarc-labs.com/header.svg)',
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
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative absolute top-8 z-10">
    <a
      href="#intro"
      class="block bg-white rounded-full text-gray-600 h-16 w-16 p-4 shadow cursor-pointer"
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

  <Hero />

  <div class="section" id="services">
    <Services />
  </div>
  <div class="section bg-white" id="projects">
    <Projects />
  </div>
  <div id="product">
    <Product />
  </div>
  <div class="section" id="customers">
    <Customers />
  </div>
  <Technology />
  <div class="section" id="aboutUs">
    <Values />
    <AboutUs />
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
