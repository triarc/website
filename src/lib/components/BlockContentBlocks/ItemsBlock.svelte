<script lang="ts">
  import type { Item } from '$lib/components/TypeDefinitions'
  export let items: Item[]
</script>

<ul class="-mb-8 mt-6">
  {#each items as item}
    <li>
      <div class="min-w-0 pb-8 flex-1 pt-1.5">
        <h3 class="font-semibold text-sm underline decoration-red-triarc text-gray-700">
          {item.title}
        </h3>
        <p class="text-gray-600">{item.content}</p>
      </div>
    </li>
  {/each}
</ul>
