<script lang="ts">
  export let src: string
  export let size: 'small' | 'medium' | 'large' = 'small'
  export let color: 'red' | 'green' | 'blue' | 'transparent' = 'transparent'
  let clazz = ''
  export { clazz as class }

  const colorMap = {
    red: 'bg-red-triarc',
    green: 'bg-green-triarc',
    blue: 'bg-blue-triarc',
    transparent: 'bg-transparent',
  }

  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-9 h-9',
    large: 'w-11 h-11',
  }

  $: colorClass = colorMap[color] ?? 'bg-transparent'
  $: sizeClass = sizeMap[size] ?? sizeMap.small
</script>

<div class="{sizeClass} {colorClass} {size === 'small' ? 'p-0' : 'p-0.5'} rounded-md {clazz}">
  <img {src} alt="icon" class="w-full h-full" />
</div>
