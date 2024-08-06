<script lang="ts">
  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let isValid: boolean = true;
  let input: HTMLInputElement;

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault();
      input.click();
    }
  }

  function onClick(event: MouseEvent) {
    event.preventDefault();
    input.click();
  }
</script>

<button class="{isValid ? '' : 'border-red-triarc'} flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100"
        on:keydown={keydown}
        on:click={onClick}
        on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:dragenter on:dragleave on:dragover on:drop
        type="button">
  <slot />
</button>
<label class="hidden">
  <input {...$$restProps} bind:value bind:files bind:this={input} on:change on:click type="file" multiple accept=".pdf"/>
</label>
