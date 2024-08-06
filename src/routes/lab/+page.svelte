<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import FairPizza from '$lib/assets/img/lab/fairpizza-dashboard.png?format=webp;png&w=500&enhanced'
  import Slothi from '$lib/assets/img/lab/slothi.png?format=webp;png&w=500&enhanced'
  import labImage from '$lib/assets/img/lab/lab.svg'
  let email = ''
  let submitted = false

  function submitNewsletter() {
    if (submitted) {
      return
    }

    plausible('subscribed-for-lab')
    const url = `https://assets.mailerlite.com/jsonp/27919/forms/52893614102021803/subscribe?fields%5Bemail%5D=${email}&ajax=1&guid=e5e887ce-74f8-b1da-0911-b9314e0e7247`
    const req = new XMLHttpRequest()
    req.open('GET', url)
    req.send()

    submitted = true
  }
</script>

<svelte:head>
  <title>Innovation Lab - triarc-labs</title>
</svelte:head>

<div class="bg-gray-800 h-screen relative">
  <div class="relative bg-white">
    <div class="pt-32 overflow-hidden lg:relative lg:pb-24">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div class="mt-20">
          <div class="mt-6 lg:max-w-xl">
            <h1 class="text-4xl font-extrabold text-black tracking-tight sm:text-5xl">
              Innovation Lab <br /><span class="text-3xl">Projekte</span>
            </h1>

            <p class="mt-6 text-xl text-gray-500">
              Willkommen im Lab von triarc. Hier erfährst du mehr zu den entstandenen Produkten, welche wir im Rahmen
              des Labs entwickeln.
            </p>
          </div>
        </div>

        <div class="flex items-end justify-center my-16 lg:my-0">
          <img src={labImage} class="flex-grow" alt="triarc innovation lab" />
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-gray-900">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:pb-24">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div class="mt-20">
          <div class="mt-6 lg:max-w-xl">
            <h2 class="text-3xl font-extrabold tracking-tight text-indigo-500">Slothi</h2>

            <p class="mt-4 text-lg text-gray-100 italic">
              Slothi soll deine Terminprobleme lösen. Eine smarte Lösung, welche dir den passenden Termin für alle
              Teilnehmer findet.
            </p>
            <p class="mt-4 text-lg text-gray-300">
              Damit du möglichst einfach einen Termin planen kannst, wählst du den Zeitraum in welchem der Termin
              stattfinden soll. Die erforderliche Zeitdauer und die Teilnehmer welche daran teilnehmen sollen. Ab da
              übernimmt Slothi für dich und prüft die Verfügbarkeiten aller Teilnehmer. Du erhältst eine Auswahl an
              möglichen Terminvorschlägen und kannst einen fixen Termin einplanen.
            </p>
            <div class="mt-6 mb-12">
              <div class="flex space-x-4">
                <a
                  href="https://slothi.ch"
                  rel="noreferrer"
                  class="px-6 py-2 block bg-indigo-500 text-white rounded-md"
                  target="_blank"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-end justify-center mt-16 lg:my-0">
          <enhanced:img src={Slothi} class="lg:border-b-2 border-indigo-900" alt="slothi" />
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-white">
    <div class="py-8 pb-16 overflow-hidden sm:pt-12 lg:relative lg:pb-24">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div class="mt-20">
          <div class="mt-6 lg:max-w-xl">
            <h2 class="text-3xl font-extrabold tracking-tight text-red-600">Fair Pizza</h2>

            <p class="mt-4 text-lg text-gray-700 italic">
              Fair Pizza bietet Restaurants eine einfache und günstige Alternative Angebot selbständig Online zu
              verkaufen. Die Whitelabel Lösung bietet eine Vielzahl von Konfigurationsmöglichkeiten inklusive einem
              Pizzabuilder. Mit Stripe lassen sich die Zahlungen bequem online abwickeln.
            </p>
            <p class="mt-4 text-lg text-gray-500">
              Die Auslieferung erfolgt über eigene Wege oder über einer unseren lokalen <a
                target="_blank"
                class="underline"
                href="https://www.ultrakurier.ch/"
                rel="noreferrer">Partner</a
              >
            </p>
            <div class="mt-6 mb-12">
              <div class="flex space-x-4">
                <a
                  href="https://fairpizza.ch"
                  class="px-6 py-2 block bg-red-500 text-white rounded-md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mehr erfahren
                </a>
                <a href="https://demo.fairpizza.ch" class="text-red-500 px-6 py-2" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-end justify-center mt-16 lg:my-0">
          <enhanced:img src={FairPizza} class="shadow-lg border rounded-md" alt="fairpizza dashboard" />
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-gray-100">
    <div class="py-8 overflow-hidden sm:pt-12 lg:relative lg:pb-24 flex">
      <div class="mx-auto sm:max-w-3xl max-w-md sm:px-6 lg:px-8 lg:max-w-7xl flex space-x-12 flex-grow">
        <div class="flex-shrink-0">
          <div class="mt-6 lg:max-w-xl">
            <div class="relative flex items-center justify-center bg-gray-300 rounded-xl w-32 h-32">
              <p class="text-6xl text-gray-500">?</p>
              <span
                class="text-base absolute -top-3 -right-4 px-2 py-1 w-8 text-center rounded-md border-1 border-white font-medium bg-red-600 text-white"
                >1</span
              >
            </div>
            <h3 class="text-xl text-center w-32 mt-1 font-bold text-gray-700 tracking-tight">Coming soon</h3>
          </div>
        </div>

        <div class="flex flex-col justify-center space-y-3 flex-grow">
          <div>
            <p class="mt-6 text-xl text-gray-600 max-w-lg">Bist du interessiert an unseren Projekten?</p>
            <p class="text-base text-gray-600">Wir halten dich gerne auf dem Laufenden.</p>
          </div>
          <form on:submit|preventDefault={submitNewsletter} class="sm:mx-auto w-full sm:flex">
            <div class={submitted ? 'w-0 overflow-hidden' : 'min-w-0 sm:mr-3 flex-grow'} style="max-width: 400px">
              <label for="cta-email" class="sr-only">Email address</label>
              <input
                id="cta-email"
                type="email"
                bind:value={email}
                class="block w-full min-w-xl max-w-64 border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-triarc"
                placeholder="Deine Email"
              />
            </div>
            <div class="mt-4 sm:mt-0">
              <button
                type="submit"
                class="block w-full rounded-md border border-transparent px-5 py-3 bg-green-triarc text-base font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 sm:px-10"
              >
                {submitted ? 'Besten Dank!' : 'Newsletter abonnieren'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer />
