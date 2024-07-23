<script lang="ts">
  import type { Picture } from 'imagetools-core'
  export let imgClass: string = '';
  export let alt = 'No alt available';
  export let image: Picture
</script>

<enhanced:img
    src={image}
    alt={alt}
    class={imgClass}
/>
