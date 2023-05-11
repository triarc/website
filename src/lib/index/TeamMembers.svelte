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
  import simon from '../../../static/team/simon.jpg?width=255&format=webp;png&metadata'
  import Picture from "$lib/index/Picture.svelte";

  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      images: serge,
      special: false,
      email: 'serge@triarc-labs.com'
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      images: marco,
      special: false,
      email: 'marco@triarc-labs.com'
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      images: elke,
      special: false,
      email: 'elke@triarc-labs.com'
    },
    {
      name: 'Pascal Bertschi',
      job: 'CCO / Partner',
      nerdJob: 'Typescript maniac',
      images: pascal,
      special: false,
      email: 'pascal@triarc-labs.com'
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: max,
      special: false,
      email: 'max@triarc-labs.com'
    },
    {
      name: 'Iris Zenegaglia',
      job: 'Beratung / Partner',
      nerdJob: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
      images: iris,
      special: false,
      email: 'iris@triarc-labs.com'
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Business Development',
      images: dave,
      special: false,
      email: 'dave@triarc-labs.com'
    },
    {
      name: 'Simon Hasler',
      job: 'Project Lead',
      nerdJob: 'Project Lead',
      images: simon,
      special: false,
      email: 'simon@triarc-labs.com'
    },
    {
      name: 'Simona Miljanovic',
      job: 'UX Designerin',
      nerdJob: 'UX Designerin',
      images: simona,
      special: false,
      email: 'simona@triarc-labs.com'
    },
    {
      name: 'Eduardo Lavaque',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: eduan,
      special: false,
      email: 'eduan@triarc-labs.com'
    },
    {
      name: 'Michel Gabriel',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: michel,
      special: false,
      email: 'michel@triarc-labs.com'
    },
    {
      name: 'Luka Kramer',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: luka,
      special: false,
      email: 'luka@triarc-labs.com'
    },
    {
      name: 'Chris Thonfeld',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: chris,
      special: false,
      email: 'chris@triarc-labs.com'
    },
    {
      name: 'Sebastian Bortz',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: sebastian,
      special: false,
      email: 'sebastian@triarc-labs.com'
    },
    {
      name: 'David Jahn',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: david,
      special: false,
      email: 'david@triarc-labs.com'
    },
    {
      name: 'Bam Bam',
      job: 'Head of Happiness',
      nerdJob: 'Sicherheitsinspektor',
      images: bammbamm,
      special: true,
      email: 'bammbamm@triarc-labs.com'
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

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Unser Team</h2>
      <p class="mt-6 text-lg leading-8 text-gray-500">
        Wir lieben was wir tun, und dass wir das gemeinsam tun.
        Von der Vision bis zur Anwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen.
        Sie werden von erfahrenen, engagierten Spezialisten persönlich begleitet.
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
                   cssClass="aspect-[3/4] w-full drop-shadow filter rounded-2xl object-cover"></Picture>
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-800">{member.name}</h3>
          <p class="text-base leading-7 text-gray-600">{member.job}</p>
          <a class="underline text-gray-500 decoration-blue-triarc" href="mailto:{member.email}">{member.email}</a>
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
