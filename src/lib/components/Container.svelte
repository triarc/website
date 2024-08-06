<script lang="ts">
  let clazz = ''
  export { clazz as class }

  let size: 'wide' | 'small' = 'wide'
  export { size }
</script>

<div class="border-none flex relative px-8 lg:px-16 {size === 'wide' ? 'max-w-screen-xl' : 'max-w-4xl'} mx-auto flex-col {clazz}">
  <slot />
</div>
