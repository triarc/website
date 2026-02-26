<script lang="ts">
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import Button from '$lib/components/Button.svelte'
  import type { TriarcColor, TriarcProjectContent } from '$lib/components/TypeDefinitions'

  export let card: TriarcProjectContent
  export let buttonColor: TriarcColor
</script>

<!-- ToDo Try to do it with just CSS without a duplication. Svelte Store for mobile check has refresh/load stutters/transforms that look ugly -->
<div
  class="project-card grid grid-cols-1 lg:grid-cols-2 bg-white place-items-center items-center rounded-3xl lg:h-[476px] mb-16"
>
  <div class="p-5 md:p-10 w-full hyphens-auto">
    <div class="text-lg w-full max-w-full mb-2">
      {card.content.prefix}
    </div>
    <div class="text-xl md:text-3xl font-bold w-full max-w-full mb-2 whitespace-pre-line">
      {card.content.title}
    </div>
    <div class="lg:hidden project-card-image w-full overflow-hidden">
      <img
        src={card.image.src}
        srcset={card.image.srcset}
        sizes={card.image.sizes}
        loading="lazy"
        alt={card.image.alt}
        class="w-full object-contain"
      />
    </div>
    <div lang="de" class="text-base max-w-prose whitespace-normal hyphens-auto mb-4">
      {card.content.description}
    </div>
    <Button
      reference={card.content.sectionLink}
      buttonSize="Small"
      buttonGraphicStyle="tertiary"
      label="Mehr dazu"
      {buttonColor}
    ></Button>
  </div>
  <div class="hidden lg:block project-card-image w-full overflow-hidden">
    <img
      src={card.image.src}
      srcset={card.image.srcset}
      sizes="auto"
      loading="lazy"
      alt={card.image.alt}
      class="object-contain"
    />
  </div>
</div>

<style lang="postcss">
  @media (min-width: 1024px) {
    :global(.project-card:nth-child(even) > .project-card-image) {
      order: -1;
    }
  }
</style>
