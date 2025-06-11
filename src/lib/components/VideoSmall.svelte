<script lang="ts">
  // Not in one component because having an if for the video slowed down the display an insane amount
  import 'plyr/dist/plyr.css'

  import { onMount } from 'svelte'
  import Plyr from 'plyr'
  import type { VideoContent } from '$lib/components/TypeDefinitions'
  interface Props {
    content: VideoContent
  }

  let { content }: Props = $props()

  onMount(async () => {
    new Plyr(`#${content.videoId}-player`, {
      controls: ['play-large', 'play', 'progress', 'mute', 'volume', 'fullscreen'],
    })
  })
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video
  id={`${content.videoId}-player`}
  playsinline
  controls
  style="height: 100%; width: 100%;"
  class="overflow-hidden md:min-w-[400px] lg:min-w-[600px] aspect-video"
  title={content.videoTitle ?? ''}
  data-poster={content.poster}
>
  {#each content.sources as source}
    <source src={source.src} type={source.type} />
  {/each}
</video>
