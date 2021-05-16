<script>
  import { onMount } from 'svelte'

  onMount(async () => {
    const Plyr = await import('plyr')
    const player = new Plyr.default('#player', {
      controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen'],
    })
  })
</script>

<div class="bg-green-triarc pb-24 md:pt-24 md:flex lg:flex sm:relative sm:px:10">
  <div class="bg-green-triarc z-10 lg:relative md:left-0 md:pl-8 md:w-1/2 lg:w-1/2 sm:w-full">
    <video
      id="player"
      playsinline
      controls
      style="height: 100%; width: 100%"
      data-poster="img/thumbnail/mlink-1080-poster.png"
    >
      <source src="https://storage.googleapis.com/triarc-website/mlink-1080.webm" type="video/webm" />
      <source src="https://storage.googleapis.com/triarc-website/mlink.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="relative max-w-7xl mx-auto px-5 py-4 sm:px-6 lg:px-8 md:w-1/2 lg:w-1/2 sm:w-full ">
    <div class="md:ml-auto">
      <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">Der Kommunikationshub</h2>
      <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">μLink</p>
      <p class="mt-3 text-lg text-gray-100">
        μLink ermöglicht die Kommunikation zwischen verschiedensten Applikationen / Systemen in Echtzeit. Es erlaubt
        fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass Informationen auf allen verbundenen
        Systemen identisch und in Echtzeit verfügbar sind. Dabei sind Ausfallsicherheit und Datenschutz eine
        Selbstverständlichkeit.
      </p>
      <div class="mt-8">
        <div class="inline-flex rounded-md shadow">
          <a
            href="/mlink"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
          >
            mehr erfahren
            <svg
              class="-mr-1 ml-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!--<div class="relative pt-24 bg-gray-100">-->
<!--  <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>-->
<!--    <div>-->
<!--      <p class="mt-6 text-lg font-extrabold text-gray-900">Einige Vorteile unseres Produkts</p>-->
<!--      <dl class="mt-2">-->
<!--        <div class="flex items-center">-->
<!--          <img src='img/checkmark.svg' class="flex-shrink-0 h-6 w-6" />-->
<!--          <div class="ml-3">-->
<!--            <dt class="mt-2 text-base text-gray-500">Echtzeit-Integration unbegrenzter Systeme</dt>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex items-center">-->
<!--          <img src='img/checkmark.svg' class="flex-shrink-0 h-6 w-6" />-->
<!--          <div class="ml-3">-->
<!--            <dd class="mt-2 text-base text-gray-500">Offene & vereinfachte Schnittstellen (REST & AMQP)</dd>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex items-center">-->
<!--          <img src='img/checkmark.svg' class="flex-shrink-0 h-6 w-6" />-->
<!--          <div class="ml-3">-->
<!--            <dd class="mt-2 text-base text-gray-500">-->
<!--              Kann als Data Lake, Data Warehouse und Data Broker genutzt werden-->
<!--            </dd>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex items-center">-->
<!--          <img src='img/checkmark.svg' class="flex-shrink-0 h-6 w-6" />-->
<!--          <div class="ml-3">-->
<!--            <dd class="mt-2 text-base text-gray-500">Keine User- oder Mengen-Lizenzkosten</dd>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex items-center">-->
<!--          <img src='img/checkmark.svg' class="flex-shrink-0 h-6 w-6" />-->
<!--          <div class="ml-3">-->
<!--            <dd class="mt-2 text-base text-gray-500">Höchster Datenschutz</dd>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex items-center">-->
<!--          <img src='img/checkmark.svg' class="flex-shrink-0 h-6 w-6" />-->
<!--          <div class="ml-3">-->
<!--            <dd class="mt-2 text-base text-gray-500">Bewährt im Einsatz mit Abacus, SAP und Dynamics</dd>-->
<!--          </div>-->
<!--        </div>-->
<!--      </dl>-->
<!--    </div>-->
<!--  </div>-->

<!--</div>-->
<style style lang="postcss">
  @import 'plyr/dist/plyr.css';
</style>
