<script lang="ts">
    import type {Testimonial} from "$lib/components/FeaturedContent";

export let testimonial: Testimonial
</script>

<div class="bg-gray-100 even:bg-white ">
    <div class="px-8 lg:px-16 py-16 max-w-4xl lg:mr-auto">
        <div class="grid grid-cols-3 gap-8 items-center">
            <img height="80" class="max-h-20 col-span-1 object-cover" src={testimonial.logo} loading="lazy" alt="logo" />
            <div class="col-span-2">
                <p class="text-gray-700">{testimonial.quote.content}</p>
                <span class="text-gray-700 text-sm font-light italic" >{testimonial.quote.source}</span>
            </div>
        </div>
    </div>
</div>
