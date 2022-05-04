<script>
  import Header from '../lib/components/Header.svelte'
  import Footer from '../lib/components/Footer.svelte'

  function serializeSchema(jobPosting) {
    return (
      '<script type="application/ld+json">' +
      JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: jobPosting.claim,
          jobBenefits:
            'Junges dynamisches Team. Modernste Technologien. Spannende Abwechslungsreiche Projekte. Soziokratie. Erfolgsbeteiligung. Grünes Open-Space Office mit Bar und Gym zentral in Zürich. Flexible Arbeitszeiten, Homeoffice und Remote. Innovation Lab, Agile Entwicklung',
          datePosted: '2022-05-04',
          description: `Beschreibung: Triarc Labs sucht ${jobPosting.claim} 60 - 100%`,
          educationRequirements:
            'Hochschulabschluss in Informatik (ETH/Universität/FH/vergleichbarer Leistungsnachweis).',
          employmentType: 'Full- or Parttime',
          experienceRequirements: jobPosting.experienceRequirements,
          incentiveCompensation: 'Beteiligung am Unternehmenserfolg',
          industry: 'Custom Software Development',
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Zürich',
              addressRegion: 'ZH',
              addressCountry: 'CH',
              postalCode: '8005',
              streetAddress: 'Neue Hard 14',
              email: 'development@triarc-labs.com',
            },
          },
          occupationalCategory: '15-1132.00 Software Developers, Application',
          qualifications:
            'Leidenschaft für die Software Entwicklung. Hochschulabschluss in Informatik (ETH/Universität/FH/vergleichbarer Leistungsnachweis). Hohe Methodenkompetenz und logisches, vernetztes Denken. Spass an der Arbeit im Team. Lösungsorientiertes Denken und Handeln. Lernfähigkeit und kontinuierliche Weiterentwicklung ',
          responsibilities: jobPosting.responsibilities,
          skills:
            ' Angular, C#, .Net, NodeJS, Docker, MongoDB, PostgreSQL, ElasticSearch, Gitlab, Prometheus, Sentry, Azure',

          baseSalary: '104000-128000',
          salaryCurrency: 'CHF',
          specialCommitments: '60% - 100%',
          workHours: '24 - 40 Stunden pro Woche',
        },
        null,
        2
      ) +
      // prettier-ignore
      // eslint-disable-next-line
      '<\/script>'
    )
  }

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

  const jobPostings = [
    {
      content:
        'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. ',
      claim: 'Senior Software Engineer',
      img: 'img/jobs/super_woman.svg',
      open: false,
      responsiblities:
        'sind so breit gefächert und abwechslungsreich wie die Arbeit, die dich bei uns erwartet: vom Design bis zur Lösungsfindung ist alles dabei, individuell angepasst auf unsere branchenübergreifenden Kunden. In unserem Team aus den qualifiziertesten Entwicklern profitierst du von unserer jahrelangen Erfahrung, und wir von deiner. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobile-Anwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
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
      experienceRequirements: '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
    },
    {
      content:
        'Wir sind Ingenieure: bestausgebildete und praxiserfahrene IT-Fachleute. Wir können, was wir tun. Und tun für unsere Kunden alles, was wir können. Willst du mittun?',
      claim: 'Professional Software Engineer',
      img: 'img/jobs/be_the_hero.svg',
      open: false,
      responsiblities:
        'umfassen das ganze Spektrum vom Design bis zur Lösungsfindung, individuell angepasst auf unsere branchenübergreifenden Kunden. Das ist herausfordernd, ja, aber das bringt dich auch weiter. Und du bist nicht allein: In unserem Team aus den qualifiziertesten Entwicklern profitierst du von unserer jahrelangen Erfahrung. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobileanwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
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
      experienceRequirements: '2 Jahre Erfahrung mit Angular und einer objektorientier Sprache wie C# / Java',
    },
    {
      content:
        'Möchtest du die Teams im Infrastrukturbereich unterstützen und dich um unsere Kubernetes Cluster und unseren Tech-Stack kümmern? Dann fehlt dir jetzt nur noch ein Klick zum Glück: <a class="underline" href="mailto:development@triarc-labs.com">development@triarc-labs.com</a>',
      claim: 'DevOps / Operation Engineer',
      img: 'img/jobs/cloud_hosting.svg',
      open: false,
      responsiblities:
        'sind breit gefächert. Unterstütze das Team in der Infrastruktur unserer vielzähligen Projekte. Dazu gehört die Wartung von OnPremise Maschinen mit Linux und kubeadm sowie gemanagte Kubernetes-Cluster auf Google Cloud. Du hilfst im Support von unserem Produkt μLink und arbeitest mit der Entwicklung eng zusammen, um die Stabilität und Verfügbarkeit zu gewährleisten.',
      skills: [
        'Leidenschaft für die Software Entwicklung',
        'Praktische Erfahrung mit Kubernetes, Docker und GCP',
        'Wünscheswerte Erfahrung mit Cert Manager, Postgres, Elasticsearch und MongoDB',
        'Spass an der Arbeit im Team',
        'Lösungsorientiertes Denken und Handeln',
        'Lernfähigkeit und kontinuierliche Weiterentwicklung',
        'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
      ],
      experienceRequirements:
        'Praktische Erfahrung mit Kubernetes, Docker und GCP, Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
    },
  ]
