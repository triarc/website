<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  let gradientColor: 'green-blue' | 'blue-red' | 'red-green' = 'green-blue';
</script>

<div class={`flex gradient-${gradientColor}`}>
  <span class="text-2xl font-bold">Software passend für Sie.</span>
  <span class="text-xs">So spezifisch Ihre Bedürfnisse und Anforderungen sind, sollten auch die digitalen Lösungen sein.
    Standardisierte Software erfüllt selten anspruchsvolle Kundenbedürfnisse und spezialisierte Leistungen.
  </span>
  <Button buttonSize="Standard">Test</Button>
</div>

<style>
  .gradient-green-blue {
      @apply bg-gradient-to-tr from-green-triarc-blended to-blue-triarc-blended
  }

  .gradient-blue-red {
      @apply bg-gradient-to-tr from-blue-triarc-blended to-green-triarc-blended
  }

  .gradient-red-green {
      @apply bg-gradient-to-tr from-red-triarc-blended to-blue-triarc-blended
  }
</style>