<script lang="ts">
  import { run } from 'svelte/legacy';

  import { onMount } from 'svelte'

  let { query, children } = $props();

  let mql
  let mqlListener
  let wasMounted = $state(false)
  let matches = $state(false)

  onMount(() => {
    wasMounted = true
    return () => {
      removeActiveListener()
    }
  })


  function addNewListener(query) {
    mql = window.matchMedia(query)
    mqlListener = (v) => (matches = v.matches)
    mql.addListener(mqlListener)
    matches = mql.matches
  }

  function removeActiveListener() {
    if (mql && mqlListener) {
      mql.removeListener(mqlListener)
    }
  }
  run(() => {
    if (wasMounted) {
      removeActiveListener()
      addNewListener(query)
    }
  });
</script>

{@render children?.({ matches, })}
