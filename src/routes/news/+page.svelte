<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import Container from '$lib/components/Container.svelte'

  export let data;
</script>

<svelte:head>
  <title>Aktuelles - triarc-labs</title>
</svelte:head>


<Hero title="Aktuelles" content="Erfahre mehr über uns, lese was uns beschäftigt und wir gerade tun!">

</Hero>


<div class="bg-gray-100 min-h-screen">

  <div class="bg-white">
    <Container>
      <div class="flex items-center flex-wrap my-6 gap-3">
        <a href="/news" class="bg-gray-200 rounded-md h-10 flex {data.selectedTag === '' ? 'active' : ''}">
          <div class="px-4 py-2 ">Alle</div>
        </a>
        {#each data.tags as tag}
          <a href="/news?tag={tag.slug}" class="bg-gray-200 h-10 rounded-md flex {data.selectedTag === tag.slug ? 'active' : ''}">
            <div class="badge">{tag.count.posts}</div>
            <div class="px-4 py-2">{tag.name}</div>
          </a>
        {/each}
        <a class="text-gray-700 decoration-red-triarc underline flex-grow xl:text-right" href="https://www.linkedin.com/company/triarc-laboratories-ltd/mycompany/">
          Folge uns auf LinkedIn
        </a>
      </div>
    </Container>
  </div>
  <hr/>

  <Container>
    <div class="grid md:grid-cols-6 grid-cols-1 mt-6 gap-x-12 gap-y-24">
      {#each data.posts as post}
        <a href="/news/{post.slug}" class="{post.featured ? 'md:col-span-3' : 'md:col-span-2'} col-span-1 flex flex-col group">
          <div class="relative mb-2 rounded-md shadow">
            <img src="{post.image.src}" srcset="{post.image.srcset}" sizes="{post.image.sizes}" loading="lazy" alt="{post.image.alt}"
                 class="object-cover rounded-md overflow-hidden 	block h-auto max-w-auto w-full object-center group-hover:opacity-75" />
            <div class="absolute bg-opacity-20 top-0 left-0 w-full h-full  group-hover:shadow-inner rounded-md"></div>
          </div>
          <h3 class="font-bold text-xl">{post.title}</h3>
          <p class="line-clamp-3 mb-1 text-gray-500">{post.content}</p>
          <p class="text-sm text-gray-500">{post.footer}</p>
        </a>
      {/each}
    </div>
  </Container>

</div>

<style>
  .badge {
      @apply bg-gray-300 rounded-md px-4 py-2;
  }
  .active {
      @apply bg-blue-triarc text-white;
  }
  .active .badge {
      @apply bg-white bg-opacity-20;
  }
</style>
