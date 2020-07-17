<template>
  <section class="section">
    <div class="columns is-mobile" >
      <div class="column is-6">
        <Logo id="thisLogo"/>
      </div>
      <div class="column is-6" >
        <div id="paragraph">
          <p>Hi there, this is my portfolio websites.</p>
          <br>
          <p>Hope you guys enjot it! And you are in {{ name }} NOW!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  name: 'HomePage',
}
</script>

<style>
  #thisLogo{
    position: absolute;
    width: 50vw;
    top: 50%;
    transform: translateY(-50%);
  }
  #paragraph{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: x-large;
    font-weight: bold;
    position: absolute;
    width: 50vw;
    top: 50%;
    transform: translateY(-50%);
  }
</style>