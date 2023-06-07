<script>
  import Container from '$lib/components/Container.svelte'
</script>

<div class="bg-blue-triarc flex flex-col">
  <div class="text-white bg-opacity-20">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        <span class="block">Interessiert? </span>
      </h2>
      <p class="mt-4 text-lg leading-6">Wir freuen uns auf Sie</p>

      <a class="rounded bg-white mt-4 text-blue-triarc px-6 py-2 inline-block" href="/contact"> Kontakt </a>
    </div>
  </div>
</div>

<div class="bg-[#0D1214] text-white pt-24 pb-12">
  <Container>
    <div class="flex justify-between flex-col lg:flex-row">
      <div class="flex md:items-end md:flex-row flex-col items-center">
        <img src="/icons/triarc-logo.svg" class="mr-3" alt="triarc laboratories" height="76" width="120" />
        <div class="text-center mt-2 md:mt-0 md:text-left">
          <div class="text-xl">triarc laboratories ltd.</div>
          <div>Neue Hard 14</div>
          <div>8005 Zürich</div>
        </div>
      </div>

      <div class="flex flex-col justify-end items-center md:items-end mt-16 md:mt-0">
        <div class="mb-6">Keine Cookies aus Überzeugung</div>

        <div class="flex justify-center">
          <a
            href="https://www.swissmadesoftware.org/en/companies/triarc-laboratories-ltd./home.html"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/logos/swiss-logo.png" width="200" height="30" alt="swissmadesoftware" />
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
