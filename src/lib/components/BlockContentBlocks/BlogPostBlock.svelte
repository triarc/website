<script lang="ts">
  import type { MappedPost } from '../../../routes/consulting/+page'
  import BlogPostCard from '$lib/components/BlogPostCard.svelte'

  export let posts: MappedPost[]
  function hasMaximumPosts(): boolean {
    return posts.length === 3
  }
</script>

<div
  class="flex flex-col lg:overflow-hidden gap-x-8 {hasMaximumPosts()
    ? 'gap-y-16 lg:flex-row'
    : 'lg:flex-nowrap gap-y-8'} mt-16 lg:mt-8"
>
  {#each posts as post, index}
    <div class=" {hasMaximumPosts() ? 'max-w-sm flex flex-row' : 'flex flex-row mt-2'}">
      <BlogPostCard {post} shape={hasMaximumPosts() ? 'card' : 'rectangle'} reversed={index % 2 === 1} />
    </div>
  {/each}
</div>
