<script lang="ts">
  import EnhancedImage from '$lib/index/EnhancedImage.svelte'
  import Button from '$lib/components/Button.svelte'
  import type { TriarcProjectContent, } from '$lib/components/TypeDefinitions'
  import { isMobile } from '$lib/stores/layoutStore';

  export let card: TriarcProjectContent
</script>

<div class="project-card grid grid-cols-1 lg:grid-cols-2 bg-white place-items-center items-center rounded-3xl lg:h-[476px] mb-16">
  <div class="p-10 w-full hyphens-auto">
      <div class="text-lg w-full max-w-full mb-2">
        {card.content.prefix}
      </div>
    <div class="text-3xl font-bold w-full max-w-full mb-2 whitespace-pre-line">
      {card.content.title}
    </div>
    {#if $isMobile}
      <div class="project-card-image w-full overflow-hidden">
        <EnhancedImage
          alt=''
          image={card.image}
          imgClass="object-contain"
        />
      </div>
    {/if}
    <div lang="de" class="text-xs max-w-prose whitespace-normal hyphens-auto mb-4">
      {card.content.description}
      </div>
    <Button
      reference={card.content.sectionLink}
            buttonSize="Small"
            buttonColorScheme="Tertiary"
            label="Mehr dazu">
    </Button>
  </div>
  {#if !$isMobile}
    <div class="project-card-image w-full overflow-hidden">
      <EnhancedImage
        alt=''
        image={card.image}
        imgClass="object-contain"
      />
    </div>
  {/if}
</div>


<style lang="postcss">
    @media (min-width: 1024px) {
        :global(.project-card:nth-child(even) > .project-card-image) {
            order: -1;
        }
    }
</style>