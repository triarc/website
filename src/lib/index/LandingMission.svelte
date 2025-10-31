<script lang="ts">
  import underline from '$lib/assets/img/landing/rainbow-underline.svg'
  import Container from '$lib/components/Container.svelte'
  import Block from '$lib/components/Block.svelte'
  import GradientDivider from '$lib/components/GradientDivider.svelte'
  import { missionPageQuotes } from '$lib/content/landing-page'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'

  const contents = missionPageQuotes
</script>

<div class="flex flex-col pb-16 lg:pb-32">
  <Container class="justify-center text-center">
    <span
      class="pt-20 pb-28 font-semibold font-sans text-7xl bg-gradient-to-r from-red-triarc via-green-triarc to-blue-triarc bg-clip-text text-transparent"
    >
      Together
      <span class="inline-flex flex-col mx-2">
        <span>you</span>
        <span class="relative h-0 w-full">
          <img
            src={underline}
            alt="fancy underline"
            class="absolute left-1/2 -translate-x-1/2 top-full mt-0 pointer-events-none block max-w-none"
          />
        </span>

        <!--        <img src={underline} alt="fancy underline" class="absolute block mt-2 pointer-events-none max-w-none" />-->
      </span>
      succeed
      <!--      <span class="inline-block overflow-visible mx-2 underline-triarc">-->
      <!--      you-->
      <!--        <img-->
      <!--          src={underline}-->
      <!--          alt="fancy underline"-->
      <!--          class="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none block max-w-none"-->
      <!--        />-->
      <!--        <img src={underline} alt="fancy underline" class="absolute block mt-2 pointer-events-none max-w-none" />-->
      <!--      </span> succeed-->
    </span>
    <span class="text-lg font-bold"> Warum triarc laboratories? </span>
    <span class="text-lg max-w-prose lg:pb-8">
      Wir verstehen die Herausforderungen von KMU und entwickeln seit über einem Jahrzehnt massgeschneiderte Lösungen.
      Unser bewährter Ansatz kombiniert strategisches Denken mit praktischer Umsetzung - für messbare Ergebnisse und
      nachhaltigen Geschäftserfolg.
    </span>
  </Container>
</div>
<div>
  <!-- only here to trigger the alternating image to begin right side -->
  <div></div>
  {#each contents as contentBlock}
    <div class="group">
      <Block content={contentBlock.content} />
      {#if contentBlock.divider}
        <GradientDivider gradientContent={contentBlock.divider} />
      {/if}
    </div>
  {/each}
</div>
<div class="h-0 md:h-40"></div>
<FooterNoContact />

<style>
  /*.underline-triarc::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%);*/
  /*  top: 100%; !* just below the text *!*/
  /*  margin-top: 0.35rem; !* tweak vertical gap *!*/
  /*  width: 200%; !* allows horizontal overflow beyond the word *!*/
  /*  height: 0.9em; !* scale with font size *!*/
  /*  background-image: url($lib/assets/img/landing/rainbow-underline.svg);*/
  /*  background-repeat: no-repeat;*/
  /*  background-position: center;*/
  /*  background-size: contain; !* or `auto 0.9em` to force height *!*/
  /*  pointer-events: none;*/
  /*  z-index: 0;*/
  /*  display: block;*/
  /*}*/
</style>
