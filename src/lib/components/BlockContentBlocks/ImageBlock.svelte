<script lang="ts">
  import type { ImageContent } from '$lib/components/TypeDefinitions'

  export let collapsed: boolean | undefined;
  export let image: ImageContent
</script>
<div
  class="overflow-hidden {!collapsed
              ? 'w-full mt-8 mx-12 flex-side flex items-center justify-center'
              : 'w-0'}"
>
  <img
    src={image.src}
    class=""
    width={image.width ?? 320}
    height={image.height}
    alt={image.alt}
  />
</div>

<style lang="postcss">
    .flex-side {
        flex: 1 1 30%;
    }
</style>