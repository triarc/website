<script lang="ts">
  let sloganList = [
    {
      content:
        'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
      color: 'bg-red-triarc',
      linkText: 'mehr erfahren',
      href: '#aboutUs',
      claim: 'Ihre Manufaktur für digitale Innovation.',
      img: 'img/intro/content_team.svg',
    },
    {
      content:
        'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.  \n',
      color: 'bg-green-triarc',
      linkText: 'mehr erfahren',
      href: '#services',
      claim: 'Wir machen mehr aus dem, was heute ist:<br/>Das, was morgen sein wird.',
      img: 'img/intro/mobile_wireframe.svg',
    },
    {
      content:
        'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.',
      color: 'bg-blue-triarc',
      linkText: 'mehr erfahren',
      href: '#technology',
      claim: 'Wir tun gut daran, nicht mit der Zeit zu gehen.<br/>Sondern ihr voraus.',
      img: 'img/intro/science.svg',
    },
    {
      content:
        'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.',
      color: 'bg-yellow-triarc',
      linkText: 'mehr erfahren',
      href: '#projects',
      claim: 'Wir können nicht alles,<br/>aber gewisse Dinge besser.<br/>Das sagen nicht wir, sondern unsere Kunden.',
      img: 'img/intro/awards.svg',
    },
  ]
</script>

<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 relative absolute -top-8 z-10">
    <a
      href="#intro"
      class="block absolute bg-white rounded-full text-gray-600 h-14 w-14 p-4 shadow cursor-pointer"
      id="arrow-down"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="arrow-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
          class=""
        />
      </svg>
    </a>
  </div>

  <div class="bg-gray-100 bg-opacity-80 py-16 px-6">
    <img src="img/hero/triarc-labs.svg" class="h-24  mx-auto" />
  </div>

  <div id="intro" class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="relative z-10 py-8 px-3 bg-white">
      {#each sloganList as slogan, i}
        <div
          class="flex items-center mb-16 md:mb-24 {i % 2
            ? 'flex-col md:flex-row justify-end'
            : 'flex-col justify-end md:flex-row-reverse'}"
        >
          <div class="md:max-w-2xl {i % 2 ? 'md:text-right' : 'md:text-left'}">
            <p class="mt-3 text-2xl font-bold text-gray-600">
              {@html slogan.claim}
            </p>
            <p class="mt-2 text-base leading-6 text-gray-600">
              {slogan.content}<br />
              <a href={slogan.href} class="underline">
                {slogan.linkText}
              </a>
            </p>
          </div>
          <img src={slogan.img} class="w-80 mt-8 mx-12" />
        </div>
      {/each}
    </div>
  </div>
</div>

<style style lang="postcss">
  #arrow-down {
    animation-delay: 1500ms;
    animation-duration: 100ms;
    animation-name: fadein;
    animation-fill-mode: forwards;
    opacity: 0;
    scroll-behavior: smooth;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
</style>
