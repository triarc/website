<script lang="ts">
  import serge from '$lib/assets/team/serge.jpg?format=webp;png&w=500&enhanced'
  import marco from '$lib/assets/team/marco.jpg?format=webp;png&w=500&enhanced'
  import pascal from '$lib/assets//team/pascal.jpg?format=webp;png&w=500&enhanced'
  import elke from '$lib/assets/team/elke.jpg?format=webp;png&w=500&enhanced'
  import max from '$lib/assets/team/max.jpg?format=webp;png&w=500&enhanced'
  import iris from '$lib/assets/team/iris.jpg?format=webp;png&w=500&enhanced'
  import dave from '$lib/assets/team/dave.jpg?format=webp;png&w=500&enhanced'
  import michel from '$lib/assets/team/michel.jpg?format=webp;png&w=500&enhanced'
  import luka from '$lib/assets/team/luka.jpg?format=webp;png&w=500&enhanced'
  import chris from '$lib/assets/team/chris.jpg?format=webp;png&w=500&enhanced'
  import till from '$lib/assets/team/till.jpg?format=webp;png&w=500&enhanced'
  import david from '$lib/assets/team/david.jpg?format=webp;png&w=500&enhanced'
  import bammbamm from '$lib/assets/team/bambam.jpg?format=webp;png&w=500&enhanced'
  import simon from '$lib/assets/team/simon.jpg?format=webp;png&w=500&enhanced'
  import lukas from '$lib/assets/team/lukas.jpg?format=webp;png&w=500&enhanced'
  import alexa from '$lib/assets/team/alexa.jpg?format=webp;png&w=500&enhanced'
  import sakima from '$lib/assets/team/sakima.jpg?format=webp;png&w=500&enhanced'

  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      image: serge,
      special: false,
      email: 'serge@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/serge-m%C3%BCller-568a0a134/',
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      image: marco,
      special: false,
      email: 'marco@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/marco-schmidlin-1444ab2a/',
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      image: elke,
      special: false,
      email: 'elke@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/elke-engel-6761998/',
    },
    {
      name: 'Pascal Bertschi',
      job: 'CCO / Partner',
      nerdJob: 'Typescript maniac',
      image: pascal,
      special: false,
      email: 'pascal@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/pascal-bertschi-9b00b480/',
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: max,
      special: false,
      email: 'max@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/max-l%C3%BCthi-864848214/',
    },
    {
      name: 'Iris Zenegaglia',
      job: 'Beratung / Partner',
      nerdJob: 'Management-, Strategie- und Digitalisierungsberatung / Partner',
      image: iris,
      special: false,
      email: 'iris@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/iriszenegagliagloor/',
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Business Development',
      image: dave,
      special: false,
      email: 'dave@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/dave-haug-442064a5/',
    },
    {
      name: 'Simon Hasler',
      job: 'Project Lead',
      nerdJob: 'Project Lead',
      image: simon,
      special: false,
      email: 'simon@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/simon-hasler-82069083/',
    },
    {
      name: 'Michel Gabriel',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: michel,
      special: false,
      email: 'michel@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/michel-gabriel/',
    },
    {
      name: 'Luka Kramer',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: luka,
      special: false,
      email: 'luka@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/luka-kramer/',
    },
    {
      name: 'Chris Thonfeld',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: chris,
      special: false,
      email: 'chris@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/christopher-thonfeld-guckes-452b771b7/',
    },
    {
      name: 'Till Wegmüller',
      job: 'Operation Engineer',
      nerdJob: 'Operation Engineer',
      image: till,
      special: false,
      email: 'till@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/till-wegm%C3%BCller-825ba3131/',
    },
    {
      name: 'David Jahn',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: david,
      special: false,
      email: 'david@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/david-jahn-b32940197/',
    },
    {
      name: 'Lukas Hartmann',
      job: 'Praktikant',
      nerdJob: 'Praktikant',
      image: lukas,
      special: false,
      email: 'lukas@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/in/lukas-hartmann-433170277/',
    },
    {
      name: 'Alexa Weich',
      job: 'UI/UX Designerin',
      nerdJob: 'UI/UX Designerin',
      image: alexa,
      special: false,
      email: 'alexa@triarc-labs.com',
      linkedIn: 'https://ch.linkedin.com/in/alexandra-weich-a13229140',
    },
    {
      name: 'Bamm Bamm',
      job: 'Head of Happiness',
      nerdJob: 'Sicherheitsinspektor',
      image: bammbamm,
      special: true,
      email: 'bammbamm@triarc-labs.com',
      linkedIn: 'https://www.linkedin.com/company/triarc-laboratories-ltd/',
    },
    {
      name: 'Sakima',
      job: 'Head of Security',
      nerdJob: '',
      image: sakima,
      special: false,
      email: 'sakima@triarc-labs.com',
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
          <enhanced:img
            class="aspect-[3/4] w-full drop-shadow rounded-2xl object-cover"
            loading="lazy"
            alt={member.name}
            src={member.image}
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
