<script lang="ts">
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import type { Quote } from '$lib/components/TypeDefinitions'
  import Icon from '$lib/components/Icon.svelte'
  import envelope from '$lib/assets/icons/envelope-solid-full.svg'
  import linkedIn from '$lib/assets/icons/square-linkedin-brands-solid-full.svg'
  import Container from '$lib/components/Container.svelte'
  export let quote: Quote
</script>

<div
  class="{quote.highlight
    ? 'bg-' + quote.highlight + '-triarc bg-opacity-10'
    : 'alternating'} pb-16 sm:pb-16 md:pb-0 group"
>
  <!--  <div-->
  <!--    class="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-8 sm:gap-y-8 lg:px-8 xl:items-stretch group-odd:xl:flex-row-reverse group-even:xl:flex-row"-->
  <!--  >-->
  <Container
    class="max-w-4xl items-center gap-y-10 gap-x-8 sm:gap-y-8 md:items-stretch group-odd:md:flex-row-reverse group-even:md:flex-row md:px-8"
  >
    <div
      class="hidden md:block mx-auto -mt-8 md:-mx-4 lg:-mx-8 w-full max-w-[337.5px] lg:max-w-[375px] xl:max-w-[412.5px] md:-mb-8 md:w-full md:flex-none xl:h-[550px] lg:h-[500px] h-[450px] md:place-self-end"
    >
      <div class="relative aspect-[3/4] h-full md:aspect-auto flex w-auto justify-center items-center">
        <!-- Needed as safeguard if images in use are svgs -->
        {#if typeof quote.image === 'string'}
          <img
            src={quote.image}
            alt={quote.person}
            class={quote.imageCss
              ? quote.imageCss
              : 'aspect-[3/4] absolute h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'}
          />
        {:else}
          <EnhancedImage
            alt={quote.person}
            image={quote.image}
            imgClass={quote.imageCss
              ? quote.imageCss
              : 'aspect-[3/4] absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'}
          />
        {/if}
      </div>
    </div>
    <div class="w-full md:flex-auto mt-8 md:pt-24 md:pb-12 group-even:lg:pr-8 group-odd:lg:pl-8 lg:px-8">
      <!--      <figure class="relative isolate pt-6 sm:pt-12">-->
      <blockquote
        class="hidden md:block text-xl font-semibold leading-8 {quote.highlight
          ? 'text-gray-900'
          : 'text-gray-600'} sm:text-2xl sm:leading-9"
      >
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
        <!-- ToDo Ask about quote size -->
        <p><span class="">&laquo;</span> {@html quote.content} <span class="">&raquo;</span></p>
      </blockquote>
      <div class="flex mt-8 justify-between group-odd:flex-row-reverse group-even:flex-row">
        <div class="text-base {quote.highlight ? 'text-gray-900' : 'text-gray-600'} self-end">
          <div class="font-semibold">{quote.person}</div>
          <div class="mt-1">{quote.personTitle}</div>
          <div class="flex space-x-2 mt-2 {quote.highlight ? 'fill-gray-900' : 'fill-gray-600'}">
            {#if quote.email}
              <a href="mailto:{quote.email}" aria-label="Email">
                <Icon size="small" src={envelope}></Icon>
                <!--                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
                <!--                  <path-->
                <!--                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"-->
                <!--                  />-->
                <!--                </svg>-->
              </a>
            {/if}
            {#if quote.linkedin}
              <a href={quote.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                <Icon size="small" src={linkedIn}></Icon>
                <!--                <svg-->
                <!--                  class="h-5 {quote.highlight ? 'fill-gray-900' : 'fill-gray-600'}"-->
                <!--                  xmlns="http://www.w3.org/2000/svg"-->
                <!--                  viewBox="0 0 448 512"-->
                <!--                >-->
                <!--                  <path-->
                <!--                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"-->
                <!--                  /></svg-->
                <!--                >-->
              </a>
            {/if}
          </div>
        </div>
        <div class="md:hidden h-[200px]">
          <div class="relative aspect-[3/4] h-full flex w-auto justify-center items-center">
            <!-- Needed as safeguard if images in use are svgs -->
            {#if typeof quote.image === 'string'}
              <img
                src={quote.image}
                alt={quote.person}
                class={quote.imageCss
                  ? quote.imageCss
                  : 'aspect-[3/4] absolute h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'}
              />
            {:else}
              <EnhancedImage
                alt={quote.person}
                image={quote.image}
                imgClass={quote.imageCss
                  ? quote.imageCss
                  : 'aspect-[3/4] absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'}
              />
            {/if}
          </div>
        </div>
      </div>
      <blockquote
        class="pt-8 md:hidden text-xl font-semibold leading-8 {quote.highlight
          ? 'text-gray-900'
          : 'text-gray-600'} sm:text-2xl sm:leading-9"
      >
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
        <!-- ToDo Ask about quote size -->
        <p><span class="">&laquo;</span> {@html quote.content} <span class="">&raquo;</span></p>
      </blockquote>
      <!--      </figure>-->
    </div>
  </Container>
  <!--  </div>-->
</div>
