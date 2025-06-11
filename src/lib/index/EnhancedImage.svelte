<script lang="ts">
  import type { Picture } from 'imagetools-core'
  interface Props {
    imgClass?: string
    alt?: string
    image: Picture
    loading?: 'eager' | 'lazy'
  }

  let { imgClass = '', alt = 'No alt available', image, loading = 'lazy' }: Props = $props()
</script>

<enhanced:img src={image} {alt} class={imgClass} {loading} />
