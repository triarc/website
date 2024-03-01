<script lang="ts">
  import Picture from '$lib/index/Picture.svelte'
  import type { FeaturedContent } from '$lib/components/FeaturedContent'
  import ConsultationCustomers from '$lib/index/ConsultationCustomers.svelte'
  import Testimonials from '$lib/index/Testimonials.svelte'
  import Container from '$lib/components/Container.svelte'

  const highlightColors = { green: 'bg-green-triarc', blue: 'bg-blue-triarc' }
  export let content: FeaturedContent
</script>

{#if content}
  <div class="bg-white">
    <div class="flex flex-col lg:flex-row">
      <div
        class="{content.quote.highlight
          ? `${highlightColors[content.quote.highlight]} bg-opacity-10`
          : 'group-even:bg-gray-100'} flex-grow pb-8 lg:pb-0 lg:h-screen"
      >
        <div class="">
          <div class="flex max-w-full lg:max-w-sm min-w-sm flex-col items-center px-8 gap-x-8 lg:ml-auto">
            <div class="-mt-8 w-full ">
              <div class="relative aspect-[3/4] h-full flex justify-center items-center">
                <Picture
                  height="280"
                  width="373"
                  alt={content.quote.person}
                  images={content.quote.images}
                  cssClass={content.quote.imageCss
                    ? content.quote.imageCss
                    : 'aspect-[3/4] absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl'}
                />
              </div>
            </div>
            <div class="w-full max-w-full lg:max-w-sm lg:pl-8 ">
              <figure class="relative isolate pt-12">
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
                  class="text-xl font-semibold {content.quote.highlight ? 'text-gray-900' : 'text-gray-600'} leading-9"
                >
                  <p>{@html content.quote.content}</p>
                </blockquote>
                <figcaption class="mt-8 text-base {content.quote.highlight ? 'text-gray-900' : 'text-gray-600'}">
                  <div class="font-semibold">{content.quote.person}</div>
                  <div class="mt-1">{@html content.quote.personTitle}</div>
                  <div class="flex flex-row gap-x-4 mt-4 {content.quote.highlight ? 'fill-gray-900' : 'fill-gray-600'}">
                    {#if content.quote.linkedin}
                      <a href={content.quote.linkedin} target="_blank" rel="noreferrer" aria-label="Linkedin">
                        <svg
                          class="h-5  {content.quote.highlight ? 'fill-gray-900' : 'fill-gray-600'}"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          /></svg
                        >
                      </a>
                    {/if}
                    {#if content.quote.email}
                      <a href="mailto:{content.quote.email}" aria-label="Email">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path
                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                          />
                        </svg>
                      </a>
                    {/if}
                  </div>
                  <div class="flex justify-center my-8">
                    <a class="rounded bg-blue-triarc text-white px-6 py-2 inline-block" href="#contactform"
                      >{content.quote.contactButton}</a
                    >
                  </div>
                </figcaption>
              </figure>
              <div class="flex flex-col gap-y-8 my-8">
                {#each content.quote.customLogos as customLogo}
                  <img src={customLogo} alt="{customLogo} image" />
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:h-screen lg:overflow-auto lg:overscroll-auto flex-grow group ">
        {#each content.categories as category}
          <div class="bg-gray-100 even:bg-white ">
            <div class="px-8 py-8 max-w-4xl lg:pr-16 lg:mr-auto">
              {#if category.title}
                <h2 class="mt-3 text-2xl font-bold text-gray-600">
                  {@html category.title}
                </h2>
              {/if}
              {#if category.content}
                <p class="mt-2 text-base leading-6 text-gray-600">
                  {@html category.content}
                </p>
              {/if}
              {#if category.quote}
                <blockquote class="bg-transparent border-l-4 border-l-gray-500 mx-8 p-4 rounded-xl my-6 text-gray-500">
                  {@html category.quote}
                </blockquote>
              {/if}
              {#if category.steps}
                <ul class="-mb-8 mt-6">
                  {#each category.steps as step, i}
                    <li>
                      <div class="relative pb-8">
                        {#if i < category.steps.length - 1}
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
                            <p class="text-gray-600">{@html step.content}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  {/each}
                </ul>
              {/if}
              {#if category.posts && category.posts.length === 3}
                <div class="flex flex-col lg:flex-row lg:flex-nowrap lg:overflow-hidden gap-x-8 gap-y-16 mt-16 lg:mt-8">
                  {#each category.posts as post}
                    <div class="max-w-sm flex flex-row">
                      <a
                        href="/stories/{post.slug}"
                        class="break-inside-avoid flex flex-col rounded-md hover:opacity-80"
                      >
                        <div class="relative rounded-xl rounded-b-none h-60 overflow-hidden shadow">
                          <img
                            src={post.image.src}
                            srcset={post.image.srcset}
                            sizes={post.image.sizes}
                            loading="lazy"
                            alt={post.image.alt}
                            data-width={post.image.width}
                            data-height={post.image.height}
                            class="object-cover rounded-xl rounded-b-none overflow-hidden block h-full max-w-auto w-full object-left-top"
                          />
                          <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
                        </div>
                        <div
                          class="px-4 py-3 bg-blue-triarc bg-opacity-10 flex flex-col justify-between rounded-t-none h-60 rounded-xl shadow"
                        >
                          <h3 class="font-bold text-xl line-clamp-3 ">{post.title}</h3>
                          <p class="line-clamp-4 mb-1 text-gray-500 ">{post.content}</p>
                        </div>
                      </a>
                    </div>
                  {/each}
                </div>
              {/if}
              {#if category.posts && category.posts.length === 2}
                <div class="flex flex-col lg:flex-nowrap lg:overflow-hidden gap-x-8 gap-y-8 mt-16 lg:mt-8">
                  {#each category.posts as post, index}
                    <div class="flex flex-row mt-2">
                      <a
                        href="/stories/{post.slug}"
                        class="break-inside-avoid flex flex-col lg:flex-row {index % 2 === 1
                          ? 'lg:flex-row-reverse'
                          : ''} rounded-md hover:opacity-80"
                      >
                        <div
                          class="relative rounded-xl rounded-b-none {index % 2 === 1
                            ? 'lg:rounded-l-none'
                            : 'lg:rounded-r-none'} h-60 lg:w-[33%] overflow-hidden shadow"
                        >
                          <img
                            src={post.image.src}
                            srcset={post.image.srcset}
                            sizes={post.image.sizes}
                            loading="lazy"
                            alt={post.image.alt}
                            data-width={post.image.width}
                            data-height={post.image.height}
                            class="object-cover rounded-xl {index % 2 === 1
                              ? 'rounded-l-none'
                              : 'rounded-r-none'} overflow-hidden block h-60 max-w-auto w-full object-left-top"
                          />
                          <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
                        </div>
                        <div
                          class="px-4 py-3 bg-blue-triarc bg-opacity-10 flex flex-col justify-between {index % 2 === 1
                            ? 'lg:rounded-r-none'
                            : 'lg:rounded-l-none'} h-60 rounded-xl lg:rounded-xl rounded-t-none shadow lg:max-w-[66%]"
                        >
                          <h3 class="font-bold text-xl line-clamp-3 ">{post.title}</h3>
                          <p class="line-clamp-4 mb-1 text-gray-500 ">{post.content}</p>
                        </div>
                      </a>
                    </div>
                  {/each}
                </div>
              {/if}
              {#if category.posts && category.posts.length === 1}
                <div class="flex flex-col lg:flex-nowrap lg:overflow-hidden gap-x-8 gap-y-16 mt-16 lg:mt-8 ">
                  {#each category.posts as post}
                    <div class="flex flex-row mt-2">
                      <a
                        href="/stories/{post.slug}"
                        class="break-inside-avoid flex flex-col lg:flex-row rounded-md hover:opacity-80"
                      >
                        <div
                          class="relative rounded-xl rounded-b-none lg:rounded-r-none lg:rounded-xl h-60 lg:w-[33%] overflow-hidden shadow"
                        >
                          <img
                            src={post.image.src}
                            srcset={post.image.srcset}
                            sizes={post.image.sizes}
                            loading="lazy"
                            alt={post.image.alt}
                            data-width={post.image.width}
                            data-height={post.image.height}
                            class="object-cover rounded-xl lg:rounded-r-none lg:rounded-xl rounded-b-none overflow-hidden block h-60 max-w-auto w-full object-left-top"
                          />
                          <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
                        </div>
                        <div
                          class="px-4 py-3 bg-blue-triarc bg-opacity-10 flex flex-col justify-between rounded-xl rounded-t-none lg:rounded-l-none h-60 lg:rounded-xl shadow lg:max-w-[66%]"
                        >
                          <h3 class="font-bold text-xl line-clamp-3 ">{post.title}</h3>
                          <p class="line-clamp-4 mb-1 text-gray-500 ">{post.content}</p>
                        </div>
                      </a>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/each}
        {#each content.testimonials as testimonial, i}
          <Testimonials {testimonial} {i} />
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
</style>
