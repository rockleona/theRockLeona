<template>
  <section class="section">
    <div class="columns is-mobile" >
      <Logo id="thisLogo"/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'HomePage',
}
</script>

<style >
  #thisLogo{
    left: 30vw;
  }
</style>