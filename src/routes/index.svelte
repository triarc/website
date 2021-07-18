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

  function hideVideo() {
    console.log('hide')
    document.getElementById('intro-video').style.maxHeight = 0
  }
</script>

<svelte:head>
  <title>triarc-labs</title>
</svelte:head>

<div class="parallax">
  <video
    style="height: calc(100vh - 64px); width: 100vw; transition: max-height 0.25s ease-out; overflow: hidden; max-height: 100vh"
    id="intro-video"
    autoplay
    muted
    class="object-cover"
    on:ended={hideVideo}
  >
    <source src="video/intro.mp4" type="video/mp4" />
    <source src="video/intro-1080.webm" type="video/webm" />
  </video>

  <Navbar />
  <div class="relative intro z-20">
    <Intro />
    <CustomSoftwareDevelopment />
    <Stories />
    <Mlink />
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
  .parallax__layer--back {
    transform: translateZ(-1px);
  }

  .parallax__layer--back {
    transform: translateZ(-1px) scale(2);
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
