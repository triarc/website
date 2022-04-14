<script lang="ts">
  import Navbar from '../lib/index/Navbar.svelte'
  import Intro from '../lib/index/Intro.svelte'
  import CustomSoftwareDevelopment from '../lib/index/CustomSoftwareDevelopment.svelte'
  import Customers from '../lib/index/Customers.svelte'
  import Manifest from '../lib/index/Manifest.svelte'
  import Technology from '../lib/index/Technology.svelte'
  import TeamMembers from '../lib/index/TeamMembers.svelte'
  import Job from '../lib/index/Job.svelte'
  import LiveChat from '../lib/index/LiveChat.svelte'
  import Footer from '../lib/components/Footer.svelte'
  import { onMount } from 'svelte'
  import References from '$lib/index/References.svelte'
  import Lab from '../lib/index/Lab.svelte';

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
  <title>Custom Softwareentwicklung Schweiz</title>
</svelte:head>

<Navbar />

<div class="parallax">
  <div class="parallax__layer parallax__layer--back header-bg z-10" />

  <div class="relative intro z-20">
    <Intro />
    <CustomSoftwareDevelopment />
    <References />
    <Lab/>
    <Customers />
    <Technology />
    <Manifest />
  </div>
  <div class="parallax__layer--back office-bg z-10" />
  <div class="bg-white relative z-20">
    <div class="section" id="aboutUs">
      <TeamMembers />
      <Job />
    </div>
    <LiveChat />
    <Footer />
  </div>
</div>

<style style lang="postcss">
  .parallax {
    perspective: 1px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective-origin-x: 100%;
    scroll-behavior: smooth;
  }
  .parallax__layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin-x: 100%;
  }
  .parallax__layer--base {
    transform: translateZ(0);
  }
  .parallax__layer--back {
    transform: translateZ(-1px);
  }

  .parallax__layer--back {
    transform: translateZ(-1px) scale(2);
  }

  .parallax__layer--deep {
    transform: translateZ(-2px) scale(3);
  }

  .parallax__group {
    position: relative;
    height: 100vh;
    transform-style: preserve-3d;
    transform: translate3d(700px, 0, -800px) rotateY(30deg);
  }

  .intro {
    margin-top: calc(100vh - 224px);
  }

  .header-bg {
    background-position: center center;
    background-size: cover;
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
    height: 50vh;
    width: 100vw;
    background-repeat: no-repeat;

    transform-origin-x: 100%;
  }
</style>
