<script lang="ts">
  import Customers from '$lib/index/Customers.svelte'
  import References from '$lib/index/References.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>Referenzen - triarc-labs</title>
</svelte:head>

<Hero title="Referenzen" content="Was haben wir vollbracht und woraus ist es entstanden">

</Hero>

<div class="bg-white">
  <Customers />
  <References />
  <Footer></Footer>
</div>
