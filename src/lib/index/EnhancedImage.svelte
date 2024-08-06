<script lang="ts">
  import type { Picture } from 'imagetools-core'
  export let imgClass: string = ''
  export let alt = 'No alt available'
  export let image: Picture
  export let loading: 'eager' | 'lazy' = 'lazy'
</script>

<enhanced:img src={image} {alt} class={imgClass} {loading} />
