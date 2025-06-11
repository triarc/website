<script lang="ts">
  interface Props {
    class?: string
    size?: 'wide' | 'small'
    children?: import('svelte').Snippet
  }

  let { class: clazz = '', size = 'wide', children }: Props = $props()
</script>

<div
  class="border-none flex relative px-8 lg:px-16 {size === 'wide'
    ? 'max-w-screen-xl'
    : 'max-w-4xl'} mx-auto flex-col {clazz}"
>
  {@render children?.()}
</div>
