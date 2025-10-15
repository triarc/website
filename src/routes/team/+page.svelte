<script lang="ts">
  import TeamMembers from '$lib/index/TeamMembers.svelte'
  import careerImage from '$lib/assets/img/custom-software/triarc-adventure.svg'
  import Footer from '$lib/components/Footer.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Block from '$lib/components/Block.svelte'
  import joinTheTeam from '$lib/assets/img/intro/content_team.svg'
  import heroImage from '$lib/assets/hero/Team.jpg?width=300;600;1000;2000&format=webp&enhanced'

  let content = {
    title: 'Werde Teil des Teams!',
    content:
      'Zusammen können wir alles erreichen. <br/><br/>' +
      'Werde Teil des Teams und bewirb dich, wenn du Leidenschaft, Elan und Tatendrang hast und du dich mit unseren Werten identifizieren kannst. ',
    image: { src: joinTheTeam, alt: 'Triarc Career' },
    link: { href: '/jobs', text: 'Unsere Jobs' },
  }
</script>

<svelte:head>
  <title>Team - triarc-labs</title>
</svelte:head>
<Hero
  title="Unser Team"
  content="Wir lieben was wir tun, und dass wir das gemeinsam tun.
        Von der Vision bis zur Anwendung können Sie sich auf unsere Kompetenz und Konstanz verlassen.
        Sie werden von erfahrenen, engagierten Spezialisten persönlich begleitet."
  image={heroImage}
  imageAlt="triarc-Team Header Image"
/>

<TeamMembers />

<Block bind:content />

<Footer />
