<script lang="ts">
  import Icon from '$lib/components/Icon.svelte'
  import { isMobile } from '$lib/stores/layoutStore';

  export let iconSrc: string
  export let title: string
  export let iconColor: 'red' | 'green' | 'blue'

  $: iconSize = $isMobile ? 'medium' : 'large';
</script>


<div class="lg:sticky lg:top-0 flex z-10 flex-col lg:flex-row gap-y-2 gap-x-4 lg:items-center bg-transparent py-8">
  <Icon size="{iconSize}" color="{iconColor}" src={iconSrc} />
  <span class="text-5xl text-white font-bold text-balance">{title}</span>
</div>


