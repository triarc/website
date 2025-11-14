<script lang="ts">
  import { ArrowSolid } from '$lib/content/icons'
  import Icon from '$lib/components/Icon.svelte'

  let clazz = ''
  export { clazz as class }
  export let buttonSize: 'Standard' | 'Small'
  export let buttonMargin: 'Standard' | 'None' = 'Standard'
  export let reference = ''
  export let label = ''
  export let target = ''
  export let buttonColorScheme: 'Primary' | 'Secondary' | 'Tertiary' = 'Primary'
  export let clicked: () => void = () => {}
</script>

<a
  href={reference}
  type="button"
  target={target ?? ''}
  on:click={clicked}
  class="inline-flex justify-center items-center w-full sm:w-auto pointer-events-auto
  {buttonMargin === 'Standard' ? 'my-4' : 'my-0'} px-6 py-3
  {buttonSize === 'Standard' ? 'md:px-6 md:py-3' : 'md:px-3 md:py-1'}
  {buttonColorScheme === 'Primary' ? 'primary' : buttonColorScheme === 'Secondary' ? 'secondary' : 'tertiary'}
  text-base font-medium
  border md:border-0 border-transparent rounded-full
  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2
  disabled:bg-gray-500
  {clazz}"
>
  {label}
  {#if buttonColorScheme === 'Tertiary'}
    <Icon src={ArrowSolid} size="small" />
  {/if}
</a>

<style>
  .primary {
    @apply bg-blue-triarc text-white;
  }
  .secondary {
    @apply bg-white text-black w-auto rounded-full;
  }
  .tertiary {
    @apply bg-red-triarc text-white w-auto gap-x-3;
  }
</style>
