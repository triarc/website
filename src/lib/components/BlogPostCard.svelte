<script lang="ts">
  import type { MappedPost } from '../../routes/consulting/+page'
  export let reversed: boolean = false
  export let shape: 'card' | 'rectangle' = 'card'
  export let post: MappedPost
</script>

{#if shape === 'card'}
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
        class="object-cover rounded-xl rounded-b-none overflow-hidden block h-full max-w-auto w-full object-left-top"
      />
      <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
    </div>
    <div
      class="px-4 py-3 bg-blue-triarc bg-opacity-10 flex flex-col justify-between rounded-t-none h-60 rounded-xl shadow"
    >
      <h3 class="font-bold text-xl line-clamp-3">{post.title}</h3>
      <p class="line-clamp-4 mb-1 text-gray-500">{post.content}</p>
    </div>
  </a>
{:else if shape === 'rectangle'}
  <a
    href="/stories/{post.slug}"
    class="break-inside-avoid flex flex-col lg:flex-row {reversed
                            ? 'lg:flex-row-reverse'
                            : ''} rounded-md hover:opacity-80"
  >
    <div
      class="relative rounded-xl rounded-b-none {reversed
                              ? 'lg:rounded-l-none'
                              : 'lg:rounded-r-none'} h-60 lg:w-[33%] overflow-hidden shadow"
    >
      <img
        src={post.image.src}
        srcset={post.image.srcset}
        sizes={post.image.sizes}
        loading="lazy"
        alt={post.image.alt}
        class="object-cover rounded-xl {reversed
                                ? 'rounded-l-none'
                                : 'rounded-r-none'} overflow-hidden block h-60 max-w-auto w-full object-left-top"
      />
      <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full rounded-md" />
    </div>
    <div
      class="px-4 py-3 bg-blue-triarc bg-opacity-10 flex flex-col justify-between {reversed
                              ? 'lg:rounded-r-none'
                              : 'lg:rounded-l-none'} h-60 rounded-xl lg:rounded-xl rounded-t-none shadow lg:max-w-[66%]"
    >
      <h3 class="font-bold text-xl line-clamp-3">{post.title}</h3>
      <p class="line-clamp-4 mb-1 text-gray-500">{post.content}</p>
    </div>
  </a>
{/if}