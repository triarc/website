<script lang="ts">
import underline from '$lib/assets/img/landing/rainbow-underline.svg'
import Container from '$lib/components/Container.svelte'
import serge from '$lib/assets/team/serge.jpg?w=768&format=webp;png&metadata&enhanced'
import type { BlockContent, Quote } from '$lib/components/TypeDefinitions'
import Block from '$lib/components/Block.svelte'
import GradientDivider from '$lib/components/GradientDivider.svelte'

let content: BlockContent = {
  quote: {
    image: serge,
    content:
      'Für Ihren Erfolg zögern wir nicht Herausforderndes zu meistern, Kompliziertes zu vereinfachen, Effizienz zu steigern und Schwerfälliges zu beschleunigen.',
    person: 'Serge Müller',
    personTitle: 'CEO / Partner',
    email: 'serge@triarc-labs.com',
    highlight: 'green',
    linkedin: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
  },
}
</script>


  <div class="h-[100vh] flex flex-col">
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

<div class="mt-auto">
  <div></div>
  <Block bind:content></Block>
</div>
    <GradientDivider gradientColor="green-blue"></GradientDivider>
  </div>

