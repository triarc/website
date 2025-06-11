<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="bg-gray-900 py-4 px-4 xm:px-6 lg:px-8 fixed top-0 z-30 w-full">
  <div class="max-w-4xl lg:max-w-7xl mx-auto mx-4">
    <a href="/" class="flex items-center">
      <div class="flex flex-col ml-4 flex-grow text-white">
        <h1 class="text-xl">
          {@render children?.()}
        </h1>
        <p class="text-sm">Hautpseite</p>
      </div>
      <img src="/icons/triarc-logo.svg" class="h-10" alt="triarc logo" />
    </a>
  </div>
</div>
