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
</script>

<svelte:head>
  <title>triarc-labs</title>
</svelte:head>

<Navbar />

<img
  class="w-screen fixed top-16 z-0 object-cover hero-img"
  srcset="img/hero/triarc-hero-480.jpg 480w, img/hero/triarc-hero-800.jpg 800w, img/hero/triarc-hero-1024.jpg 1024w, img/hero/triarc-hero-1200.jpg 1200w, img/hero/triarc-hero-1600.jpg 1600w, img/hero/triarc-hero-2000.jpg 2000w, img/hero/triarc-hero-4000.jpg 4000w"
  src="img/hero/triarc-hero-2000.jpg"
/>
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
