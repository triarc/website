<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Container from '$lib/components/Container.svelte'
  import heroImage from '/src/lib/assets/hero/Contact.jpg?width=300;600;1000;2000&format=webp&metadata'
  import iris from '/src/team/iris.jpg?width=500&format=webp;png&metadata'
  import serge from '/src/team/serge.jpg?width=500&format=webp;png&metadata'
  import dave from '/src/team/dave.jpg?width=500&format=webp;png&metadata'
  import Picture from '$lib/index/Picture.svelte'
  export let data
  const passedContact: String = data.contact

  let contactedPerson = passedContact ?? 'Allgemein',
    firstName = '',
    lastName = '',
    phone,
    email = '',
    subject = '',
    message = ''

  let sent = false
  let sending = false
  const possibleContacts = [
    { value: 'Allgemein', label: 'Allgemein' },
    { value: 'Iris', label: 'Iris' },
    { value: 'Serge', label: 'Serge' },
    { value: 'Dave', label: 'Dave' },
    { value: 'Pascal', label: 'Pascal' },
  ]
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

<div class="min-h-screen flex flex-col">
  <div class="bg-gray-100 flex flex-col flex-grow items-center justify-center">
    <Container>
      <div class="py-16 max-w-2xl">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Kontaktformular</h2>
        <h3 class="text-lg mt-3 font-medium text-gray-500">
          Interessiert? Trete in Kontakt, damit wir gemeinsam Lösungen schaffen
        </h3>
        <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:gap-x-8">
          <div>
            <label for="contacted-person" class="block text-sm font-medium text-gray-900"
              >Meine Anfrage geht an:
            </label>
            <div class="mt-1">
              <select
                name="contacted-person"
                id="contacted-person"
                bind:value={contactedPerson}
                class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
              >
                {#each possibleContacts as contact}
                  {#if contact.label === passedContact}
                    <option value={contact.value} selected >{contact.label}</option>
                  {:else if contact.label === 'Allgemein' && passedContact !== ''}
                    <option value={contact.value} selected >{contact.label}</option>
                  {:else}
                    <option value={contact.value}>{contact.label}</option>
                  {/if}
                {/each}
              </select>
            </div>
          </div>
          <div class="relative">
            <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Floating outlined</label>
          </div>
          <div class="relative">
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
          <div class="">
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
          <div class="">
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
          <div class="sm:flex sm:justify-center space-between gap-x-6">
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
