<script lang="ts">
  import type { Step } from '$lib/components/TypeDefinitions'
  export let steps: Step[]
</script>

<ul class="-mb-8 mt-6">
  {#each steps as step, i}
    <li>
      <div class="relative pb-8">
        {#if i < steps.length - 1}
          <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
        {/if}
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 text-sm rounded-full bg-gray-200 flex items-center justify-center">
              {i + 1}
            </span>
          </div>
          <div class="min-w-0 flex-1 pt-1.5">
            <h3 class="font-semibold text-sm text-gray-700">
              {step.title}
            </h3>
            <!-- eslint-disable-next-line svelte/no-at-html-tags -- HTML-Content is static -->
            <p class="text-gray-600">{@html step.content}</p>
          </div>
        </div>
      </div>
    </li>
  {/each}
</ul>
