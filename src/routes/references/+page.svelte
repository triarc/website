<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>Lösungen - triarc-labs</title>
</svelte:head>

<Hero title="Lösungen" content="Was haben wir vollbracht und woraus ist es entstanden">

</Hero>

<div class="bg-white">
  <References />
  <Customers />
  <Footer></Footer>
</div>
