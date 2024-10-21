<script lang="ts">
  import type { BlockContent } from '$lib/components/TypeDefinitions'
  import Container from '$lib/components/Container.svelte'
  import VideoBlock from '$lib/components/BlockContentBlocks/VideoBlock.svelte'
  import ImageBlock from '$lib/components/BlockContentBlocks/ImageBlock.svelte'
  import ItemsBlock from '$lib/components/BlockContentBlocks/ItemsBlock.svelte'
  import StepsBlock from '$lib/components/BlockContentBlocks/StepsBlock.svelte'
  import CardsBlock from '$lib/components/BlockContentBlocks/CardsBlock.svelte'
  import BulletPointsBlock from '$lib/components/BlockContentBlocks/BulletPointsBlock.svelte'
  import LinkBlock from '$lib/components/BlockContentBlocks/LinkBlock.svelte'
  import FooterBlock from '$lib/components/BlockContentBlocks/FooterBlock.svelte'
  import TextContentBlock from '$lib/components/BlockContentBlocks/TextContentBlock.svelte'
  import JobDetailsBlock from '$lib/components/BlockContentBlocks/JobDetailsBlock.svelte'
  import TitleBlock from '$lib/components/BlockContentBlocks/TitleBlock.svelte'
  import CollapsibleCaret from '$lib/components/BlockContentBlocks/CollapsibleCaret.svelte'
  import QuoteBlock from '$lib/components/BlockContentBlocks/QuoteBlock.svelte'
  import InlineQuoteBlock from '$lib/components/BlockContentBlocks/InlineQuoteBlock.svelte'
  import BlogPostBlock from '$lib/components/BlockContentBlocks/BlogPostBlock.svelte'
  import Testimonials from '$lib/index/Testimonials.svelte'
  export let content: BlockContent
  export let inline: boolean = false
</script>

{#if content.quote}
  <QuoteBlock bind:quote={content.quote} />
{/if}

{#if content.title}
  <div class="alternating md:min-h-0 group">
    <Container
      size="{inline ? 'small' : 'wide' }"
      class={inline ? 'ml-0' : '' }
    >
      <div
        class="
          {!content.collapsed
            ? 'pb-16 pt-8 md:py-32 items-center'
            : 'py-6'} flex-col
          {content.collapsible
            ? 'md:flex-row'
            : 'group-odd:md:flex-row group-even:md:flex-row-reverse'}
          {!content.collapsed && inline ? 'md:py-8': ''} flex relative transition-all"
      >
        <!--{#if content.collapsible}-->
        <!--svelte-ignore a11y-click-events-have-key-events -->
        <div
          role="{content.collapsible ? 'button': ''}"
          class="flex-main flex flex-row"
          tabindex="-1"
          aria-label="Öffne {content.title}"
          on:click={content.collapsible ? () => (content.collapsed = !content.collapsed) : null}
        >
          {#if content.collapsible}
            <CollapsibleCaret bind:collapsed={content.collapsed} />
          {/if}
          <div>
            {#if !content.jobDetails}
              <TitleBlock bind:title={content.title} />
            {/if}
            {#if content.jobDetails}
              <JobDetailsBlock bind:jobDetails={content.jobDetails} bind:title={content.title} />
            {/if}
            <div class="overflow-hidden {!content.collapsed ? 'max-h-infiniti' : 'max-h-0'}">
              {#if content.content}
                <TextContentBlock bind:content={content.content} />
              {/if}
              {#if content.blockquote}
                <InlineQuoteBlock bind:quote={content.blockquote} />
              {/if}

              {#if content.footer}
                <FooterBlock bind:footer={content.footer}></FooterBlock>
              {/if}

              {#if content.link}
                <LinkBlock bind:link={content.link} />
              {/if}

              {#if content.posts }
                <BlogPostBlock posts={content.posts} />
              {/if}

              {#if content.bulletPoints}
                <BulletPointsBlock bind:bulletPoints={content.bulletPoints} />
              {/if}

              {#if content.cards}
                <CardsBlock bind:cards={content.cards} />
              {/if}

              {#if content.steps}
                <StepsBlock bind:steps={content.steps} />
              {/if}

              {#if content.items}
                <ItemsBlock bind:items={content.items} />
              {/if}
            </div>
          </div>
        </div>

        {#if content.testimonial}
          <Testimonials bind:testimonial={content.testimonial} />
        {/if}
        <!-- Svelte Enhanced images do not work with SVGs as of now, might be able to adjust this if support for svgs gets added to the feature -->
        {#if content.image}
          <ImageBlock bind:collapsed={content.collapsed} bind:image={content.image} />
        {/if}
        {#if content.video && content.video.embedded}
          <div class="h-full w-full mt-8 md:group-even:mr-12 md:group-odd:ml-12">
            <VideoBlock bind:content={content.video} />
          </div>
        {/if}
      </div>

      <div class="overflow-hidden {!content.collapsed ? 'max-h-infiniti' : 'max-h-0'}">
        <slot />
      </div>
    </Container>
  </div>
{/if}

{#if content.video && !content.video.embedded}
  <div class="bg-blue-triarc py-8">
    <Container>
      <VideoBlock bind:content={content.video} />
    </Container>
  </div>
{/if}

<style lang="postcss">
  .flex-main {
    flex: 1 1 70%;
  }
</style>
