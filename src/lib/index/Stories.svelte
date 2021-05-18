<script lang="ts">
  function chat(person: string) {
    const input = document.getElementById('chat-message')
    console.log(input)
    if (input) {
      ;(input as HTMLInputElement).value = `@${person} `
    }
  }
</script>

<div class="relative pt-8 md:pb-10 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8" id="projects">
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">Stories</h2>
    </div>
  </div>
</div>

<div class="relative bg-white pt-16 pb-32 overflow-hidden">
  <div class="relative">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">PORTA</h2>
            <p class="mt-4 text-lg text-gray-500 italic">
              PORTA ist eine standardisierte Sammlung von Gebärden, die den Möglichkeiten und Bedürfnissen von Menschen
              mit geistiger und mehrfacher (Sinnes-)Behinderung entsprechen.
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Zusammen mit «Die Tanne», der Schweizerischen Stiftung für Taubblinde, entwickelte wir für Porta eine
              mobile Applikation mit umfangreicher Funktionalität – darunter das Trainieren von Gebärden nach
              benutzerspezifischen Katalogen und von eigenen Gebärden – sowie Arbeitsblätter für den Austausch zwischen
              Betreuungspersonen.
            </p>
            <div class="mt-6">
              <div class="flex">
                <a href="https://play.google.com/store/apps/details?id=com.triarclabs.tanne" target="_blank">
                  <img alt="Get it on Google Play" src="icons/google-play-btn.svg" class="h-12 mr-3" />
                </a>
                <a href="https://apps.apple.com/ch/app/porta-portmann-tanne/id1355730154" target="_blank">
                  <img alt="Get it on Apple AppStore" src="icons/apple-store-btn.svg" class="h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 pt-4">
          <blockquote>
            <footer class="">
              <div class="flex items-center space-x-3" on:click={chat('pascal')}>
                <div class="flex-shrink-0">
                  <img class="h-10 w-10" src="img/avatars/pascal.png" alt="pascal" />
                </div>
                <div class="cursor-pointer">
                  <div class="text-base font-medium text-gray-700">Pascal Bertschi</div>
                  <div class="font-light text-gray-500">Software Lead</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="img/stories/tanne-app.png"
            alt="tanne app"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Ortho Client</h2>
            <p class="mt-4 text-lg text-gray-500 italic">
              ORTHO-TEAM ist ein gesamtschweizerisch tätiges Unternehmen auf dem Gebiet der Orthopädie- und
              Reha-Technik, fokussiert auf ganzheitliche Versorgungskonzepte.
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Die Fertigung von Orthesen und Prothesen ist sehr individuell auf den Kunden zugeschnitten und
              anspruchsvoll. Mit den von triarc konzipierten Applikationen Client, Order und Shortcut werden die
              Spezialisten während des gesamten Kundenprozesses unterstützt – von der vereinfachten Auftragseröffnung
              und der Bearbeitung über die Begleitung des Kunden bis hin zum digitalisierten Bestellwesen.
            </p>
          </div>
        </div>
        <div class="mt-4 pt-4">
          <blockquote>
            <footer class="mt-3">
              <div class="flex items-center space-x-3" on:click={chat('elke')}>
                <div class="flex-shrink-0">
                  <img class="h-10 w-10" src="img/avatars/elke.png" alt="elke" />
                </div>
                <div class="cursor-pointer">
                  <div class="text-base font-medium text-gray-700">Elke Engel</div>
                  <div class="font-light text-gray-500">Project Lead</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="img/stories/wunder-app.png"
            alt="tanne app"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="relative mt-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div class="mt-6">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Verba</h2>
            <p class="mt-4 text-lg text-gray-500 italic">
              Die Schweizerische Vereinigung Morbus Bechterew (SVMB) wurde 1978 von Betroffenen gegründet und zählt
              heute über 4300 Mitglieder. Sie berät, unterstützt und vernetzt Menschen mit der chronisch-rheumatischen
              Erkrankung Morbus Bechterew
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Verba verwaltet die Dossiers der Mitglieder und begleitet sie im Therapieprozess. Von der digitalen
              Krankenkassenrechnung bis hin zur vollständigen Integration ins SAGE. Die Vereinslösung in der Schweizer
              Cloud, damit sich das Bechterew-Team auf die wichtigen Dinge im Alltag fokussieren kann.
            </p>
          </div>
        </div>
        <div class="mt-4 pt-4">
          <blockquote>
            <footer class="">
              <div class="flex items-center space-x-3" on:click={chat('pascal')}>
                <div class="flex-shrink-0">
                  <img class="h-10 w-10" src="img/avatars/pascal.png" alt="pascal" />
                </div>
                <div class="cursor-pointer">
                  <div class="text-base font-medium text-gray-700">Pascal Bertschi</div>
                  <div class="font-light text-gray-500">Software Lead</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="img/stories/svmb.png"
            alt="verba"
          />
        </div>
      </div>
    </div>
  </div>
  <!--  <div class="mt-24">-->
  <!--    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">-->
  <!--      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">-->
  <!--        <div>-->
  <!--          <div class="mt-6">-->
  <!--            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">myWalo</h2>-->
  <!--            <p class="mt-4 text-lg text-gray-500 italic">-->
  <!--              WALO ist ein international tätiges, seit über 100 Jahren familiengeführtes Schweizer Bauunternehmen (heute-->
  <!--              bereits in dritter und vierter Generation).-->
  <!--            </p>-->
  <!--            <p class="mt-4 text-lg text-gray-500">-->
  <!--              Auf der Baustelle treffen verschiedene analoge und digitale Prozesse aufeinander. Mittels Data Lake-->
  <!--              Technologie führt die von triarc-labs entwickelte «myWalo» Applikation sämtliche Prozesse in Echtzeit-->
  <!--              zusammen und erlaubt die Digitalisierung der Baustellen, von der Schaufel bis zum Baukran.-->
  <!--            </p>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="mt-4 pt-4">-->
  <!--          <blockquote>-->
  <!--            <footer class="">-->
  <!--              <div class="flex items-center space-x-3">-->
  <!--                <div class="flex-shrink-0">-->
  <!--                  <img class="h-10 w-10" src="img/avatars/serge.png" alt="" />-->
  <!--                </div>-->
  <!--                <div>-->
  <!--                  <div class="text-base font-medium text-gray-700">Serge Müller</div>-->
  <!--                  <div class="font-light text-gray-500">Software Architect</div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </footer>-->
  <!--          </blockquote>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">-->
  <!--        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">-->
  <!--          <img-->
  <!--            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"-->
  <!--            src="img/stories/walo-app.png"-->
  <!--            alt="mywalo"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</div>
