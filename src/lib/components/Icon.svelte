<script lang="ts">
  export let src: string
  export let size: 'small' | 'large' = 'small'
</script>

<div class={size === 'small' ? 'w-6 h-6' : 'w-10 h-10'}>
  <img {src} alt="icon" class="w-full h-full" />
</div>
