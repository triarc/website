<script>
  function unlock(evt) {
    if (evt.target.disabled) {
      return
    }
    const a = document.createElement('a')
    a.href = 'mailto:wanted@triarc-labs.com'
    document.body.append(a)
    a.click()
  }
  function toggle(index) {
    const elm = document.getElementById(`job-${index}`)
    if (elm.classList.contains('h-0')) {
      elm.classList.remove('h-0')
      elm.classList.add('h-auto')
    } else {
      elm.classList.add('h-0')
      elm.classList.remove('h-auto')
    }
  }
  const slogans = [
    {
      content:
        'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist das Bindeglied zwischen dem Kunden und deinen Entwickler-KollegInnen.',
      claim: 'Senior Software Engineer',
      img: 'img/hero/super_woman.svg',
      open: false,
      responsiblities:
        'sind breit gefächert. Vom Design bis zur Lösungsfindung, individuell angepasst auf unsere branchenübergreifenden Kunden ist alles dabei. Die Arbeit ist herausfordernd und abwechslungsreich. In unserem Team aus den qualifiziertesten Entwicklern, profitierst du von unserer jahrelangen Erfahrung. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobileanwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
      skills: [
        'Leidenschaft für die Software Entwicklung',

        'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',

        'Hohe Methodenkompetenz und logisches, vernetztes Denken',

        'Spass an der Arbeit im Team',

        'Lösungsorientiertes Denken und Handeln',

        'Lernfähigkeit und kontinuierliche Weiterentwicklung',

        'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
        '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
      ],
    },
    {
      content:
        'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
      claim: 'Professional Software Engineer',
      img: 'img/hero/be_the_hero.svg',
      open: false,
      responsiblities:
        'sind breit gefächert. Vom Design bis zur Lösungsfindung, individuell angepasst auf unsere branchenübergreifenden Kunden ist alles dabei. Die Arbeit ist herausfordernd und abwechslungsreich. In unserem Team aus den qualifiziertesten Entwicklern, profitierst du von unserer jahrelangen Erfahrung. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobileanwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
      skills: [
        'Leidenschaft für die Software Entwicklung',

        'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',

        'Hohe Methodenkompetenz und logisches, vernetztes Denken',

        'Spass an der Arbeit im Team',

        'Lösungsorientiertes Denken und Handeln',

        'Lernfähigkeit und kontinuierliche Weiterentwicklung',

        'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
        '2 Jahre Erfahrung mit Angular und einer objektorientier Sprache wie C# / Java',
      ],
    },
    {
      content:
        'Unterstütze die Teams im Infrastrukturbereich und kümmere dich um unsere Kubernetes Cluster und unseren Tech-Stack. Bewirb dich unter <a class="underline" href="mailto:development@triarc-labs.com">development@triarc-labs.com</a>',
      claim: 'Operation Engineer',
      img: 'img/hero/cloud_hosting.svg',
      open: false,
      skills: ['Kubernetes', 'Docker', 'Postgres', 'Elasticsearch'],
    },
  ]
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
    <div
      class="relative pt-12 pb-8 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 max-w-4xl bg-gray-900 mx-auto pl-4 sm:pl-6 lg:max-w-7xl lg:px-8"
    >
      <div class="relative z-10 py-8 px-3">
        {#each slogans as heroSolgan, i}
          <div
            class="flex items-center {i % 2
              ? 'flex-col md:flex-row justify-end'
              : 'flex-col justify-end md:flex-row-reverse'}"
          >
            <div class="md:max-w-2xl {i % 2 ? 'md:text-right' : 'md:text-left'}">
              <p class="mt-3 text-2xl font-bold text-gray-100">
                {@html heroSolgan.claim}
              </p>
              <p class="mt-2 text-base leading-6 text-gray-300">
                {@html heroSolgan.content}<br />
              </p>
              <button class="text-white underline mt-6" on:click={() => toggle(i)}>Mehr erfahren</button>
            </div>
            <img src={heroSolgan.img} class="w-80 mt-8 mx-12" />
          </div>
          <div
            id="job-{i}"
            class="bg-gray-700 mt-8 mb-16 md:mb-24 overflow-hidden text-white h-0 duration-500 transform transition-all"
          >
            <div class="px-12 py-8">
              <div class="underline">Deine Aufgaben</div>
              <p class="mb-8">
                {@html heroSolgan.responsiblities}
              </p>

              <div class="underline">Dein Profil umfasst</div>

              {#each heroSolgan.skills as skill}
                <div class="flex items-center mt-2">
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
                    <dd class="text-base text-gray-300">
                      {skill}
                    </dd>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
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
                class="inline-flex rounded-full bg-blue-triarc px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
              >
                Raytraced
              </span>
            </div>
          </div>
          <img src="img/office/triarc_lego.jpeg" class="object-cover rounded-3xl" />
        </div>
        <div class="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-2 xl:pb-24">
          <p class="mt-3 text-3xl font-extrabold text-white">
            Kultivierte Grundlagen <span class="text-red-triarc">#Soziokratie</span>
          </p>
          <p class="mt-5 text-lg text-gray-300">
            Wöchentlich optimieren wir im Team unsere Prozesse. Zusammen bearbeiten wir Themen, die beschäftigen. Alle
            Vorschläge sind erlaubt, ja sogar aktiv gefordert.
          </p>
          <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <p>
              <span class="block text-2xl font-bold text-white">Vom Praktikanten zum Peer</span>
              <span class="mt-1 block text-base text-gray-300"
                >Wir wollen auf Augenhöhe zusammenarbeiten. Klare Erwartungen und gezielte Förderung begleiten Dich über
                mehrere Etappen auf dem Weg zum Peer.
              </span>
            </p>
            <p>
              <span class="block text-2xl font-bold text-white">Transparenz für alle</span>
              <span class="mt-1 block text-base text-gray-300"
                >Alle Löhne sind offen kommuniziert. Als Peer gibt’s aktuell 104k – 136k CHF. Die variablen Komponenten
                richten sich nach den Quartalszahlen, welche wir im Team besprechen.</span
              >
            </p>

            <p class="col-span-2">
              <span class="block text-2xl font-bold text-white">Soziales Leisten</span>
              <span class="mt-1 block text-base text-gray-300"
                >Von monatlich veränderbarem Arbeitspensum über Workation und FlexWork - Freiheit und Rücksicht auf
                individuelle Bedürfnisse sind wichtig. Auch wichtig ist; Bricht sich ein Teammitglied beim Tippen einen
                Finger, oder schlimmeres, erholen wir uns davon in einem netten Einzelzimmer mit Seeblick.
                #privatversichert</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-700 py-12 sm:py-40 max-w-4xl bg-gray-900 mx-auto pl-4 sm:pl-6 lg:max-w-7xl lg:px-8">
      <div class="bg-white rounded-3xl relative">
        <div class="absolute inset-x-0 top-0 transform translate-y-px">
          <div class="flex justify-center transform -translate-y-1/2">
            <span
              class="inline-flex rounded-full bg-yellow-triarc px-4 py-1 text-sm font-semibold tracking-wider uppercase text-black"
            >
              Sociakratie Flow
            </span>
          </div>
        </div>
        <img src="img/hero/triarc-flow.png" class="max-w-1/2" />
      </div>
    </div>

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
        <p class="mt-3 text-3xl font-extrabold text-white">Was wir dir zusätzlich bieten</p>
        <p class="mt-5 text-lg text-gray-300">
          Zu geben tut gut; Zu bekommen noch besser. Darum geben und bekommen wir.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-2xl font-bold text-white">40 Stundenwoche</span>
            <span class="mt-1 block text-base text-gray-300"
              >Weil uns allen Freizeit irgendwann wichtig ist; Inklusive 5 Wochen Ferien.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Technologie</span>
            <span class="mt-1 block text-base text-gray-300"
              >Wir bleiben immer aktuell und setzen die Technologie ein, die Sinn macht. Zusammen suchen wir das
              Richtige.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Hardware</span>
            <span class="mt-1 block text-base text-gray-300">Wähle das Setup, das zu dir passt.</span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Home-Office</span>
            <span class="mt-1 block text-base text-gray-300"
              >Auch nach Corona; Für die regnerischen Tage im Trainer.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Kaffee / Bar</span>
            <span class="mt-1 block text-base text-gray-300"
              >Bediene dich an der triarc-Bar. Kaffee, Softdrinks, Bier und eine sortierte Bar warten auf Konsum. Neben
              echten Früchtchen stellen wir auch saisonales Süsses hin.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Company Events</span>
            <span class="mt-1 block text-base text-gray-300"
              >Team-Kochevents via Teams, Legobauen streng nach Anleitung und in besseren Zeiten auch Ausflüge an
              Festivals oder eine Reise nach Italien. Alle bringen Ideen ein. Wir haben ein Budget.
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Office Gymnastik</span>
            <span class="mt-1 block text-base text-gray-300"
              >Blei und Matten für die «Informbleibenwollenden». Rudere dir den Bug von der Seele.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-gray-900 py-24">
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
        <img src="img/office/gym.png" class="object-cover rounded-3xl" />
      </div>
      <div class="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-2 xl:pb-24">
        <p class="mt-3 text-3xl font-extrabold text-white">Was wir grundsätzlich erwarten</p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-2xl font-bold text-white">Technologie</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du kennst die aktuellen Technologien und beherrschst vorzugsweise sogar einige aus unserem <a
                href="..#technology"
                class="underline">Stack</a
              >.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Begeisterung</span>
            <span class="mt-1 block text-base text-gray-300"
              >Dir macht die Entwicklung Freunde und du verstehst, weshalb Clean Code wichtig ist. Das Neue begeistert
              dich.</span
            >
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Kommunikativ</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du arbeitest und kommunizierst gerne im Team und das auch auf Englisch.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Offen</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du bist eine positiv eingestellte Persönlichkeit allzeit bereit für neue Herausforderungen. Du magst
              Mitmenschen und behandelst sie entsprechend.
            </span>
          </p>
        </div>
      </div>
    </div>


    <div
      class="max-w-4xl bg-gray-900 mx-auto pl-4 sm:pl-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
    >
      <div class="relative md:mt-32">
        <div class="absolute inset-x-0 top-0 transform translate-y-px">
          <div class="flex justify-center transform -translate-y-1/2">
            <span
              class="inline-flex rounded-full bg-blue-triarc px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white"
            >
              Teamcall
            </span>
          </div>
        </div>
        <img src="img/office/teamcall.png" class="object-cover" />
      </div>

      <div class="relative pt-12 pb-8 sm:pt-24 sm:pb-64 my-auto xl:col-start-1 xl:pb-24">
        <p class="mt-3 text-3xl font-extrabold text-white">Ein Tag im triarc-Homeoffice</p>
        <p class="mt-5 text-lg text-gray-300 mb-8">
          Warum seit Corona der Verkauf von Mützen und Caps deutlich zugenommen hat.
          <a href='stories/day-at-triarc' class='text-white underline'>Mehr dazu hier</a>
        </p>
      </div>
    </div>
  </div>



  <div class="bg-blue-triarc">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Immer noch hier?</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        Du findest du passt zu uns und kannst etwas beisteuern? Entschlüssle den Code und bewirb dich mit einem Vorteil!
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
