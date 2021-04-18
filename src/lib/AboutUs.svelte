<script lang="ts">
  import NerdToggle from './NerdToggle.svelte'

  let nerdMode = false
  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      image: 'img/avatars/serge.png',
      nerdImage: 'img/avatars/serge.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      image: 'img/avatars/marco.png',
      nerdImage: 'img/avatars/marco.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      image: 'img/avatars/elke.jpg',
      nerdImage: 'img/avatars/elke-nerd.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Pascal Bertschi',
      job: 'CCO / Partner',
      nerdJob: 'Typescript maniac',
      image: 'img/avatars/pascal.png',
      nerdImage: 'img/avatars/pascal-nerd.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'img/avatars/max.png',
      nerdImage: 'img/avatars/max.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Fabrizio Lazaretti',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'img/avatars/fabrizio.png',
      nerdImage: 'img/avatars/fabrizio.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Mattia Ninivaggi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'img/avatars/mattia.png',
      nerdImage: 'img/avatars/mattia.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Warwara Panyushkina',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'img/avatars/warwara.png',
      nerdImage: 'img/avatars/warwara.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Andrea Honegger',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      image: 'img/avatars/andrea.png',
      nerdImage: 'img/avatars/andrea.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Iris Zenegaglia',
      job: 'Project Lead',
      nerdJob: 'Project Lead',
      image: 'img/avatars/iris.png',
      nerdImage: 'img/avatars/iris.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Paul Tingle',
      job: 'Nearshore Developer',
      nerdJob: 'Nearshore Developer',
      image: 'img/avatars/paul.png',
      nerdImage: 'img/avatars/paul.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Business Development',
      image: 'img/avatars/dave.png',
      nerdImage: 'img/avatars/dave.png',
      onlyInNerdMode: false,
    },
    {
      name: 'Andre Urban',
      job: 'Administration',
      nerdJob: 'Administration',
      image: 'img/avatars/urban.png',
      nerdImage: 'img/avatars/urban.png',
      onlyInNerdMode: false,
    },
    // {
    //   name: 'Sandra Vieira da Silva Lopes',
    //   job: 'Facility Manager',
    //   nerdJob: 'Facility Manager',
    //   image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    //   nerdImage: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1',
    // },
    // {
    //   name: 'Bam Bam',
    //   job: 'Quality Assurance',
    //   nerdJob: 'Quality Assurance',
    //   image: 'img/avatars/bambam.png',
    //   nerdImage: 'img/avatars/bambam.png',
    // },
    {
      name: 'Kubernetes',
      job: '',
      image: '',
      nerdJob: 'CIO',
      nerdImage: 'img/technology/kubernetes.svg',
      onlyInNerdMode: true,
    },
    {
      name: 'Prometheus',
      job: '',
      image: '',
      nerdJob: '24/7 Support',
      nerdImage: 'img/technology/prometheus.svg',
      onlyInNerdMode: true,
    },
  ]
  let sizes = [144, 255]
  let displayedMembers = mapMembers()

  function getWebpImage(val: string): string | null {
    if (val.endsWith('svg')) {
      return null
    }
    return val.substr(0, val.length - 3) + 'webp'
  }

  function getSourceSet(val: string) {
    if (val.endsWith('svg')) {
      return val
    }
    return `${sizes.map((s) => `${val.substr(0, val.length - 4)}-${s}.jpg ${s}w`).join(',')}`
  }

  function mapMembers() {
    return teamMember
      .filter((t) => (!nerdMode ? !t.onlyInNerdMode : true))
      .map((t) => {
        if (nerdMode) {
          return {
            name: t.name,
            job: t.nerdJob,
            image: getSourceSet(t.nerdImage),
            webpImage: getWebpImage(t.nerdImage),
          }
        } else {
          return {
            name: t.name,
            job: t.job,
            image: getSourceSet(t.image),
            webpImage: getWebpImage(t.image),
          }
        }
      })
  }

  function switchMode(val: { detail: boolean }) {
    nerdMode = val.detail
    displayedMembers = mapMembers()
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
        class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
      >
        {#each displayedMembers as { name, job, image, webpImage }}
          <li class="flex">
            <div class="space-y-4 mb-6 mx-auto flex-grow flex flex-col">
              <picture class="flex-grow flex items-center justify-center">
                {#if webpImage}
                  <source type="image/webp" srcset={webpImage} loading="lazy" />
                {/if}
                <img srcset={image} alt={name} width="144" height="144" loading="lazy" />
              </picture>
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
