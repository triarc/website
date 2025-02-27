<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import Dropzone from '$lib/components/Dropzone.svelte'
  import { goto } from '$app/navigation'
  import paperclip from '$lib/assets/icons/paperclip-solid.svg'

  export let availableJobs: string[] = []
  export let jobString: string = ''
  export let isDefinedListing: boolean = false
  const baseUrl = 'https://chatbot.triarc-labs.com'
  const maxFileSize = 10485760

  let jobListing = ''
  $: jobListing = jobString || 'Initiativbewerbung'
  let firstName = '',
    lastName = '',
    phone = '',
    email = '',
    lohn = '',
    message = '',
    arbeitgeber = '',
    appFiles: File[] = []
  let sent = false
  let error = false
  let sending = false
  let valid = true
  let filesValid = true
  let conditionAccepted = false
  let noAgencyAccepted = false

  let errorMessages: string[] = []
  let fileValidationState: Record<string, string> = {
    appFileAvailability: '',
    appFileSize: '',
    appFileType: '',
  }

  $: {
    errorMessages = []
    if (!firstName || !lastName || !email) errorMessages.push('Bitte fülle alle Pflichtfelder aus.')
    if (!appFiles.length) {
      fileValidationState.appFileAvailability = 'Bitte mindestens ein Dokument hochladen.'
      errorMessages.push(fileValidationState.appFileAvailability)
    }
    if (appFiles.reduce((sum, current) => sum + current.size, 0) > maxFileSize) {
      fileValidationState.appFileSize = 'Die Gesamtgrösse der Dateien überschreitet das Maximum von 10 MB.'
      errorMessages.push(fileValidationState.appFileSize)
    }
    if (appFiles.some((file) => file.type !== 'application/pdf')) {
      fileValidationState.appFileType = 'Nur Dateien des Typs .pdf sind erlaubt.'
      errorMessages.push(fileValidationState.appFileType)
    }
    if (!conditionAccepted) errorMessages.push('Bitte akzeptiere die Bedingung.')
  }

  function checkFiles(files: File[]) {
    // noinspection RedundantIfStatementJS
    if (
      !files.length ||
      files.reduce((sum, current) => sum + current.size, 0) > maxFileSize ||
      files.some((file) => file.type !== 'application/pdf')
    ) {
      filesValid = false
    } else {
      filesValid = true
    }
  }

  function validateFields() {
    if (sending) {
      valid = false
    }
    if (sent) {
      valid = false
    }
    if (!firstName) {
      valid = false
    }
    if (!lastName) {
      valid = false
    }
    if (!email) {
      valid = false
    }
    if (!lohn) {
      valid = false
    }
    if (!appFiles.length) {
      valid = false
    }
    if (!conditionAccepted) {
      valid = false
    }
    if (!noAgencyAccepted) {
      valid = false
    }
    if (appFiles.reduce((sum, current) => sum + current.size, 0) > maxFileSize) {
      valid = false
    }
  }

  function bytesToMB(bytes: number): string {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  const dropHandle = (event: DragEvent) => {
    event.preventDefault()
    const dataTransfer = event.dataTransfer
    if (dataTransfer?.items) {
      ;[...dataTransfer.items].forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile()
          if (file && file.type === 'application/pdf') {
            appFiles = [...appFiles, file]
          }
        }
      })
    } else if (dataTransfer?.files) {
      ;[...dataTransfer.files].forEach((file) => {
        if (file.type === 'application/pdf') {
          appFiles = [...appFiles, file]
        }
      })
    }
    checkFiles(appFiles)
  }

  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const files = target.files
    if (files && files.length > 0) {
      ;[...files].forEach((file) => {
        if (file.type === 'application/pdf') {
          appFiles = [...appFiles, file]
        }
      })
    }
    checkFiles(appFiles)
  }

  const deleteFile = (file: File) => {
    appFiles = appFiles.filter((f) => f !== file)
    checkFiles(appFiles)
  }

  const checkPDF = (file: File) => {
    const fileLink = window.URL.createObjectURL(file)
    goto(fileLink)
  }

  async function sendMail(event: SubmitEvent) {
    validateFields()
    if (!valid) return
    const form = event.target as HTMLFormElement
    const mail = new FormData(form)
    for (let file of appFiles) {
      mail.append('attachments', file)
    }
    sending = true
    const response = await fetch(`${baseUrl}/email/application`, {
      body: mail,
      method: 'POST',
    })

    if (response.ok) {
      sending = false
      error = false
      sent = true
      form.reset()
      appFiles = []
    } else {
      sending = false
      error = true
    }
  }
</script>

