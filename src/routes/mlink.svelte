<script>
  import Header from '../lib/components/Header.svelte'
  import Footer from '../lib/components/Footer.svelte'
  import ImageSections from '../lib/components/ImageSections.svelte'
  import Mlink from '$lib/index/Mlink.svelte'
  import { onMount } from 'svelte'

  let bulletPoints = [
    'Der neu eintretende Mitarbeiter kann am selben Tag seine Zeit korrekt und vor allem digital erfassen.',
    'Das Backoffice eröffnet ein neues Projekt. Die Projektleiter beginnen umgehend mit der visuellen Planung.',
    'Die Geschäftsstelle und der Mitarbeiter im Feld kollaborieren in Echtzeit am selben Prozess.',
  ]
  let sections = [
    {
      title: 'Klare Grenzen',
      text:
        'Das ERP muss nicht verschiedenste Systeme mit Exporten bedienen und kann seine Ressourcen\n' +
        '                  ausschliesslich für den eigenen Betrieb verwenden. Die Last durch die Kommunikation mit Umsystemen\n' +
        '                  wird transparent. Datentransformationen, welche Umsystem-spezifisch sind, sind nicht mehr Teil des ERP\n' +
        '                  internen Ablaufs.',
      image: 'img/mlink/mind-map.svg',
      imageAlt: 'borders',
    },
    {
      title: 'Skalierbarkeit',
      text:
        'Die Verfügbarkeit der Informationen kann unabhängig vom ERP ausgebaut werden. Man muss bei komplexen\n' +
        '                  Anforderungen nicht das ganze ERP skalieren und μLink ist auch nicht von Auslastungsspitzen des ERP\n' +
        '                  betroffen. Es ist dank der Microservice Architektur von μLink sogar möglich einzelne Aspekte der\n' +
        '                  Schnittstelle einzeln zu skalieren. μLink kann On-Premise oder in der Cloud betrieben werden.',
      image: 'img/mlink/scale.svg',
      imageAlt: 'scale',
    },
    {
      title: 'Schnittstellen',
      text:
        'μLink bietet mit REST und AMQP offene und vielseitige Schnittstellen an. Das Knowhow kann so mit wenig\n' +
        '                  Aufwand intern aufgebaut werden.',
      image: 'img/mlink/interface.svg',
      imageAlt: 'interface',
    },
    {
      title: 'Versionierung',
      text:
        'Die von μLink für die Umsysteme zur Verfügung gestellte Schnittstelle ist versionssicher, d.h.\n' +
        '                  Anpassungen und Updates am ERP führen nicht zu Tests und Anpassungen an allen abhängigen Systemen,\n' +
        '                  sondern beschränken sich auf μLink. Die Komplexität der Kommunikation wird mit dem ERP gekapselt.\n' +
        '                  μLink setzt bewusst auf offene Standards um keine, nur für mLink zu erlernende, Hürde einzuführen.',
      image: 'img/mlink/versioning.svg',
      imageAlt: 'versioning',
    },
    {
      title: 'Sicherheit',
      text:
        'Sämtliche Kommunikation erfolgt ausschliesslich via Https und TLS und bedarf einer Authentifizierung.\n' +
        '                  Die Komponenten von μLink sind hochverfügbar und erlauben einen Ausfall von einzelnen Containern, ohne\n' +
        '                  die Funktion zu mindern. Es besteht die Möglichkeit μLink in ein Monitoring System für kritische\n' +
        '                  Systeme zu integrieren. μLink bietet eine manuelle Analyse z.B. zur Kontrolle des Zugriffs und der\n' +
        '                  Verwendung der Schnittstellen durch Umsysteme.',
      image: 'img/mlink/security.svg',
      imageAlt: 'security',
    },
  ]

  onMount(async () => {
    const Plyr = await import('plyr')
    const player = new Plyr.default('#player', {
      controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen'],
    })
  })
</script>

