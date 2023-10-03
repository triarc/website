<script lang="ts">
  import serge from '/src/team/serge.jpg?width=500&format=webp;png&metadata'
  import marco from '/src/team/marco.jpg?width=500&format=webp;png&metadata'
  import pascal from '/src/team/pascal.jpg?width=500&format=webp;png&metadata'
  import elke from '/src/team/elke.jpg?width=500&format=webp;png&metadata'
  import max from '/src/team/max.jpg?width=500&format=webp;png&metadata'
  import iris from '/src/team/iris.jpg?width=500&format=webp;png&metadata'
  import dave from '/src/team/dave.jpg?width=500&format=webp;png&metadata'
  import michel from '/src/team/michel.jpg?width=500&format=webp;png&metadata'
  import luka from '/src/team/luka.jpg?width=500&format=webp;png&metadata'
  import chris from '/src/team/chris.jpg?width=500&format=webp;png&metadata'
  import till from '/src/team/till.jpg?width=500&format=webp;png&metadata'
  import david from '/src/team/david.jpg?width=500&format=webp;png&metadata'
  import bammbamm from '/src/team/bambam.jpg?width=500&format=webp;png&metadata'
  import simon from '/src/team/simon.jpg?width=500&format=webp;png&metadata'
  import lukas from '/src/team/lukas.jpg?width=500&format=webp;png&metadata'
  import Picture from '$lib/index/Picture.svelte'

  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      images: serge,
      special: false,
      email: 'serge@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      images: marco,
      special: false,
      email: 'marco@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/marco-schmidlin-1444ab2a/',
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      images: elke,
      special: false,
      email: 'elke@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/elke-engel-6761998/',
    },
    {
      name: 'Pascal Bertschi',
      job: 'CCO / Partner',
      nerdJob: 'Typescript maniac',
      images: pascal,
      special: false,
      email: 'pascal@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/pascal-bertschi-9b00b480/',
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: max,
      special: false,
      email: 'max@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/max-l%C3%BCthi-864848214/',
    },
    {
      name: 'Iris Zenegaglia',
      job: 'Beratung / Partner',
      nerdJob: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
      images: iris,
      special: false,
      email: 'iris@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/iriszenegagliagloor/',
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Business Development',
      images: dave,
      special: false,
      email: 'dave@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/dave-haug-442064a5/',
    },
    {
      name: 'Simon Hasler',
      job: 'Project Lead',
      nerdJob: 'Project Lead',
      images: simon,
      special: false,
      email: 'simon@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/simon-hasler-82069083/',
    },
    {
      name: 'Michel Gabriel',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: michel,
      special: false,
      email: 'michel@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/michel-gabriel/',
    },
    {
      name: 'Luka Kramer',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: luka,
      special: false,
      email: 'luka@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/luka-kramer/',
    },
    {
      name: 'Chris Thonfeld',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: chris,
      special: false,
      email: 'chris@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/christopher-thonfeld-guckes-452b771b7/',
    },
    {
      name: 'Till Wegmüller',
      job: 'Operation Engineer',
      nerdJob: 'Operation Engineer',
      images: till,
      special: false,
      email: 'till@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/till-wegm%C3%BCller-825ba3131/',
    },
    {
      name: 'David Jahn',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: david,
      special: false,
      email: 'david@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/david-jahn-b32940197/',
    },
    {
      name: 'Lukas Hartmann',
      job: 'Praktikant',
      nerdJob: 'Praktikant',
      images: lukas,
      special: false,
      email: 'lukas@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/lukas-hartmann-433170277/',
    },
    {
      name: 'Bamm Bamm',
      job: 'Head of Happiness',
      nerdJob: 'Sicherheitsinspektor',
      images: bammbamm,
      special: true,
      email: 'bammbamm@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/company/triarc-laboratories-ltd/',
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
    <ul
      class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
    >
      {#each teamMember as member}
        <li>
          <Picture
            height="280"
            width="373"
            alt={member.name}
            images={member.images}
            cssClass="aspect-[3/4] w-full drop-shadow filter rounded-2xl object-cover"
          />
          <h3
            class="mt-6 text-lg inline-flex font-semibold leading-8 tracking-tight text-gray-800 justify-center align-middle"
          >
            {member.name}
            <a class="flex justify-center content-center" href={member.linkedIn}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-[1.125em] ml-3 self-center" viewBox="0 0 448 512"
                ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                /></svg
              >
            </a>
          </h3>
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
