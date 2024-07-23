<div class="bg-white">
  <div class="text-center max-w-screen-xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8" id="partners">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Unsere Partner</h2>
    <div class="mt-6 grid grid-cols-2 md:grid-cols-3 lg:mt-8 partner-grid">
      <div class="partner-grid-row">
        <a
          href="https://www.swissmadesoftware.org"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <!--suppress CheckImageSize -->
          <img
            height="80"
            class="max-h-20"
            src="/src/lib/assets/img/partners/SwissMadeSoftware.png"
            loading="lazy"
            alt="partner-swissmadesoftware"
          />
        </a>
        <a
          href="https://baumeister.swiss/"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <!--suppress CheckImageSize -->
          <img
            height="80"
            class="max-h-20"
            src="/src/lib/assets/img/partners/SBV.png"
            loading="lazy"
            alt="partner-sbv"
          />
        </a>
        <a
          href="https://www.swissict.ch"
          rel="noreferrer"
          target="_blank"
          class="col-span-1 flex items-center justify-center py-8 px-8 filter"
        >
          <!--suppress CheckImageSize -->
          <img
            height="80"
            class="max-h-20"
            src="/src/lib/assets/img/partners/SwissICT.png"
            loading="lazy"
            alt="partner-SwissICT"
          />
        </a>
      </div>
    </div>
  </div>
</div>

<style style lang="postcss">
  .partner-grid a {
    @apply border-4 border-gray-100;
  }
  .partner-grid-row {
    @apply contents;
  }
  .partner-grid-row:nth-child(odd) a {
    @apply odd:border-l-0 even:border-r-0;
  }
  .partner-grid-row:nth-child(odd) a {
    @apply odd:border-r-0 even:border-l-0;
  }

  .partner-grid-row:nth-child(odd) a:nth-child(1) {
    @apply border-r-4 md:border-r-4;
  }
  .partner-grid-row:nth-child(odd) a:nth-child(2) {
    @apply border-l-4 border-r-0 md:border-l-4 md:border-r-4;
  }
  .partner-grid-row:nth-child(odd) a:nth-child(3) {
    @apply border-r-4 md:border-l-4 md:border-r-0;
  }
  .partner-grid-row:nth-child(even) a:nth-child(1) {
    @apply border-l-4 border-r-0 md:border-r-4 md:border-l-0;
  }
  .partner-grid-row:nth-child(even) a:nth-child(2) {
    @apply border-l-0 md:border-l-4 md:border-r-4;
  }
  .partner-grid-row:nth-child(even) a:nth-child(3) {
    @apply border-r-0 md:border-l-4 md:border-r-0;
  }
  .partner-grid-row:first-child a:nth-child(1) {
    @apply border-t-0;
  }
  .partner-grid-row:first-child a:nth-child(2) {
    @apply border-t-0;
  }
  .partner-grid-row:last-child a:last-child,
  .partner-grid-row:last-child a:nth-last-child(2):nth-child(odd) {
    @apply border-b-0;
  }
  .partner-grid-row:last-child a {
    @apply md:border-b-0;
  }
  .partner-grid-row:first-child a {
    @apply md:border-t-0;
  }
</style>
