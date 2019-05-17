<template>
  <div id="app">
    <xsy-HeaderNav></xsy-HeaderNav>
    <router-view></router-view>
    <xsy-FooterNav></xsy-FooterNav>
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav/HeaderNav.vue'
  import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  name: 'App',
  components:{
    "xsy-HeaderNav":HeaderNav,
    "xsy-FooterNav":FooterNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  height 100%
  width 100%
  background-color antiquewhite
</style>
