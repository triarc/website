<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import type { EmblaCarouselType } from 'embla-carousel-svelte'
  import type { GhostPost } from '../../routes/stories/utils'

  let emblaCarousel: EmblaCarouselType
  const options = { loop: true }
  const onInit = (event) => {
    emblaCarousel = event.detail
  }
  export let posts: GhostPost[]
</script>

<div class="embla">
  <div class="embla__viewport" use:emblaCarouselSvelte={{ options }} on:emblaInit={onInit}>
    <div class="embla__container">
      {#each posts as post}
        <div class="embla__slide">
          <div class="embla__slide__inner">
            <div class="max-w-xs md:max-w-md">
              <a href="/stories/{post.slug}" class=" break-inside-avoid shadow flex flex-col group rounded-md">
                <div class="relative rounded-xl rounded-b-none h-60 shadow overflow-hidden">
                  <img
                    src={post.image.src}
                    srcset={post.image.srcset}
                    sizes={post.image.sizes}
                    loading="lazy"
                    alt={post.image.alt}
                    data-width={post.image.width}
                    data-height={post.image.height}
                    class="object-cover rounded-xl rounded-b-none overflow-hidden block h-auto max-w-auto w-full object-center group-hover:opacity-75"
                  />
                  <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
                </div>
                <div
                  class="px-4 py-3 bg-blue-triarc bg-opacity-10 flex flex-col justify-between rounded-t-none h-60 rounded-xl"
                >
                  <h3 class="font-bold text-xl">{post.title}</h3>
                  <p class="line-clamp-3 mb-1 text-gray-500">{post.content}</p>
                  <p class="text-sm text-gray-500">{post.footer}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <button class="embla__button embla__button--prev" on:click={() => emblaCarousel.scrollPrev()}>
    <svg class="embla__button__svg__prev" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512"
      ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs
        ><style>
          .fa-secondary {
            opacity: 0.4;
          }
        </style></defs
      ><path
        class="fa-primary"
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      /><path
        class="fa-secondary"
        d="M233.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      /></svg
    >
  </button>
  <button class="embla__button embla__button--next" on:click={() => emblaCarousel.scrollNext()}>
    <svg class="embla__button__svg__next" xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512"
      ><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs
        ><style>
          .fa-secondary {
            opacity: 0.4;
          }
        </style></defs
      ><path
        class="fa-primary"
        d="M470.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 265.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
      /><path
        class="fa-secondary"
        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
      /></svg
    >
  </button>
</div>

<style>
  .embla {
    position: relative;
    max-width: 80%;
    margin-left: 0;
    margin-bottom: 15px;
  }
  @media (min-width: 400px) {
    .embla {
      position: relative;
      max-width: 80%;
      margin-left: 0;
      margin-bottom: 0;
    }
  }
  /* Desktop */
  @media (min-width: 992px) {
    .embla {
      position: relative;
      max-width: 30%;
      margin-left: 50px;
      margin-bottom: 0;
    }
  }
  .embla__viewport {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    align-content: center;
    align-items: center;
    will-change: transform;
  }
  .embla__slide {
    min-width: 0;
    max-width: 100%;
    flex: 0 0 100%;
    max-height: 80vh;
    position: relative;
    /*margin-left: 2.5vh;*/
    /*margin-right: 2.5vh;*/
  }
  /* Phone sideways or Tablet */
  @media (min-width: 400px) {
    .embla__slide {
      min-width: 0;
      max-width: 100%;
      flex: 0 0 100%;
      max-height: 80vh;
      margin-left: 2.5vh;
      margin-right: 2.5vh;
      position: relative;
    }
  }
  /* Desktop */
  @media (min-width: 992px) {
    .embla__slide {
      min-width: 0;
      max-width: 100%;
      flex: 0 0 100%;
      max-height: 80vh;
      margin-left: 2.5vh;
      margin-right: 2.5vh;
      position: relative;
    }
  }
  .embla__slide__inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*.embla__slide__img {*/
  /*    max-height: 80vh;*/
  /*}*/
  .embla__button {
    background-color: transparent;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 5rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0;
  }
  .embla__button__svg__next {
    fill: #009534;
    opacity: 0.5;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    right: 0;
  }

  .embla__button__svg__prev {
    fill: #009534;
    opacity: 0.5;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    left: 0;
  }

  .embla__button--prev {
    left: -1.5rem;
  }
  /* Desktop */
  @media (min-width: 992px) {
    .embla__button--prev {
      left: -2rem;
    }
  }

  .embla__button--next {
    right: -1.5rem;
  }

  /* Desktop */
  @media (min-width: 992px) {
    .embla__button--next {
      right: -2rem;
    }
  }
  /*.embla__dots {*/
  /*    position: absolute;*/
  /*    margin-top: 1rem;*/
  /*    display: flex;*/
  /*    list-style: none;*/
  /*    padding-left: 0;*/
  /*    justify-content: center;*/
  /*    left: 0;*/
  /*    right: 0;*/
  /*    top: 100%;*/
  /*}*/
</style>
