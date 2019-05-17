<template>
  <div id="footer-wrap">
    <div class="footer">
    <router-link to="/Home">Home</router-link>
    <router-link to="/Categore">Categore</router-link>
    <router-link to="/General">General</router-link>
    <router-link to="/Cart">Cart</router-link>
    <router-link to="/Profile">Profile</router-link>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"FooterNav"
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
#footer-wrap
  position absolute
  left 0px
  right 0px
  bottom 0px
  margin auto
  .footer
    display flex
    justify-content space-around
    height 49px
    background-color #fff
    line-height 49px
    a:hover
      color #b4282d
</style>
