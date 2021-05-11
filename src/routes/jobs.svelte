<script>
  function unlock(evt) {
    if (evt.target.disabled) {
      return
    }
    const a = document.createElement('a')
    a.href = 'mailto:development@triarc-labs.com'
    document.body.append(a)
    a.click()
  }
</script>

<svelte:head>
  <title>triarc-labs - Jobs</title>
</svelte:head>

<div class="bg-gray-800 h-screen relative">
  <div class="bg-gray-900 py-2 px-4 xm:px-6 lg:px-8">
    <div class="max-w-4xl lg:max-w-7xl mx-auto flex items-center mx-4 h-16">
      <a href="..">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="text-white"
        >
          <path
            fill="currentColor"
            d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"
            class=""
          />
        </svg>
      </a>

      <h1 class="text-white ml-4 text-xl flex-grow">Hauptseite</h1>
      <img src="header.svg" class="h-10" />
    </div>
  </div>
  <div class="relative bg-gray-900">
    <!--		<img src='img/office/bar.png' class='absolute right-0 w-1/2'/>-->
    <div
      class="max-w-4xl bg-gray-900 mx-auto pl-4 sm:pl-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
    >
      <div class="relative md:mt-32">
        <div class="absolute inset-x-0 top-0 transform translate-y-px">
          <div class="flex justify-center transform -translate-y-1/2">
            <span
              class="inline-flex rounded-full bg-green-triarc px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
            >
              Die BAR
            </span>
          </div>
        </div>
        <img src="img/office/bar2.png" class="object-cover rounded-3xl" />
      </div>

      <div class="relative pt-12 pb-8 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <p class="mt-3 text-3xl font-extrabold text-white">Was wir dir bieten</p>
        <p class="mt-5 text-lg text-gray-300">
          Wir sind eine Software-Boutique im Herzen von Zürich, entwickeln leidenschaftlich gerne Software und sind
          immer auf der Suche nach neuen Talenten die uns ergänzen.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-2xl font-bold text-white">40 Stundenwoche</span>
            <span class="mt-1 block text-base text-gray-300"
              >Weil uns deine Zeit, so wichtig wie dir ist. Flexible Arbeitszeit inklusive 5 Wochen Ferien.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Transparenz</span>
            <span class="mt-1 block text-base text-gray-300"
              >Dies gilt für das Lohnsystem inklusive Unternehmenfragen.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Technologie</span>
            <span class="mt-1 block text-base text-gray-300"
              >Wir bleiben immer aktuell und setzen die Technologie ein, die Sinn macht.</span
            >
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Kaffee / Bar</span>
            <span class="mt-1 block text-base text-gray-300"
              >Bediehn dich selbst an unserer triarc-Bar mit Kaffee, Bier und saisonalem Süssem.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Holokratie</span>
            <span class="mt-1 block text-base text-gray-300"
              >Deine Stimme zählt, entscheide mit über Themen die dich und andere beschäftigen.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Mobilvertrag</span>
            <span class="mt-1 block text-base text-gray-300">Damit du dich um wichtigeres kümmern kannst</span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Hardware</span>
            <span class="mt-1 block text-base text-gray-300">Wähle dein Setup das zu dir passt.</span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Home-Office</span>
            <span class="mt-1 block text-base text-gray-300">Für die regnerischen Tage im Trainer</span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Office Gym</span>
            <span class="mt-1 block text-base text-gray-300">Damit du in Form bleibst</span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Company Events</span>
            <span class="mt-1 block text-base text-gray-300"
              >Vom Legobauen bis zum Festival oder eine Reise nach Italien</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-gray-900">
    <div
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
    >
      <div class="relative">
        <div class="absolute inset-x-0 top-0 transform translate-y-px">
          <div class="flex justify-center transform -translate-y-1/2">
            <span
              class="inline-flex rounded-full bg-red-triarc px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
            >
              Das Gym
            </span>
          </div>
        </div>
        <img src="img/office/gym.png" class="object-cover rounded-3xl md:rounded-b-none" />
      </div>
      <div class="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-2 xl:pb-24">
        <p class="mt-3 text-3xl font-extrabold text-white text-right">Was wir von dir erwarten</p>
        <p class="mt-5 text-lg text-gray-300 text-right">
          Du bist eine aufgestellte Persönlichkeit und bereit für neue Herausforderungen. Du weisst welcher der Begriffe
          CI, E2E, SSR, ABS, SSE, XSS und CSS nichts mit der Entwicklung zu tun hat.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 text-right">
          <p>
            <span class="block text-2xl font-bold text-white">Technologie</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du kennst die aktuellen Webtechnologien und beherscht vorzugsweise Angular sowie andere Technologien aus
              unserem <a href="..#technology" class="underline">Stack</a></span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Kommunikativ</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du arbeitest und kommunizierst gerne im Team und das auch auf English</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Erfahrung</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du hast einen abgeschlossen IT-Ausbildung oder vergleichsweise Arbeitserfahrung in der Entwicklung</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Begeisterung</span>
            <span class="mt-1 block text-base text-gray-300"
              >Dir macht die Entwicklung Freunde und verstehst warum Clean-Code wichtig ist. Neues begeistert dich</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-blue-triarc">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Immer noch hier?</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        Du findest du passt zu uns und kannst etwas beisteuern? Entschlüssle den Code und bewirb dich!
      </p>

      <button
        disabled
        on:click={unlock}
        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-triarc bg-white hover:bg-indigo-50 sm:w-auto"
      >
        Unlock me
      </button>
    </div>
  </div>
</div>
