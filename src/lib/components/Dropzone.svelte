<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  interface Props {
    value?: string;
    files?: FileList | undefined;
    isValid?: boolean;
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let {
    value = $bindable(''),
    files = $bindable(undefined),
    isValid = true,
    children,
    ...rest
  }: Props = $props();
  let input: HTMLInputElement = $state()

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault()
      input.click()
    }
  }

  function onClick(event: MouseEvent) {
    event.preventDefault()
    input.click()
  }
</script>

<button
  class="{isValid
    ? ''
    : 'border-red-triarc'} drop-area flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
  onkeydown={keydown}
  onclick={onClick}
  onfocus={bubble('focus')}
  onblur={bubble('blur')}
  onmouseenter={bubble('mouseenter')}
  onmouseleave={bubble('mouseleave')}
  onmouseover={bubble('mouseover')}
  ondragenter={bubble('dragenter')}
  ondragleave={bubble('dragleave')}
  ondragover={bubble('dragover')}
  ondrop={bubble('drop')}
  type="button"
>
  {@render children?.()}
</button>
<label class="hidden">
  <input
    {...rest}
    bind:value
    bind:files
    bind:this={input}
    onchange={bubble('change')}
    onclick={bubble('click')}
    type="file"
    multiple
    accept=".pdf"
  />
</label>
