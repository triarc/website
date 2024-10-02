<script lang="ts">
  import type { LinkContent } from '$lib/components/TypeDefinitions'
  import Button from '$lib/components/Button.svelte'
  export let link: LinkContent
</script>

<Button
  buttonSize="Small"
  reference={link.href}
  label={link.text}
  target={link.target ?? ''}
/>