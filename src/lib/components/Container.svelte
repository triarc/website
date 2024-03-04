<script lang="ts">

  let clazz = '';
  export {clazz as class};
</script>
<div class="flex relative px-8 lg:px-16 max-w-screen-xl mx-auto flex-col {clazz}">
  <slot />
</div>
