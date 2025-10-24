<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'

  export let iconSrc: string
  export let title: string
  export let iconColor: 'red' | 'green' | 'blue'
</script>


<div class="mt-12 lg:mt-32 lg:sticky lg:top-0 flex z-10 flex-col lg:flex-row gap-y-2 gap-x-4 lg:items-center bg-transparent py-8">
  <Icon class="lg:hidden inline" size="medium" color="{iconColor}" src={iconSrc} />
  <Icon class="hidden lg:inline" size="large" color="{iconColor}" src={iconSrc} />
  <span class="text-5xl text-white font-bold text-balance">{title}</span>
</div>


