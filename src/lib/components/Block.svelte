<script lang="ts">
  export interface BlockContent {
    title: string
    content: string
    link?: { href: string; text: string; target?: string }
    image?: { src: string; alt: string }
    bulletPoints?: string[]
    cards?: { title: string; content: string }
    steps?: { title: string; content: string }
    items?: { title: string; content: string }
  }

  export let content: BlockContent
</script>

<div class="md:min-h-0 even:bg-gray-100 group">
  <div
    class="flex items-center relative px-8 md:px-16 py-32 max-w-screen-lg mx-auto flex-col group-odd:md:flex-row group-even:md:flex-row-reverse"
  >
    <div class="">
      <p class="mt-3 text-2xl font-bold text-gray-600">
        {@html content.title}
      </p>
      {#if content.content}
        <p class="mt-2 text-base leading-6 text-gray-600">
          {@html content.content}
        </p>
      {/if}
      {#if content.link}
        <a
          href={content.link.href}
          class="bg-red-triarc text-white px-3 py-1 inline-block mt-2"
          target={content.link.target ?? ''}
        >
          {content.link.text}
        </a>
      {/if}
      {#if content.bulletPoints}
        <ul class="mt-8">
          {#each content.bulletPoints as bulletPoint}
            <li class="flex my-1">
              <img src="icons/checkmark.svg" class="flex-shrink-0 h-6 w-6" alt="checkmark" />
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
                    <p class="text-gray-600">{step.content}</p>
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

    {#if content.image}
      <img src={content.image.src} class="w-80 mt-8 mx-12" alt={content.image.alt} />
    {/if}
  </div>
</div>
