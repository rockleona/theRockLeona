<template>
  <div>
    <nav
      class="navbar header has-shadow is-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/logoOneLine.png"
            alt="Buefy"
            height="30"
          >
        </a>
      </div>
      <div class="navbar-start">
          <a class="navbar-item" href="/intro">{{$t('profile')}}</a>
          <a class="navbar-item" href="http://github.com/rockleona">
            <b-icon icon="github"></b-icon>
          </a>
          <a class="navbar-item" href="http://instagram.com/rockleonaz">
            <b-icon icon="instagram"></b-icon>
          </a>
      </div>
      <div class="navbar-end">
        <nuxt-link class="navbar-item"
          v-if="$i18n.locale !== 'en'"
          :to="switchLocalePath('en')"
        >
          English
        </nuxt-link>

        <nuxt-link class="navbar-item"
          v-if="$i18n.locale !== 'tc'"
          :to="switchLocalePath('tc')"
        >
          繁體中文
        </nuxt-link>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<style >
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  div{
    font-family:'Noto Sans TC', sans-serif;
  }
  .navbar-item{
    font-style: italic;
    font-weight: 500;
  }
</style>