<div class="alternating">
  <div class="flex-grow" id="applicationForm">
    <Container>
      <div class="py-16">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Bewerbungsformular</h2>
        <h3 class="text-lg mt-3 mb-8 font-medium text-gray-500">Interessiert? Bewirb dich direkt über das Formular</h3>
        <form id="application-form" on:submit|preventDefault={sendMail} action="#" method="POST">
          <div class="space-y-12 pb-12">
            <div
              class="form-section grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
            >
              <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personalien</h2>
              </div>
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="sm:col-span-3">
                  <div class="flex justify-between">
                    <label for="firstName" class="block text-sm font-medium text-gray-900">Vorname</label>
                    <span id="first-name-required" class="text-sm text-gray-500">Pflichtfeld</span>
                  </div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      autocomplete="given-name"
                      bind:value={firstName}
                      class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                    />
                    <!--            <span class="hidden text-red-triarc py-1 validation-message">Bitte Vornamen eingeben</span>-->
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <div class="flex justify-between">
                    <label for="lastName" class="block text-sm font-medium text-gray-900">Nachname</label>
                    <span id="last-name-required" class="text-sm text-gray-500">Pflichtfeld</span>
                  </div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      autocomplete="family-name"
                      bind:value={lastName}
                      class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                    />
                    <!--            <span class="hidden text-red-triarc py-1 validation-message">Bitte Nachnamen eingeben</span>-->
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <div class="flex justify-between">
                    <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                    <span id="email-required" class="text-sm text-gray-500">Pflichtfeld</span>
                  </div>
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
                    <!--            <span class="hidden text-red-triarc py-1 validation-message">Bitte gültige E-Mail Adresse eingeben</span>-->
                  </div>
                </div>
                <div class="sm:col-span-3">
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
              </div>
            </div>
            <div
              class="form-section grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
            >
              <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Job</h2>
              </div>
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="col-span-full">
                  <label for="jobListing" class="block text-sm font-medium text-gray-900">Stelle</label>
                  <div class="mt-1">
                    <select
                      name="jobListing"
                      id="jobListing"
                      bind:value={jobListing}
                      class="{isDefinedListing
                        ? 'pointer-events-none bg-none'
                        : ''} block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                    >
                      {#if !isDefinedListing}
                        <option selected={jobListing === 'Initiativbewerbung'}>Initiativbewerbung</option>
                      {/if}
                      {#each availableJobs as job}
                        <option selected={jobListing === job}>{job}</option>
                      {/each}
                    </select>
                  </div>
                </div>
                <div class="col-span-full">
                  <div class="flex justify-between">
                    <label for="lohn" class="block text-sm font-medium text-gray-900">Deine Lohnvorstellung</label>
                    <span id="lohn-required" class="text-sm text-gray-500">Pflichtfeld</span>
                  </div>
                  <div class="mt-1">
                    <input
                      id="lohn"
                      name="lohn"
                      type="text"
                      required
                      placeholder="90'000"
                      bind:value={lohn}
                      class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                    />
                    <!--            <span class="hidden text-red-triarc py-1 validation-message">Bitte gültige E-Mail Adresse eingeben</span>-->
                  </div>
                </div>
                <div class="col-span-full">
                  <div class="flex justify-between">
                    <label for="arbeitgeber" class="block text-sm font-medium text-gray-900"
                      >Was liegt dir bei einem Arbeitgeber besonders am Herzen?</label
                    >
                    <span id="arbeitgeber-optional" class="text-sm text-gray-500">Optional</span>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="arbeitgeber"
                      name="arbeitgeber"
                      rows="4"
                      bind:value={arbeitgeber}
                      class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc"
                      aria-describedby="message-max"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--        <input name="documents" id="documents" bind:value={appFiles} class="hidden"/>-->
            <div
              class="form-section grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
            >
              <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Anhänge</h2>
              </div>
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="col-span-full flex flex-col">
                  <div class="flex justify-between mb-1">
                    <label for="dropzone" class="block text-sm font-medium text-gray-900"
                      >Unterlagen (Lebenslauf, Motivationsschreiben, Zeugnisse etc.)</label
                    >
                    <span id="message-optional" class="text-sm text-gray-500">Mindestens ein Dokument</span>
                  </div>
                  <Dropzone
                    isValid={filesValid}
                    id="dropzone"
                    on:drop={dropHandle}
                    on:dragover={(event) => {
                      event.preventDefault()
                    }}
                    on:blur={() => checkFiles(appFiles)}
                    on:change={handleChange}
                  >
                    <svg
                      aria-hidden="true"
                      class="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      /></svg
                    >
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="text-blue-triarc font-semibold">Zum hochladen klicken</span> oder Files ziehen
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PDF (Max. 10Mb)</p>
                  </Dropzone>
                  <!--{#if (!filesValid)}-->
                  <!--  {#each Object.values(fileValidationState) as value}-->
                  <!--    <span class="text-red-triarc py-1 validation-message">{value}</span>-->
                  <!--  {/each}-->
                  <!--{/if}-->
                </div>
                {#if appFiles.length !== 0}
                  <div class="col-span-full flex flex-col">
                    <div class="flex">
                      <label for="dateien" class="block text-sm font-medium text-gray-900">Hochgeladene Dateien</label>
                    </div>
                    <div class="mt-1">
                      {#each appFiles as file}
                        <div class="py-1 flex flex-row gap-x-4 items-center">
                          <button type="button" on:click={() => checkPDF(file)}>
                            <img class="min-w-4 min-h-4" src={paperclip} alt="attachment icon" />
                          </button>
                          <p class="w-full md:w-96 whitespace-nowrap overflow-hidden text-ellipsis">{file.name}</p>
                          <p class="min-w-16 w-16">{bytesToMB(file.size)}</p>
                          <button
                            class="rounded-md px-3 text-white bg-blue-triarc"
                            type="button"
                            on:click={() => deleteFile(file)}>Löschen</button
                          >
                          {#if file.size > maxFileSize}
                            <p class="text-red-500">Dateigrösse überschritten</p>
                          {/if}
                        </div>
                      {/each}
                    </div>
                  </div>
                {/if}
              </div>
            </div>
            <div
              class="form-section grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
            >
              <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Bemerkungen</h2>
              </div>
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="col-span-full">
                  <div class="flex justify-between">
                    <label for="message" class="block text-sm font-medium text-gray-900">Nachricht</label>
                    <span id="message-optional" class="text-sm text-gray-500">Optional</span>
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
              </div>
            </div>
            <div
              class="form-section grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"
            >
              <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Bestätigung</h2>
              </div>
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="col-span-full">
                  <div class="flex flex-col items-start gap-y-3">
                    <div class="flex md:pr-8">
                      <input
                        class="self-center focus:border-blue-triarc focus:ring-blue-triarc shadow-sm py-2 px-2 rounded-md border-gray-600"
                        required
                        bind:checked={conditionAccepted}
                        type="checkbox"
                        id="condition-checkbox"
                      />
                      <label
                        for="condition-checkbox"
                        class="inline pl-4 text-wrap text-s font-medium text-gray-900 decoration-red-triarc"
                      >
                        Aus rechtlichen Gründen können wir nur Bewerber berücksichtigen, die ihren Wohnsitz in der <span
                          class="decoration-red-triarc underline">Schweiz</span
                        >
                        oder <span class="decoration-red-triarc underline">Deutschland</span> haben. Ich bestätige, diese
                        Bedingung zu erfüllen.
                      </label>
                    </div>
                    <div class="flex md:pr-8">
                      <input
                        class="self-center focus:border-blue-triarc focus:ring-blue-triarc shadow-sm py-2 px-2 rounded-md border-gray-600"
                        required
                        bind:checked={noAgencyAccepted}
                        type="checkbox"
                        id="condition-checkbox"
                      />
                      <label
                        for="condition-checkbox"
                        class="inline pl-4 text-wrap text-s font-medium text-gray-900 decoration-red-triarc"
                      >
                        Wir akzeptieren keine Bewerbungen über Personalvermittlern oder Headhuntern. Ich bestätige, dass
                        ich mich direkt bewerbe.
                      </label>
                    </div>
                    <!--{#if checkboxTouched && !conditionAccepted}-->
                    <!--<span class="text-red-triarc py-1 validation-message">Bitte akzeptiere die Bedingung.</span>-->
                    <!--{/if}-->
                    <button
                      type="submit"
                      disabled={sent || sending}
                      class="min-w-40 sm:w-auto mt-4 max-h-[50px] items-center inline-flex justify-center rounded-md border border-transparent bg-blue-triarc hover:bg-blue-triarc/90 disabled:bg-blue-triarc/30 px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2"
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
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-full flex flex-col md:gap-x-6">
            {#if errorMessages.length && !sent && !valid}
              <div class="rounded-md bg-red-triarc bg-opacity-10 p-4 mt-2 flex-grow">
                <div class="flex">
                  <div class="ml-3">
                    {#each errorMessages as message}
                      <p class="text-sm font-medium text-grey-900">
                        {message}
                      </p>
                    {/each}
                  </div>
                </div>
              </div>
            {/if}
            {#if sent}
              <div class="rounded-md bg-green-triarc bg-opacity-10 p-4 mt-2 flex-grow">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-sm font-medium text-green-800">
                      Deine Bewerbung wurde erfolgreich übermittelt. Du solltest in Kürze eine Bestätigungs-E-Mail
                      erhalten. Wir melden uns so rasch wie möglich bei dir.
                    </p>
                  </div>
                </div>
              </div>
            {/if}
            {#if error}
              <div class="rounded-md bg-red-triarc bg-opacity-10 p-4 mt-2 flex-grow">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-sm font-medium text-grey-900">
                      Beim Übermitteln der Bewerbung ist ein Fehler aufgetreten, bitte versuche es erneut.
                    </p>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </form>
      </div>
    </Container>
  </div>
</div>

<style lang="postcss">
  input:user-invalid {
    @apply border-red-triarc focus:border-red-triarc focus:ring-red-triarc;
  }
</style>
