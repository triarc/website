<script lang="ts">
  export let buttonSize: 'Standard' | 'Small'
  export let buttonMargin: 'Standard' | 'None' = 'Standard'
  export let reference = ''
  export let label = ''
  export let target = ''
  export let clicked: () => void = () => {}
</script>

<a
  href={reference}
  type="button"
  target={target ?? ''}
  on:click={clicked}
  class="inline-flex md:inline-block justify-center items-center w-full sm:w-auto
  {buttonMargin === 'Standard' ? 'my-4' : 'my-0'} px-6 py-3
  {buttonSize === 'Standard' ? 'md:px-6 md:py-3' : 'md:px-3 md:py-1'}
  bg-blue-triarc text-white text-base font-medium
  border md:border-0 border-transparent rounded-md md:rounded
  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-triarc focus:ring-offset-2
  disabled:bg-gray-500"
>
  {label}
</a>
