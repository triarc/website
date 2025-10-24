<script lang="ts">
  import { Arrow, EnvelopeWhite } from '$lib/content/icons'
  import Icon from '$lib/components/Icon.svelte'
</script>

<a
  href="mailto:its-working@triarc-labs.com"
  type="button"
  class="fixed text-white flex flex-row gap-x-1 bg-black top-[5px] md:top-24 right-6 md:right-12 justify-center items-center py-2 px-2 md:px-4 text-base font-medium border md:border-0 border-transparent rounded-full z-50
   md:rounded-3xl shadow-sm "
>
  <span class="hidden md:inline">Kontaktieren sie uns!</span>
  <Icon src={EnvelopeWhite} size="medium" class="block md:hidden" />
  <Icon src={Arrow} size="small" class="hidden md:block" />
</a>

<style>
</style>