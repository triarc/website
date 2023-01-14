<script lang="ts">
  import Container from '$lib/components/Container.svelte'

  export let title: string;
  export let content: string;

</script>
<div class="relative bg-blue-triarc">
  <div class="absolute inset-0">
    <img class="h-full w-full object-cover" src="img/hero/triarc-meetingroom-2000.jpg" alt="">
    <div class="absolute inset-0 bg-blue-triarc mix-blend-multiply" aria-hidden="true"></div>
  </div>
  <Container>
    <div class="py-24 sm:py-32">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
      <p class="mt-6 max-w-3xl text-xl text-indigo-100">{content}</p>
    </div>

  </Container>
</div>
