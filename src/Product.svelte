<script>
  import Plyr from 'plyr'
  import { onMount } from 'svelte'

  onMount(() => {
    new Plyr('#player', {
      controls: ['play-large', 'progress']
    })
  })
</script>

<div class="relative bg-gray-100 py-16 sm:py-20 lg:py-16">
  <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">MLink</h2>
    <p class="mt-5 mb-8 max-w-prose mx-auto text-xl text-gray-500">
      Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada.
      Eleifend condimentum id viverra nulla.
    </p>

    <video id="player" playsinline controls>
      <source src="https://storage.googleapis.com/triarc-website/mlink.mp4" type="video/mp4" />
    </video>

    <div class="mt-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="pt-6">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-green-triarc rounded-md shadow-lg">
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </span>
              </div>
              <p class="mt-5 text-base text-gray-500">
                Es ermöglicht die Kommunikation zwischen den verschiedensten Applikationen / Systemen in Echtzeit. Zum
                Beispiel können Sie zum Beispiel Ihr CRM, die Zeiterfassung, Sharepoint zusammen mit Ihrem ERP zu einem
                grossen Ganzen verbinden. Umständliche Synchronisationen und wartungsintensive Schnittstellen werden
                vermieden.
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-green-triarc rounded-md shadow-lg">
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </span>
              </div>
              <p class="mt-5 text-base text-gray-500">
                Ausserdem kann es als Data Broker, Datawarehouse oder Datalake agieren. Durch mlink können identische
                Informationen im gesamten Ökosystem einer Unternehmung ohne Probleme auch länderübergreifend verwendet
                werden.
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
            <div class="-mt-6">
              <div>
                <span class="inline-flex items-center justify-center p-3 bg-green-triarc rounded-md shadow-lg">
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
              </div>
              <p class="mt-5 text-base text-gray-500">
                Höchster Datenschutz ist dabei eine Grundvoraussetzung: TSL / HTTPS, ein ausfallsicherer
                Microservice-Cluster und ein verfügbares Monitoring stellen dies sicher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
    <div>
      <p class="mt-2 text-3xl font-extrabold text-gray-900">Einige Vorteile unseres Produkts</p>
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
              Kann als Datalake, Datawarehouse und Data Broker genutzt werden
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
