<script lang="ts">
  import type { JobDetails } from '$lib/components/TypeDefinitions'
  export let title: string
  export let jobDetails: JobDetails
</script>

<div class="flex flex-col sm:flex-row">
  <h2 class="text-2xl font-bold text-gray-600">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
    {@html title}
  </h2>
  <h3 class="sm:hidden mt-1 text-lg font-bold text-gray-600 w-full">
    (m/w/d) - {jobDetails.jobPensum}
  </h3>
  {#if jobDetails.currentlyHiring}
                  <span
                    class="font-bold self-start sm:self-end sm:mb-0.5 flex-grow-0 my-3 sm:mt-0 block sm:inline sm:mx-3 text-base bg-blue-triarc/20 text-blue-triarc px-3 py-1 rounded-md"
                  >Offene Stellen</span
                  >
  {:else if !jobDetails.currentlyHiring}
                  <span
                    class="font-bold self-start sm:self-end sm:mb-0.5 flex-grow-0 my-3 sm:mt-0 sm:inline sm:mx-3 text-base bg-gray-200 text-gray-800 px-3 py-1 rounded-md"
                  >Zurzeit keine offenen Stellen</span
                  >
  {/if}
</div>
<h3 class="hidden sm:inline-block text-lg font-bold text-gray-600">
  (m/w/d) - {jobDetails.jobPensum}
</h3>