<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import ApplicationForm from '$lib/components/ApplicationForm.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import heroImage from '$lib/assets/hero/Jobs.jpg?width=300;600;1000;2000&format=webp&metadata&enhanced'
  import Hero from '$lib/components/Hero.svelte'
  import Button from '$lib/components/Button.svelte'

  import type { PageData } from './$types'
  import { ourBenefits } from '$lib/content/benefits'
  import { ourApplicationProcess } from '$lib/content/application-process'
  import Container from '$lib/components/Container.svelte'
  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let benefits = $state(ourBenefits)
  let hiringProcess = $state(ourApplicationProcess)

  let jobListingBase = data.jobListing.BasicJobInfo
  let jobListingExtended = $state(data.jobListing.ExtendedJobInfo)
  let hiring = jobListingBase.jobDetails?.currentlyHiring
  let jobHero = jobListingBase.title!
  let jobTitle = jobListingBase.jobDetails!.jobName
</script>

<svelte:head>
  <title>Developer Job - triarc-labs</title>
</svelte:head>
<Hero
  title="{jobHero} ({jobListingBase.jobDetails?.jobPensum})"
  content={jobListingBase.content}
  image={heroImage}
  imageAlt="Triarc Jobs Header"
/>

<div>
  <div
    class="font-bold text-lg py-8 text-center {hiring
      ? 'bg-blue-triarc/20 text-blue-triarc'
      : 'bg-red-triarc/10 text-red-triarc'}"
  >
    <Container>
      {#if jobListingBase.jobDetails?.currentlyHiring}
        <span>Wir nehmen zurzeit Bewerbungen als {jobHero} an </span>
      {:else}
        <span>
          Zurzeit nehmen wir keine Bewerbungen als {jobHero} an
        </span>
      {/if}
    </Container>
  </div>
</div>
{#if jobListingExtended}
  <Block bind:content={jobListingExtended}>
    {#if hiring}
      <div class="flex items-center justify-center mb-8">
        <Button buttonSize="Standard" buttonMargin="None" reference="#applicationForm" label="Jetzt bewerben" />
      </div>
    {/if}
  </Block>
{/if}

{#if data.jobListing.hasTechnologySection}
  <Technology />
{/if}
<Block bind:content={benefits} />
{#if hiring}
  <Block bind:content={hiringProcess} />
  <ApplicationForm availableJobs={[jobTitle]} jobString={jobTitle} isDefinedListing={true} />
{/if}
<FooterNoContact />
