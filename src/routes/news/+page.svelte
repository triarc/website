<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import type { BlockContent } from '../../lib/components/Block.svelte'

  export interface GhostPost {
    id: string;
    title: string;
    html: string;
    feature_image: string
    feature_image_alt: string | null;
    excerpt: string
  }

  let posts: GhostPost[] = [];
  let contents: BlockContent[] = []

  fetch('https://blog.triarc-labs.com/ghost/api/content/posts?key=93ed4aea5970c22ed269d4ec35').then(async response => {
    const data = await response.json()
    console.log(data)
    contents = data.posts.map(post => ({
      title: post.title,
      content: post.excerpt,
      image: {src: post.feature_image, alt: post.feature_image_alt ?? 'post feature image'},
      link: {href: post.url, text: 'Weiter lesen', target: '_blank'}
    }));
  })
</script>

<svelte:head>
  <title>Aktuelles - triarc-labs</title>
</svelte:head>

<div class="bg-white min-h-screen">
  {#each contents as content}
    <Block bind:content />
  {/each}
</div>
