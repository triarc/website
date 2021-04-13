<script>
  import Navbar from '../Navbar.svelte'
  import Hero from '../Hero.svelte'
  import Footer from '../Footer.svelte'
  import Services from '../Services.svelte'
  import Projects from '../Projects.svelte'
  import Customers from '../Customers.svelte'
  import Contacts from '../Contacts.svelte'
  import AboutUs from '../AboutUs.svelte'
  import Product from '../Product.svelte'
  import Values from '../Values.svelte'
  import LiveChat from '../LiveChat.svelte'
  import Job from '../Job.svelte'
  import Technology from '../Technology.svelte'

  console.log("%cWe're hiring! https://triarc-labs.com/jobs", 'padding:20px')
</script>

<Navbar />

<img
  class="w-screen fixed top-16 z-0"
  srcset="img/hero/triarc-hero-480.jpg 480w, img/hero/triarc-hero-800.jpg 800w, img/hero/triarc-hero-1024.jpg 1024w, img/hero/triarc-hero-1200.jpg 1200w, img/hero/triarc-hero-1600.jpg 1600w, img/hero/triarc-hero-2000.jpg 2000w, img/hero/triarc-hero-4000.jpg 4000w"
  src="img/hero/triarc-hero-2000.jpg"
/>
<div class="absolute bg-white hero-img-padding">
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
  <div class="section" id="aboutUs">
    <Values />
    <Technology />
    <AboutUs />
    <Job />
  </div>
  <div class="section" id="contact">
    <Contacts />
  </div>
  <LiveChat />
  <Footer />
</div>
