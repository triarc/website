<script lang="ts">
  import { ourTechnologies } from '$lib/content/technologies'

  let technologies = ourTechnologies
</script>

<div class="bg-blue-triarc text-gray-800 bg-opacity-20">
  <div class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Unsere Technologien</h2>
        <p class="text-xl leading-7">
          Unsere Team bringen ein breites Fachwissen mit und beherrscht <span class="underline">fast</span>
          alle gängigen Programmiersprachen. <br />
          Wir freuen uns auf deine Unterstützung in unseren Projekten, welche wir über mehrere Technologien hinweg zum Erfolg
          führen.
        </p>
      </div>
      <div class="grid self-center mt-8 grid-cols-1 gap-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3" id="technology">
        {#each technologies as technology}
          <div class="flex items-center">
            <img width="48" height="48" src={technology.icon} loading="lazy" alt={technology.iconAlt} />
            <div class="text-left ml-4">
              <div class="text-xl font-bold">{technology.title}</div>
              <div class="">
                {technology.text}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
