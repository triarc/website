<script lang="ts">
  import type { Card } from '$lib/components/TypeDefinitions'
  export let cards: Card[]
</script>

<ul
  class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
>
  {#each cards as card}
    <li class="block-card rounded-2xl group-odd:bg-gray-100 group-even:bg-white p-8">
      <!--					<feature.icon class="h-8 w-8" />-->
      <h3 class="font-semibold text-gray-700">
        {card.title}
      </h3>
      <p class="mt-2 text-gray-600">{card.content}</p>
    </li>
  {/each}
</ul>
