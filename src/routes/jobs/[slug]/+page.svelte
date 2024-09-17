<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import heroImage from '$lib/assets/hero/Jobs.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import CompanyAbout from '$lib/components/CompanyAbout.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Button from '$lib/components/Button.svelte'

  import type { PageData } from './$types'
  export let data: PageData

  let jobListingBase = data.jobListing.BasicJobInfo
  let jobListingExtended = data.jobListing.ExtendedJobInfo
  let jobHero = jobListingBase.title!
  let jobTitle = jobListingBase.jobDetails!.jobName
</script>

<svelte:head>
  <title>Developer Job - triarc-labs</title>
</svelte:head>
<Hero
  title={jobHero}
  content="Erfahre mehr über die Stelle als {jobTitle} und das Arbeitsumfeld bei Triarc."
  image={heroImage}
  imageAlt="Triarc Jobs Header"
/>

<Block bind:content={jobListingBase}></Block>
{#if jobListingExtended}
  <Block bind:content={jobListingExtended}>
    <div class="flex items-center justify-center mb-8">
      <Button buttonSize="Standard" buttonMargin="None" reference="#applicationForm" label="Jetzt bewerben" />
    </div>
  </Block>
{/if}

<Technology />
<CompanyAbout />
<ApplicationForm availableJobs={[jobTitle]} jobString={jobTitle} isDefinedListing={true} />
<FooterNoContact />
