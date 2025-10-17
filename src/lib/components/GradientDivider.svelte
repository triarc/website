<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Container from '$lib/components/Container.svelte'
  import type { TriarcGradientDivider } from '$lib/components/TypeDefinitions'
  export let gradientContent: TriarcGradientDivider
</script>

<div
  class={`flex justify-center text-center text-white py-20 min-h-80 md:h-80 lg:mb-48 w-full gradient-${gradientContent.color}`}
>
  <Container>
    <div>
      <div class="text-2xl font-bold pb-4">{gradientContent.title}</div>
      <div class="text-xs max-w-prose pb-2">{gradientContent.content}</div>
      <Button
        buttonColorScheme="Secondary"
        label={gradientContent.buttonLabel}
        reference={gradientContent.linksTo}
        buttonSize="Small">Test</Button
      >
    </div>
  </Container>
</div>

<style>
  .gradient-green-blue {
    @apply bg-gradient-to-tr from-green-triarc-blended  to-blue-triarc-blended;
  }

  .gradient-blue-red {
    @apply bg-gradient-to-tr from-blue-triarc-blended to-red-triarc-blended;
  }

  .gradient-red-green {
    @apply bg-gradient-to-tr from-red-triarc-blended to-green-triarc-blended;
  }
</style>
