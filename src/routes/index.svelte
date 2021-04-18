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
  import Contacts from '../lib/Contacts.svelte'
  import LiveChat from '../lib/LiveChat.svelte'
  import Footer from '../lib/Footer.svelte'
  import { onMount } from 'svelte';

  onMount(() => {
    const messages = {
      'en': '%c We\'re hiring! Checkout https://triarc-labs.com/jobs',
      'de': '%c Wir suchen dich! https://triarc-labs.com/jobs',
      'de-DE': '%c Wir suchen dich! https://triarc-labs.com/jobs',
      'de-CH': '%c Mir suched dich! https://triarc-labs.com/job s',
    }
    const message = messages[navigator.language] || messages['en']
    console.log(message, [
      'background-image: url(https://dev.triarc-labs.com/header.svg)',
      'background-position: left center',
      'color: #fff',
      'padding: 10px 20px 10px 180px',
      'line-height: 80px',
      'background-repeat: no-repeat',
      'height : 100px' ].join(';'));
  })
</script>

<svelte:head>
  <title>triarc-labs</title>
</svelte:head>

<Navbar />

<picture>
  <source
    type="image/webp"
    srcset="img/hero/triarc-hero-480.webp 480w, img/hero/triarc-hero-800.webp 800w, img/hero/triarc-hero-1024.webp 1024w, img/hero/triarc-hero-1200.webp 1200w, img/hero/triarc-hero-1600.webp 1600w, img/hero/triarc-hero-2000.webp 2000w, img/hero/triarc-hero-4000.webp 4000w"
  />
  <img
    class="w-screen fixed top-16 z-0 object-cover hero-img"
    srcset="img/hero/triarc-hero-480.jpg 480w, img/hero/triarc-hero-800.jpg 800w, img/hero/triarc-hero-1024.jpg 1024w, img/hero/triarc-hero-1200.jpg 1200w, img/hero/triarc-hero-1600.jpg 1600w, img/hero/triarc-hero-2000.jpg 2000w, img/hero/triarc-hero-4000.jpg 4000w"
    src="img/hero/triarc-hero-2000.jpg"
  />
</picture>

<div class="absolute bg-white hero-img-padding w-screen">
  <Hero />

  <div class="section" id="services">
    <Services />
  </div>
  <div class="section" id="projects">
    <Projects />
  </div>
  <div id="product">
    <Product />
  </div>
  <div class="section" id="customers">
    <Customers />
  </div>
  <Values />
  <Technology />
  <div class="section" id="aboutUs">
    <AboutUs />
    <Job />
  </div>
  <div class="section" id="contact">
    <Contacts />
  </div>
  <LiveChat />
  <Footer />
</div>
