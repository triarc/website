<script lang="ts">
  export let title
  export let description
  export let path
  export let close
  export let inline = false
</script>

<a
  href={path}
  on:click={close()}
  class="relative {inline
    ? 'inline-link'
    : 'lg:dialog-link inline-link'} block hover:bg-gray-50 group hover:bg-blue-triarc rounded hover:bg-opacity-10"
>
  <div class="font-semibold text-gray-900 group-hover:text-blue-triarc">
    {title}
    <span class="absolute inset-0" />
  </div>
  <p class="text-gray-600">{description}</p>
</a>

<style>
  .dialog-link {
    @apply px-6 py-4;
  }

  .inline-link {
    @apply -mx-4 px-4 py-2;
  }
</style>
