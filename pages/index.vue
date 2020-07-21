<template>
  <section class="section">
    <div class="columns is-mobile" >
      <div class="column is-6">
        <Logo id="thisLogo"/>
      </div>
      <div class="column is-6" >
        <div id="paragraph">
          <p>{{ $t('greetings') }}</p>
          <br>
          <p>{{ $t('firstLine')}}</p>
          <br>
          <p>{{ $t('secondLine')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="yaml">
  en:
    greetings: 'You have received Hello from RockLeon!'
    firstLine: '"Hi there, this is my portfolio websites."'
    secondLine: '"Hope you guys enjot it! 😀 "'
  tc:
    greetings: 'RockLeon向你揮揮手：「你好啊!」'
    firstLine: '「這是我的作品集網站」'
    secondLine: '「希望你們可以玩得開心、看得開心😀」'
</i18n>

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
    font-weight: 400;
    position: absolute;
    width: 50vw;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
