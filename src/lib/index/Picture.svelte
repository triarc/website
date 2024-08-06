<!-- TODO: Decide if still needed with the experimental enhanced:img -->
<!--<script>-->
<!--  export let alt-->
<!--  export let images-->
<!--  export let cssClass-->
<!--</script>-->

<!--{#if images.length > 0}-->
<!--  <picture class={cssClass}>-->
<!--    {#each images as image}-->
<!--      <source type="image/{image.format}" srcset={image.src} loading="lazy" />-->
<!--    {/each}-->
<!--    <img src={images[0].src} {alt} width={images[0].width} height={images[0].height} loading="lazy" class={cssClass} />-->
<!--  </picture>-->
<!--{/if}-->
