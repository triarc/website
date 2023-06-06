<script lang="ts">
  export let sections = []
</script>

<div class="relative bg-white">
  <div class="pt-16 pb-32 overflow-hidden">
    {#each sections as section, i}
      <div class="relative md:mt-24 mt-">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 {i % 2 === 1
              ? 'lg:col-start-2'
              : ''}"
          >
            <div>
              <div class="mt-6">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">{section.title}</h2>
                <p class="mt-4 text-lg text-gray-500">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 {i % 2 === 1 ? 'lg:col-start-1' : ''}">
            <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                class="w-full lg:absolute  lg:h-full lg:w-auto lg:max-w-none {i % 2 === 1 ? 'lg:right-0' : 'lg:left-0'}"
                src={section.image}
                alt={section.imageAlt}
              />
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
