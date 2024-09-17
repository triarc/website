<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import JobIntro from './job-intro.svelte'
  import Block from '$lib/components/Block.svelte'
  import heroImage from '$lib/assets/hero/Jobs.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import type { BlockContent, JobPosting } from '$lib/components/TypeDefinitions'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import Button from '$lib/components/Button.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import CompanyAbout from '$lib/components/CompanyAbout.svelte'
  import { Initiativbewerbung, JobPostings } from '$lib/content/job-listings'
  import { DetailedJobListings } from '$lib/content/job-listings.js'
  const listedJob = 'Initiativbewerbung'

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

  const jobPostings = JobPostings

  let initiativbewerbung = Initiativbewerbung
  let listings: BlockContent[] = DetailedJobListings.map((jobListing) => {
    return jobListing.BasicJobInfo
  })
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
        <span class="block">Unsere Stellen</span>
      </h2>
      <p class="mt-4 text-lg leading-6">
        Wir bieten unterschiedliche Stufen, in welcher du deine Karriere bei uns starten kannst.
      </p>
    </div>
  </div>
</div>

{#each listings as listing}
  <Block bind:content={listing}>
    <div class="flex items-center justify-center mb-8">
      <Button
        buttonSize="Standard"
        buttonMargin="None"
        reference="jobs/{listing.jobDetails?.slug}"
        label="Mehr erfahren"
      />
    </div>
  </Block>
{/each}
<Block bind:content={initiativbewerbung}>
  <div class="flex items-center justify-center mb-8">
    <Button buttonSize="Standard" buttonMargin="None" reference="#applicationForm" label="Jetzt bewerben" />
  </div>
</Block>
<CompanyAbout />
<ApplicationForm availableJobs={[listedJob]} jobString={listedJob} isDefinedListing={true} />

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
