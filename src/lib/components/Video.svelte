<script lang="ts">
  import 'plyr/dist/plyr.css'

  export interface VideoContent {
    poster: string
    sources: { src: string; type: string }[]
  }

  export let content: VideoContent

  import { onMount } from 'svelte'
  import Plyr from 'plyr'

  onMount(async () => {
    new Plyr('#player', {
      controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen'],
    })
  })
</script>

<video id="player" playsinline controls style="height: 100%; width: 100%;" data-poster={content.poster}>
  {#each content.sources as source}
    <source src={source.src} type={source.type} />
  {/each}
</video>
