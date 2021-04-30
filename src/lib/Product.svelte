<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const Plyr = await import('plyr');
    new Plyr.default('#player', {
      controls: ['play-large', 'progress'],
    })
  })
</script>

<div class="relative bg-gray-100 py-16 sm:py-20 lg:py-16">
  <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    <h2 class="text-3xl mb-8 leading-9 font-extrabold tracking-tight sm:text-4xl">mLink</h2>
    <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
      Der Kommunikationshub
    </p>
    <p class="mt-4 max-w-4xl text-md text-gray-500 lg:mx-auto mb-5">
      mLink ermöglicht die Kommunikation zwischen verschiedensten Applikationen / Systemen in Echtzeit. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind.
      Dabei sind Ausfallsicherheit und Datenschutz eine Selbstverständlichkeit.
    </p>
    <video id="player" playsinline controls>
      <source srcset="https://storage.googleapis.com/triarc-website/mlink.mp4" type="video/mp4" />
    </video>

  </div>

  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
    <div>
      <p class="mt-2 text-3xl font-extrabold text-gray-900">Einige Vorteile unseres Produkts</p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <a href="/mlink"
            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-opacity-75 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 bg-red-triarc"
          > mehr erfahren...
          </a>
        </div>
      </div>
    </div>
    <div class="mt-12 lg:mt-0 lg:col-span-2">
      <dl
        class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
      >
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="ml-3">
            <dt class="mt-2 text-base text-gray-500">Echtzeit-Integration unbegrenzter Systeme</dt>
          </div>
        </div>

        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="ml-3">
            <dd class="mt-2 text-base text-gray-500">Offene & vereinfachte Schnittstellen (REST & AMQP)</dd>
          </div>
        </div>

        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="ml-3">
            <dd class="mt-2 text-base text-gray-500">
              Kann als Data Lake, Data Warehouse und Data Broker genutzt werden
            </dd>
          </div>
        </div>

        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="ml-3">
            <dd class="mt-2 text-base text-gray-500">Keine User- oder Mengen-Lizenzkosten</dd>
          </div>
        </div>

        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="ml-3">
            <dd class="mt-2 text-base text-gray-500">Höchster Datenschutz</dd>
          </div>
        </div>

        <div class="flex items-center">
          <svg
            class="flex-shrink-0 h-6 w-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="ml-3">
            <dd class="mt-2 text-base text-gray-500">Bewährt im Einsatz mit Abacus, SAP und Dynamics</dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</div>

<style style lang="postcss">
  @import 'plyr/dist/plyr.css';
</style>
