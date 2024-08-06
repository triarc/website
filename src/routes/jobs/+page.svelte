<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import JobIntro from './job-intro.svelte'
  import Block from '$lib/components/Block.svelte'
  import heroImage from '$lib/assets/hero/Jobs.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent, JobPosting } from '$lib/components/TypeDefinitions'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import Button from '$lib/components/Button.svelte'


  const openJobListings = ['Senior Software Engineer']
  let selectedListing = 'Initiativbewerbung'

  function chooseListing(job: string | undefined){
    if (job) {
      selectedListing = job
    }
  }

  function serializeSchema(jobPosting: JobPosting) {
    return (
      '<script type="application/ld+json">' +
      JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: jobPosting.claim,
          name: jobPosting.claim,
          hiringOrganization: {
            '@types': 'Organization',
            email: 'development@triarc-labs.com',
            name: 'triarc laboratories ltd.',
            url: 'https://triarc-labs.com',
            telephone: '+41 78 946 69 51',
            keywords: 'custom software, software development, software boutique',
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
          jobBenefits:
            'Junges dynamisches Team. Modernste Technologien. Spannende Abwechslungsreiche Projekte. Soziokratie. Erfolgsbeteiligung. Grünes Open-Space Office mit Bar und Gym zentral in Zürich. Flexible Arbeitszeiten, Homeoffice und Remote. Innovation Lab, Agile Entwicklung',
          datePosted: '2022-05-13',
          description: `Beschreibung: Triarc Labs sucht ${jobPosting.claim} 60 - 100%`,
          educationRequirements:
            'Hochschulabschluss in Informatik (ETH/Universität/FH/vergleichbarer Leistungsnachweis).',
          employmentType: 'Full- or Part-time',
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

  const jobPostings = [
    {
      content:
        'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. ',
      claim: 'Senior Software Engineer',
      img: 'src/lib/assets/img/jobs/super_woman.svg',
      open: false,
      responsibilities:
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
    // {
    //   content:
    //     'Wir sind Ingenieure: bestausgebildete und praxiserfahrene IT-Fachleute. Wir können, was wir tun. Und tun für unsere Kunden alles, was wir können. Willst du mittun?',
    //   claim: 'Professional Software Engineer',
    //   img: 'img/jobs/be_the_hero.svg',
    //   open: false,
    //   responsiblities:
    //     'umfassen das ganze Spektrum vom Design bis zur Lösungsfindung, individuell angepasst auf unsere branchenübergreifenden Kunden. Das ist herausfordernd, ja, aber das bringt dich auch weiter. Und du bist nicht allein: In unserem Team aus den qualifiziertesten Entwicklern profitierst du von unserer jahrelangen Erfahrung. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobileanwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
    //   skills: [
    //     'Leidenschaft für die Software Entwicklung',
    //     'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
    //     'Hohe Methodenkompetenz und logisches, vernetztes Denken',
    //     'Spass an der Arbeit im Team',
    //     'Lösungsorientiertes Denken und Handeln',
    //     'Lernfähigkeit und kontinuierliche Weiterentwicklung',
    //     'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
    //     '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
    //   ],
    //   experienceRequirements: '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
    // },
    // {
    //  content:
    //     'Möchtest du die Teams im Infrastrukturbereich unterstützen und dich um unsere Kubernetes Cluster und unseren Tech-Stack kümmern? Dann fehlt dir jetzt nur noch ein Klick zum Glück: <a class="underline" href="mailto:development@triarc-labs.com">development@triarc-labs.com</a>',
    //   claim: 'DevOps / Operation Engineer',
    //   img: 'img/jobs/cloud_hosting.svg',
    //   open: false,
    //   responsiblities:
    //     'sind breit gefächert. Unterstütze das Team in der Infrastruktur unserer vielzähligen Projekte. Dazu gehört die Wartung von OnPremise Maschinen mit Linux und kubeadm sowie gemanagte Kubernetes-Cluster auf Google Cloud. Du hilfst im Support von unserem Produkt μLink und arbeitest mit der Entwicklung eng zusammen, um die Stabilität und Verfügbarkeit zu gewährleisten.',
    //   skills: [
    //     'Leidenschaft für die Software Entwicklung',
    //     'Praktische Erfahrung mit Kubernetes, Docker und GCP',
    //     'Wünscheswerte Erfahrung mit Cert Manager, Postgres, Elasticsearch und MongoDB',
    //     'Spass an der Arbeit im Team',
    //     'Lösungsorientiertes Denken und Handeln',
    //     'Lernfähigkeit und kontinuierliche Weiterentwicklung',
    //     'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
    //   ],
    //   experienceRequirements:
    //     'Praktische Erfahrung mit Kubernetes, Docker und GCP, Gute Deutsch- sowie Englisch-Kenntnisse in Wort und Schrift',
    // },
  ]

  let listings: BlockContent[] = [
 {
        title: '<span class="text-sm">wir suchen</span><br/>Junior Software Engineer',
        formReference: 'Junior Software Engineer',
        content:
          'Als Junior bist hast du bereits erste Erfahrungen in der Softwareentwicklung gesammelt. Du verstehst die Basics, kannst jedoch noch nicht viel praktische Erfahrung vorweisen. Du bist motiviert und begeistert dies zu ändern.',
        image: { src: '/img/jobs/junior-dev.svg', alt: 'Junior Software Engineer' },
        bulletPoints: [
          'Erste Erfahrungen mit C# oder Java',
          'Erste Erfahrungen im Bereich Web / Single Page Applications',
        ],
      },
{
        formReference: 'Professional Software Engineer',
        title: '<span class="text-sm">wir suchen</span><br/>Professional Software Engineer',
        content:
          'Als Professional hast du bereits mehrjährige Erfahrung in Softwareentwicklungsprojekten. Dir fehlen jedoch noch das Know-How zu einigen Technologien in unserem Stack. Du bist selbstständig und übernimmst Verantwortung für deine Aufgaben.',
        image: { src: '/img/jobs/be_the_hero.svg', alt: 'Professional Software Engineer' },
        bulletPoints: [
          "Erfahrungen mit C# in der Entwicklung von API's",
          'Erfahrungen im Bereich Web und Angular',
          'Kentnisse von Elasticsearch / Postgres / MongoDB von Vorteil',
        ],
    },
    {
        formReference: 'Senior Software Engineer',
        title: '<span class="text-sm">wir suchen</span><br/>Senior Software Engineer',
        content:
          'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
        image: { src: 'src/lib/assets/img/jobs/super_woman.svg', alt: 'Senior Software Engineer' },
        bulletPoints: [
          "Erfahrungen mit C# in der Entwicklung von API's",
          'Erfahrungen im Bereich Web und Angular',
          'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
          'Erfahrungen Docker / Kubernetes / Gitlab CI',
        ],
    },
     {
        formReference: '(Dev)Ops Engineer',
        title: '(Dev)Ops Engineer',
        content:
          'Als (Dev)Ops betreust du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',

        image: { src: 'img/jobs/cloud_hosting.svg', alt: 'Dev/Ops Engineer' },
        bulletPoints: [
          'Erfahrungen Docker / Kubernetes / Gitlab CI',
          'Erfahrungen mit Google Cloud / Azure von Vorteil',
          'Erfahrungen mit Cypress / E2E Testing von Vorteil',
        ],
    },
  ]

  let companyInfo: BlockContent[] = [
    {
      title: 'Was wir dir bieten',
      content:
        'Wir sind eine Software-Boutique im Herzen von Zürich, entwickeln leidenschaftlich gerne Software und sind immer auf der Suche nach neuen Talenten die uns ergänzen.',
      cards: [
        {
          title: 'Soziokratie',
          content:
            'Kollektive Intelligenz und Gleichberechtigung. In der Soziokratie wird jeder Einzelne gehört, geschätzt und kann aktiv an Entscheidungen teilnehmen. Zusammen schaffen wir optimale Arbeitsbedingungen, damit alle ihr volles Potenzial entfalten können.',
        },
        {
          title: 'Erfolgsbeteiligung',
          content:
            'Du trägst massgeblich zum Erfolg bei und sollst dafür auch belohnt werden. Ein grosser Teil des Gewinns wird quartalsweise an die Mitarbeiter ausgeschüttet',
        },
        {
          title: 'Coaching',
          content:
            'In regelmässigen Coachingmeetings sprechen wir über Wohlbefinden, Probleme, Blackboxes und Wins. Unser gemeinsames Ziel: Eine optimale Entwicklung jedes Einzelnen zu fördern',
        },
        {
          title: 'Technologie',
          content:
            'Wir bleiben immer aktuell und setzen die Technologie ein, die Sinn macht. Die richtige suchen und finden wir zusammen.',
        },
        {
          title: 'Transparenz für alle',
          content:
            'Alle Löhne werden offen kommuniziert. Es gibt keine individuellen Löhne. Die Löhne richten sich nach deiner Stufe im Trackeesystem. Für Seniors gibt’s aktuell 104k – 136k CHF.',
        },
        {
          title: 'Office Jungle',
          content:
            'Unser Office direkt am Bahnhof Hardbrücke ist eine Oase mitten in der Stadt. Über 100 Pflanzen sorgen für frische Luft und einen zauberhaften Hintergrund in deinen Teams-Calls',
        },

        // {
        //   title: '40 Stunden-Woche',
        //   content:
        //     'Wir arbeiten gern. Damit das so bleibt, brauchen wir genügend Freizeit. Dazu gehören auch 5 Wochen Ferien. Pro Jahr, nicht pro Monat.',
        // },
        {
          title: 'Home-Office',
          content:
            'Arbeite von zuhause aus, wenn du willst. Wieso auch nicht? Wir arbeiten so oder so komplett digital zusammen. Unsere Weisung: Lass dich min. 1 Mal pro Woche im Office blicken (ab 80% zweimal). Guter Kaffee, gute Gesellschaft, Dschungel und Gym bekommst du aber nur im Büro',
        },
        {
          title: 'Hardware',
          content:
            'Wähle das Setup, das zu dir passt. Nutze deine vorhandenen Skills in deinem OS. Egal ob Windows, macOS, PopOS oder Arch, du bist dein eigener Administrator sowie Support. Dazu gibt es deine Lieblingsmaus, Tastatur und Kopfhörer.',
        },
        {
          title: 'Kaffee / Bar',
          content:
            'Bediene dich an der triarc-Bar. Kaffee, Softdrinks, Bier und ein sortiertes Snack-Angebot warten auf deinen Zugriff. Darunter Sachen, die den Futterneid deiner Ernährungsberaterin wecken. Und für den Beerenhunger auch mal frische Früchtchen.',
        },

        {
          title: 'Company Events',
          content:
            'Team-Kochevents via Teams, Legosteine verbauen (streng nach Anleitung, versteht sich) und in besseren Zeiten auch Ausflüge an Festivals oder eine Reise nach Italien...: Du hast Ideen, wir ein Budget dazu.',
        },
        {
          title: 'Office Gym',
          content:
            'Rudere den Bug von der Seele. Pump dir frische Ideen ins Hirn. Stemm dich gegen Widerstand. Inhouse warten Blei und Matten auf Beschäftigung. Unser wöchentliche Gym Session mit Coach hilft dir die nötige Motivation zu finden.',
        },
        {
          title: 'Ein soziales Umfeld',
          content:
            'Work-Life-Balance: Von monatlich veränderbarem Arbeitspensum, über Workation bis zu Einkauf von zusätzlichen Ferientagen. Freiheit und Rücksicht auf individuelle Bedürfnisse sind uns wichtig. Auch gut zu wissen: Wer sich beim Tippen die Finger bricht erholt sich davon in einem netten Einzelzimmer mit Seeblick #privatversichert',
        },
      ],
    },
    {
      title: 'Wie läuft unser Bewerbungsverfahren',
      content: 'Unser Interviewprozess verläuft in vier Schritten.',
      steps: [
        {
          title: 'Bewerbung einreichen',
          content:
            'Nimm den Mut zusammen und schicke uns eine Mail an <a class="underline decoration-red-triarc" href="mailto:development@triarc-labs.com">development@triarc-labs.com</a> mit deinen Unterlagen.',
        },
        {
          title: 'Persönliches Interview',
          content:
            'Nach kurzer Prüfung von deinem CV und dem ersten Eindruck, melden wir uns bei dir für ein erstes Vorstellungsgespräch. Remote oder in unserem Office können wir uns gegenseitig austauschen und schauen ob sich Synergien ergeben.',
        },
        {
          title: 'Technisches Interview',
          content:
            'Damit wir dich initial in unser Trackeesystem einstufen können, bekommst du die Gelegenheit dich mit einem Entwickler austauschen.',
        },
        {
          title: 'Team Interview',
          content:
            'Das Team hat bei uns das letzte Wort. Lerne den Rest von uns kennen und sprich über deine Passion und warum du Teil vom Team werden willst.',
        },
      ],
    },
  ]

</script>

<svelte:head>
  <title>Jobs - triarc-labs</title>
</svelte:head>

{#each jobPostings as jobPosting}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
  {@html serializeSchema(jobPosting)}
{/each}

<Hero
  title="Jobs"
  content="Erfahre mehr über unsere offene Stellen und was dich sonst noch dazu interessieren könnte."
  image={heroImage}
  imageAlt="Triarc Jobs Header"
/>
<JobIntro />

<div class="bg-blue-triarc flex flex-col">
  <div class="text-white bg-opacity-20">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        <span class="block">Entwicklerpositionen</span>
      </h2>
      <p class="mt-4 text-lg leading-6">
        Wir bieten unterschiedliche Stufen, in welcher du deine Karriere bei uns starten kannst.
      </p>
    </div>
  </div>
</div>

{#each [...listings.filter(listing => listing.formReference && openJobListings.includes(listing.formReference)), ...companyInfo] as listing}
  <div class="bg-gray-100 even:bg-white">
      <Block bind:content={listing}>
        {#if listing.formReference}
            <div class="flex items-center justify-center mb-8">
              <Button clicked={() => chooseListing(listing.formReference)}
                      buttonSize="Standard"
                      buttonMargin="None"
                      reference="#applicationForm"
                      label="Jetzt bewerben"
              />
            </div>
        {/if}
      </Block>
  </div>
{/each}
  <div class="bg-gray-100 even:bg-white">
    <ApplicationForm
      availableJobs="{openJobListings}"
      jobString="{selectedListing}"
    />
  </div>
<!--<DeveloperListing />-->


<!--<div class="bg-[#0D1214] min-h-[calc(100vh-64px)] flex flex-col lg:min-h-screen">-->
<!--  <div class="text-white bg-opacity-20">-->
<!--    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">-->
<!--      <h2 class="text-3xl font-extrabold sm:text-4xl">-->
<!--        <span class="block">Immer noch hier?</span>-->
<!--      </h2>-->
<!--      <p class="mt-4 text-lg leading-6">-->
<!--        Du findest, du passt zu uns und kannst etwas beisteuern? Wir freuen uns auf deine Bewerbung und sehen dich in-->
<!--        unserem Jungle.-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->
<!--  <img src="img/jobs/jungle.svg" class="w-full h-full" alt="triarc jungle" id="jungle" />-->
<!--</div>-->

<Footer />
