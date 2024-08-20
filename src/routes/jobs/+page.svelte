<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import JobIntro from './job-intro.svelte'
  import jobListingImage from '$lib/assets/img/jobs/super_woman.svg'
  import Block from '$lib/components/Block.svelte'
  import heroImage from '$lib/assets/hero/Jobs.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent, JobPosting } from '$lib/components/TypeDefinitions'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import Button from '$lib/components/Button.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import { ourBenefits } from '$lib/content/benefits'
  import { ourApplicationProcess } from '$lib/content/application-process'
  import CompanyAbout from '$lib/components/CompanyAbout.svelte'

  const openJobListings = ['Senior Software Engineer']
  let selectedListing = 'Initiativbewerbung'

  function chooseListing(job: string | undefined) {
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
      img: jobListingImage,
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

  let companyInfo: BlockContent[] = [ourBenefits, ourApplicationProcess]
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

{#each [...listings.filter((listing) => listing.formReference && openJobListings.includes(listing.formReference)), ...companyInfo] as listing}
  <Block bind:content={listing}>
    {#if listing.formReference}
      <div class="flex items-center justify-center mb-8">
        <Button
          clicked={() => chooseListing(listing.formReference)}
          buttonSize="Standard"
          buttonMargin="None"
          reference="#applicationForm"
          label="Jetzt bewerben"
        />
      </div>
    {/if}
  </Block>
{/each}
<CompanyAbout />
<ApplicationForm availableJobs={openJobListings} jobString={selectedListing} />


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

<FooterNoContact />
