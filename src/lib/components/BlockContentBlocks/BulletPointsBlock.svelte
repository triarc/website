<script lang="ts">
  export let bulletPoints: String[];
</script>

<div class="mt-8 flex flex-col">
  <ul class="">
    {#each bulletPoints as bulletPoint}
      <li class="flex my-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          class="flex-shrink-0 h-2 w-2"
        ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
        /></svg
        >
        <div class="ml-3">
                          <span class="text-base text-gray-600">
                            {bulletPoint}
                          </span>
        </div>
      </li>
    {/each}
  </ul>
</div>