<script lang="ts">
  let firstName, lastName, phone, email, subject, message;
  async function send() {
    const baseUrl = 'https://chatbot.triarc-labs.com'
    const message = ``;
    console.log(message, firstName, lastName, phone, email, subject, message);
    // <!--const result = await fetch(`${baseUrl}/chat/send`, {-->
    // <!--  body: JSON.stringify({ message }),-->
    // <!--  method: 'POST',-->
    // <!--  headers: {-->
    // <!--    'Content-Type': 'application/json',-->
    //   },
    // })
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
            <svg class="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
              <defs>
                <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
            <svg class="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
              <defs>
                <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
            <svg class="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
              <defs>
                <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-8 md:px-16 max-w-screen-lg mx-auto">
            <a target="_blank" href="https://goo.gl/maps/fAMmSET8UjPNxNYr5"
               class="text-white">
              <p class="text-lg">triarc laboratories ltd.</p>
              Neue Hard 14<br/>
              8005 Zürich
            </a>
            <div class="flex justify-between">
              <div>
                <a href="tel:+41789466951" class="flex text-white">
                  +41 78 946 69 51
                </a>
                <a href="mailto:development@triarc-labs.com" class="flex text-white">
                  development@triarc-labs.com
                </a>
                <a class="flex text-base text-white" href="https://www.linkedin.com/company/triarc-laboratories-ltd/mycompany/">
                  Linkedin
                </a>
              </div>
              <img src="img/custom-software/caller.svg" class="h-32 mr-8"/>
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
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" bind:value={firstName}
                       class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-900">Nachname</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name"  bind:value={lastName}
                       class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc">
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email"  bind:value={email}
                       class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc">
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gray-900">Telefon</label>
                <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
              </div>
              <div class="mt-1">
                <input type="text" name="phone" id="phone" autocomplete="tel"  bind:value={phone}
                       class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc" aria-describedby="phone-optional">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="subject" class="block text-sm font-medium text-gray-900">Betreff</label>
              <div class="mt-1">
                <input type="text" name="subject" id="subject"  bind:value={subject}
                       class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="message" class="block text-sm font-medium text-gray-900">Nachricht</label>
              </div>
              <div class="mt-1">
                <textarea id="message" name="message" rows="4"  bind:value={message}
                          class="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-blue-triarc focus:ring-blue-triarc" aria-describedby="message-max"></textarea>
              </div>
            </div>
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <button on:click={send} type="button" class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-triarc px-6 py-3 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2 sm:w-auto">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>

<!--<div class="bg-white min-h-screen">-->
<!--&lt;!&ndash;  <div id='map' class="w-full h-96"></div>&ndash;&gt;-->


<!--  <div class="min-h-screen md:min-h-0 even:bg-gray-100 group">-->
<!--    <div-->
<!--      class="flex items-center relative px-8 md:px-16 py-32 max-w-screen-lg mx-auto flex-col group-odd:md:flex-row group-even:md:flex-row-reverse"-->
<!--    >-->
<!--      <div class="">-->
<!--        <p class="mt-3 text-2xl font-bold text-gray-600">-->
<!--          Unser Office-->
<!--        </p>-->
<!--        <p class="mt-2 text-base leading-6 text-gray-600">-->
<!--          Triarc laboratories ltd.<br/>-->
<!--          Neue Hard 14<br/>-->
<!--          8005 Zürich-->
<!--        </p>-->
<!--      </div>-->
<!--      <iframe class="w-full aspect-[4/3]" src="https://my.matterport.com/show/?m=wUWG9VCRgoG&play=0&sr=-1.6,1.38&ss=14" frameborder="0" allowfullscreen allow="xr-spatial-tracking"></iframe>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="flex w-full">-->

<!--    <div>-->
<!--      <a class="underline" target="_blank" href="https://goo.gl/maps/fAMmSET8UjPNxNYr5">-->
<!--        Triarc laboratories ltd.<br/>-->
<!--        Neue Hard 14<br/>-->
<!--        8005 Zürich-->
<!--      </a>-->
<!--    </div>-->
<!--  </div>-->

<!--  {#each contents as content}-->
<!--    <Block bind:content />-->
<!--  {/each}-->
<!--</div>-->
