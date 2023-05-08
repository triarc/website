<script lang="ts">
  import serge from '../../../static/team/serge.jpg?width=255&format=webp;png&metadata'
  import marco from '../../../static/team/marco.jpg?width=255&format=webp;png&metadata'
  import pascal from '../../../static/team/pascal.jpg?width=255&format=webp;png&metadata'
  import elke from '../../../static/team/elke.jpg?width=255&format=webp;png&metadata'
  import max from '../../../static/team/max.jpg?width=255&format=webp;png&metadata'
  import iris from '../../../static/team/iris.jpg?width=255&format=webp;png&metadata'
  import dave from '../../../static/team/dave.jpg?width=255&format=webp;png&metadata'
  import simona from '../../../static/team/simona.jpg?width=255&format=webp;png&metadata'
  import eduan from '../../../static/team/eduan.jpg?width=255&format=webp;png&metadata'
  import michel from '../../../static/team/michel.jpg?width=255&format=webp;png&metadata'
  import luka from '../../../static/team/luka.jpg?width=255&format=webp;png&metadata'
  import chris from '../../../static/team/chris.jpg?width=255&format=webp;png&metadata'
  import sebastian from '../../../static/team/sebastian.jpg?width=255&format=webp;png&metadata'
  import david from '../../../static/team/david.jpg?width=255&format=webp;png&metadata'
  import bammbamm from '../../../static/team/bambam.jpg?width=255&format=webp;png&metadata'
  import Picture from "$lib/index/Picture.svelte";

  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      images: serge,
      special: false,
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      images: marco,
      special: false,
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      images: elke,
      special: false,
    },
    {
      name: 'Pascal Bertschi',
      job: 'CCO / Partner',
      nerdJob: 'Typescript maniac',
      images: pascal,
      special: false,
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: max,
      special: false,
    },
    {
      name: 'Iris Zenegaglia',
      job: 'Beratung / Partner',
      nerdJob: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
      images: iris,
      special: false,
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Business Development',
      images: dave,
      special: false,
    },
    {
      name: 'Simona Miljanovic',
      job: 'UX Designerin',
      nerdJob: 'UX Designerin',
      images: simona,
      special: false,
    },
    {
      name: 'Eduardo Lavaque',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: eduan,
      special: false,
    },
    {
      name: 'Michel Gabriel',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: michel,
      special: false,
    },
    {
      name: 'Luka Kramer',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: luka,
      special: false,
    },
    {
      name: 'Chris Thonfeld',
      job: 'Nearshore Developer',
      nerdJob: 'Software Developer',
      images: chris,
      special: false,
    },
    {
      name: 'Sebastian Bortz',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: sebastian,
      special: false,
    },
    {
      name: 'David Jahn',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: david,
      special: false,
    },
    {
      name: 'Bam Bam',
      job: 'Sicherheitsinspektor',
      nerdJob: 'Sicherheitsinspektor',
      images: bammbamm,
      special: true,
    },
  ]

  teamMember.sort((first, second) => {
    if (first.special) {
      return 1
    } else if (second.special) {
      return -1
    }
    return first.name.localeCompare(second.name)
  })
</script>

<div class="bg-gray-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unser Team</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Eine dynamische Gruppe voller Digital Evolutionaries. Jederzeit Leidenschaftlich dabei um das beste Resutlat aus
        dem Projekt zu holen.
      </p>
    </div>
    <ul
      role="list"
      class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
    >
      {#each teamMember as member}
        <li>
          <Picture height="280" width="373"
                   alt="{member.name}"
                   images="{member.images}"
                   cssClass="aspect-[3/4] w-full drop-shadow-2xl filter rounded-2xl object-cover"></Picture>
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{member.name}</h3>
          <p class="text-base leading-7 text-gray-300">{member.job}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style style lang="postcss">
  .card {
    width: 100%;
    height: 144px;
    text-align: center;
    perspective: 600px;
  }
  .card-content {
    width: 144px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }
  .nerd .card-content {
    transform: rotateY(180deg);
    transition: transform 0.3s;
  }
  .front-card {
    position: absolute;
    display: flex;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
</style>
