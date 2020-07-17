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

        <b-navbar-item href="/">Landing</b-navbar-item>
        <b-navbar-item href="/intro">Introducing</b-navbar-item>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
    <div class="container row is-centered">
      <div class="container row is-1"></div>
      <div class="container row is-10">
        <nuxt />
      </div>
      <div class="container row is-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
