<template>
  <div>
    saddsadsa
  </div>
</template>
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
<style>

</style>

