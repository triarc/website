<script>
  import { fly } from 'svelte/transition';
  export let pathname = '';
</script>

{#key pathname}
  <slot />
<!--  <div in:fly={{ x: -10, duration: 200, delay: 60 }} out:fly={{ x: 5, duration: 200 }}>-->

<!--  </div>-->
{/key}
