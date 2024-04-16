<script lang="ts">
  import Slideshow from '$lib/components/Slideshow.svelte'
  import Button from '$lib/components/Button.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  export let content: BlockContent
</script>

{#if content.quote}
  <div class="bg-white group">
    <div
      class="{content.quote.highlight
        ? 'bg-' + content.quote.highlight + '-triarc bg-opacity-10'
        : 'group-even:bg-gray-100'} pb-20 sm:pb-24 xl:pb-0"
    >
      <div
        class="mx-auto flex max-w-7xl flex-col items-center gap-y-10 gap-x-8 px-8 sm:gap-y-8 lg:px-8 xl:items-stretch group-odd:xl:flex-row-reverse group-even:xl:flex-row"
      >
        <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
          <div class="relative aspect-[3/4] h-full md:-mx-8 xl:mx-0 xl:aspect-auto flex justify-center items-center">
            <enhanced:img
              alt={content.quote.person}
              src={content.quote.image}
              class={content.quote.imageCss
                ? content.quote.imageCss
                : 'aspect-[3/4] absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'}
            />
          </div>
        </div>
        <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:py-24 xl:px-8">
          <figure class="relative isolate pt-6 sm:pt-12">
            <svg
              viewBox="0 0 162 128"
              fill="none"
              aria-hidden="true"
              class="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
            >
              <path
                id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
              />
              <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
            </svg>
            <blockquote
              class="text-xl font-semibold leading-8 {content.quote.highlight
                ? 'text-gray-900'
                : 'text-gray-600'} sm:text-2xl sm:leading-9"
            >
              <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
              <p>{@html content.quote.content}</p>
            </blockquote>
            <figcaption class="mt-8 text-base {content.quote.highlight ? 'text-gray-900' : 'text-gray-600'}">
              <div class="font-semibold">{content.quote.person}</div>
              <div class="mt-1">{content.quote.personTitle}</div>
              <div class="flex space-x-6 mt-4 {content.quote.highlight ? 'fill-gray-900' : 'fill-gray-600'}">
                {#if content.quote.email}
                  <a href="mailto:{content.quote.email}" aria-label="Email">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                      />
                    </svg>
                  </a>
                {/if}
                {#if content.quote.linkedin}
                  <a href={content.quote.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                    <svg
                      class="h-5 {content.quote.highlight ? 'fill-gray-900' : 'fill-gray-600'}"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      /></svg
                    >
                  </a>
                {/if}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
  <hr />
{/if}

{#if content.title}
  <div class="md:min-h-0 even:bg-gray-100 group">
    <div
      class="flex items-center relative px-8 md:px-16 pb-16 pt-8 md:py-32 max-w-screen-xl mx-auto flex-col group-odd:xl:flex-row group-even:xl:flex-row-reverse"
    >
      {#if content.slides}
        <Slideshow posts={content.slides} />
      {/if}
      <div class="">
        <h2 class="mt-3 text-2xl font-bold text-gray-600">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
          {@html content.title}
        </h2>
        {#if content.content}
          <p class="mt-2 text-base leading-6 text-gray-600">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
            {@html content.content}
          </p>
        {/if}
        {#if content.footer}
          <p class="text-sm text-gray-500">{content.footer}</p>
        {/if}
        {#if content.link}
          <Button
            buttonSize="Small"
            reference={content.link.href}
            label={content.link.text}
            target={content.link.target ?? ''}
          />
        {/if}
        {#if content.bulletPoints}
          <ul class="mt-8">
            {#each content.bulletPoints as bulletPoint}
              <li class="flex my-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="flex-shrink-0 h-2 w-2"
                  ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                  /></svg
                >
                <div class="ml-3">
                  <span class="text-base text-gray-600">
                    {bulletPoint}
                  </span>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
        {#if content.cards}
          <ul
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {#each content.cards as card}
              <li class="rounded-2xl group-odd:bg-gray-100 group-even:bg-white p-8">
                <!--					<feature.icon class="h-8 w-8" />-->
                <h3 class="font-semibold text-gray-700">
                  {card.title}
                </h3>
                <p class="mt-2 text-gray-600">{card.content}</p>
              </li>
            {/each}
          </ul>
        {/if}
        {#if content.steps}
          <ul class="-mb-8 mt-6">
            {#each content.steps as step, i}
              <li>
                <div class="relative pb-8">
                  {#if i < content.steps.length - 1}
                    <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  {/if}
                  <div class="relative flex space-x-3">
                    <div>
                      <span class="h-8 w-8 text-sm rounded-full bg-gray-200 flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div class="min-w-0 flex-1 pt-1.5">
                      <h3 class="font-semibold text-sm text-gray-700">
                        {step.title}
                      </h3>
                      <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
                      <p class="text-gray-600">{@html step.content}</p>
                    </div>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
        {#if content.items}
          <ul class="-mb-8 mt-6">
            {#each content.items as item}
              <li>
                <div class="min-w-0 pb-8 flex-1 pt-1.5">
                  <h3 class="font-semibold text-sm underline decoration-red-triarc text-gray-700">
                    {item.title}
                  </h3>
                  <p class="text-gray-600">{item.content}</p>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <!-- Svelte Enhanced images do not work with SVGs as of now, might be able to adjust this if support for svgs gets added to the feature -->
      {#if content.image}
        <img
          src={content.image.src}
          class="mt-8 mx-12"
          width={content.image.width ?? 320}
          height={content.image.height}
          alt={content.image.alt}
        />
      {/if}
    </div>

    <hr />
  </div>
{/if}
