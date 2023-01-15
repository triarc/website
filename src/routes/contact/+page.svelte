<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Container from '$lib/components/Container.svelte'

  let firstName = '',
    lastName = '',
    phone,
    email = '',
    subject = '',
    message = ''
  let sent = false
  let sending = false

  async function send() {
    const baseUrl = 'https://chatbot.triarc-labs.com'
    const chatMessage = `Person: ${firstName} ${lastName}\nBetreff: ${subject}\nNachricht: ${message}\nEmail: ${email}\nTelefon: ${
      phone ?? '-'
    }`
    sending = true
    await fetch(`${baseUrl}/chat/send`, {
      body: JSON.stringify({ message: chatMessage }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      sending = false
      sent = true
    })
  }
</script>

<svelte:head>
  <title>Kontakt - triarc-labs</title>
</svelte:head>



<div class="min-h-screen flex flex-col">
  <Hero title="Kontakt" class="flex-shrink-0"
        content="">
  </Hero>

  <div class="bg-white flex-shrink-0">

    <Container>
      <div class="py-16">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Unsere Kontaktangaben</h2>
          <div class="mt-3">
            <p class="text-lg text-gray-500">Für Fragen zu uns oder sonstiges was du auf dem Herzen hast, erreichst du uns hier:</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-y-6 gap-x-8 mt-9 md:grid-cols-2">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-400" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M484.6 330.6C484.6 330.6 484.6 330.6 484.6 330.6l-101.8-43.66c-18.5-7.688-40.2-2.375-52.75 13.08l-33.14 40.47C244.2 311.8 200.3 267.9 171.6 215.2l40.52-33.19c15.67-12.92 20.83-34.16 12.84-52.84L181.4 27.37C172.7 7.279 150.8-3.737 129.6 1.154L35.17 23.06C14.47 27.78 0 45.9 0 67.12C0 312.4 199.6 512 444.9 512c21.23 0 39.41-14.44 44.17-35.13l21.8-94.47C515.7 361.1 504.7 339.3 484.6 330.6zM457.9 469.7c-1.375 5.969-6.844 10.31-12.98 10.31c-227.7 0-412.9-185.2-412.9-412.9c0-6.188 4.234-11.48 10.34-12.88l94.41-21.91c1-.2344 2-.3438 2.984-.3438c5.234 0 10.11 3.094 12.25 8.031l43.58 101.7C197.9 147.2 196.4 153.5 191.8 157.3L141.3 198.7C135.6 203.4 133.8 211.4 137.1 218.1c33.38 67.81 89.11 123.5 156.9 156.9c6.641 3.313 14.73 1.531 19.44-4.219l41.39-50.5c3.703-4.563 10.16-6.063 15.5-3.844l101.6 43.56c5.906 2.563 9.156 8.969 7.719 15.22L457.9 469.7z"/></svg>
            </div>
            <div class="ml-3 text-base text-gray-500">
              <a href="tel:+41789466951" class="decoration-red-triarc underline">+41 78 946 69 51</a>
              <p class="mt-1">Mon-Fri 09:00 - 18:00</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-400" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L570.6 244zM144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7V432C96 458.5 117.5 480 144 480zM240 480H336V320H240V480z"/></svg>
            </div>
            <div class="ml-3 text-base text-gray-500">
              <p>triarc laboratories ltd.</p>
              <p>Neue Hard 14</p>
              <p>8005 Zürich</p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-400" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 96c-17.7 0-32 14.3-32 32v39.9L227.6 311.3c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H64zM32 207.6V384c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V207.6L303.3 337.1c-28.2 20.6-66.5 20.6-94.6 0L32 207.6zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </div>
            <div class="ml-3 text-base text-gray-500">
              <a href="mailto:development@triarc-labs.com&subject=Kontakt" class="decoration-red-triarc underline">development@triarc-labs.com</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>

  <hr/>

  <div class="bg-gray-100 flex-grow">
    <Container>
      <div class="py-16">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Kontaktformular</h2>
        <h3 class="text-lg mt-3 font-medium text-gray-500">Schreib uns eine Nachricht</h3>
        <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-900">Vorname</label>
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                bind:value={firstName}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-900">Nachname</label>
            <div class="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                bind:value={lastName}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                bind:value={email}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div>
            <div class="flex justify-between">
              <label for="phone" class="block text-sm font-medium text-gray-900">Telefon</label>
              <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
            </div>
            <div class="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                bind:value={phone}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                aria-describedby="phone-optional"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="subject" class="block text-sm font-medium text-gray-900">Betreff</label>
            <div class="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                bind:value={subject}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label for="message" class="block text-sm font-medium text-gray-900">Nachricht</label>
            </div>
            <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  bind:value={message}
                  class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                  aria-describedby="message-max"
                />
            </div>
          </div>
          <div class="sm:col-span-2 sm:flex sm:justify-end space-between gap-x-6">
            {#if sent}
              <div class="rounded-md bg-green-triarc bg-opacity-10 p-4 mt-2 flex-grow">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-sm font-medium text-green-800">
                      Deine Nachricht wurde übermittelt, wir melden uns so rasch wie möglich
                    </p>
                  </div>
                </div>
              </div>
            {/if}

            <button
              on:click={send}
              disabled={sending || !firstName || !lastName || !subject || !message}
              type="button"
              class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-triarc disabled:bg-gray-500 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2 sm:w-auto"
            >
              {#if sending}
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              {/if}
              {#if sent}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                ><path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                /></svg
                >
              {:else}
                Absenden
              {/if}
            </button>
          </div>
        </form>
      </div>
    </Container>
  </div>

</div>
