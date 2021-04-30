<script lang="ts">
  import { browser } from '$app/env'

  let heroSloganList = [
    {
      title: 'WER',
      content:
        'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
      color: 'bg-red-triarc',
      linkText: 'mehr erfahren',
      href: '#aboutUs',
      claim: 'Ihre Manufaktur für digitale Innovation.'
    },
    {
      title: 'WAS',
      content:
        'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.  \n',
      color: 'bg-green-triarc',
      linkText: 'mehr erfahren',
      href: '#services',
      claim: 'Wir machen mehr aus dem, was heute ist: Das, was morgen sein wird.'
    },
    {
      title: 'WIE ',
      content:
        'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.',
      color: 'bg-blue-triarc',
      linkText: 'mehr erfahren',
      href: '#technology',
      claim: 'Wir tun gut daran, nicht mit der Zeit zu gehen. Sondern ihr voraus.'
    },
    {
      title: 'WARUM',
      content:
        'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.',
      color: 'bg-yellow-triarc',
      linkText: 'mehr erfahren',
      href: '#projects',
      claim: 'Wir können nicht alles, aber gewisse Dinge besser – sehr gut sogar (sagen nicht wir, sondern unsere Kunden).  '
    },
  ]
  let currentIndex = 0
  let currentSlogan = heroSloganList[currentIndex]
  let progress = 100

  function selectSlogan(index: number) {
    currentIndex = index
    currentSlogan = heroSloganList[currentIndex]
    progress = (index * 100) / heroSloganList.length
  }

  function updateProgress() {
    progress -= 0.05
    if (progress < 0) {
      progress = 100
    }
    currentIndex = heroSloganList.length - Math.ceil(progress / (100 / heroSloganList.length))
    currentSlogan = heroSloganList[currentIndex]
    requestAnimationFrame(updateProgress)
  }

  if (browser) {
    requestAnimationFrame(updateProgress)
  }
</script>
<style style lang="postcss">
  .slogan-content{
      min-height: 80px;
  }
</style>

<div class="relative bg-white overflow-hidden">
  <div class="h-2 flex relative">
    {#each heroSloganList as heroSlogan, i}
      <div class="w-36 flex-grow cursor-pointer {heroSlogan.color}" on:click={() => selectSlogan(i)} />
    {/each}
    <div class="absolute h-2 opacity-50 right-0 top-0 bg-white" style="width: {progress}%" />
  </div>
  <div class="max-w-screen-xl mx-auto ">
    <div
      class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pt-0 lg:pb-28 xl:pb-32 xl:pt-0"
    >
      <main
        class="mt-20 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-10 lg:pt-6 lg:px-4 lg:px-8"
      >
        <div class="sm:text-center lg:text-left">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl lg:text-6xl"
          >
            triarc laboratories Ltd.
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-bold">
            ANALYZE.DIGITALIZE.REALIZE.
          </p>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:pt-10 lg:pt-10 md:text-xl lg:mx-0 ">
            {currentSlogan.title}
          </p>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-m sm:max-w-m sm:mx-auto md:mt-5 md:text-m lg:mx-0 slogan-content">
            {currentSlogan.content}
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href={currentSlogan.href}
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-opacity-75 focus:outline-none focus:shadow-outline-indigo transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10 {currentSlogan.color}"
              >
                {currentSlogan.linkText}
              </a>
            </div>
          </div>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-m sm:max-w-m sm:mx-auto md:mt-5 md:text-m lg:mx-0">
            {currentSlogan.claim}
          </p>
        </div>
      </main>
    </div>
  </div>
</div>