</script>

<svelte:head>
  <title>Jobs - triarc-labs</title>
</svelte:head>

<div class="bg-gray-800 h-screen relative">
  <Header>Jobs</Header>

  <div class="relative bg-gray-900">
    <div
      class="relative pt-12 pb-8 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 max-w-4xl bg-gray-900 mx-auto pl-4 sm:pl-6 lg:max-w-7xl lg:px-8"
    >
      <div class="relative z-10 py-8 px-3">
        {#each jobPostings as jobPosting, i}
          {@html serializeSchema(jobPosting)}
          <div
            class="flex items-center {i % 2
              ? 'flex-col md:flex-row justify-end'
              : 'flex-col justify-end md:flex-row-reverse'}"
          >
            <div class="md:max-w-2xl {i % 2 ? 'md:text-right' : 'md:text-left'}">
              <p class="mt-3 text-2xl font-bold text-gray-100">
                {@html jobPosting.claim}
              </p>
              <p class="mt-2 text-base leading-6 text-gray-300">
                {@html jobPosting.content}<br />
              </p>
              <button class="text-white underline mt-6" on:click={() => toggle(i)}>Mehr erfahren</button>
            </div>
            <img src={jobPosting.img} alt={jobPosting.claim} class="w-80 mt-8 mx-12" />
          </div>
          <div
            id="job-{i}"
            class="bg-gray-700 mt-8 mb-16 md:mb-24 overflow-hidden text-white h-0 duration-500 transform transition-all"
          >
            <div class="px-12 py-8">
              <div class="underline">Deine Aufgaben</div>
              <p class="mb-8">
                {@html jobPosting.responsiblities}
              </p>

              <div class="underline">Dein Profil umfasst</div>

              {#each jobPosting.skills as skill}
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
          <picture>
            <source
              type="image/webp"
              srcset="/img/office/triarc_lego-320.webp 320w, /img/office/triarc_lego-640.webp 640w, /img/office/triarc_lego-1080.webp 1080w"
            />
            <img
              class="object-cover rounded-3xl"
              alt="triarc legos"
              srcset="/img/office/triarc_lego-320.jpg 320w, /img/office/triarc_lego-640.jpg 640w, /img/office/triarc_lego-1080.jpg 1080w"
              src="/img/office/triarc_lego-1080.jpg"
            />
          </picture>
        </div>
        <div class="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-2 xl:pb-24">
          <p class="mt-3 text-3xl font-extrabold text-white">
            Kultivierte Grundlagen <span class="text-red-triarc">#Soziokratie</span>
          </p>
          <p class="mt-5 text-lg text-gray-300">
            Wöchentlich optimieren wir im Team unsere Prozesse. Zusammen bearbeiten wir Themen, die beschäftigen. Alle
            Vorschläge sind erlaubt, ja sogar aktiv gefordert. Denn das alte «falsch» kann das neue «richtig» sein. Und
            umgekehrt. Richtig?
          </p>
          <div class="mt-12 grid grid-cols-2 gap-y-12 gap-x-6">
            <div class="col-span-2 md:col-span-1">
              <span class="block text-2xl font-bold text-white">Vom Praktikanten zum Peer</span>
              <span class="mt-1 block text-base text-gray-300">
                Wir wollen auf Augenhöhe zusammenarbeiten. Darum begleiten dich auf dem Weg zum Peer klar definierte
                Erwartungen und eine gezielte Förderung. Und das über mehrere Etappen.
              </span>
            </div>
            <div class="col-span-2 md:col-span-1">
              <span class="block text-2xl font-bold text-white">Transparenz für alle</span>
              <span class="mt-1 block text-base text-gray-300">
                Alle Löhne werden offen kommuniziert. Für Peers gibt’s aktuell 104k – 136k CHF. Die variablen
                Komponenten richten sich nach den Quartalszahlen, welche wir im Team besprechen.
              </span>
            </div>

            <p class="col-span-2">
              <span class="block text-2xl font-bold text-white">Soziales leisten</span>
              <span class="mt-1 block text-base text-gray-300">
                Von monatlich veränderbarem Arbeitspensum über Workation und FlexWork: Nichts ist uns fremd. Denn
                Freiheit und Rücksicht auf individuelle Bedürfnisse sind uns wichtig. Auch gut zu wissen: Wer sich beim
                Tippen den Finger bricht oder gar noch Übleres erdulden muss, erholt sich davon in einem netten
                Einzelzimmer mit Seeblick. #privatversichert...
              </span>
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
              Sociocratic Flow
            </span>
          </div>
        </div>
        <picture>
          <source
            type="image/webp"
            srcset="/img/office/triarc-flow-320.webp 320w, /img/office/triarc-flow-640.webp 640w, /img/office/triarc-flow-1080.webp 1080w"
          />
          <img
            class="object-cover max-w-1/2 rounded-3xl"
            alt="triarc sociocractic flow"
            srcset="/img/office/triarc-flow-320.jpg 320w, /img/office/triarc-flow-640.jpg 640w, /img/office/triarc-flow-1080.jpg 1080w"
            src="/img/office/triarc-flow-1080.jpg"
          />
        </picture>
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
        <picture>
          <source
            type="image/webp"
            srcset="/img/office/bar-320.webp 320w, /img/office/bar-640.webp 640w, /img/office/bar-1080.webp 1080w"
          />
          <img
            class="object-cover rounded-3xl"
            alt="triarc office bar"
            srcset="/img/office/bar-320.jpg 320w, /img/office/bar-640.jpg 640w, /img/office/bar-1080.jpg 1080w"
            src="/img/office/bar-1080.jpg"
          />
        </picture>
      </div>

      <div class="relative pt-12 pb-8 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <p class="mt-3 text-3xl font-extrabold text-white">Was wir dir bieten</p>
        <p class="mt-5 text-lg text-gray-300">
          Wir sind eine Software-Boutique im Herzen von Zürich, entwickeln leidenschaftlich gerne Software und sind
          immer auf der Suche nach neuen Talenten die uns ergänzen.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-2xl font-bold text-white">40 Stunden-Woche</span>
            <span class="mt-1 block text-base text-gray-300">
              Wir arbeiten gern. Damit das so bleibt, brauchen wir genügend Freizeit. Dazu gehören auch 5 Wochen Ferien.
              Pro Jahr, nicht pro Monat.
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Technologie</span>
            <span class="mt-1 block text-base text-gray-300"
              >Wir bleiben immer aktuell und setzen die Technologie ein, die Sinn macht. Die richtige suchen und finden
              wir zusammen.
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Hardware</span>
            <span class="mt-1 block text-base text-gray-300">Wähle das Setup, das zu dir passt.</span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Home-Office</span>
            <span class="mt-1 block text-base text-gray-300"
              >Weil es auch nach Corona Tage geben kann, die man einfach lieber im Trainer verbringt.</span
            >
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Kaffee / Bar</span>
            <span class="mt-1 block text-base text-gray-300">
              Bediene dich an der triarc-Bar. Kaffee, Softdrinks, Bier und ein sortiertes Snack-Angebot warten auf
              deinen Zugriff. Darunter Sachen, die den Futterneid deiner Ernährungsberaterin wecken. Und für den
              Beerenhunger auch mal frische Früchtchen.
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Company Events</span>
            <span class="mt-1 block text-base text-gray-300">
              Team-Kochevents via Teams, Legosteine verbauen (streng nach Anleitung, versteht sich) und in besseren
              Zeiten auch Ausflüge an Festivals oder eine Reise nach Italien...: Du hast Ideen, wir ein Budget dazu.
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Office Gym</span>
            <span class="mt-1 block text-base text-gray-300"
              >Rudere den Bug von der Seele. Pump dir frische Ideen ins Hirn. Stemm dich gegen Widerstand. Inhouse
              warten Blei und Matten auf Beschäftigung.
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
        <picture>
          <source
            type="image/webp"
            srcset="/img/office/gym-320.webp 320w, /img/office/gym-640.webp 640w, /img/office/gym-1080.webp 1080w"
          />
          <img
            class="object-cover rounded-3xl"
            alt="triarc gym"
            srcset="/img/office/gym-320.jpg 320w, /img/office/gym-640.jpg 640w, /img/office/gym-1080.jpg 1080w"
            src="/img/office/gym-1080.jpg"
          />
        </picture>
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
              >Dir macht die Entwicklung Freude und du verstehst, weshalb Clean Code wichtig ist. Das Neue begeistert
              dich.
            </span>
          </p>
          <p>
            <span class="block text-2xl font-bold text-white">Kommunikativ</span>
            <span class="mt-1 block text-base text-gray-300"
              >Du arbeitest und kommunizierst gerne im Team. Und das auch auf Englisch (kannst du eh schon, vom Gamen).
            </span>
          </p>

          <p>
            <span class="block text-2xl font-bold text-white">Offen</span>
            <span class="mt-1 block text-base text-gray-300">
              Du bist eine positiv eingestellte Persönlichkeit, allzeit bereit für neue Herausforderungen. Du magst
              Menschen und behandelst sie wie Mitmenschen.
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
        <picture>
          <source
            type="image/webp"
            srcset="/img/office/teamcall-320.webp 320w, /img/office/teamcall-640.webp 640w, /img/office/teamcall-1080.webp 1080w"
          />
          <img
            class="object-cover rounded-3xl"
            alt="triarc teamcall"
            srcset="/img/office/teamcall-320.jpg 320w, /img/office/teamcall-640.jpg 640w, /img/office/teamcall-1080.jpg 1080w"
            src="/img/office/teamcall-1080.jpg"
          />
        </picture>
      </div>

      <div class="relative pt-12 pb-8 sm:pt-24 sm:pb-64 my-auto xl:col-start-1 xl:pb-24">
        <p class="mt-3 text-3xl font-extrabold text-white">Ein Tag im triarc-Homeoffice</p>
        <p class="mt-5 text-lg text-gray-300 mb-8">
          Warum seit Corona der Verkauf von Mützen und Caps deutlich zugenommen hat.
          <a href="stories/day-at-triarc" class="text-white underline">Mehr dazu hier</a>
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
        Du findest, du passt zu uns und kannst etwas beisteuern? Entschlüssle den Code und bewirb dich mit einem
        Vorteil!
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
  <Footer />
</div>