<svelte:head>
  <title>mLink Data Broker - triarc-labs</title>
</svelte:head>

<div class="bg-gray-900 h-screen relative">
  <Header>Produkte</Header>

  <div class="relative bg-gray-900">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div class="mt-20">
          <div class="mt-6 sm:max-w-xl">
            <h1 class="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              μLink Data Broker <br /><span class="text-3xl">Bereit für die Zukunft</span>
            </h1>
            <p class="mt-6 text-xl text-gray-500">
              μLink ist eine Kommunikationsschnittstelle mit dem Fokus, Informationen schnell auffindbar und schnell
              lesbar zu machen. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass
              Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind. Mit μLink lassen
              sich unbegrenzt Umsysteme in ein Software Ökosystem integrieren.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
      <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div class="relative flex pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-5">
          <img src="img/mlink/tree.svg" class="flex-grow mx-16" />
        </div>
      </div>
    </div>
  </div>
  <div class="relative">
    <div class="relative bg-gray-900">
      <div
        class="flex justify-center max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        <div>
          <img src="img/mlink/diagram.svg" class="flex-grow" />
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2 flex flex-col justify-center">
          <p class="mt-2 text-3xl font-extrabold text-white">Dies löst Aufgaben wie:</p>
          <dl>
            {#each bulletPoints as bulletPoint}
              <div class="flex items-center mt-2">
                <img src="icons/checkmark.svg" class="flex-shrink-0 h-6 w-6" />
                <div class="ml-3">
                  <dt class="text-base text-gray-300">
                    {bulletPoint}
                  </dt>
                </div>
              </div>
            {/each}
          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-900">
    <div class="pb-24 md:pb-48 md:pt-24 flex flex-col sm:relative lg:max-w-7xl lg:mx-auto sm:px:10" id="product">
      <h2 class="text-3xl my-8 mx-auto font-extrabold tracking-tight text-gray-100">μLink der Kommunikationshub</h2>
      <div class="z-10 lg:relative  sm:w-full rounded-xl overflow-hidden">
        <video
          id="player"
          playsinline
          controls
          style="height: 100%; width: 100%;"
          data-poster="img/thumbnail/mlink-1080-poster.png"
        >
          <source src="https://storage.googleapis.com/triarc-website/mlink-1080-v2.webm" type="video/webm" />
          <source src="https://storage.googleapis.com/triarc-website/mlink-v2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
  <ImageSections bind:sections />

  <!-- Price -->
  <!--  <div class="bg-gray-100 pb-48">-->
  <!--    <div class="pt-12 sm:pt-16 lg:pt-20">-->
  <!--      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
  <!--        <div class="text-left">-->
  <!--          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Kosten</h2>-->
  <!--          <p class="mt-4 text-xl text-left text-gray-600">-->
  <!--            mLink ist sehr kosteneffizient. Die Nutzung des ERP wird gepoolt, d.h. viele an μLink angebundene Umsysteme,-->
  <!--            wenige ERP Lizenzen. So fallen weniger ERP Lizenzkosten an. Das Reporting ist für alle User verwendbar.-->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--    <div class="my-8">-->
  <!--      <div class="relative">-->
  <!--        <div class="absolute inset-0 h-1/2 bg-gray-100" />-->
  <!--        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
  <!--          <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none ">-->
  <!--            <div class="lg:flex">-->
  <!--              <div class="flex-1 bg-white px-6 py-8 lg:p-12">-->
  <!--                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">μLink Basis</h3>-->
  <!--                <p class="mt-6 text-base text-gray-500">-->
  <!--                  Für μlink fallen keine User- oder Mengen-Lizenzkosten an. Die Preise verstehen sich einmalig (Wartung-->
  <!--                  ausgeschlossen) und ohne Nutzungsbeschränkung, für eine unbeschränkte Anzahl User und Transaktionen.-->
  <!--                </p>-->
  <!--                <div class="mt-8">-->
  <!--                  <div class="flex items-center">-->
  <!--                    <h4-->
  <!--                      class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"-->
  <!--                    >-->
  <!--                      Beinhaltet-->
  <!--                    </h4>-->
  <!--                    <div class="flex-1 border-t-2 border-gray-200" />-->
  <!--                  </div>-->
  <!--                  <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">-->
  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <div class="flex-shrink-0">-->
  <!--                        &lt;!&ndash; Heroicon name: solid/check-circle &ndash;&gt;-->
  <!--                        <svg-->
  <!--                          class="h-5 w-5 text-green-400"-->
  <!--                          xmlns="http://www.w3.org/2000/svg"-->
  <!--                          viewBox="0 0 20 20"-->
  <!--                          fill="currentColor"-->
  <!--                          aria-hidden="true"-->
  <!--                        >-->
  <!--                          <path-->
  <!--                            fill-rule="evenodd"-->
  <!--                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
  <!--                            clip-rule="evenodd"-->
  <!--                          />-->
  <!--                        </svg>-->
  <!--                      </div>-->
  <!--                      <p class="ml-3 text-sm text-gray-700">Unlimitierte Benutzer</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <div class="flex-shrink-0">-->
  <!--                        &lt;!&ndash; Heroicon name: solid/check-circle &ndash;&gt;-->
  <!--                        <svg-->
  <!--                          class="h-5 w-5 text-green-400"-->
  <!--                          xmlns="http://www.w3.org/2000/svg"-->
  <!--                          viewBox="0 0 20 20"-->
  <!--                          fill="currentColor"-->
  <!--                          aria-hidden="true"-->
  <!--                        >-->
  <!--                          <path-->
  <!--                            fill-rule="evenodd"-->
  <!--                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
  <!--                            clip-rule="evenodd"-->
  <!--                          />-->
  <!--                        </svg>-->
  <!--                      </div>-->
  <!--                      <p class="ml-3 text-sm text-gray-700">Unlimtierte Transaktionen</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <div class="flex-shrink-0">-->
  <!--                        &lt;!&ndash; Heroicon name: solid/check-circle &ndash;&gt;-->
  <!--                        <svg-->
  <!--                          class="h-5 w-5 text-green-400"-->
  <!--                          xmlns="http://www.w3.org/2000/svg"-->
  <!--                          viewBox="0 0 20 20"-->
  <!--                          fill="currentColor"-->
  <!--                          aria-hidden="true"-->
  <!--                        >-->
  <!--                          <path-->
  <!--                            fill-rule="evenodd"-->
  <!--                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
  <!--                            clip-rule="evenodd"-->
  <!--                          />-->
  <!--                        </svg>-->
  <!--                      </div>-->
  <!--                      <p class="ml-3 text-sm text-gray-700">OpenAPI / Swagger via REST</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <div class="flex-shrink-0">-->
  <!--                        &lt;!&ndash; Heroicon name: solid/check-circle &ndash;&gt;-->
  <!--                        <svg-->
  <!--                          class="h-5 w-5 text-green-400"-->
  <!--                          xmlns="http://www.w3.org/2000/svg"-->
  <!--                          viewBox="0 0 20 20"-->
  <!--                          fill="currentColor"-->
  <!--                          aria-hidden="true"-->
  <!--                        >-->
  <!--                          <path-->
  <!--                            fill-rule="evenodd"-->
  <!--                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
  <!--                            clip-rule="evenodd"-->
  <!--                          />-->
  <!--                        </svg>-->
  <!--                      </div>-->
  <!--                      <p class="ml-3 text-sm text-gray-700">Echtzeitschnittstelle via AMQP</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <div class="flex-shrink-0">-->
  <!--                        &lt;!&ndash; Heroicon name: solid/check-circle &ndash;&gt;-->
  <!--                        <svg-->
  <!--                          class="h-5 w-5 text-green-400"-->
  <!--                          xmlns="http://www.w3.org/2000/svg"-->
  <!--                          viewBox="0 0 20 20"-->
  <!--                          fill="currentColor"-->
  <!--                          aria-hidden="true"-->
  <!--                        >-->
  <!--                          <path-->
  <!--                            fill-rule="evenodd"-->
  <!--                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
  <!--                            clip-rule="evenodd"-->
  <!--                          />-->
  <!--                        </svg>-->
  <!--                      </div>-->
  <!--                      <p class="ml-3 text-sm text-gray-700">Mango Query Support</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <div class="flex-shrink-0">-->
  <!--                        &lt;!&ndash; Heroicon name: solid/check-circle &ndash;&gt;-->
  <!--                        <svg-->
  <!--                          class="h-5 w-5 text-green-400"-->
  <!--                          xmlns="http://www.w3.org/2000/svg"-->
  <!--                          viewBox="0 0 20 20"-->
  <!--                          fill="currentColor"-->
  <!--                          aria-hidden="true"-->
  <!--                        >-->
  <!--                          <path-->
  <!--                            fill-rule="evenodd"-->
  <!--                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"-->
  <!--                            clip-rule="evenodd"-->
  <!--                          />-->
  <!--                        </svg>-->
  <!--                      </div>-->
  <!--                      <p class="ml-3 text-sm text-gray-700">Entwickler Dokumentation</p>-->
  <!--                    </li>-->
  <!--                  </ul>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--              <div-->
  <!--                class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"-->
  <!--              >-->
  <!--                <p class="text-lg leading-6 font-medium text-gray-900">Einmalig</p>-->
  <!--                <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">-->
  <!--                  <span> 6000 </span>-->
  <!--                  <span class="ml-3 text-xl font-medium text-gray-500"> CHF </span>-->
  <!--                </div>-->
  <!--                <p class="mt-4 text-sm">-->
  <!--                  <a href="#" class="font-medium text-gray-500 underline"> + CHF 1000.- Wartung pro Jahr </a>-->
  <!--                </p>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="lg:flex border-t">-->
  <!--              <div class="flex-1 bg-white px-6 py-8 lg:p-12">-->
  <!--                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">μLink Erweiterungsmodul</h3>-->
  <!--                <p class="mt-6 text-base text-gray-500">-->
  <!--                  Erweiterungsmodule beinhalten Schnittstellenmodule für jedes angeschlossenen Umsystem und funktionale-->
  <!--                  Module wie Monitoring, Map/Reduce-->
  <!--                </p>-->
  <!--                <div class="mt-8">-->
  <!--                  <div class="flex items-center">-->
  <!--                    <h4-->
  <!--                      class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"-->
  <!--                    >-->
  <!--                      Mögliche Module-->
  <!--                    </h4>-->
  <!--                    <div class="flex-1 border-t-2 border-gray-200" />-->
  <!--                  </div>-->
  <!--                  <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">-->
  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <p class="text-sm text-gray-700">Monitoring</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <p class="text-sm text-gray-700">Map Reduce</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <p class="text-sm text-gray-700">Elasticsearch Suche</p>-->
  <!--                    </li>-->

  <!--                    <li class="flex items-start lg:col-span-1">-->
  <!--                      <p class="text-sm text-gray-700">BI-Services</p>-->
  <!--                    </li>-->
  <!--                  </ul>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--              <div-->
  <!--                class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"-->
  <!--              >-->
  <!--                <p class="text-lg leading-6 font-medium text-gray-900">Einmalig</p>-->
  <!--                <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">-->
  <!--                  <span> 6000 </span>-->
  <!--                  <span class="ml-3 text-xl font-medium text-gray-500"> CHF </span>-->
  <!--                </div>-->
  <!--                <p class="mt-4 text-sm">-->
  <!--                  <a href="#" class="font-medium text-gray-500 underline"> + CHF 1000.- Wartung pro Jahr </a>-->
  <!--                </p>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <Footer />
</div>
