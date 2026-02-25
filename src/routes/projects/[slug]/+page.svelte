<script lang="ts">
  import type { PageData } from './$types'
  import TriarcProject from '$lib/index/TriarcProject.svelte'
  export let data: PageData
</script>

<TriarcProject project={data.project}></TriarcProject>
