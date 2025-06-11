<script lang="ts">
  import type { Testimonial } from '$lib/components/FeaturedContent'

  interface Props {
    testimonial: Testimonial;
    i: number;
  }

  let { testimonial, i }: Props = $props();
</script>

<div class="py-16 lg:mr-auto">
  <div class="grid lg:grid-cols-3 gap-8 items-center">
    <img
      height="80"
      class="max-h-20 lg:col-span-1 object-cover {i % 2 === 1 ? 'lg:order-last' : ''}"
      src={testimonial.logo}
      loading="lazy"
      alt="logo"
    />
    <div class="lg:col-span-2">
      <p class="text-gray-700">{testimonial.quote.content}</p>
      <span class="text-gray-700 text-sm font-light italic">{testimonial.quote.source}</span>
    </div>
  </div>
</div>
