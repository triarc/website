<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import { onMount } from 'svelte'
  import Dropzone from '$lib/components/Dropzone.svelte'
  import { goto } from '$app/navigation'
  import { enhance } from '$app/forms';

  export let jobString: string

  const maxFileSize = 10485760
  let jobListing = '',
      firstName = '',
      lastName = '',
      phone = '',
      email = '',
      appFiles: File[] = []
  let sent = false
  let error = false
  let sending = false

  onMount(() => {
    jobListing = jobString
  })

  function bytesToMB(bytes: number): string {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }

  const dropHandle = (event:DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer?.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if(file && file.type === 'application/pdf') {
            appFiles = [...appFiles, file]
          }
        }
      });
    } else if (event.dataTransfer?.files){
      [...event.dataTransfer?.files].forEach((file, i) => {
        if(file.type === 'application/pdf') {
          appFiles = [...appFiles, file]
        }
      });
    }
  };

  const handleChange = (event) => {
    const files = event.target.files;
    if (files.length>0) {
      [...files].forEach((file, i) => {
        if(file.type === 'application/pdf') {
        appFiles = [...appFiles, file]
        }
      });
    }
    console.log(appFiles)
  };

  const deleteFile = (file: File) => {
    appFiles = appFiles.filter((f) => f !== file)
  }

  const checkPDF = (file:File) => {
    const fileLink = window.URL.createObjectURL(file)
    goto(fileLink)
  }

  // async function send() {
  //   const baseUrl = 'https://chatbot.triarc-labs.com'
  //   const chatMessage = `Person: ${firstName} ${lastName}\nBetreff: ${subject}\nNachricht: ${message}\nEmail: ${email}\nTelefon: ${
  //     phone ?? '-'
  //   }`
  //   sending = true
  //   await fetch(`${baseUrl}/chat/send`, {
  //     body: JSON.stringify({ message: chatMessage }),
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(() => {
  //     sending = false
  //     sent = true
  //   })
  // }
</script>

<div class="bg-gray-100 flex-grow" id="applicationForm">
  <Container>
    <div class="py-16">
      <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Bewerbungsformular</h2>
      <h3 class="text-lg mt-3 font-medium text-gray-500">Interessiert? Bewirb dich direkt über das Formular</h3>
      <form action="?/submitApplication" method="POST"
            use:enhance={() =>{
              sending = true;
              return async ({ result }) => {
                sending = false;
                if(result.type === 'success') {
                  sent = true;
                } else if (result.type === 'failure'){
                  error = true;
                }
              }
              }
            }
            class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div class="sm:col-span-2">
          <label for="subject" class="block text-sm font-medium text-gray-900">Stelle</label>
          <div class="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              bind:value={jobListing}
              class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
            />
          </div>
        </div>
        <div>
          <label for="first-name" class="block text-sm font-medium text-gray-900">Vorname</label>
          <div class="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
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
              required
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
              required
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
        <input id="documents" bind:value={appFiles} class="hidden"/>
        <div class="sm:col-span-2 flex flex-col">
          <label for="dropzone" class="block text-sm font-medium text-gray-900">Unterlagen (Lebenslauf, Motivationsschreiben, Zeugnisse etc.)</label>
          <Dropzone
            id="dropzone"
            on:drop={dropHandle}
            on:dragover={(event) => {
            event.preventDefault();
            }}
            on:change={handleChange}
          >
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">PDF (Max. 10Mb)</p>
          </Dropzone>
          <div class="pt-8">
          {#if appFiles}
            {#each appFiles as file}
              <div class="flex flex-row gap-x-4 items-center">
                <button type="button" on:click={() => checkPDF(file)}>
                  <img class="min-w-4 min-h-4" src="/src/lib/assets/icons/PDF_icon.svg" alt="pdf icon">
                </button>
                <p>{file.name}</p>
                <p>{bytesToMB(file.size)}</p>
                {#if file.size > maxFileSize}
                  <p class="text-red-500">Dateigrösse überschritten</p>
                {/if}
                <button type="button" on:click={() => deleteFile(file)}>Delete</button>
              </div>
            {/each}
          {/if}
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
            disabled={sending || !firstName || !lastName || !email || !appFiles || appFiles.some((file) => file.size > maxFileSize)}
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