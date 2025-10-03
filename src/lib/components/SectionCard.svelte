<script lang="ts">
  import type { TriarcSectionText } from '$lib/components/TypeDefinitions'

  export let color: "green" | "blue" | "red"
  export let content: TriarcSectionText

</script>
<!-- ToDo Improve text handling for word breaks -->
<div class="p-6 {color} text-white rounded-3xl flex flex-col gap-y-8 justify-between max-w-[400px]">
  <div class="flex flex-row w-full max-w-[400px]">
    <div lang="de" class="flex flex-col flex-1 hyphens-auto w-0 pr-4">
      <span class="text-lg w-full max-w-full">
        {content.prefix}
      </span>
      <span class="text-4xl w-full max-w-full whitespace-pre-line">
        {content.title}
      </span>
    </div>
    <div class="flex-shrink-0 pl-4">
      <!-- ToDo Remove placeholder icon -->
      <div class="w-10 h-10 bg-white"></div>
    </div>
  </div>
  <div lang="de" class="flex flex-row text-balance break-normal whitespace-normal hyphens-auto">
    <div class="text-lg flex-1 w-0 pr-10">
      {content.description}
    </div>
    <div class="flex flex-shrink-0 items-end">
      <!-- ToDo Remove placeholder icon -->
      <div class="w-6 h-6 bg-white"></div>
    </div>
  </div>
</div>

<style>
    .green { @apply bg-green-triarc }
    .blue { @apply bg-blue-triarc }
    .red { @apply bg-red-triarc }
</style>

