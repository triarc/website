<script>
  import NerdToggle from './NerdToggle.svelte'
  let nerdMode = false
  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      image: 'img/avatars/serge.png',
      nerdImage: 'img/avatars/serge.png',
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      image: 'img/avatars/marco.png',
      nerdImage: 'img/avatars/marco.png',
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      image: 'img/avatars/elke.png',
      nerdImage: 'img/avatars/elke.png',
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'img/avatars/max.png',
      nerdImage: 'img/avatars/max.png',
    },
    {
      name: 'Pascal Bertschi',
      job: 'Software Developer',
      nerdJob: 'Typescript maniac',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/pascal.jpg?w=311&ssl=1',
      nerdImage: 'img/avatars/pascal-avatar.png',
    },
    {
      name: 'Fabrizio Lazaretti',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Mathia Ninivaggi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Warwara Panyushkina',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Andrea Honegger',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Paul Tingle',
      job: 'Nearshore Developer',
      nerdJob: 'Nearshore Developer',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Sales',
      image: 'img/avatars/dave.png',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Andre Urban',
      job: 'Administration',
      nerdJob: 'Administration',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Sandra Vieira da Silva Lopes',
      job: 'Facility Manager',
      nerdJob: 'Facility Manager',
      image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
      nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    },
    {
      name: 'Bam Bam',
      job: 'Quality Assurance',
      nerdJob: 'Quality Assurance',
      image: 'img/avatars/bambam.png',
      nerdImage: 'img/avatars/bambam.png',
    },
    {
      name: 'Kubernetes',
      nerdJob: 'CIO',
      nerdImage: 'img/technology/kubernetes.svg',
      onlyInNerdMode: true,
    },
    {
      name: 'Prometheus',
      nerdJob: '24/7 Support',
      nerdImage: 'img/technology/prometheus.svg',
      onlyInNerdMode: true,
    },
  ]
  let displayedMembers = teamMember
    .filter((t) => !t.onlyInNerdMode)
    .map((t) => ({ name: t.name, job: t.job, image: t.image }))

  function switchMode(nerdMode) {
    nerdMode = nerdMode.detail
    displayedMembers = teamMember
      .filter((t) => (!nerdMode ? !t.onlyInNerdMode : true))
      .map((t) => {
        if (nerdMode) {
          return {
            name: t.name,
            job: t.nerdJob,
            image: t.nerdImage,
          }
        } else {
          return {
            name: t.name,
            job: t.job,
            image: t.image,
          }
        }
      })
  }
</script>

<div class="bg-white">
  <div class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Das Team</h2>
        <p class="text-xl leading-7 text-gray-500">
          Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam
          in.
        </p>
      </div>
      <ul
        class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
      >
        {#each displayedMembers as { name, job, image }}
          <li>
            <div class="space-y-4 mb-6">
              <img class="mx-auto h-24 w-20 rounded-lg lg:w-24 lg:h-32" src={image} alt={name} />
              <div class="space-y-2">
                <div class="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                  <h4>{name}</h4>
                  <p class="text-blue-triarc">{job}</p>
                </div>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <NerdToggle on:switch={switchMode} />
  </div>
</div>
