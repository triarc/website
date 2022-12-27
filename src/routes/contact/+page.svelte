<script lang="ts">
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

<div class="bg-white min-h-screen">
  <div class="mx-auto z-10">
    <div class="relative bg-white">
      <h2 class="sr-only">Kontakt</h2>

      <div class="grid grid-cols-1">
        <!-- Contact information -->
        <div class="relative overflow-hidden bg-blue-triarc py-10 pb-0 px-6 sm:px-10">
          <div class="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
            <svg
              class="absolute inset-0 h-full w-full"
              width="343"
              height="388"
              viewBox="0 0 343 388"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                fill="url(#linear1)"
                fill-opacity=".1"
              />
              <defs>
                <linearGradient
                  id="linear1"
                  x1="254.553"
                  y1="107.554"
                  x2="961.66"
                  y2="814.66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#fff" />
                  <stop offset="1" stop-color="#fff" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
            aria-hidden="true"
          >
            <svg
              class="absolute inset-0 h-full w-full"
              width="359"
              height="339"
              viewBox="0 0 359 339"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                fill="url(#linear2)"
                fill-opacity=".1"
              />
              <defs>
                <linearGradient
                  id="linear2"
                  x1="192.553"
                  y1="28.553"
                  x2="899.66"
                  y2="735.66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#fff" />
                  <stop offset="1" stop-color="#fff" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
            <svg
              class="absolute inset-0 h-full w-full"
              width="160"
              height="678"
              viewBox="0 0 160 678"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                fill="url(#linear3)"
                fill-opacity=".1"
              />
              <defs>
                <linearGradient
                  id="linear3"
                  x1="192.553"
                  y1="325.553"
                  x2="899.66"
                  y2="1032.66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#fff" />
                  <stop offset="1" stop-color="#fff" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-8 md:px-16 max-w-screen-lg mx-auto">
            <a target="_blank" href="https://goo.gl/maps/fAMmSET8UjPNxNYr5" rel="noreferrer" class="text-white">
              <p class="text-lg">triarc laboratories ltd.</p>
              Neue Hard 14<br />
              8005 Zürich
            </a>
            <div class="flex justify-between">
              <div>
                <a href="tel:+41789466951" class="flex text-white"> +41 78 946 69 51 </a>
                <a href="mailto:development@triarc-labs.com" class="flex text-white"> development@triarc-labs.com </a>
                <a
                  class="flex text-base text-white"
                  href="https://www.linkedin.com/company/triarc-laboratories-ltd/mycompany/"
                >
                  Linkedin
                </a>
              </div>
              <img src="img/custom-software/caller.svg" alt="Kunde am Telefon" class="h-32 mr-8" />
            </div>
          </div>
        </div>
        <!-- Contact form -->
        <div class="px-8 md:px-16 max-w-screen-lg mx-auto w-full py-16 md:py-32">
          <h3 class="text-lg font-medium text-gray-900">Schreib uns eine Nachricht</h3>
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
      </div>
    </div>
  </div>
</div>
