<script lang="ts">
  interface Props {
    buttonSize: 'Standard' | 'Small';
    buttonMargin?: 'Standard' | 'None';
    reference?: string;
    label?: string;
    target?: string;
    clicked?: () => void;
  }

  let {
    buttonSize,
    buttonMargin = 'Standard',
    reference = '',
    label = '',
    target = '',
    clicked = () => {}
  }: Props = $props();
</script>

<a
  href={reference}
  type="button"
  target={target ?? ''}
  onclick={clicked}
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
