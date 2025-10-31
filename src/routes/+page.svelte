<script lang="ts">
  import Landing from '$lib/index/Landing.svelte'
  import LandingMission from '$lib/index/LandingMission.svelte'
  import MetaHead from '$lib/components/MetaHead.svelte'
  import { landingMetadata } from '$lib/content/triarc-page-metadata'
</script>

<MetaHead pageMetadata={landingMetadata}></MetaHead>
<!--<svelte:head>-->
<!--  <title>Custom Softwareentwicklung Schweiz</title>-->
<!--</svelte:head>-->

<Landing></Landing>
<LandingMission></LandingMission>
