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
        'background-image: url(https://triarc-labs.com/icons/triarc-logo.svg)',
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

<div class="wrapper">
  <div class="section parallax header-bg" />

  <div class="section parallax relative">
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
    <Manifest />
  </div>
  <div class="section parallax office-bg" />
  <div class="section bg-white">
    <div class="section" id="aboutUs">
      <TeamMembers />
      <Job />
    </div>
    <LiveChat />
    <Footer />
  </div>
</div>

<style style lang="postcss">
  .wrapper {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 2px;
    scroll-behavior: smooth;
  }

  .section {
    position: relative;
  }

  .parallax::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.5);
    background-size: 100%;
    z-index: -1;
  }

  .header-bg {
    background-position: center center;
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
    background-repeat: no-repeat;

    animation-delay: 500ms;
    animation-duration: 200ms;
    animation-name: shrink;
    animation-fill-mode: forwards;
  }

  @keyframes shrink {
    0% {
      height: 100vh;
    }
    100% {
      height: calc(100vh - 224px);
    }
  }

  .office-bg {
    background-position: center center;
    background-size: cover;
    height: 400px;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
</style>
