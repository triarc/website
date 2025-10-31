<script lang="ts">
  import type { TriarcSectionDefinition } from '$lib/components/TypeDefinitions'
  import Icon from '$lib/components/Icon.svelte'
  import { ArrowSolid } from '$lib/content/icons'

  export let color: 'green' | 'blue' | 'red'
  export let content: TriarcSectionDefinition
</script>

<!-- ToDo Improve text handling for word breaks -->
<a
  href={content.sectionLink}
  class="p-6 {color} text-white rounded-3xl flex flex-col gap-y-4 justify-between w-full md:h-[400px] max-w-full md:max-w-[400px]"
>
  <div class="flex flex-row h-full w-full">
    <div lang="de" class="flex text-balance flex-col flex-1 h-full hyphens-auto">
      <span class="text-lg w-full max-w-full pb-3">
        {content.prefix}
      </span>
      <span class="text-4xl w-full max-w-full whitespace-pre-line">
        {content.title}
      </span>
      <div class="mt-auto pb-6 text-lg md:w-full max-w-[85%] md:max-w-none">
        {content.description}
      </div>
    </div>
    <div class="flex flex-shrink-0 flex-col justify-between">
      <div class="flex-shrink-0 self-start">
        <Icon src={content.iconSource} size="large"></Icon>
      </div>
      <div class="flex flex-shrink-0 self-end items-end">
        <Icon src={ArrowSolid} size="small"></Icon>
      </div>
    </div>
  </div>
  <!--  <div-->
  <!--    lang="de"-->
  <!--    class="flex flex-row text-balance justify-between break-normal whitespace-normal hyphens-auto w-full"-->
  <!--  ></div>-->
</a>

<style>
  .green {
    @apply bg-green-triarc;
  }
  .blue {
    @apply bg-blue-triarc;
  }
  .red {
    @apply bg-red-triarc;
  }
</style>
