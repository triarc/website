<script lang="ts">
import underline from '$lib/assets/img/landing/rainbow-underline.svg'
import Container from '$lib/components/Container.svelte'
import serge from '$lib/assets/team/serge.jpg?w=768&format=webp;png&metadata&enhanced'
import type { BlockContent, Quote, TriarcGradientDivider } from '$lib/components/TypeDefinitions'
import Block from '$lib/components/Block.svelte'
import GradientDivider from '$lib/components/GradientDivider.svelte'
import { missionPageQuotes } from '$lib/content/landing-page'
import QuoteBlock from '$lib/components/BlockContentBlocks/QuoteBlock.svelte'
import Footer from '$lib/components/Footer.svelte'
import FooterNoContact from '$lib/components/FooterNoContact.svelte'

const contents = missionPageQuotes
// let content: BlockContent = {
//   quote: {
//     image: serge,
//     content:
//       'Für Ihren Erfolg zögern wir nicht Herausforderndes zu meistern, Kompliziertes zu vereinfachen, Effizienz zu steigern und Schwerfälliges zu beschleunigen.',
//     person: 'Serge Müller',
//     personTitle: 'CEO / Partner',
//     email: 'serge@triarc-labs.com',
//     linkedin: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
//   },
// }

let gradientContent:TriarcGradientDivider = {
  title: "Software passend für Sie.",
  content: "So spezifisch Ihre Bedürfnisse und Anforderungen sind, sollten auch die digitalen Lösungen sein. Standardisierte Software erfüllt selten anspruchsvolle Kundenbedürfnisse und spezialisierte Leistungen.",
  color: 'green-blue',
  buttonLabel: "Custom Software",
  linksTo: "",
}

</script>


  <div class="flex flex-col pb-32">
    <Container class="justify-center text-center">
  <span class="pt-20 pb-20 font-semibold font-sans text-7xl bg-gradient-to-r from-red-triarc via-green-triarc to-blue-triarc bg-clip-text text-transparent">
    Together
    <span class="relative inline-block mx-2">
    you
    <img
      src="{underline}"
      alt="fancy underline"
      class="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none block max-w-none"
    />
  </span> succeed
  </span>
      <span class="text-lg font-bold">
          Warum triarc laboratories?
        </span>
        <span class="text-lg max-w-prose"> Wir verstehen die Herausforderungen von KMU und entwickeln seit über einem Jahrzehnt massgeschneiderte
          Lösungen. Unser bewährter Ansatz kombiniert strategisches Denken mit praktischer Umsetzung - für messbare
          Ergebnisse und nachhaltigen Geschäftserfolg.
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
<div class="h-40"></div>
<FooterNoContact/>


