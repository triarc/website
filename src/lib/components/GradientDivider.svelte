<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Container from '$lib/components/Container.svelte'
  import type { TriarcGradientDividerContent } from '$lib/components/TypeDefinitions'
  export let gradientColor: 'green-blue' | 'blue-red' | 'red-green' = 'green-blue';
  export let gradientContent: TriarcGradientDividerContent
</script>

<div class={`flex justify-center text-center text-white py-20 min-h-80 h-80  w-full gradient-${gradientColor}`}>
  <Container>
    <div>
      <div class="text-2xl font-bold pb-4">{gradientContent.title}</div>
      <div class="text-xs max-w-prose pb-2">{gradientContent.content}</div>
      <Button
        buttonColorScheme="Secondary"
        label={gradientContent.buttonLabel}
        reference={gradientContent.linksTo}
        buttonSize="Small">Test</Button>
    </div>
  </Container>
</div>

<style>
  .gradient-green-blue {
      @apply bg-gradient-to-tr from-green-triarc-blended  to-blue-triarc-blended
  }

  .gradient-blue-red {
      @apply bg-gradient-to-tr from-blue-triarc-blended to-red-triarc-blended
  }

  .gradient-red-green {
      @apply bg-gradient-to-tr from-red-triarc-blended to-green-triarc-blended
  }
</style>
