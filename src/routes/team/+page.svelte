<script>
  import TeamMembers from '$lib/index/TeamMembers.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import Hero from "$lib/components/Hero.svelte";
  import Block from "$lib/components/Block.svelte";

  let content = {
    title: 'Werde Teil des Teams!',
    content:
      'Zusammen können wir alles erreichen. <br/><br/>' +
      'Werde Teil des Teams und bewirb dich, wenn du Leidenschaft, Elan und Tatendrang hast und du dich mit unseren Werten identifizieren kannst. ',
    image: { src: 'img/custom-software/triarc-adventure.svg', alt: 'Triarc Carrer' },
    link: { href: '/jobs', text: 'Unsere Jobs' },
  }
</script>

<svelte:head>
  <title>Team - triarc-labs</title>
</svelte:head>
<Hero title="Unser Team" content="Wir lieben was wir tun, und dass wir das gemeinsam tun.
        Von der Vision bis zur Anwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen.
        Sie werden von erfahrenen, engagierten Spezialisten persönlich begleitet." />

<TeamMembers />

<div class="bg-gray-100">
  <Block bind:content />
</div>

<Footer />
