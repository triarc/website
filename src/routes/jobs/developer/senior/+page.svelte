<script>
  import Footer from '$lib/components/Footer.svelte'
  import DeveloperListing from '../../developer-listing.svelte'
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'

  let block = {
    title: '<span class="text-sm">wir suchen</span><br/>Senior Software Engineer',
    content:
      'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
    image: { src: 'src/lib/assets/img/jobs/super_woman.svg', alt: 'Senior Software Engineer' },
    bulletPoints: [
      "Erfahrungen mit C# in der Entwicklung von API's",
      'Erfahrungen im Bereich Web und Angular',
      'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
      'Erfahrungen Docker / Kubernetes / Gitlab CI',
    ],
  }
</script>

<svelte:head>
  <title>Developer Job - triarc-labs</title>
</svelte:head>

<Block bind:content={block} />
<Technology />
<!--<Hero-->
<!--  title="Developer Job"-->
<!--  content="Erfahre mehr über unsere offene Entwickler Stelle und was dich sonst noch dazu interessieren könnte."-->
<!--/>-->

<DeveloperListing />

<!--<div class="bg-[#0D1214] min-h-[calc(100vh-64px)] flex flex-col lg:min-h-screen">-->
<!--  <div class="text-white bg-opacity-20">-->
<!--    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">-->
<!--      <h2 class="text-3xl font-extrabold sm:text-4xl">-->
<!--        <span class="block">Immer noch hier?</span>-->
<!--      </h2>-->
<!--      <p class="mt-4 text-lg leading-6">-->
<!--        Du findest, du passt zu uns und kannst etwas beisteuern? Wir freuen uns auf deine Bewerbung und sehen dich in-->
<!--        unserem Jungle.-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->
<!--  <img src="img/jobs/jungle.svg" class="w-full h-full" alt="triarc jungle" id="jungle" />-->
<!--</div>-->

<Footer />
