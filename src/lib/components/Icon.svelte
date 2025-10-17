<script lang="ts">
  export let src: string
  export let size: 'small' | 'large' = 'small'
  export let color: 'red' | 'green' | 'blue' | 'transparent' = 'transparent'

  const colorMap = {
    red: 'bg-red-triarc',
    green: 'bg-green-triarc',
    blue: 'bg-blue-triarc',
    transparent: 'bg-transparent'
  };

  $: colorClass = colorMap[color] ?? 'bg-transparent';
</script>

<div class="{size === 'small' ? 'w-6 h-6' : 'w-10 h-10'} {colorClass} rounded-md">
  <img {src} alt="icon" class="w-full h-full" />
</div>
