<script lang="ts">
  import type { BlockContent } from '$lib/components/Block.svelte'
  import elke from '../../../static/team/elke.jpg?width=500&format=webp;png&metadata'
  import Block from '$lib/components/Block.svelte'

  let contents: BlockContent[] = [
    {
      quote: {
        images: elke,
        content:
          'Unsere Firmenkultur beruht auf den Grundsätzen der Gleichberechtigung, Mitbestimmung und Partizipation. Denn zusammen sind wir innovativer, kreativer und finden die besten Lösungen für unsere Kunden.',
        person: 'Elke Engel',
        personTitle: 'CFO / Partner',
        email: 'elke@triarc-labs.com',
        highlight: 'blue',
        linkedin: 'https://www.linkedin.com/in/elke-engel-6761998/',
      },
    },
    {
      title: 'Starte dein Abenteuer!',
      content:
        'Together we succeed <br/><br/>' +
        'Werde Teil des Teams und bewirb dich, wenn du Leidenschaft, Elan und Tatendrang hast und du dich mit unseren <a class="underline decoration-red-triarc" href="/mission">Werten</a> identifizieren kannst. <br/> <br/>' +
        'Du arbeitest und kommunizierst gerne im Team. Das Neue begeistert dich. Du bist eine positiv eingestellte Persönlichkeit, allzeit bereit für neue Herausforderungen. <br/><br/>' +
        'Lehrabschluss/HF/Bachelor/Master oder selbst beigebracht. Bei uns ist nichts strikt vorgegeben, wir evaluieren immer zu deiner Situation. ',
      image: { src: '/img/custom-software/triarc-adventure.svg', alt: 'Triarc Career' },
    },
  ]
</script>

<div class="bg-white">
  {#each contents as content}
    <Block bind:content />
  {/each}
</div>
