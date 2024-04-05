<script lang="ts">
  import ContactForm from '$lib/components/ContactForm.svelte'
  import type { PageData } from './$types'
  export let data: PageData
  export let contactString: string = data.title
  import Container from '$lib/components/Container.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import { onMount } from 'svelte'
  export function nav_back() {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/stories'
    }
  }
  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(script);
    const tailwindConfigExtensionScript = document.createElement('script');
    tailwindConfigExtensionScript.text = `tailwind.config = {
     theme: {
      extend: {
       colors: {
        'red-triarc': '#C8102E',
        'green-triarc': '#009639',
        'blue-triarc': '#0077c8',
        'yellow-triarc': '#FFE74C',
        'wood': '#D0AE84',
        'orange-ebl-base': 'rgba(254, 107, 21, 1)',
        'orange-ebl-medium': 'rgba(254, 107, 21, 0.6)',
        'orange-ebl-weak': 'rgba(254, 107, 21, 0.1)',
        'blue-ideesport-weak': 'rgba(30, 170, 230, 0.1)',
          },
        },
      },
    }`
    document.head.appendChild(tailwindConfigExtensionScript);
  })
</script>

<svelte:head>
  <title>{data.title} - triarc-labs</title>
  <script lang="js">
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'red-triarc': '#C8102E',
            'green-triarc': '#009639',
            'blue-triarc': '#0077c8',
            'yellow-triarc': '#FFE74C',
            wood: '#D0AE84',
            'orange-ebl-base': 'rgba(254, 107, 21, 1)',
            'orange-ebl-medium': 'rgba(254, 107, 21, 0.6)',
            'orange-ebl-weak': 'rgba(254, 107, 21, 0.1)',
            'blue-ideesport-weak': 'rgba(30, 170, 230, 0.1)',
          },
        },
      },
    }
  </script>
</svelte:head>

<div class="bg-white min-h-screen pt-16 md:pt-24 w-full">
  <Container>
    <div class="prose max-w-none lg:prose-xl prose-img:rounded-xl prose-a:text-blue-triarc">
      <div class="flex space-x-2 items-center bg-white mb-2">
        <a on:click={() => nav_back()} class="flex items-center text-blue-triarc fill-blue-triarc cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 448 512"
            ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
              d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z"
            /></svg
          >
        </a>
        <div>{data.title}</div>
      </div>
      <img
        src={data.feature_image}
        alt={data.feature_image_alt}
        class="object-cover rounded-md overflow-hidden shadow-inner mb-6 mt-0 mx-auto object-center group-hover:opacity-75"
      />
      <h1 class="text-4xl mb-3 font-bold">{data.title}</h1>
      <div>{@html data.html}</div>
    </div>
  </Container>
</div>
<ContactForm {contactString} />
<FooterNoContact />
