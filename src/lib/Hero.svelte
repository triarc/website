<script lang="ts">
  let heroSloganList = [
    {
      title: 'WER',
      content:
        'Wir sind Ingenieure. Bestausgebildete und praxiserfahrene IT-Fachleute, die können, was sie tun. Und für Sie alles tun, was sie können.',
      color: 'bg-red-triarc',
      linkText: 'mehr erfahren',
      href: '#aboutUs',
      claim: 'Ihre Manufaktur für digitale Innovation.',
    },
    {
      title: 'WAS',
      content:
        'Wir entwickeln und implementieren Software-Lösungen für KMU, Behörden und Institutionen. Wir hauchen ihrer Vision digitales Leben ein. Wir weisen Geschäftsmodellen den Weg in die Zukunft. Und schaffen so nicht selten auch neue.  \n',
      color: 'bg-green-triarc',
      linkText: 'mehr erfahren',
      href: '#services',
      claim: 'Wir machen mehr aus dem, was heute ist: Das, was morgen sein wird.',
    },
    {
      title: 'WIE ',
      content:
        'Wir geben uns nicht mit dem zufrieden, was es schon gibt. Wir überzeugen mit dem, was es braucht – und das ist nicht immer dasselbe. Unsere Kunden wissen das zu schätzen.',
      color: 'bg-blue-triarc',
      linkText: 'mehr erfahren',
      href: '#technology',
      claim: 'Wir tun gut daran, nicht mit der Zeit zu gehen. Sondern ihr voraus.',
    },
    {
      title: 'WARUM',
      content:
        'Uns gefällt nicht, dass Kunden im Mittelpunkt stehen. Mittelpunkt ist gut. Stehen ist zu statisch in einer Zeit, die sich laufend verändert. Wir können unsere Kunden in Bewegung versetzen – und sie mit unseren Lösungen digital transformiert in Bewegung halten.',
      color: 'bg-yellow-triarc',
      linkText: 'mehr erfahren',
      href: '#projects',
      claim:
        'Wir können nicht alles, aber gewisse Dinge besser – sehr gut sogar (sagen nicht wir, sondern unsere Kunden).  ',
    },
  ]
</script>

<div class="relative bg-white overflow-hidden">
  <div class="bg-gray-100 bg-opacity-80 py-24 px-6">
    <img src="img/hero/triarc-labs.svg" class="h-24  mx-auto" />
  </div>

  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
    <div class="relative z-10 py-8 px-3 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each heroSloganList as heroSolgan}
        <div>
          <p class="text-lg leading-6 font-medium text-gray-700">
            {heroSolgan.title}
          </p>
          <p class="mt-2 text-base leading-6 text-gray-600">
            {heroSolgan.content}
            <a href={heroSolgan.href} class="underline">
              {heroSolgan.linkText}
            </a>
          </p>
          <p class="mt-3">
            {heroSolgan.claim}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style style lang="postcss">
</style>
