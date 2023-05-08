<script>
  export let alt;
  export let images;
  export let cssClass;
</script>

<picture class="{cssClass}">
  {#each images as image}
    <source type="image/{image.format}" srcset={image.src} loading="lazy" />
  {/each}
  <img
    src={images[1].src}
    alt={alt}
    width="{images[1].width}"
    height="{images[1].height}"
    loading="lazy"
    class="{cssClass}"
  />
</picture>
