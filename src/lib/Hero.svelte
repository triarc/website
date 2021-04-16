<script lang="ts">
  let heroSloganList = [
    {
      title: 'WER WIR SIND',
      content:
        'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.\n' +
        '\n' +
        'Wir sind triarc labs. Ihre Manufaktur für digitale Innovation.',
      color: 'red-triarc',
      linkText: 'Unser Team',
      href: '#aboutUs',
    },
    {
      title: 'WAS WIR MACHEN',
      content:
        'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.\n' +
        '\n' +
        'Wir sind triarc labs. Wir machen mehr aus dem, was heute ist: Das, was morgen sein wird.',
      color: 'green-triarc',
      linkText: 'Unsere Dienstleistungen',
      href: '#services',
    },
    {
      title: 'WIE WIR ES TUN',
      content:
        'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.\n' +
        '\n' +
        'Wir sind triarc labs. Wir tun gut daran, nicht mit der Zeit zu gehen. Sondern ihr voraus.',
      color: 'blue-triarc',
      linkText: 'Unsere Technologien',
      href: '#technology',
    },
    {
      title: 'WARUM WIR NICHT ANDERS KÖNNEN',
      content:
        'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.\n' +
        '\n' +
        'Wir sind triarc labs. Wir können nicht alles, aber gewisse Dinge besser – sehr gut sogar (sagen nicht wir, sondern unsere Kunden)',
      color: 'yellow-triarc',
      linkText: 'Unsere Stories',
      href: '#projects',
    },
  ]
  let currentIndex = 0

  function selectSlogan(index) {
    currentIndex = index
  }
</script>

<div class="relative bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto ">
    <div
      class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pt-32 lg:pb-28 xl:pb-32 xl:pt-32"
    >
      <main
        class="mt-20 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-10 lg:pt-6 lg:px-4 lg:px-8"
      >
        <div class="sm:text-center lg:text-left">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl lg:text-6xl"
          >
            triarc laboratories Ltd.
            <div class="h-1 flex">
              {#each heroSloganList as heroSlogan, i}
                <div class="w-36 flex-grow cursor-pointer bg-{heroSlogan.color}" on:click={() => selectSlogan(i)} />
              {/each}
            </div>
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {heroSloganList[currentIndex].title}
          </p>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-m sm:max-w-m sm:mx-auto md:mt-5 md:text-m lg:mx-0">
            {heroSloganList[currentIndex].content}
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href={heroSloganList[currentIndex].href}
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-opacity-75 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 bg-{heroSloganList[
                  currentIndex
                ].color}"
              >
                {heroSloganList[currentIndex].linkText}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
