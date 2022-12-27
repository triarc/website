<script lang="ts">
  import serge from '../assets/avatars/serge.png?width=255&format=webp;png&metadata'
  import marco from '../assets/avatars/marco.png?width=255&format=webp;png&metadata'
  import pascal from '../assets/avatars/pascal.png?width=255&format=webp;png&metadata'
  import elke from '../assets/avatars/elke.png?width=255&format=webp;png&metadata'
  import max from '../assets/avatars/max.png?width=255&format=webp;png&metadata'
  import iris from '../assets/avatars/iris.png?width=255&format=webp;png&metadata'
  import dave from '../assets/avatars/dave.png?width=255&format=webp;png&metadata'
  import urban from '../assets/avatars/urban.png?width=255&format=webp;png&metadata'
  import eduan from '../assets/avatars/eduan.png?width=255&format=webp;png&metadata'
  import michel from '../assets/avatars/michel.png?width=255&format=webp;png&metadata'
  import luka from '../assets/avatars/luka.png?width=255&format=webp;png&metadata'
  import chris from '../assets/avatars/chris.png?width=255&format=webp;png&metadata'
  import lars from '../assets/avatars/lars.png?width=255&format=webp;png&metadata'
  import david from '../assets/avatars/david.png?width=255&format=webp;png&metadata'

  let teamMember = [
    {
      name: 'Serge Müller',
      job: 'CEO / Partner',
      nerdJob: 'CEO / Partner',
      images: serge,
    },
    {
      name: 'Marco Schmidlin',
      job: 'CTO / Partner',
      nerdJob: 'CTO / Partner',
      images: marco,
    },
    {
      name: 'Elke Engel',
      job: 'CFO / Partner',
      nerdJob: 'CFO / Partner',
      images: elke,
    },
    {
      name: 'Pascal Bertschi',
      job: 'CCO / Partner',
      nerdJob: 'Typescript maniac',
      images: pascal,
    },
    {
      name: 'Max Lüthi',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: max,
    },
    {
      name: 'Iris Zenegaglia',
      job: 'Project Lead',
      nerdJob: 'Project Lead',
      images: iris,
    },
    {
      name: 'Dave Haug',
      job: 'Business Development',
      nerdJob: 'Business Development',
      images: dave,
    },
    {
      name: 'Andre Urban',
      job: 'Administration',
      nerdJob: 'Administration',
      images: urban,
    },
    {
      name: 'Eduardo Lavaque',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: eduan,
    },
    {
      name: 'Michel Gabriel',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: michel,
    },
    {
      name: 'Luka Kramer',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: luka,
    },
    {
      name: 'Chris Thonfeld',
      job: 'Nearshore Developer',
      nerdJob: 'Software Developer',
      images: chris,
    },
    {
      name: 'Lars Hornbaker',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: lars,
    },
    {
      name: 'David Jahn',
      job: 'Software Developer',
      nerdJob: 'Software Developer',
      images: david,
    },
  ]
  console.log(teamMember)
</script>

<div class="bg-white bg-about-us" id="team">
  <div class="px-8 py-32 max-w-screen-lg mx-auto text-center">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Digital Evolutionaries</h2>
        <p class="text-xl leading-7 text-gray-500">Das Team</p>
      </div>
      <ul
        class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
      >
        {#each teamMember as member}
          <li class="flex">
            <div class="space-y-4 mb-6 mx-auto flex-grow flex flex-col">
              <div class="card flex-grow flex items-center justify-center">
                <div class="card-content  border-b border-blue-triarc">
                  <picture class="front-card w-8 transition-all">
                    {#each member.images as image}
                      <source type="image/{image.format}" srcset={image.src} loading="lazy" />
                    {/each}
                    <img
                      src={member.images[1].src}
                      alt={member.name}
                      width="255"
                      height="255"
                      loading="lazy"
                      class="drop-shadow-2xl filter "
                    />
                  </picture>
                </div>
              </div>
              <div class="space-y-2">
                <div class="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                  <p>{member.name}</p>
                  <p class="text-blue-triarc">{member.job}</p>
                </div>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
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
